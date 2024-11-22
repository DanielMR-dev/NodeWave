import { vacancies } from "../data/vacantes";

const topVacantes = vacancies.slice(0, 3);

export default function Main() {
    return (
        <>
            <section className="bg-slate-900 py-20 text-center">
                <h2 className="text-4xl font-bold mb-4">Encuentra el trabajo ideal para ti</h2>
                <p className="text-lg mb-8">Explora nuestras vacantes y postúlate fácilmente sin necesidad de crear una cuenta.</p>
                <div className="space-x-4">
                    <button className="bg-blue-400 text-slate-950 px-6 py-2 rounded shadow hover:bg-blue-500">
                        Buscar Vacantes
                    </button>
                    <button className="bg-blue-500 px-6 py-2 rounded shadow hover:bg-blue-600">
                        Enviar Hoja de Vida
                    </button>
                </div>
            </section>

            {/* Vacantes */}
            <section className="container max-w-6xl mx-auto py-10 text-center" id="vacantes">
                <h2 className="text-4xl font-bold mb-4">Vacantes más buscadas</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {topVacantes.map((vacante) => (
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
        </>
    )
}
