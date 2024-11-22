import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <div className="bg-slate-950 text-white">
            {/* Header */}
            <header className="bg-slate-950 shadow">
                <div className="mx-auto max-w-6xl flex justify-between items-center py-8">
                    <h1 className="text-4xl font-bold text-blue-600"><a href="/">NodeWave</a></h1>
                    <nav className="space-x-4">
                        <Link to="/" className="text-2xl text-white hover:text-blue-600">Inicio</Link>
                        <Link to="/vacantes" className="text-2xl text-white hover:text-blue-600">Vacantes</Link>
                        <Link to="/login" className="text-2xl text-white hover:text-blue-600">Iniciar Sesión</Link>
                    </nav>
                </div>
            </header>     
            <main className="mx-auto">
                <Outlet/>
            </main>
            {/* Footer */}
            <footer className="bg-slate-900 py-5">
                <div className="container mx-auto max-w-6xl text-center">
                    <p>&copy; 2024 Portal de Empleo. Todos los derechos reservados.</p>
                </div>
            </footer>
            </div>
        </>
    )
};
