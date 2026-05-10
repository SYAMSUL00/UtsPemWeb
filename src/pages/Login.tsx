import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputText } from "../components/ui/InputText"
import { PasswordInput } from "../components/ui/PasswordInput";
import { Link } from "react-router-dom";



const schema = z.object({
    email: z.string().email("Email harus diisi"),
    password: z.string().min(6, "Password minimal 6 karakter"),
});

type LoginForm = {
    email: string;
    password: string;
};

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: LoginForm) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center mb-1">Login</h1>
                <hr className="mb-6 border-gray-200" />

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <InputText
                        label="Email"
                        name="email"
                        register={register}
                        error={errors.email?.message}
                    />
                    <PasswordInput
                        label="Password"
                        name="password"
                        register={register}
                        error={errors.password?.message}
                    />
                    <button
                        type="submit"
                        className="w-full bg-red-900 hover:bg-red-800 text-white font-semibold py-3 rounded-lg mt-2"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-6 text-center">
                    Belum punya akun?{" "}
                    <Link to="/register" className="text-blue-500">
                        Daftar di sini
                    </Link>
                </p>
            </div>
        </div>
    );
}