import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../../components/FormInput";
import { Button } from "../../../components/ui/Button";

const schema = z.object({
    name: z.string().min(1, "Nama tidak boleh kosong"),
    categoryId: z.string().min(1, "Category wajib dipilih"),
    location: z.string().min(1, "Lokasi tidak boleh kosong"),
    dateEvent: z.string().min(1, "Tanggal tidak boleh kosong"),
    description: z.string().min(1, "Deskripsi tidak boleh kosong"),
});

type FormData = z.infer<typeof schema>;

interface Category {
    id: number;
    name: string;
}

export default function EditEvent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [categories, setCategories] = useState<Category[]>([]);
    const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    useEffect(() => {
        fetch("http://localhost:3000/categories")
            .then(res => res.json())
            .then(data => setCategories(data));

        fetch(`http://localhost:3000/events/${id}`)
            .then(res => res.json())
            .then(data => {
                setValue("name", data.name);
                setValue("categoryId", String(data.categoryId));
                setValue("location", data.location);
                setValue("dateEvent", data.dateEvent.split("T")[0]);
                setValue("description", data.description);
            });
    }, [id]);

    const onSubmit = async (data: FormData) => {
        await fetch(`http://localhost:3000/events/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        navigate("/dashboard/events");
    };

    return (
        <div className="max-w-4xl mx-auto p-2 animate-fade-in">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/40 p-8 w-full transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/50">
                <div className="mb-6 border-b border-gray-50 pb-4">
                    <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Edit Event</h1>
                    <p className="text-xs text-gray-400 mt-1">Perbarui detail jadwal, lokasi, dan informasi event.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <FormInput 
                        label="Nama Event" 
                        name="name" 
                        register={register} 
                        error={errors.name?.message} 
                        type="text" 
                    />

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-gray-700">Kategori</label>
                        <select 
                            {...register("categoryId")} 
                            className="p-3 border border-gray-200 rounded-xl w-full bg-gray-50/50 text-sm font-medium text-gray-800 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-150"
                        >
                            <option value="">Pilih Category</option>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                        {errors.categoryId && <p className="text-red-500 text-xs font-medium mt-0.5">{errors.categoryId.message}</p>}
                    </div>

                    <FormInput 
                        label="Lokasi" 
                        name="location" 
                        register={register} 
                        error={errors.location?.message} 
                        type="text" 
                    />
                    
                    <FormInput 
                        label="Tanggal" 
                        name="dateEvent" 
                        register={register} 
                        error={errors.dateEvent?.message} 
                        type="date" 
                    />
                    
                    <FormInput 
                        label="Deskripsi" 
                        name="description" 
                        register={register} 
                        error={errors.description?.message} 
                        type="text" 
                    />

                    <div className="flex gap-3 pt-4 border-t border-gray-50 mt-2">
                        <button
                            type="button"
                            onClick={() => navigate("/dashboard/events")}
                            className="flex-1 border border-gray-200 text-gray-500 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all duration-150 cursor-pointer text-center"
                        >
                            Batal
                        </button>
                        <Button 
                            label="Simpan Perubahan" 
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