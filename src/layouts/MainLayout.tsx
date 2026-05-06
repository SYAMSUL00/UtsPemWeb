import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function MainLayout(){
    return(
        <div className="min-h-screen flex flex-col justify-between">
            <Header />

            <main className="max-w-7xl mx-auto py-6">
                <Outlet />
            </main>

            <footer className="p-4 bg-slate-100 text-center">
                &copy; 2026 Invofest. All right reserved.
            </footer>
        </div>
    );
}