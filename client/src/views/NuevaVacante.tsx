import React, { useState } from "react";
import { vacancies } from "../data/vacantes"; 


const NuevaVacante = () => {
    // Estado local para manejar las vacantes
    const [vacanciesList, setVacanciesList] = useState(vacancies);
    const [editingVacancy, setEditingVacancy] = useState<any>(null); // Para editar una vacante
    const [form, setForm] = useState({
        id: "",
        title: "",
        location: "",
        salary: "",
        description: ""
    }); // Datos del formulario

    // Manejar cambios en los campos del formulario
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // Añadir o editar una vacante
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (editingVacancy) {
            // Editar vacante existente
            setVacanciesList(vacanciesList.map(v => (v.id === editingVacancy.id ? { ...form, id: v.id } : v)));
            setEditingVacancy(null); // Desactivar el modo de edición
        } else {
            // Añadir nueva vacante
            setVacanciesList([...vacanciesList, { ...form, id: vacanciesList.length + 1 }]);
        }

        setForm({ id: "", title: "", location: "", salary: "", description: "" }); // Limpiar formulario
    };
    return (
        <>
            {/* Formulario para añadir o editar vacantes */}
            <div className="mx-auto max-w-6xl bg-slate-900 m-5 p-8 rounded-2xl shadow mt-8 mb-16">
                <h2 className="text-2xl font-bold mb-4">{editingVacancy ? "Editar Vacante" : "Nueva Vacante"}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-400 mb-2">Título</label>
                    <input
                        name="title"
                        type="text"
                        value={form.title}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-400 mb-2">Ubicación</label>
                    <input
                        name="location"
                        type="text"
                        value={form.location}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-400 mb-2">Salario</label>
                    <input
                        name="salary"
                        type="text"
                        value={form.salary}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-400 mb-2">Descripción</label>
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
                >
                    {editingVacancy ? "Guardar Cambios" : "Añadir Vacante"}
                </button>
                </form>
            </div>
        </>
        
    );
};

export default NuevaVacante;
