import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormInput from "../../../components/FormInput";
import { Button } from "../../../components/ui/Button";

type FormData = {
    nama: string;
    category: string;
    lokasi: string;
    tanggal: string;
    deskripsi: string;
};

const schema = z.object({
    nama: z.string().min(1, "Nama tidak boleh kosong"),
    category: z.string().min(1, "Category tidak boleh kosong"),
    lokasi: z.string().min(1, "Lokasi tidak boleh kosong"),
    tanggal: z.string().min(1, "Tanggal tidak boleh kosong"),
    deskripsi: z.string().min(1, "Deskripsi tidak boleh kosong"),
});

export default function CreateEvent() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div className="py-6">
            <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-3xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Create New Event</h1>
                    <p className="text-sm text-gray-500 mt-1">Isi data event dengan lengkap</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <FormInput
                        label="Nama"
                        name="nama"
                        register={register}
                        error={errors.nama?.message}
                        type="text"
                        placeholder="Nama event"
                    />
                    <FormInput
                        label="Category"
                        name="category"
                        register={register}
                        error={errors.category?.message}
                        type="text"
                        placeholder="Category"
                    />
                    <FormInput
                        label="Lokasi"
                        name="lokasi"
                        register={register}
                        error={errors.lokasi?.message}
                        type="text"
                        placeholder="Lokasi"
                    />
                    <FormInput
                        label="Tanggal"
                        name="tanggal"
                        register={register}
                        error={errors.tanggal?.message}
                        type="date"
                    />
                    <FormInput
                        label="Deskripsi"
                        name="deskripsi"
                        register={register}
                        error={errors.deskripsi?.message}
                        type="text"
                        placeholder="Deskripsi event"
                    />
                    <div className="pt-2">
                        <Button
                            label="Simpan"
                            variant="primary"
                            type="submit"
                            isLoading={isSubmitting}
                            className="w-full"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}