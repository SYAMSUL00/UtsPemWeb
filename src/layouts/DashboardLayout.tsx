import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { HomeIcon, TagIcon, UserIcon, CalendarIcon, UserCircle2, LogOutIcon } from "lucide-react";

export default function DashboardLayout() {
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const navItems = [
        { to: "/dashboard", label: "Dashboard", icon: <HomeIcon size={18} /> },
        { to: "/dashboard/category", label: "Daftar Categories", icon: <TagIcon size={18} /> },
        { to: "/dashboard/speakers", label: "Daftar Speakers", icon: <UserIcon size={18} /> },
        { to: "/dashboard/events", label: "Daftar Events", icon: <CalendarIcon size={18} /> },
        { to: "/dashboard/biodata", label: "Biodata Mahasiswa", icon: <UserCircle2 size={18} /> },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50">
            <div className="h-screen sticky top-0 bg-slate-900 w-64 flex flex-col justify-between p-4 border-r border-slate-800 shadow-xl">
                <div>
                    <div className="py-5 px-2 mb-6 flex items-center gap-3 border-b border-slate-800">
                        <div className="w-9 py-2 rounded-xl bg-blue-600 flex flex-col items-center justify-center font-black text-white text-xs leading-none shadow-md shadow-blue-500/20 gap-2">
                            <span>E</span>
                            <span>M</span>
                            <span>S</span>
                        </div>

                        <div className="flex flex-col text-[11px] font-bold uppercase tracking-wider text-slate-300 leading-none gap-2">
                            <span className="flex items-center"><span className="">E</span>vent</span>
                            <span className="flex items-center"><span className="">M</span>anagement</span>
                            <span className="flex items-center"><span className="">S</span>ystem</span>
                        </div>
                    </div>
                    
                    <nav className="flex flex-col gap-1.5">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.to;
                            return (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    className={`p-3 rounded-xl text-sm flex items-center gap-3 transition-all duration-200 ${
                                        isActive 
                                            ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/10 scale-[1.02]" 
                                            : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                                    }`}
                                >
                                    <span className={isActive ? "text-white" : "text-slate-400 group-hover:text-slate-100"}>
                                        {item.icon}
                                    </span>
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 bg-slate-800 text-slate-300 p-3 w-full hover:bg-rose-600 hover:text-white cursor-pointer rounded-xl font-medium transition-all duration-200 border border-slate-700/50 hover:border-transparent shadow-sm"
                >
                    <LogOutIcon size={16} />
                    Logout
                </button>
            </div>

            <div className="flex-1 p-8 overflow-y-auto">
                <Outlet />
            </div>
        </div>
    );
}