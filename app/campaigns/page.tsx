import {getCampaignsWithNPCs} from '@/database/drizzle/queries';
import CampaignListTable from '@/components/CampaignListTable';
import Link from 'next/link';
export default async function UserCampaignsPage() {
	const campaigns = await getCampaignsWithNPCs();

	return (
		<div className='flex flex-col items-center'>
			{campaigns ? (
				<CampaignListTable campaigns={campaigns} />
			) : (
				<p>
					You have no campaigns!{' '}
					<Link href='/campaigns/create'>Create a campaign</Link>
				</p>
			)}
		</div>
	);
}
