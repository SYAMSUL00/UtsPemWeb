import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../../components/FormInput";
import { Button } from "../../../components/ui/Button";

const schema = z.object({
    name: z.string().min(1, "Nama tidak boleh kosong"),
});

type FormData = z.infer<typeof schema>;

export default function EditCategory() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });
    
    const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

    useEffect(() => {
        fetch(`${API_BASE_URL}/categories/${id}`)
            .then(res => {
                if (!res.ok) throw new Error("Gagal mengambil detail kategori");
                return res.json();
            })
            .then(data => setValue("name", data.name))
            .catch(error => console.error("Error fetching category details:", error));
    }, [id, setValue, API_BASE_URL]);

    const onSubmit = async (data: FormData) => {
        try {
            const res = await fetch(`${API_BASE_URL}/categories/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            
            if (!res.ok) throw new Error("Gagal memperbarui kategori");
            
            navigate("/dashboard/category");
        } catch (error) {
            console.error("Error updating category:", error);
            alert("Terjadi kesalahan saat menyimpan perubahan.");
        }
    };

    return (
        <div className="flex justify-center items-center py-12 animate-fade-in">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/40 p-8 w-full max-w-md transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/50">
                <div className="mb-6">
                    <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Edit Category</h1>
                    <p className="text-xs text-gray-400 mt-1">Perbarui detail nama kategori ke sistem.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <FormInput 
                        label="Nama Kategori" 
                        name="name" 
                        register={register} 
                        error={errors.name?.message} 
                        type="text" 
                    />
                    
                    <div className="flex gap-3 pt-2">
                        <button
                            type="button"
                            onClick={() => navigate("/dashboard/category")}
                            className="flex-1 border border-gray-200 text-gray-500 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all duration-150 cursor-pointer text-center"
                        >
                            Batal
                        </button>
                        <Button 
                            label="Simpan Perubahan" 
                            variant="primary" 
                            type="submit" 
                            isLoading={isSubmitting} 
                            className="flex-2 bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md shadow-blue-600/10 hover:scale-[1.01] cursor-pointer" 
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}