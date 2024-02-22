import {createClient} from '@/utils/supabase/server';
import Link from 'next/link';
import LoginForm from '../forms/LoginForm';
import {logoutAction} from '@/actions/auth';
import {cookies} from 'next/headers';
import {getUserInfo} from '@/actions/auth';

/**
 * Login/logout button depending on user auth state
 */
export default async function AuthButton() {
	const {user} = await getUserInfo();

	return user ? (
		<div className='flex items-center gap-4'>
			<Link href={`/${user.username}`}>{user.username}</Link>
			<form action={logoutAction}>
				<button className='py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover'>
					logout
				</button>
			</form>
		</div>
	) : (
		<div className='dropdown dropdown-end'>
			<div tabIndex={0} role='button' className='btn btn-ghost m-1'>
				login
			</div>
			<div
				tabIndex={0}
				className='dropdown-content z-[1] w-64 p-2 shadow bg-base-100 border border-white'
			>
				<LoginForm />
			</div>
		</div>
	);
}
