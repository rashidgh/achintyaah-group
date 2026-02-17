import { leaders } from "../data/leaders";

export default function LeadershipSection({ theme }) {
    const isDay = theme !== "night";

    return (
        <section
            id="team"
            className={`relative py-24 transition-colors duration-500
        ${isDay ? "bg-white text-slate-900" : "bg-[#030712] text-white"}
      `}
        >
            {/* Background Glows */}
            {!isDay && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600/20 blur-[120px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/20 blur-[120px]" />
                </div>
            )}

            <div className="max-w-7xl mx-auto px-6">
                {/* Modern Header */}
                <div className="mb-24 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Meet Our{" "}
                        <span className="relative">
                            <span className={isDay ? "text-indigo-600" : "text-indigo-400"}>Leadership</span>
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 0 100 5" stroke="currentColor" strokeWidth="2" fill="none" className="text-indigo-500/30" />
                            </svg>
                        </span>
                    </h2>
                </div>

                {/* Overlapping Circle Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-12">
                    {leaders.map((leader, index) => (
                        <div
                            key={index}
                            className="group relative pt-12"
                        >
                            {/* The Card Body */}
                            <div className={`
                relative rounded-3xl p-8 md:p-10 transition-all duration-500
                ${isDay
                                    ? "bg-slate-50 border border-slate-100 shadow-sm group-hover:shadow-2xl group-hover:bg-white"
                                    : "bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-indigo-500/50 group-hover:bg-white/10"
                                }
                group-hover:-translate-y-2
              `}>

                                {/* Overlapping Circle Image */}
                                <div className="absolute -top-14 left-8 md:left-10">
                                    <div className="relative">
                                        {/* Pulsing Ring Animation */}
                                        <div className="absolute inset-0 rounded-full bg-indigo-500 animate-ping opacity-0 group-hover:opacity-20 transition-opacity" />

                                        <div className={`
                      relative w-28 h-28 rounded-full p-1 transition-transform duration-500 group-hover:scale-110
                      ${isDay ? "bg-white shadow-lg" : "bg-slate-900 shadow-2xl shadow-black"}
                    `}>
                                            <img
                                                src={leader.image}
                                                alt={leader.name}
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Content with Offset Spacing to Clear the Image */}
                                <div className="mt-12">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h3 className={`text-2xl font-bold ${isDay ? "text-slate-900" : "text-white"}`}>
                                                {leader.name}
                                            </h3>
                                            <p className="text-indigo-500 font-medium tracking-wide text-sm mt-1">
                                                {leader.role}
                                            </p>
                                        </div>
                                    </div>

                                    <div className={`h-1 w-12 rounded-full bg-indigo-500 mb-6 transition-all duration-500 group-hover:w-24`} />

                                    <p className={`leading-relaxed text-[15px] md:text-base transition-colors duration-300
                    ${isDay ? "text-slate-600 group-hover:text-slate-700" : "text-slate-400 group-hover:text-slate-200"}`}
                                    >
                                        {leader.description}
                                    </p>
                                </div>

                                {/* Bottom Corner Accent */}
                                <div className={`absolute bottom-4 right-6 w-8 h-8 rounded-full transition-transform duration-700 group-hover:scale-[5] opacity-0 group-hover:opacity-[0.03]
                  ${isDay ? "bg-indigo-600" : "bg-white"}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}