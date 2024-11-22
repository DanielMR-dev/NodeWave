import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }: { setIsLoggedIn: (status: boolean) => void }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const validUsers = [
        { email: "admin@admin.com", password: "admin12345" },
    ];

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const user = validUsers.find(
        (user) => user.email === email && user.password === password
        );

        if (user) {
        setIsLoggedIn(true); // Actualiza el estado global
        navigate("/admin"); // Redirige a la página de administración
        setError("");
        } else {
        setError("Correo electrónico o contraseña incorrectos.");
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
            <div className="max-w-md w-full bg-slate-900 p-8 rounded shadow">
                <h1 className="text-3xl font-bold text-blue-400 text-center mb-6">Iniciar Sesión</h1>
                <form className="space-y-6" onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email" className="block text-gray-400 mb-2">Correo Electrónico</label>
                    <input
                        id="email"
                        type="email"
                        required
                        placeholder="tuemail@dominio.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-gray-400 mb-2">Contraseña</label>
                    <input
                        id="password"
                        type="password"
                        required
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-3 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300"
                >
                    Iniciar Sesión
                </button>
                </form>
            </div>
        </div>
    );
};
