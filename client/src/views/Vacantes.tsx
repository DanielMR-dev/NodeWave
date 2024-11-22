import { vacantes } from "../data/vacantes";

export default function Vacantes() {
    return (
        <div className="mx-auto max-w-6xl bg-slate-950 text-white p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Vacantes Disponibles</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {vacantes.map((vacancy) => (
                <div
                    key={vacancy.id}
                    className="bg-slate-900 p-6 rounded shadow hover:bg-slate-800 transition duration-300"
                >
                    <h2 className="text-xl font-bold text-blue-400">{vacancy.title}</h2>
                    <p className="text-gray-400 mt-2">Ubicación: {vacancy.location}</p>
                    <p className="text-gray-400">Salario: {vacancy.salary}</p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                        Ver Detalles
                    </button>
                </div>
                ))}
            </div>
        </div>
    )
}
