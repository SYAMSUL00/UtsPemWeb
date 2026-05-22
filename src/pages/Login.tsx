import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputText } from "../components/ui/InputText";
import { PasswordInput } from "../components/ui/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const schema = z.object({
    nim: z.string().min(1, "NIM harus diisi"),
    password: z.string().min(6, "Password minimal 6 karakter"),
});

type LoginForm = z.infer<typeof schema>;

export default function Login() {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>({
        resolver: zodResolver(schema),
    });

    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);

    const onSubmit = (data: LoginForm) => {
        if (data.nim === "24090117" && data.password === "24090117") {
            alert("Login sukses");
            login(data.nim);
            navigate("/dashboard");
        } else {
            alert("NIM atau Password salah");
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50/50 p-4 animate-fade-in">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/40 p-8 w-full max-w-md transition-all duration-300 hover:shadow-2xl hover:shadow-gray-200/50">
                <div className="mb-6 text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Login</h1>
                    <p className="text-xs text-gray-400 mt-1">Masuk untuk mengelola Event Management System</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <InputText
                        label="NIM"
                        name="nim"
                        register={register}
                        error={errors.nim?.message}
                    />
                    
                    <PasswordInput
                        label="Password"
                        name="password"
                        register={register}
                        error={errors.password?.message}
                    />
                    
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md shadow-blue-600/10 hover:scale-[1.01] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Memproses..." : "Masuk Akun"}
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Belum punya akun?{" "}
                    <Link to="/register" className="text-blue-600 font-semibold hover:underline">
                        Daftar di sini
                    </Link>
                </p>

                {/* Informasi Akun Dummy di Paling Bawah */}
                <div className="mt-6 pt-4 border-t border-dashed border-gray-100 bg-gray-50/50 rounded-2xl p-3.5 text-center">
                    <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Akun Demo</p>
                    <div className="flex justify-center gap-4 text-xs font-medium text-gray-600">
                        <span>NIM: <code className="bg-white px-1.5 py-0.5 rounded border border-gray-200 font-mono text-blue-600 font-bold">24090117</code></span>
                        <span>Password: <code className="bg-white px-1.5 py-0.5 rounded border border-gray-200 font-mono text-blue-600 font-bold">24090117</code></span>
                    </div>
                </div>
            </div>
        </div>
    );
}