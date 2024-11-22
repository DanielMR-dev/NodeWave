import { useParams } from 'react-router-dom';
import { vacancies } from "../data/vacantes";

export default function Vacante() {
    const { id } = useParams<{ id: string }>();

    // Buscar la vacante por ID
    const vacante = vacancies.find((vacante) => vacante.id === parseInt(id || '', 10));

    if (!vacante) {
        return (
            <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
                <h1 className="text-2xl font-bold uppercase">Vacante no encontrada</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white flex flex-col">
            <div className="mx-auto max-w-6xl bg-slate-900 p-8 rounded-2xl shadow">
                <h1 className="text-6xl font-bold text-blue-400">{vacante.title}</h1>
                <p className="text-3xl text-gray-400 mt-2 upp">Ubicación: {vacante.location}</p>
                <p className="text-3xl text-gray-400">Salario: {vacante.salary}</p>
                <p className="text-2xl mt-4">{vacante.description}</p>
                <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                    Enviar Hoja de Vida
                </button>
            </div>
        </div>
    );
};

