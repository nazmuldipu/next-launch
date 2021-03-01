import dynamic from 'next/dynamic';


const AppNavbar = dynamic(
    () => import('../appNavbar'),
    { ssr: false }
)

export default function AppLayout({ children }) {
    
    return (
        <>
            <AppNavbar />
            <div>
                {children}
            </div>
        </>
    );
}
