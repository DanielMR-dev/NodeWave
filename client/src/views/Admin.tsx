
import { useState } from "react";
import { vacancies } from "../data/vacantes"; // Importar las vacantes desde vacantes.ts
import { Link, useNavigate } from "react-router-dom";

const Admin = ({ setIsLoggedIn }: { setIsLoggedIn: (status: boolean) => void }) => {

    const navigate = useNavigate(); // Hook para manejar redirecciones

    // Estado local para manejar las vacantes
    const [vacanciesList, setVacanciesList] = useState(vacancies);
    
    // Eliminar una vacante
    const handleDelete = (id: number) => {
        setVacanciesList(vacanciesList.filter(v => v.id !== id));
    };

    // Redirigir a la página de edición
    const handleEdit = (id: number) => {
        navigate(`/editar-vacante/${id}`); // Redirigir a la página de edición
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
                <Link
                    to="/nueva-vacante"
                    className="bg-blue-500 text-white text-xl px-4 py-2 rounded-lg hover:bg-blue-600 mb-6 transition duration-200 ease-in-out"
                >
                    Agregar Vacante
                </Link>
                {/* Botón de cerrar sesión */}
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white text-xl px-4 py-2 rounded-lg hover:bg-red-600 mb-6 transition duration-200 ease-in-out"
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
                        className={` ${index % 2 === 0 ? "bg-slate-900 hover:bg-slate-700 transition duration-200 ease-in-out" : "bg-slate-800 hover:bg-slate-700 transition duration-200 ease-in-out"}`}
                    >
                        <td className="text-xl p-4">{vacancy.title}</td>
                        <td className="text-xl p-4">{vacancy.location}</td>
                        <td className="text-xl p-4">{vacancy.salary}</td>
                        <td className="text-xl p-4">
                        <button
                            onClick={() => handleEdit(vacancy.id)}
                            className="bg-blue-500 text-white px-4 py-2 w-full rounded-lg hover:bg-blue-600 mb-2"
                        >
                        Editar
                        </button>
                        <button
                            onClick={() => handleDelete(vacancy.id)}
                            className="bg-red-500 text-white px-4 py-2 w-full rounded-lg hover:bg-red-600 transition duration-200 ease-in-out"
                        >
                            Eliminar
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;
