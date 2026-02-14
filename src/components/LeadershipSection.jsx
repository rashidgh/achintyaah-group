const leaders = [
    {
        name: "Dr. Sreetharan Murthy",
        role: "Chairman, Achintyaah Group",
        image: "/src/assets/img/Sreetharan.png",
        description:
            "A visionary technocrat with over 20 years at the forefront of technology-led industries. He has pioneered innovation-driven strategies, guiding the organization toward sustainable growth, operational excellence, and long-term impact across diverse sectors.",
    },
    {
        name: "G Krishna Kumar",
        role: "Director of Global Operations",
        image: "/src/assets/img/g-krishna-kumar.jpg",
        description:
            "He oversees global project operations with a strong focus on execution excellence. Known for strategic planning and coordination, he has led major initiatives ensuring timely delivery, quality benchmarks, and consistent project outcomes.",
    },
];

export default function LeadershipSection({ theme }) {
    const isDay = theme !== "night";

    return (
        <section id="team"
            className={`relative py-20 transition-colors duration-300
        ${isDay
                    ? "bg-gray-50 text-slate-900"
                    : "bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white"
                }`}
        >
            {/* Ambient Glow (Night only) */}
            {!isDay && (
                <div className="absolute inset-0 -z-10 bg-indigo-500/10 blur-[140px]" />
            )}

            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-center">
                    Our{" "}
                    <span className={isDay ? "text-indigo-600" : "text-indigo-400"}>
                        Leadership
                    </span>
                </h2>

                <p
                    className={`mt-5 text-center max-w-3xl mx-auto
            ${isDay ? "text-slate-600" : "text-slate-400"}`}
                >
                    Achintyaah Group is powered by an experienced, visionary leadership team
                    driving innovation, sustainability, and global excellence.
                </p>

                {/* Cards */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                    {leaders.map((leader, index) => (
                        <div
                            key={index}
                            className={`
                group relative rounded-2xl p-8 transition-all duration-300
                hover:-translate-y-3
                ${isDay
                                    ? "bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-indigo-400"
                                    : "bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-black/40 hover:border-indigo-400/40 hover:shadow-indigo-500/30"
                                }
              `}
                        >
                            {/* Hover Overlay */}
                            <div
                                className={`
                  pointer-events-none absolute inset-0 rounded-2xl opacity-0
                  group-hover:opacity-100 transition duration-300
                  ${isDay
                                        ? "bg-gradient-to-br from-indigo-50 via-transparent to-sky-50"
                                        : "bg-gradient-to-br from-indigo-500/10 via-transparent to-sky-500/10"
                                    }
                `}
                            />

                            <div className="relative z-10">
                                {/* Image */}
                                <div className="relative w-28 h-28 mb-6">
                                    {!isDay && (
                                        <div className="absolute inset-0 rounded-full bg-indigo-500/40 blur-lg opacity-0 group-hover:opacity-100 transition" />
                                    )}

                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className={`
                      relative w-28 h-28 rounded-full object-cover border-4
                      ${isDay
                                                ? "border-indigo-100"
                                                : "border-white/10"
                                            }
                    `}
                                    />
                                </div>

                                {/* Name */}
                                <h3
                                    className={`
                    text-xl font-semibold transition
                    ${isDay
                                            ? "text-slate-900 group-hover:text-indigo-600"
                                            : "text-white group-hover:text-indigo-300"
                                        }
                  `}
                                >
                                    {leader.name}
                                </h3>

                                {/* Role */}
                                <p
                                    className={`
                    font-medium mt-1
                    ${isDay ? "text-indigo-600" : "text-indigo-400"}
                  `}
                                >
                                    {leader.role}
                                </p>

                                {/* Description */}
                                <p
                                    className={`
                    mt-4 leading-relaxed transition
                    ${isDay
                                            ? "text-slate-600 group-hover:text-slate-700"
                                            : "text-slate-400 group-hover:text-slate-200"
                                        }
                  `}
                                >
                                    {leader.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
