import AppNavbar from "../appNavbar";

export default function MainLayout({ children }) {
    return <div><AppNavbar /> <main>{children}</main></div>
}