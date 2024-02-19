import {z} from 'zod';
import {zfd} from 'zod-form-data';

export const campaignSchema = zfd
	.formData({
		campaign_name: zfd.text(
			z
				.string()
				.min(3, 'Name must be at least 3 characters long')
				.max(50, 'Name must be at most 50 characters long')
		),
		description: zfd.text(
			z
				.string()
				.min(5, 'Description must be at least 5 characters long')
				.max(255, 'Description must be at most 255 characters long')
				.optional()
		),
		start_date: zfd.text(z.string().optional()),
		end_date: zfd.text(z.string().optional()),
	})
	.superRefine((data, ctx) => {
		const {start_date, end_date} = data;
		if (start_date) {
			const startDate = new Date(start_date);
			const today = new Date();
			today.setHours(0, 0, 0, 0);
			if (startDate < today) {
				ctx.addIssue({
					code: 'invalid_date',
					path: ['start_date'],
					message: 'Start date must be today or later',
				});
			}
		}
		if (end_date && start_date) {
			const startDate = new Date(start_date);
			const endDate = new Date(end_date);
			if (endDate < startDate) {
				ctx.addIssue({
					code: 'invalid_date',
					path: ['end_date'],
					message: 'End date must be the same or later than the start date',
				});
			}
		}
	});

export const deleteCampaignSchema = zfd.formData({
	campaign_id: zfd.numeric(),
});

export const npcSchema = zfd.formData({
	npc_name: zfd.text(
		z
			.string()
			.min(2, 'Name must be at least 2 characters long')
			.max(50, 'Name must be at most 50 characters long')
	),
	description: zfd.text(
		z
			.string()
			.min(2, 'Description must be at least 2 characters long')
			.max(255, 'Description must be at most 255 characters long')
			.optional()
	),
});

export const deleteNPCSchema = zfd.formData({
	npc_id: zfd.numeric(),
});
