import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <>
            <div className="bg-slate-950 text-white">
            {/* Header */}
            <header className="bg-slate-950 shadow">
                <div className="mx-auto max-w-6xl flex justify-between items-center py-8">
                    <h1 className="text-3xl font-bold text-blue-600">NodeWave</h1>
                    <nav className="space-x-4">
                        <a href="/" className="text-2xl text-white hover:text-blue-600">Inicio</a>
                        <a href="vacantes" className="text-2xl text-white hover:text-blue-600">Vacantes</a>
                        <a href="#login" className="text-2xl text-white hover:text-blue-600">Iniciar Sesión</a>
                    </nav>
                </div>
            </header>     
            <main className="mx-auto">
                <Outlet/>
            </main>
            {/* Footer */}
            <footer className="bg-slate-900 py-5">
                <div className="container mx-auto max-w-6xl text-center">
                    <p>&copy; 2024 Portal Empleo. Todos los derechos reservados.</p>
                </div>
            </footer>
            </div>
        </>
    )
};
