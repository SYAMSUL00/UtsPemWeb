import { useEffect, useState } from "react";

export default function DashboardIndex() {
    const [totalCategory, setTotalCategory] = useState(0);
    const [totalSpeaker, setTotalSpeaker] = useState(0);
    const [totalEvent, setTotalEvent] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const headers: HeadersInit = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        };

        Promise.all([
            fetch("http://localhost:3000/categories", { headers }).then(r => r.json()),
            fetch("http://localhost:3000/speakers", { headers }).then(r => r.json()),
            fetch("http://localhost:3000/events", { headers }).then(r => r.json()),
        ])
        .then(([categories, speakers, events]) => {
            console.log("categories:", categories);
            console.log("speakers:", speakers);
            console.log("events:", events);

            setTotalCategory(Array.isArray(categories) ? categories.length : categories.data?.length ?? 0);
            setTotalSpeaker(Array.isArray(speakers) ? speakers.length : speakers.data?.length ?? 0);
            setTotalEvent(Array.isArray(events) ? events.length : events.data?.length ?? 0);
        })
        .catch(err => console.error("Fetch error:", err))
        .finally(() => setLoading(false));
    }, []);

    const cards = [
        { 
            label: "Total Category", 
            value: totalCategory,
            bgSolid: "group-hover:bg-purple-600",
            bgLight: "bg-purple-50",
            textColor: "text-purple-600",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        { 
            label: "Total Speaker", 
            value: totalSpeaker,
            bgSolid: "group-hover:bg-rose-600",
            bgLight: "bg-rose-50",
            textColor: "text-rose-600",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        { 
            label: "Total Event", 
            value: totalEvent,
            bgSolid: "group-hover:bg-amber-600",
            bgLight: "bg-amber-50",
            textColor: "text-amber-600",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
    ];

    return (
        <div className="max-w-7xl mx-auto p-2">
            <div className="mb-8 flex items-center justify-between border-b border-gray-100 pb-5">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Dashboard</h1>
                    <p className="text-sm text-gray-500 mt-1">Selamat datang kembali di <span className="font-semibold text-purple-600">Event Management System</span></p>
                </div>
                <div className="text-xs bg-purple-50 text-purple-700 font-medium px-3 py-1.5 rounded-full border border-purple-100">
                    Live Monitoring
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {cards.map((card) => (
                    <div 
                        key={card.label} 
                        className="bg-white rounded-2xl border border-gray-100 p-6 flex items-center justify-between shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                    >
                        <div className="space-y-2">
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{card.label}</p>
                            {loading ? (
                                <div className="h-9 w-16 bg-gray-200 rounded animate-pulse" />
                            ) : (
                                <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                                    {card.value}
                                </h2>
                            )}
                        </div>
                        
                        <div className={`p-4 rounded-xl ${card.bgLight} ${card.textColor} transition-all duration-300 ${card.bgSolid} group-hover:text-white group-hover:scale-110 shadow-sm`}>
                            {card.icon}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-md">
                <div className="relative flex items-start gap-4">
                    <div className="p-2 bg-slate-800 rounded-lg text-purple-400 mt-0.5">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="text-base font-semibold tracking-wide">Pemberitahuan Sistem</h2>
                        <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                            Gunakan panel navigasi menu di sebelah kiri (sidebar) untuk mulai melakukan manipulasi, penambahan, maupun penghapusan data master kategori, pembicara (speaker), dan jadwal event.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}