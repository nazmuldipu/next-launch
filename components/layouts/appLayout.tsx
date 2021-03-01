import dynamic from 'next/dynamic';
import Router from 'next/router';

import Auth from '../../lib/authServices';

const AppNavbar = dynamic(
    () => import('../appNavbar'),
    { ssr: false }
)

export default function AppLayout({ children }) {
    const handleLogout = () => {
        console.log('handleLogout')
        Auth.logout();
        Router.push('/login');
    }
    return (
        <>
            <AppNavbar auth={Auth.isAuthenticated()} logout={handleLogout} />
            <div>
                {children}
            </div>
        </>
    );
}
