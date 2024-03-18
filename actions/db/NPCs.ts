'use server';
import {db} from '@/database/drizzle';
import {getUserInfo} from '../auth';
import {npcs, campaign_npcs} from '@/database/drizzle/schema';
import {eq, and} from 'drizzle-orm';
import {Tables} from '@/types/supabase';
import {ActionStatus} from '@/types/drizzle';
import {deleteNPCSchema, npcSchema} from '@/database/drizzle/validation';
import {ZodError} from 'zod';
import {redirect} from 'next/navigation';
import {revalidatePath} from 'next/cache';

export const createNPCAction = async (
	prevState: ActionStatus,
	formData: FormData
): Promise<ActionStatus> => {
	const {user} = await getUserInfo();
	if (!user) throw new Error('You must be logged in to create NPCs.');

	const user_id = user.id;
	let newNPCId: number | null = null;

	try {
		const {npc_name, description, campaign_ids} = npcSchema.parse(formData);

		const insertedNPC: Tables<'npcs'>[] = await db
			.insert(npcs)
			.values({
				user_id,
				npc_name,
				description,
			})
			.returning();

		if (campaign_ids && campaign_ids.length > 0) {
			const campaign_associations = campaign_ids.map((campaign_id) => ({
				npc_id: insertedNPC[0].id,
				campaign_id: campaign_id as number, //safe assertion post-Zod validation
			}));

			await db.insert(campaign_npcs).values(campaign_associations);
		}

		newNPCId = insertedNPC[0].id;
	} catch (error) {
		if (error instanceof ZodError) {
			return {
				status: 'error',
				message: 'Invalid form data',
				errors: error.issues.map((issue) => ({
					path: issue.path.join('.'),
					message: `${issue.message}`,
				})),
			};
		}
		console.error(error);
		return {
			status: 'error',
			message: 'An error occured while creating NPC.',
		};
	}
	revalidatePath('/');
	redirect(`/${user.username}/npcs/${newNPCId}`);
};

export const deleteNPCAction = async (
	prevState: ActionStatus,
	formData: FormData
): Promise<ActionStatus> => {
	const {user} = await getUserInfo();
	if (!user) throw new Error('You must be logged in to delete NPCs.');

	const user_id = user.id;
	let deletedNPCName: string | null = null;

	try {
		const {npc_id} = deleteNPCSchema.parse(formData);
		const deletedNPC = await db
			.delete(npcs)
			.where(and(eq(npcs.id, npc_id), eq(npcs.user_id, user_id)))
			.returning();

		deletedNPCName = deletedNPC[0].npc_name;
	} catch (error) {
		console.error('Error deleting NPC:', error);
		return {
			status: 'error',
			message: 'An error occured while deleting NPC.',
		};
	}
	const deleted = encodeURIComponent(`${deletedNPCName} has been deleted.`);
	revalidatePath('/');
	redirect(`/dashboard?deleted=true&message=${deleted}`);
};

export const addVoiceToNPC = async (
	prevState: any,
	formData: FormData
): Promise<ActionStatus> => {
	const {user} = await getUserInfo();
	if (!user)
		return {
			status: 'error',
			message: 'You must be logged in to add voices to NPCs.',
		};
	const user_id = user.id;

	const npc_id = parseInt(formData.get('npc_id') as string);
	const voice_id = formData.get('voice_id') as string;

	if (!npc_id || !voice_id) {
		return {
			status: 'error',
			message: 'Invalid form data',
		};
	}

	try {
		const rows: Tables<'npcs'>[] = await db
			.update(npcs)
			.set({voice_id})
			.where(and(eq(npcs.id, npc_id), eq(npcs.user_id, user_id)))
			.returning();

		const updatedNPC = rows[0];
		return {
			status: 'success',
			message: `${updatedNPC.npc_name} has a voice!`,
			data: updatedNPC,
		};
	} catch (error) {
		console.error('Error adding voice to NPC:', error);
		return {
			status: 'error',
			message: 'An error occured while adding voice to NPC.',
		};
	}
};
