import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputText } from "../components/ui/InputText";
import { TextArea } from "../components/ui/TextArea";

const schema = z.object({
    nama: z.string().min(3, "Nama minimal 3 karakter"),
    alamat: z.string().min(1, "Alamat tidak boleh kosong").min(5, "Alamat terlalu pendek"),
    email: z.string().min(1, "Email tidak boleh kosong").email("Format email tidak valid"),
    bio: z.string().optional(),
});

type RegisterForm = z.infer<typeof schema>;

export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: RegisterForm) => {
        console.log(data);
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
            <h1 className="text-2xl font-bold text-center mb-1">Registrasi Event</h1>
            <hr className="mb-6 border-gray-200" />

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <InputText
                    label="Nama"
                    name="nama"
                    register={register}
                    error={errors.nama?.message}
                />
                <InputText
                    label="Alamat"
                    name="alamat"
                    register={register}
                    error={errors.alamat?.message}
                />
                <InputText
                    label="Email"
                    name="email"
                    register={register}
                    error={errors.email?.message}
                />
                <TextArea
                    label="Bio"
                    name="bio"
                    register={register}
                    placeholder="Tentang dirimu..."
                />
                <button
                    type="submit"
                    className="w-full bg-red-900 hover:bg-red-800 text-white font-semibold py-3 rounded-lg mt-2"
                >
                    Daftar
                </button>
            </form>
        </div>
    );
}