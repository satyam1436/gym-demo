import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function Trainers() {
    return (
        <main className="bg-[#080808]">

            {/* Trainers Hero */}
            <section className="relative flex min-h-[75svh] items-end overflow-hidden">

                {/* Background */}
                <div className="absolute inset-0">

                    <img
                        src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=2400&q=90"
                        alt="Personal trainer coaching an athlete"
                        className="h-full w-full object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/70" />

                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#080808] to-transparent" />

                </div>


                {/* Content */}
                <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-6 lg:px-8 lg:pb-24">

                    <div className="max-w-5xl">

                        {/* Eyebrow */}
                        <div className="mb-7 flex items-center gap-3">

                            <span className="h-px w-10 bg-[#FF5A1F]" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                The Coaching Team
                            </span>

                        </div>


                        {/* Heading */}
                        <h1 className="font-display text-[5rem] leading-[0.82] tracking-tight text-white sm:text-[7rem] lg:text-[9rem]">

                            TRAIN WITH

                            <br />

                            <span className="text-[#FF5A1F]">
                                THE BEST.
                            </span>

                        </h1>


                        {/* Description */}
                        <p className="mt-8 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                            Great training starts with great coaching. Meet the
                            people who bring experience, structure and intensity
                            to every session at IronForge.
                        </p>

                    </div>


                    {/* Scroll Indicator */}
                    <div className="mt-16 hidden items-center gap-4 xl:flex">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15">

                            <ArrowDown
                                size={14}
                                strokeWidth={1.5}
                                className="text-white/60"
                            />

                        </div>

                        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30">
                            Meet The Team
                        </span>

                    </div>

                </div>

            </section>

            {/* Trainers Roster */}
            <section className="border-t border-white/10 bg-[#080808]">

                <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">

                    {/* Header */}
                    <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

                        <div className="flex items-start gap-3">

                            <span className="mt-1 h-px w-10 bg-[#FF5A1F]" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                Meet The Coaches
                            </span>

                        </div>


                        <div>

                            <h2 className="font-display text-5xl leading-[0.88] tracking-tight text-white sm:text-6xl lg:text-8xl">

                                EXPERIENCE

                                <br />

                                THAT

                                <span className="text-[#FF5A1F]"> PUSHES YOU.</span>

                            </h2>

                            <p className="mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                                Our coaches don't just count reps. They understand movement,
                                performance and what it takes to keep progressing.
                            </p>

                        </div>

                    </div>


                    {/* Coach 01 */}
                    <article className="group mt-20 border-t border-white/10 pt-8 lg:pt-10">

                        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">

                            {/* Image */}
                            <div className="relative overflow-hidden">

                                <div className="aspect-[4/5] overflow-hidden">

                                    <img
                                        src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1400&q=90"
                                        alt="Marcus Reed - Strength and Performance Coach"
                                        className="h-full w-full object-cover object-center grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                    />

                                </div>


                                <div className="absolute left-5 top-5 border border-white/15 bg-black/60 px-4 py-3 backdrop-blur-md">

                                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50">
                                        Coach / 01
                                    </span>

                                </div>

                            </div>


                            {/* Details */}
                            <div className="flex flex-col justify-center">

                                <div>

                                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#FF5A1F]">
                                        Strength & Performance
                                    </p>

                                    <h3 className="mt-3 font-display text-6xl tracking-wide text-white sm:text-7xl lg:text-8xl">
                                        MARCUS REED
                                    </h3>

                                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-white/30">
                                        Head Strength Coach • 8 Years Experience
                                    </p>

                                </div>


                                <p className="mt-10 max-w-xl text-lg leading-8 text-white/65">
                                    “Strength isn't just about moving more weight.
                                    It's about becoming capable of more.”
                                </p>


                                <p className="mt-6 max-w-xl text-sm leading-7 text-white/40">
                                    Marcus specialises in progressive strength training,
                                    athletic performance and long-term programming.
                                    His approach combines technical precision with
                                    challenging, measurable sessions.
                                </p>


                                <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 border-t border-white/10 pt-6">

                                    <div>

                                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
                                            Specialty
                                        </p>

                                        <p className="mt-2 text-xs text-white/60">
                                            Strength / Power
                                        </p>

                                    </div>

                                    <div>

                                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
                                            Focus
                                        </p>

                                        <p className="mt-2 text-xs text-white/60">
                                            Performance
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </article>


                    {/* Coach 02 */}
                    <article className="group mt-24 border-t border-white/10 pt-8 lg:pt-10">

                        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">

                            {/* Details */}
                            <div className="order-2 flex flex-col justify-center lg:order-1">

                                <div>

                                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#FF5A1F]">
                                        Conditioning
                                    </p>

                                    <h3 className="mt-3 font-display text-6xl tracking-wide text-white sm:text-7xl lg:text-8xl">
                                        SARAH MITCHELL
                                    </h3>

                                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-white/30">
                                        Conditioning Coach • 6 Years Experience
                                    </p>

                                </div>


                                <p className="mt-10 max-w-xl text-lg leading-8 text-white/65">
                                    “You don't discover your limits by staying inside
                                    your comfort zone.”
                                </p>


                                <p className="mt-6 max-w-xl text-sm leading-7 text-white/40">
                                    Sarah specialises in conditioning, endurance and
                                    high-intensity training. Her sessions are designed
                                    to challenge your engine while keeping movement
                                    efficient and purposeful.
                                </p>


                                <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 border-t border-white/10 pt-6">

                                    <div>

                                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
                                            Specialty
                                        </p>

                                        <p className="mt-2 text-xs text-white/60">
                                            HIIT / Cardio
                                        </p>

                                    </div>

                                    <div>

                                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
                                            Focus
                                        </p>

                                        <p className="mt-2 text-xs text-white/60">
                                            Endurance
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* Image */}
                            <div className="order-1 relative overflow-hidden lg:order-2">

                                <div className="aspect-[4/5] overflow-hidden">

                                    <img
                                        src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1400&q=90"
                                        alt="Sarah Mitchell - Conditioning Coach"
                                        className="h-full w-full object-cover object-center grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                    />

                                </div>


                                <div className="absolute right-5 top-5 border border-white/15 bg-black/60 px-4 py-3 backdrop-blur-md">

                                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50">
                                        Coach / 02
                                    </span>

                                </div>

                            </div>

                        </div>

                    </article>


                    {/* Coach 03 */}
                    <article className="group mt-24 border-t border-white/10 pt-8 lg:pt-10">

                        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">

                            {/* Image */}
                            <div className="relative overflow-hidden">

                                <div className="aspect-[4/5] overflow-hidden">

                                    <img
                                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=90"
                                        alt="Daniel Carter - Personal Training Coach"
                                        className="h-full w-full object-cover object-center grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                    />

                                </div>


                                <div className="absolute left-5 top-5 border border-white/15 bg-black/60 px-4 py-3 backdrop-blur-md">

                                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50">
                                        Coach / 03
                                    </span>

                                </div>

                            </div>


                            {/* Details */}
                            <div className="flex flex-col justify-center">

                                <div>

                                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#FF5A1F]">
                                        Personal Training
                                    </p>

                                    <h3 className="mt-3 font-display text-6xl tracking-wide text-white sm:text-7xl lg:text-8xl">
                                        DANIEL CARTER
                                    </h3>

                                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-white/30">
                                        Personal Trainer • 10 Years Experience
                                    </p>

                                </div>


                                <p className="mt-10 max-w-xl text-lg leading-8 text-white/65">
                                    “The best program is the one that gets you
                                    to keep showing up.”
                                </p>


                                <p className="mt-6 max-w-xl text-sm leading-7 text-white/40">
                                    Daniel works one-on-one with members to build
                                    sustainable training plans around their goals,
                                    experience and lifestyle.
                                </p>


                                <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 border-t border-white/10 pt-6">

                                    <div>

                                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
                                            Specialty
                                        </p>

                                        <p className="mt-2 text-xs text-white/60">
                                            1:1 Coaching
                                        </p>

                                    </div>

                                    <div>

                                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
                                            Focus
                                        </p>

                                        <p className="mt-2 text-xs text-white/60">
                                            Custom Plans
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </article>


                    {/* Coach 04 */}
                    <article className="group mt-24 border-t border-white/10 pt-8 lg:pt-10">

                        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">

                            {/* Details */}
                            <div className="order-2 flex flex-col justify-center lg:order-1">

                                <div>

                                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#FF5A1F]">
                                        Functional Training
                                    </p>

                                    <h3 className="mt-3 font-display text-6xl tracking-wide text-white sm:text-7xl lg:text-8xl">
                                        ALEX MORGAN
                                    </h3>

                                    <p className="mt-3 text-xs uppercase tracking-[0.16em] text-white/30">
                                        Functional Coach • 7 Years Experience
                                    </p>

                                </div>


                                <p className="mt-10 max-w-xl text-lg leading-8 text-white/65">
                                    “Train your body to do more than look strong.
                                    Train it to perform.”
                                </p>


                                <p className="mt-6 max-w-xl text-sm leading-7 text-white/40">
                                    Alex focuses on functional movement, mobility and
                                    athletic development, helping members become stronger,
                                    more mobile and more capable in everyday life.
                                </p>


                                <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 border-t border-white/10 pt-6">

                                    <div>

                                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
                                            Specialty
                                        </p>

                                        <p className="mt-2 text-xs text-white/60">
                                            Mobility / Movement
                                        </p>

                                    </div>

                                    <div>

                                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
                                            Focus
                                        </p>

                                        <p className="mt-2 text-xs text-white/60">
                                            Athletic Training
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* Image */}
                            <div className="order-1 relative overflow-hidden lg:order-2">

                                <div className="aspect-[4/5] overflow-hidden">

                                    <img
                                        src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=90"
                                        alt="Alex Morgan - Functional Training Coach"
                                        className="h-full w-full object-cover object-center grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                    />

                                </div>


                                <div className="absolute right-5 top-5 border border-white/15 bg-black/60 px-4 py-3 backdrop-blur-md">

                                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50">
                                        Coach / 04
                                    </span>

                                </div>

                            </div>

                        </div>

                    </article>

                </div>

            </section>

            {/* Coaching Difference */}
            <section className="border-t border-white/10 bg-[#111111]">

                <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">

                    {/* Header */}
                    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

                        <div>

                            <div className="flex items-center gap-3">

                                <span className="h-px w-10 bg-[#FF5A1F]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                    The Coaching Difference
                                </span>

                            </div>

                        </div>


                        <div>

                            <h2 className="font-display text-5xl leading-[0.88] tracking-tight text-white sm:text-6xl lg:text-8xl">

                                MORE THAN

                                <br />

                                JUST

                                <span className="text-[#FF5A1F]"> REPS.</span>

                            </h2>

                            <p className="mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                                The right coach changes how you train. At IronForge,
                                every session is built around your movement, your goals
                                and your progress.
                            </p>

                        </div>

                    </div>


                    {/* Difference Cards */}
                    <div className="mt-20 grid gap-px bg-white/10 md:grid-cols-3">

                        {/* Precision */}
                        <div className="group min-h-[390px] bg-[#080808] p-7 transition-colors duration-500 hover:bg-[#151515] sm:p-9 lg:p-10">

                            <div className="flex items-start justify-between">

                                <span className="font-display text-6xl text-white/10 transition-colors duration-500 group-hover:text-[#FF5A1F]/20">
                                    01
                                </span>

                                <span className="mt-3 h-2 w-2 rounded-full bg-[#FF5A1F]" />

                            </div>


                            <div className="mt-24">

                                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#FF5A1F]">
                                    Train Smarter
                                </p>

                                <h3 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-5xl">
                                    PRECISION
                                </h3>

                                <p className="mt-5 text-sm leading-7 text-white/40">
                                    Every movement has a reason. Coaches focus on technique,
                                    form and execution so every session actually moves you
                                    forward.
                                </p>

                            </div>

                        </div>


                        {/* Accountability */}
                        <div className="group min-h-[390px] bg-[#080808] p-7 transition-colors duration-500 hover:bg-[#151515] sm:p-9 lg:p-10">

                            <div className="flex items-start justify-between">

                                <span className="font-display text-6xl text-white/10 transition-colors duration-500 group-hover:text-[#FF5A1F]/20">
                                    02
                                </span>

                                <span className="mt-3 h-2 w-2 rounded-full bg-[#FF5A1F]" />

                            </div>


                            <div className="mt-24">

                                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#FF5A1F]">
                                    Stay Consistent
                                </p>

                                <h3 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-5xl">
                                    ACCOUNTABILITY
                                </h3>

                                <p className="mt-5 text-sm leading-7 text-white/40">
                                    Motivation fades. Accountability keeps you showing up,
                                    pushing through difficult sessions and staying committed
                                    to the process.
                                </p>

                            </div>

                        </div>


                        {/* Adaptation */}
                        <div className="group min-h-[390px] bg-[#080808] p-7 transition-colors duration-500 hover:bg-[#151515] sm:p-9 lg:p-10">

                            <div className="flex items-start justify-between">

                                <span className="font-display text-6xl text-white/10 transition-colors duration-500 group-hover:text-[#FF5A1F]/20">
                                    03
                                </span>

                                <span className="mt-3 h-2 w-2 rounded-full bg-[#FF5A1F]" />

                            </div>


                            <div className="mt-24">

                                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#FF5A1F]">
                                    Keep Evolving
                                </p>

                                <h3 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-5xl">
                                    ADAPTATION
                                </h3>

                                <p className="mt-5 text-sm leading-7 text-white/40">
                                    Your body changes. Your program should too. Training
                                    evolves with your performance, recovery and goals.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* Statement */}
                    <div className="mt-16 border-t border-white/10 pt-7">

                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25">
                                The IronForge Approach
                            </p>

                            <p className="font-display text-2xl tracking-wide text-white/60 sm:text-3xl">
                                COACHED. <span className="text-[#FF5A1F]">NOT LEFT ALONE.</span>
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Coaching Results */}
            <section className="border-t border-white/10 bg-[#080808]">

                <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">

                    {/* Header */}
                    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

                        <div>

                            <div className="flex items-center gap-3">

                                <span className="h-px w-10 bg-[#FF5A1F]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                    Coaching In Action
                                </span>

                            </div>

                        </div>


                        <div>

                            <h2 className="font-display text-5xl leading-[0.88] tracking-tight text-white sm:text-6xl lg:text-8xl">

                                COACHING

                                <br />

                                THAT

                                <span className="text-[#FF5A1F]"> SHOWS.</span>

                            </h2>

                            <p className="mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                                The goal isn't simply to finish another workout.
                                It's to become noticeably stronger, fitter and more
                                capable over time.
                            </p>

                        </div>

                    </div>


                    {/* Featured Result */}
                    <div className="mt-20 grid overflow-hidden border border-white/10 lg:grid-cols-[1fr_1.15fr]">

                        {/* Image */}
                        <div className="relative min-h-[420px] overflow-hidden">

                            <img
                                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1800&q=90"
                                alt="Member training with an IronForge coach"
                                className="h-full w-full object-cover object-center grayscale transition-transform duration-700 hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />


                            <div className="absolute bottom-6 left-6">

                                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#FF5A1F]">
                                    Member Story / 01
                                </p>

                                <p className="mt-2 font-display text-3xl tracking-wide text-white">
                                    BUILT THROUGH CONSISTENCY.
                                </p>

                            </div>

                        </div>


                        {/* Result Content */}
                        <div className="flex flex-col justify-between bg-[#111111] p-7 sm:p-10 lg:p-12">

                            <div>

                                <p className="max-w-2xl font-display text-4xl leading-[0.95] tracking-wide text-white sm:text-5xl">
                                    “I stopped chasing quick results and started
                                    trusting the process.”
                                </p>

                                <p className="mt-7 text-xs uppercase tracking-[0.16em] text-white/30">
                                    Arjun Sharma • Performance Member
                                </p>

                            </div>


                            {/* Progress */}
                            <div className="mt-14">

                                <div className="flex items-end justify-between">

                                    <div>

                                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                                            Training Journey
                                        </p>

                                        <p className="mt-2 font-display text-3xl tracking-wide text-white">
                                            08 MONTHS
                                        </p>

                                    </div>

                                    <p className="font-display text-4xl text-[#FF5A1F]">
                                        +82%
                                    </p>

                                </div>


                                <div className="mt-5 h-1 bg-white/10">

                                    <div className="h-full w-[82%] bg-[#FF5A1F]" />

                                </div>


                                <div className="mt-4 grid grid-cols-3 gap-4">

                                    <div>

                                        <p className="text-[9px] uppercase tracking-[0.15em] text-white/25">
                                            Strength
                                        </p>

                                        <p className="mt-1 text-xs text-white/60">
                                            Improved
                                        </p>

                                    </div>

                                    <div>

                                        <p className="text-[9px] uppercase tracking-[0.15em] text-white/25">
                                            Conditioning
                                        </p>

                                        <p className="mt-1 text-xs text-white/60">
                                            Improved
                                        </p>

                                    </div>

                                    <div>

                                        <p className="text-[9px] uppercase tracking-[0.15em] text-white/25">
                                            Consistency
                                        </p>

                                        <p className="mt-1 text-xs text-white/60">
                                            Strong
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Mini Testimonials */}
                    <div className="mt-5 grid gap-px bg-white/10 md:grid-cols-2">

                        <div className="bg-[#111111] p-7 sm:p-9">

                            <div className="flex items-center justify-between">

                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#FF5A1F]">
                                    Strength
                                </span>

                                <span className="text-[9px] tracking-[0.2em] text-white/20">
                                    02
                                </span>

                            </div>

                            <p className="mt-8 max-w-xl font-display text-3xl leading-[1] tracking-wide text-white sm:text-4xl">
                                “My coach made me understand that
                                technique matters just as much as weight.”
                            </p>

                            <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
                                Rohan Mehta • 14 Months
                            </p>

                        </div>


                        <div className="bg-[#111111] p-7 sm:p-9">

                            <div className="flex items-center justify-between">

                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#FF5A1F]">
                                    Conditioning
                                </span>

                                <span className="text-[9px] tracking-[0.2em] text-white/20">
                                    03
                                </span>

                            </div>

                            <p className="mt-8 max-w-xl font-display text-3xl leading-[1] tracking-wide text-white sm:text-4xl">
                                “I came in wanting to get fit.
                                I stayed because I finally enjoyed training.”
                            </p>

                            <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
                                Priya Nair • 09 Months
                            </p>

                        </div>

                    </div>


                    {/* Bottom Statement */}
                    <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

                        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25">
                            Results Take Time
                        </p>

                        <p className="font-display text-2xl tracking-wide text-white/60 sm:text-3xl">
                            TRUST <span className="text-[#FF5A1F]">THE PROCESS.</span>
                        </p>

                    </div>

                </div>

            </section>

            {/* Trainers CTA */}
            <section className="border-t border-white/10 bg-[#111111]">

                <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-36">

                    <div className="relative overflow-hidden bg-[#FF5A1F]">

                        {/* Decorative Elements */}
                        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[60px] border-black/5" />

                        <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border-[45px] border-black/5" />


                        {/* Content */}
                        <div className="relative p-8 sm:p-12 lg:p-16">

                            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

                                <div>

                                    <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-black/50">
                                        Find Your Coach
                                    </p>


                                    <h2 className="mt-6 max-w-4xl font-display text-5xl leading-[0.84] tracking-tight text-black sm:text-6xl lg:text-8xl">

                                        THE RIGHT COACH

                                        <br />

                                        CHANGES

                                        <br />

                                        <span className="text-white">
                                            EVERYTHING.
                                        </span>

                                    </h2>


                                    <p className="mt-7 max-w-xl text-sm leading-7 text-black/60 sm:text-base">
                                        Not sure which training approach is right for you?
                                        Talk to our team and we'll help you find a coach
                                        who fits your goals.
                                    </p>

                                </div>


                                {/* CTA */}
                                <div className="lg:pb-1">

                                    <Link
                                        to="/contact"
                                        className="group inline-flex items-center gap-3 bg-black px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#181818]"
                                    >
                                        Find My Coach

                                        <ArrowUpRight
                                            size={15}
                                            strokeWidth={2.5}
                                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        />
                                    </Link>

                                    <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-black/40">
                                        Start with a conversation
                                    </p>

                                </div>

                            </div>


                            {/* Bottom Bar */}
                            <div className="mt-12 flex flex-col gap-3 border-t border-black/15 pt-5 sm:flex-row sm:items-center sm:justify-between">

                                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                                    IRONFORGE COACHING
                                </span>

                                <span className="font-display text-lg tracking-wide text-black/40">
                                    TRAIN <span className="text-white/70">WITH PURPOSE.</span>
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Trainers;