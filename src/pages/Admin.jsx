import { useState } from 'react';
import { HiPlus, HiTrash } from 'react-icons/hi';

export default function Admin() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Trading Dashboard", status: "published" },
    { id: 2, title: "Wedding Invitation", status: "draft" },
  ]);
  const [newTitle, setNewTitle] = useState('');

  const handleAdd = () => {
    if (!newTitle.trim()) return;
    const newProject = {
      id: Date.now(),
      title: newTitle,
      status: "draft"
    };
    setProjects([...projects, newProject]);
    setNewTitle('');
  };

  const handleDelete = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <section className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Add New Project</h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Project Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="flex-1 bg-white/10 rounded-xl px-4 py-2 focus:outline-none focus:ring-1 focus:ring-cyan-400"
            />
            <button onClick={handleAdd} className="bg-cyan-500 px-6 py-2 rounded-xl flex items-center gap-2 hover:bg-cyan-600 transition">
              <HiPlus /> Add
            </button>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Manage Projects</h2>
          <div className="space-y-3">
            {projects.map(project => (
              <div key={project.id} className="flex justify-between items-center p-4 bg-white/5 rounded-xl">
                <div>
                  <h3 className="font-semibold">{project.title}</h3>
                  <span className={`text-sm ${project.status === 'published' ? 'text-green-400' : 'text-yellow-400'}`}>
                    {project.status}
                  </span>
                </div>
                <button onClick={() => handleDelete(project.id)} className="text-red-400 hover:text-red-500 transition">
                  <HiTrash />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}