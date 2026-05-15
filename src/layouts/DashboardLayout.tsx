import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { HomeIcon, TagIcon, UserIcon, CalendarIcon } from "lucide-react";

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
        { to: "/dashboard/category", label: "Categories", icon: <TagIcon size={18} /> },
        { to: "/dashboard/speakers", label: "Speaker", icon: <UserIcon size={18} /> },
        { to: "/dashboard/events", label: "Events", icon: <CalendarIcon size={18} /> },
    ];

    return (
        <div className="flex min-h-screen">
            {/* sidebar */}
            <div className="h-screen sticky top-0 bg-red-900 w-64 flex flex-col justify-between p-4">
                <div>
                    <div className="border-b border-red-700 py-6 mb-4">
                        <h1 className="text-white text-2xl font-bold">Infovest Dashboard</h1>
                    </div>

                    <nav className="flex flex-col gap-1">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.to;
                            return (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    className={`p-3 rounded-lg text-white text-sm flex items-center gap-3 transition ease-in duration-150 ${
                                        isActive
                                            ? "bg-red-700 font-semibold"
                                            : "hover:bg-red-800"
                                    }`}
                                >
                                    {item.icon}
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <button
                    onClick={handleLogout}
                    className="border border-white text-white p-3 w-full hover:bg-white hover:text-red-700 cursor-pointer rounded-lg font-medium transition duration-150" 
                    >
                    Logout
                </button>
            </div>

            {/* konten */}
            <div className="flex-1 p-8 bg-gray-50">
                <Outlet />
            </div>
        </div>
    );
}