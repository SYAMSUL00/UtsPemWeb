import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserIcon, CalendarIcon, BriefcaseIcon, Trash2Icon, Edit3Icon } from "lucide-react";

interface Speaker {
    id: number;
    name: string;
    role: string;
    image: string;
    createdAt: string;
}

export default function SpeakerList() {
    const [speakers, setSpeakers] = useState<Speaker[]>([]);
    const [loading, setLoading] = useState(true);

    const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

    const fetchSpeakers = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/speakers`);
            if (!res.ok) throw new Error("Gagal mengambil data pembicara");
            const data = await res.json();
            setSpeakers(data);
        } catch (err) {
            console.error("Gagal fetch speakers:", err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Yakin hapus speaker ini?")) return;
        try {
            const res = await fetch(`${API_BASE_URL}/speakers/${id}`, { method: "DELETE" });
            if (!res.ok) throw new Error("Gagal menghapus data speaker");
            fetchSpeakers();
        } catch (err) {
            console.error("Error deleting speaker:", err);
            alert("Terjadi kesalahan saat menghapus data speaker.");
        }
    };

    useEffect(() => {
        fetchSpeakers();
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-2 animate-fade-in">
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-5">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Semua Speaker</h1>
                    <p className="text-sm text-gray-500 mt-1">Kelola data pembicara dan pemateri untuk event Anda.</p>
                </div>
                <Link
                    to="/dashboard/speakers/create"
                    className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md shadow-blue-600/10 hover:scale-[1.02]"
                >
                    + Tambah Speaker
                </Link>
            </div>

            {loading ? (
                <div className="flex items-center justify-center py-24 text-gray-400 text-sm">
                    <div className="flex items-center justify-center gap-2 bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                        Memuat data pembicara...
                    </div>
                </div>
            ) : speakers.length === 0 ? (
                <div className="text-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm text-gray-400 text-sm">
                    <UserIcon size={40} className="mx-auto mb-3 text-gray-300" />
                    Belum ada data speaker tersedia.
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {speakers.map((speaker) => (
                        <div 
                            key={speaker.id} 
                            className="group bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-gray-100/70 hover:-translate-y-1"
                        >
                            <div className="p-5 flex flex-col items-center text-center">
                                <div className="relative mb-4 mt-2">
                                    {speaker.image ? (
                                        <img
                                            src={speaker.image}
                                            alt={speaker.name}
                                            className="w-24 h-24 rounded-full object-cover border-4 border-gray-50 group-hover:border-blue-50 transition-all duration-300 shadow-md"
                                        />
                                    ) : (
                                        <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-black text-2xl border-4 border-blue-50/30 shadow-inner">
                                            {speaker.name.charAt(0).toUpperCase()}
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-150 line-clamp-1">
                                    {speaker.name}
                                </h3>
                                
                                <p className="text-xs text-gray-400 font-medium mt-1 flex items-center gap-1">
                                    <BriefcaseIcon size={12} className="text-gray-300" />
                                    {speaker.role}
                                </p>
                            </div>

                            <div className="px-5 pb-5 pt-3 bg-gray-50/50 border-t border-gray-50/80 flex items-center justify-between gap-2">
                                <div className="flex items-center gap-1 text-[11px] font-medium text-gray-400">
                                    <CalendarIcon size={12} />
                                    <span>
                                        {new Date(speaker.createdAt).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "short",
                                        })}
                                    </span>
                                </div>

                                <div className="flex items-center gap-1.5">
                                    <Link
                                        to={`/dashboard/speakers/edit/${speaker.id}`}
                                        className="bg-white text-blue-600 border border-gray-200/80 p-2 rounded-xl text-xs font-semibold hover:border-blue-200 hover:bg-blue-50/40 transition-all duration-150 flex items-center justify-center shadow-sm"
                                        title="Edit Speaker"
                                    >
                                        <Edit3Icon size={14} />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(speaker.id)}
                                        className="bg-white text-red-500 border border-gray-200/80 p-2 rounded-xl text-xs font-semibold hover:border-red-200 hover:bg-red-50/50 transition-all duration-150 flex items-center justify-center shadow-sm cursor-pointer"
                                        title="Hapus Speaker"
                                    >
                                        <Trash2Icon size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}