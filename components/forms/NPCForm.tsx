'use client';

import {useState, useEffect} from 'react';
import {useForm, FieldPath, Controller} from 'react-hook-form';
import {useFormState} from 'react-dom';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {createNPCAction} from '@/actions/db/NPCs';
import {npcSchema} from '@/database/drizzle/validation';
import {SubmitButton} from '@/components/buttons/SubmitButton';
import {ActionStatus} from '@/types/drizzle';
import {ErrorMessage} from '@hookform/error-message';
import {ErrorToast} from '@/components/ErrorToast';
import {FormOptions} from '@/types/drizzle';
import {
	CheckboxGroup,
	Checkbox,
	Textarea,
	Button,
	Input,
} from '@nextui-org/react';
import {PiMicrophoneSlashBold} from 'react-icons/pi';
import {VoiceSelect} from './dropdown/VoiceSelect';
import {ElevenLabsVoice} from '@/types/elevenlabs';

interface NPCFormProps {
	campaignOptions?: FormOptions;
	voiceOptions: ElevenLabsVoice[];
}

type Inputs = z.infer<typeof npcSchema>;
export default function NPCForm({campaignOptions, voiceOptions}: NPCFormProps) {
	const [state, formAction] = useFormState<ActionStatus, FormData>(
		createNPCAction,
		{status: 'idle', message: ''}
	);
	const [showAddCampaign, setShowAddCampaign] = useState(false);
	const [selectedVoiceURL, setSelectedVoiceURL] = useState<string | null>(null);

	const {
		register,
		control,
		formState: {errors},
		setError,
		reset,
	} = useForm<Inputs>({
		resolver: zodResolver(npcSchema),
	});

	const handleVoiceChange = (voiceURL: string) => {
		setSelectedVoiceURL(voiceURL);
	};

	useEffect(() => {
		if (!state) return;
		if (state?.status === 'error') {
			console.log('errors:', state.errors);
			state.errors?.forEach((error) => {
				setError(error.path as FieldPath<Inputs>, {
					message: error.message,
				});
			});
		}
		if (state.status === 'success') {
			alert(state.message);
			reset();
		}
	}, [state, setError, reset]);

	return (
		<div className='flex flex-col items-start mb-8'>
			<form className='flex flex-col gap-2 w-full max-w-xs'>
				<Input
					{...register('npc_name')}
					id='npc_name'
					type='text'
					name='npc_name'
					placeholder='what are they called?'
					variant='bordered'
				/>
				<ErrorMessage
					errors={errors}
					name='npc_name'
					render={({message}) => <ErrorToast text={message} />}
				/>
				<Textarea
					{...register('description')}
					id='description'
					name='description'
					placeholder='describe your NPC'
					variant='bordered'
				/>
				<ErrorMessage
					errors={errors}
					name='description'
					render={({message}) => <ErrorToast text={message} />}
				/>
				<VoiceSelect
					control={control}
					voiceOptions={voiceOptions}
					onVoiceChange={handleVoiceChange}
				/>
				<div className='flex items-center my-4 gap-6'>
					<span className='text-secondary-600 font-semibold'>
						Voice Preview:
					</span>
					{selectedVoiceURL ? (
						<audio src={selectedVoiceURL} controls />
					) : (
						<span className='flex items-center gap-2'>
							<PiMicrophoneSlashBold size={18} />
							No voice selected
						</span>
					)}
				</div>
				<ErrorMessage
					errors={errors}
					name='voice_id'
					render={({message}) => <ErrorToast text={message} />}
				/>
				<Button
					onClick={() => setShowAddCampaign(!showAddCampaign)}
					variant='flat'
					color='primary'
				>
					{showAddCampaign ? 'cancel' : 'add to campaign(s)'}
				</Button>
				{showAddCampaign && campaignOptions && campaignOptions.length > 0 && (
					<Controller
						name='campaign_ids'
						control={control}
						render={({field: {ref}}) => (
							<CheckboxGroup
								label='campaigns'
								name='campaign_ids'
								orientation='horizontal'
								ref={ref}
							>
								{campaignOptions.map((option) => (
									<Checkbox key={option.label} value={option.value.toString()}>
										{option.label}
									</Checkbox>
								))}
							</CheckboxGroup>
						)}
					/>
				)}
				<SubmitButton
					formAction={formAction}
					pendingText='creating NPC...'
					variant='flat'
					color='success'
					className='mt-2 font-bold text-large'
				>
					create NPC!
				</SubmitButton>
			</form>
		</div>
	);
}
