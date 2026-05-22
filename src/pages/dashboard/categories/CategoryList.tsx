import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Category {
    id: number;
    name: string;
}

export default function CategoryList() {
    const [categories, setCategories] = useState<Category[]>([]);

    const fetchCategories = async () => {
        const res = await fetch("http://localhost:3000/categories");
        const data = await res.json();
        setCategories(data);
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Yakin hapus category ini?")) return;
        await fetch(`http://localhost:3000/categories/${id}`, { method: "DELETE" });
        fetchCategories();
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-2 animate-fade-in">
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-5">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Semua Category</h1>
                    <p className="text-sm text-gray-500 mt-1">Kelola kategori untuk pengelompokan event Anda.</p>
                </div>
                <Link to="/dashboard/category/create" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md shadow-blue-600/10 hover:scale-[1.02]">
                    + Tambah Category
                </Link>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                        <thead className="bg-gray-50/70 border-b border-gray-100">
                            <tr>
                                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider w-20 text-center">No</th>
                                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Nama Kategori</th>
                                <th className="p-4 text-xs font-semibold text-gray-400 uppercase tracking-wider w-44 text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {categories.length === 0 ? (
                                <tr>
                                    <td colSpan={3} className="text-center p-12 text-gray-400 text-sm">
                                        Belum ada data kategori tersedia.
                                    </td>
                                </tr>
                            ) : (
                                categories.map((cat, index) => (
                                    <tr key={cat.id} className="hover:bg-gray-50/50 transition-colors duration-150">
                                        <td className="p-4 text-sm text-gray-500 font-medium text-center">{index + 1}</td>
                                        <td className="p-4 text-sm font-semibold text-gray-800">{cat.name}</td>
                                        <td className="p-4">
                                            <div className="flex items-center justify-center gap-2">
                                                <Link 
                                                    to={`/dashboard/category/edit/${cat.id}`} 
                                                    className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-blue-600 hover:text-white transition-all duration-150"
                                                >
                                                    Edit
                                                </Link>
                                                <button 
                                                    onClick={() => handleDelete(cat.id)} 
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