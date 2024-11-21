
export default function Main() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-slate-800 py-20 text-center">
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

            {/* Featured Vacancies */}
            <section className="container mx-auto py-10" id="vacantes">
                <h3 className="text-2xl font-bold text-center mb-8">Vacantes más buscadas</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-900 shadow p-6 rounded hover:bg-slate-800">
                        <h4 className="text-lg font-bold">Desarrollador Web</h4>
                        <p className="text-gray-400">Ubicación: Remoto</p>
                        <p className="text-gray-400">Salario: $4,000,000 COP</p>
                        <button className="mt-4 text-blue-400 hover:underline">Ver más</button>
                    </div>
                    {/* Repite para más vacantes */}
                </div>
            </section>
        </>
    )
}
