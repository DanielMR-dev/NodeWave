import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
    // Navegación para redirigir a otras rutas
    const navigate = useNavigate();

    // Estado de autenticación guardado en localStorage
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        const stored = localStorage.getItem("isLoggedIn");
        if(stored === 'true') {
            return true;
        } else {
            return false;
        };
    });
    
    // Leer el estado de isLoggedIn desde localStorage al montar el componente
    useEffect(() => {
        const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
        if (storedIsLoggedIn === "true") {
            setIsLoggedIn(true); // Si el usuario está logueado, actualiza el estado
        };
    }, []); // Este useEffect se ejecutará solo una vez cuando se monte el componente

    // Actualizar localStorage cuando el estado isLoggedIn cambia
    useEffect(() => {
        localStorage.setItem("isLoggedIn", String(isLoggedIn)); // Guardamos en localStorage
    }, [isLoggedIn]); // Este useEffect se ejecutará cada vez que cambie el estado de isLoggedIn
    
    // Cambiar a "Volver a Admin" si está logueado
    const handleLogout = () => {
        setIsLoggedIn(false); // Cambiar estado global
        localStorage.setItem("isLoggedIn", "false"); // Eliminar sesión en localStorage
        navigate("/"); // Redirigir a la página de inicio ("/")
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            {/* Header */}
            <header className="bg-slate-950 shadow">
                <div className="mx-auto max-w-6xl flex justify-between items-center py-8">
                    <h1 className="text-4xl font-bold text-blue-600"><Link to={"/"}>NodeWave</Link></h1>
                    <nav className="space-x-4">
                        <Link 
                            to="/" 
                            className="text-2xl text-white hover:text-blue-600"
                        >Inicio</Link>
                        <Link 
                            to="/vacantes" 
                            className="text-2xl text-white hover:text-blue-600"
                        >Vacantes</Link>
                        {isLoggedIn ? (
                            <>
                                <button
                                    onClick={() => navigate("/admin")} // Redirigir a admin sin cambiar el estado
                                    className="text-2xl text-white hover:text-blue-600"
                                >
                                Volver a Admin
                                </button>
                                <button
                                    onClick={handleLogout} // Cerrar sesión
                                    className="text-2xl text-white hover:text-blue-600"
                                >
                                Cerrar Sesión
                                </button>
                          </>
                        ) : (
                            <Link
                                to="/login"
                                className="text-2xl text-white hover:text-blue-600"
                            >
                                Iniciar Sesión
                            </Link>
                        )}
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
    );
};

export default Layout;

