import { vacantes } from "../data/vacantes";

export default function Vacantes() {
    return (
        <section className="container bg-slate-950 mx-auto max-w-6xl py-10 text-center">
            <h1 className="text-3xl font-bold text-center mb-8">Vacantes Disponibles</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {vacantes.map((vacante) => (
                <div
                    key={vacante.id}
                    className="bg-slate-900 p-6 rounded-2xl shadow hover:bg-slate-800 transition duration-300"
                >
                    <h2 className="text-xl font-bold text-blue-400">{vacante.title}</h2>
                    <p className="text-gray-400 mt-2">Ubicación: {vacante.location}</p>
                    <p className="text-gray-400">Salario: {vacante.salary}</p>
                    <button
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
                        onClick={() => window.location.href = `/vacante/${vacante.id}`}
                    >
                        Ver Detalles
                    </button>
                </div>
                ))}
            </div>
        </section>
    )
}
