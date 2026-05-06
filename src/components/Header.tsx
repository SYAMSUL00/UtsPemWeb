import React, { useState} from "react";
<<<<<<< HEAD
import {Home, Trophy, SquareUser, Laptop, Mic, UserCircle} from "lucide-react";
import { NavLink } from "react-router-dom";
=======
import {Home, Info, Users, HelpCircle} from "lucide-react";
import {NavLink} from "./ui/NavLink";
>>>>>>> 8a0fa43db7d0eaafe28b2230f01a4d3f0dfad5b7

export const Header: React.FC = () => {
    const [currentPath, setCurrentPath] = useState("#");

    const menuItems = [
<<<<<<< HEAD
        { label: "Beranda", href: "/", icon: <Home size={18} />},
        { label: "Competition", href: "/competition", icon: <Trophy size={18} />},
        { label: "Seminar", href: "/seminar", icon: <SquareUser size={18} />},
        { label: "Workshop", href: "/workshop", icon: <Laptop size ={18} />},
        { label: "Talkshow", href: "/talkshow", icon: <Mic size ={18} />},
        { label: "", href: "/login", icon: <UserCircle size ={18} />},
    ];

    const activeStyle = "text-red-900";
    const defaultStyle = "text-slate-600 hover:text-red-900";

=======
        { label: "Beranda", href: "#", icon: <Home size={18} />},
        { label: "Tentang", href: "#cards", icon: <Info size={18} />},
        { label: "Narasumber", href: "#speaker", icon: <Users size={18} />},
        { label : "FAQ", href: "#collapse", icon: <HelpCircle size ={18} />},
    ];

>>>>>>> 8a0fa43db7d0eaafe28b2230f01a4d3f0dfad5b7
    return (
        <header className=" bg-white shadoww-sm px-6 py-2">
            <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
                <div className="logo">
                    <img
                        src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
                        alt="logo"
                        className="h-16"
                    />
                </div>
                <div className="flex gap-2">
                    {menuItems.map((item) => (
<<<<<<< HEAD
                        <NavLink 
                        to={item.href} 
                        className={({isActive}) => 
                            `flex items-center gap-2 px-4 py-2 font-medium 
                                transition-all duration-200 ${
                                isActive ? activeStyle : defaultStyle
                            }`
                        }
                        >
                            {item.icon && <span className="w-5 h-5">{item.icon}</span>}

                            <span>{item.label}</span>
                        </NavLink>
=======
                        <NavLink
                        key={item.label}
                        label={item.label}
                        href={item.href}
                        icon={item.icon}
                        // Logika: jika href sama dengan path saat in, maka Active 
                        isActive={item.href === currentPath}
                        onClick={() => setCurrentPath(item.href)}
                        />
>>>>>>> 8a0fa43db7d0eaafe28b2230f01a4d3f0dfad5b7
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;