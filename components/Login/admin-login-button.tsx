"use client";
import { useRouter } from "next/navigation";

export default function AdminLoginButton() {
    const router = useRouter();

    const handleLogin = () => {
        // Add login/auth logic here if needed
        router.push("./admin-dashboard"); // redirects to admin dashboard
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
