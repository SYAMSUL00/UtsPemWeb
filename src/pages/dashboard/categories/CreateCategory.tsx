import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormInput from "../../../components/FormInput";
import { Button } from "../../../components/ui/Button";

type FormData = {
    nama: string;
};

const schema = z.object({
    nama: z.string().min(1, "Nama kategori tidak boleh kosong"),
});

export default function CreateCategory() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div className="flex justify-center p-6">
            <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Create New Category</h1>
                    <p className="text-sm text-gray-500 mt-1">Isi data kategori dengan lengkap</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <FormInput
                        label="Nama"
                        name="nama"
                        register={register}
                        error={errors.nama?.message}
                        type="text"
                        placeholder="Nama kategori"
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