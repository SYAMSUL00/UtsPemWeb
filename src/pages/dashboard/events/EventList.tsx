import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Category {
    id: number;
    name: string;
}

interface Event {
    id: number;
    name: string;
    categoryId: number;
    location: string;
    dateEvent: string;
    description: string;
    createdAt: string;
}

export default function EventList() {
    const [events, setEvents] = useState<Event[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const [eventsRes, categoriesRes] = await Promise.all([
                fetch("http://localhost:3000/events"),
                fetch("http://localhost:3000/categories"),
            ]);
            const eventsData = await eventsRes.json();
            const categoriesData = await categoriesRes.json();
            setEvents(eventsData);
            setCategories(categoriesData);
        } catch (err) {
            console.error("Gagal fetch data:", err);
        } finally {
            setLoading(false);
        }
    };

    const getCategoryName = (categoryId: number) => {
        const category = categories.find(c => c.id === categoryId);
        return category ? category.name : `ID: ${categoryId}`;
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Yakin hapus event ini?")) return;
        await fetch(`http://localhost:3000/events/${id}`, { method: "DELETE" });
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-2 animate-fade-in">
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-5">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Semua Event</h1>
                    <p className="text-sm text-gray-500 mt-1">Kelola jadwal, lokasi, dan detail informasi event Anda.</p>
                </div>
                <Link
                    to="/dashboard/events/create"
                    className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md shadow-blue-600/10 hover:scale-[1.02]"
                >
                    + Tambah Event
                </Link>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                        <thead className="bg-gray-50/70 border-b border-gray-100">
                            <tr>
                                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider w-20 text-center">No</th>
                                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Nama Event</th>
                                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Kategori</th>
                                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Lokasi</th>
                                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Tanggal</th>
                                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Deskripsi</th>
                                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider w-44 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {loading ? (
                                <tr>
                                    <td colSpan={7} className="text-center p-12 text-gray-400 text-sm">
                                        <div className="flex items-center justify-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                                            Memuat data event...
                                        </div>
                                    </td>
                                </tr>
                            ) : events.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="text-center p-12 text-gray-400 text-sm">
                                        Belum ada data event tersedia.
                                    </td>
                                </tr>
                            ) : (
                                events.map((event, index) => (
                                    <tr key={event.id} className="hover:bg-gray-50/50 transition-colors duration-150">
                                        <td className="p-4 text-sm text-gray-500 font-medium text-center">{index + 1}</td>
                                        <td className="p-4 text-sm font-semibold text-gray-800">{event.name}</td>
                                        <td className="p-4">
                                            <span className="bg-blue-50 text-blue-700 border border-blue-100 text-xs font-semibold px-2.5 py-1 rounded-lg inline-block">
                                                {getCategoryName(event.categoryId)}
                                            </span>
                                        </td>
                                        <td className="p-4 text-sm text-gray-600 font-medium">{event.location}</td>
                                        <td className="p-4 text-sm text-gray-500">
                                            {new Date(event.dateEvent).toLocaleDateString("id-ID", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </td>
                                        <td className="p-4 text-sm text-gray-500 max-w-xs truncate">{event.description}</td>
                                        <td className="p-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <Link
                                                    to={`/dashboard/events/edit/${event.id}`}
                                                    className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-blue-600 hover:text-white transition-all duration-150"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(event.id)}
                                                    className="bg-red-50 text-red-600 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-red-600 hover:text-white transition-all duration-150 cursor-pointer"
                                                >
                                                    Hapus
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}