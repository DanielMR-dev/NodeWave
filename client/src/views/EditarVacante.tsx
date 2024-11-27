import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { vacancies } from "../data/vacantes"; // Importar las vacantes existentes

const EditarVacante = () => {
  const { id } = useParams<{ id: string }>(); // Obtener el id de la URL
  const navigate = useNavigate();

  // Estado local para manejar el formulario
  const [form, setForm] = useState({
    id: 0,
    title: "",
    location: "",
    salary: "",
    description: "",
  });

  const [error, setError] = useState("");

  // Buscar la vacante por ID al cargar la página
  useEffect(() => {
    const vacancy = vacancies.find((v) => v.id === Number(id)); // Buscar por ID
    if (vacancy) {
      setForm(vacancy); // Cargar los datos de la vacante en el formulario
    } else {
      setError("La vacante no existe.");
    }
  }, [id]);

  // Manejar cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Guardar los cambios en la vacante
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.title || !form.location || !form.salary || !form.description) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    // Actualizar la vacante en la lista global (simulado)
    const index = vacancies.findIndex((v) => v.id === Number(form.id));
    if (index !== -1) {
      vacancies[index] = form; // Actualizar los datos de la vacante
    }

    // Redirigir al panel de administración
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-slate-900 p-8 rounded shadow">
        <h1 className="text-3xl font-bold text-blue-400 text-center mb-6">Editar Vacante</h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-400 mb-2">Título</label>
            <input
              name="title"
              type="text"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Ubicación</label>
            <input
              name="location"
              type="text"
              value={form.location}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Salario</label>
            <input
              name="salary"
              type="text"
              value={form.salary}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Descripción</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300"
          >
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditarVacante;
