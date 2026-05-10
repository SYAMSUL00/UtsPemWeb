import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormInput from "../../../components/FormInput";
import { Button } from "../../../components/ui/Button";

type FormData = {
    nama: string;
    role: string;
    foto: FileList;
};

const schema = z.object({
    nama: z.string().min(1, "Nama pembicara tidak boleh kosong"),
    role: z.string().min(1, "Role/Jabatan tidak boleh kosong"),
    foto: z
        .instanceof(FileList)
        .refine((files) => files?.length > 0, "Foto wajib diunggah"),
});

export default function CreateSpeaker() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div className="py-6">
            <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md mx-auto">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Create New Speaker</h1>
                    <p className="text-sm text-gray-500 mt-1">Isi data pembicara dengan lengkap</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <FormInput
                        text="Nama"
                        name="nama"
                        register={register}
                        error={errors.nama?.message}
                        type="text"
                        placeholder="Masukkan nama pembicara"
                    />
                    <FormInput
                        text="Role"
                        name="role"
                        register={register}
                        error={errors.role?.message}
                        type="text"
                        placeholder="Contoh: Senior Developer / CEO"
                    />
                    <FormInput
                        text="Foto"
                        name="foto"
                        register={register}
                        error={errors.foto?.message as string}
                        type="file"
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