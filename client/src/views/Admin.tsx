import React, { useState } from "react";
import { vacancies } from "../data/vacantes"; // Importar las vacantes desde vacantes.ts
import { useNavigate } from "react-router-dom";

const Admin = ({ setIsLoggedIn }: { setIsLoggedIn: (status: boolean) => void }) => {

    const navigate = useNavigate(); // Hook para manejar redirecciones
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

    // Eliminar una vacante
    const handleDelete = (id: number) => {
        setVacanciesList(vacanciesList.filter(v => v.id !== id));
    };

    // Editar una vacante
    const handleEdit = (vacancy: any) => {
        setEditingVacancy(vacancy);
        setForm(vacancy); // Cargar los datos de la vacante en el formulario
    };

    // Cerrar sesión
    const handleLogout = () => {
        setIsLoggedIn(false); // Cambiar el estado de autenticación
        localStorage.setItem("isLoggedIn", "false"); // Eliminar sesión en localStorage
        navigate("/"); // Redirigir a la página de inicio ("/")
    };

    return (
        <div className="min-h-screen mx-auto max-w-6xl bg-slate-950 text-white p-6">
            <h1 className="text-4xl font-bold text-blue-400 mb-6">Panel de Administración</h1>

            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Botón de cerrar sesión */}
                <button
                    onClick={handleLogout}
                    className="bg-blue-500 text-white text-xl px-4 py-2 rounded-lg hover:bg-blue-600 mb-6"
                >
                    Agregar producto
                </button>
                {/* Botón de cerrar sesión */}
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white text-xl px-4 py-2 rounded-lg hover:bg-red-600 mb-6"
                >
                    Cerrar Sesión
                </button>
            </div>
            

            {/* Tabla de vacantes */}
            <div className="mb-8 overflow-x-auto">
                <h2 className="text-2xl font-bold mb-4">Vacantes</h2>
                <table className="w-full bg-slate-900 rounded-lg border border-gray-700">
                <thead>
                    <tr className="bg-slate-800">
                    <th className="p-4 text-left text-white">Título</th>
                    <th className="p-4 text-left text-white">Ubicación</th>
                    <th className="p-4 text-left text-white">Salario</th>
                    <th className="p-4 text-left text-white">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {vacanciesList.map((vacancy, index) => (
                    <tr 
                        key={vacancy.id} 
                        className={` ${index % 2 === 0 ? "bg-slate-900 hover:bg-slate-700" : "bg-slate-800 hover:bg-slate-700"}`}
                    >
                        <td className="text-xl p-4">{vacancy.title}</td>
                        <td className="text-xl p-4">{vacancy.location}</td>
                        <td className="text-xl p-4">{vacancy.salary}</td>
                        <td className="text-xl p-4">
                        <button
                            onClick={() => handleEdit(vacancy)}
                            className="bg-blue-500 text-white px-4 py-2 w-full rounded-lg hover:bg-blue-600 mb-2"
                        >
                            Editar
                        </button>
                        <button
                            onClick={() => handleDelete(vacancy.id)}
                            className="bg-red-500 text-white px-4 py-2 w-full rounded-lg hover:bg-red-600"
                        >
                            Eliminar
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>

            {/* Formulario para añadir o editar vacantes */}
            <div>
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
        </div>
    );
};

export default Admin;
