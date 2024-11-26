import React, { useState } from "react";

const HojaDeVida = () => {
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        telefono: "",
        archivo: null as File | null,
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Manejar cambios en los campos del formulario
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        if (name === "archivo" && files) {
        setForm({ ...form, archivo: files[0] });
        } else {
        setForm({ ...form, [name]: value });
        }
    };

    // Validar y enviar el formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validar campos vacíos
        if (!form.nombre || !form.email || !form.telefono || !form.archivo) {
            setError("Todos los campos son obligatorios.");
            setSuccess("");
            return;
        }

        // Validar que el archivo sea un PDF
        if (form.archivo && form.archivo.type !== "application/pdf") {
            setError("El archivo debe estar en formato PDF.");
            setSuccess("");
            return;
        }

        // Simular envío exitoso
        setSuccess("¡Hoja de vida enviada correctamente!");
        setError("");

        // Aquí podrías manejar el envío al backend con fetch o axios

        // Limpiar el formulario
        setForm({ nombre: "", email: "", telefono: "", archivo: null });
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
            <div className="max-w-lg w-full bg-slate-900 p-8 rounded shadow">
                <h1 className="text-3xl font-bold text-blue-400 text-center mb-6">
                    Enviar Hoja de Vida
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="nombre" className="block text-gray-400 mb-2">
                            Nombre Completo
                        </label>
                        <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            value={form.nombre}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-400 mb-2">
                            Correo Electrónico
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="telefono" className="block text-gray-400 mb-2">
                            Teléfono de Contacto
                        </label>
                        <input
                            id="telefono"
                            name="telefono"
                            type="text"
                            value={form.telefono}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="archivo" className="block text-gray-400 mb-2">
                            Adjuntar Hoja de Vida (PDF)
                        </label>
                        <input
                            id="archivo"
                            name="archivo"
                            type="file"
                            accept=".pdf"
                            onChange={handleChange}
                            required
                            className="w-full text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                        />
                    </div>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    {success && <p className="text-green-500 text-center">{success}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HojaDeVida;
