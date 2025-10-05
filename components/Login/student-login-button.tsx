"use client";
import { useRouter } from "next/navigation";

export default function StudentLoginButton() {
    const router = useRouter();

    const handleLogin = () => {
        // Add login/auth logic here
        router.push("/dashboard"); // redirects to vault
    };

    return (
        <button
            onClick={handleLogin}
            type="button"
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:ring-4 focus:ring-teal-200 outline-none"
        >
            Login
        </button>
    );
}