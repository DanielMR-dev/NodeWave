import { useParams } from 'react-router-dom';
import { vacantes } from "../data/vacantes";

export default function Vacante() {
    const { id } = useParams<{ id: string }>();

    // Buscar la vacante por ID
    const vacante = vacantes.find((vacante) => vacante.id === parseInt(id || '', 10));

    if (!vacante) {
        return (
            <div className="h-full bg-slate-950 text-white flex items-center justify-center">
                <h1 className="text-2xl font-bold">Vacante no encontrada</h1>
            </div>
        );
    }

    return (
        <div className="h-full bg-slate-950 text-white p-6">
            <div className="max-w-4xl mx-auto bg-slate-900 p-6 rounded shadow">
                <h1 className="text-3xl font-bold text-blue-400">{vacante.title}</h1>
                <p className="text-gray-400 mt-2">Ubicación: {vacante.location}</p>
                <p className="text-gray-400">Salario: {vacante.salary}</p>
                <p className="mt-4">{vacante.description}</p>
                <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                    Enviar Hoja de Vida
                </button>
            </div>
        </div>
    );
};

