import { X } from "lucide-react";

export default function AboutModal({ data, onClose, theme }) {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div
        className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-8
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
          className="absolute cursor-pointer top-4 right-4 text-gray-400 hover:text-indigo-500"
        >
          <X size={22} />
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-indigo-500">
          {data.title}
        </h2>

        {/* Overview */}
        <p className="leading-relaxed mb-8">
          {data.overview}
        </p>

        {/* Sections */}
        {data.sections?.map((section, i) => (
          <div key={i} className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-indigo-400">
              {section.heading}
            </h3>
            <p className="leading-relaxed">
              {section.content}
            </p>
          </div>
        ))}

        {/* Points */}
        {data.points && (
          <ul className="list-disc pl-6 space-y-2 mb-6">
            {data.points.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}

        {/* Industries */}
        {data.industries && (
          <>
            <h3 className="text-xl font-semibold mb-3 text-indigo-400">
              Industries We Serve
            </h3>
            <div className="flex flex-wrap gap-3">
              {data.industries.map((industry, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-500 text-sm"
                >
                  {industry}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
