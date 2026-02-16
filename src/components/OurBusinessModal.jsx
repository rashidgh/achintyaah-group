import { X } from "lucide-react";

export default function ProjectsModal({ project, onClose, theme }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div
        className={`max-w-3xl w-full rounded-2xl p-8 relative overflow-y-auto max-h-[90vh]
          ${
            theme === "night"
              ? "bg-slate-900 text-white"
              : "bg-white text-slate-800"
          }
        `}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-indigo-500"
        >
          <X size={22} />
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4 text-indigo-500">
          {project.title}
        </h2>

        {/* Overview */}
        <p className="mb-6 leading-relaxed">
          {project.overview}
        </p>

        {/* Sections */}
        <div className="space-y-6">
          {/* Scope */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Scope of Work</h4>
            <ul className="list-disc pl-6 space-y-1">
              {project.scope.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Technologies / Execution */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Execution & Systems</h4>
            <p>{project.technologies}</p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Key Highlights</h4>
            <ul className="list-disc pl-6 space-y-1">
              {project.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
