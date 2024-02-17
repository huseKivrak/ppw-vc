import {db} from '@/database/drizzle';
import {getUserFromSession} from '@/server-actions/auth';
import {campaigns, npcs, campaign_npcs} from '@/database/drizzle/schema';
import {insertCampaignSchema} from '@/database/drizzle/schema';
import {z, ZodError, ZodIssue} from 'zod';
import {eq, and} from 'drizzle-orm';
import {Tables} from '@/types/supabase';

export type CampaignState =
	| {
			status: 'success';
			message: string;
			value?: Tables<'campaigns'>;
	  }
	| {
			status: 'error';
			message: string;
			errors?: ZodIssue[] | unknown;
	  }
	| null;

export const createCampaignAction = async (
	prevState: CampaignState,
	formData: FormData
): Promise<CampaignState> => {
	const user = await getUserFromSession();
	if (!user) throw new Error('You must be logged in to create campaigns.');

	try {
		const result = insertCampaignSchema.safeParse(formData);
		if (!result.success) {
			return {
				status: 'error',
				message: 'Validation error(s)',
				errors: result.error.issues,
			};
		}

		const campaign_name = result.data.campaign_name;
		const description = result.data.description;

		const insertedCampaign: Tables<'campaigns'>[] = await db
			.insert(campaigns)
			.values({
				user_id: user.id,
				campaign_name,
				description,
			})
			.returning();
		return {
			status: 'success',
			message: `The "${insertedCampaign[0].campaign_name}" campaign is created!`,
			value: insertedCampaign[0],
		};
	} catch (error) {
		return {
			status: 'error',
			message: 'An error occured during campaign creation.',
			errors: error,
		};
	}
};

export const deleteCampaignAction = async (
	campaignId: number
): Promise<CampaignState> => {
	const user = await getUserFromSession();
	if (!user) throw new Error('You must be logged in to delete NPCs.');

	try {
		const deletedCampaign = await db
			.delete(campaigns)
			.where(and(eq(campaigns.id, campaignId), eq(campaigns.user_id, user.id)))
			.returning();

		return {
			status: 'success',
			message: `${deletedCampaign[0].campaign_name} is gone!`,
			value: deletedCampaign[0],
		};
	} catch (error) {
		return {
			status: 'error',
			message: 'An error occured while deleting campaign.',
			errors: error,
		};
	}
};
