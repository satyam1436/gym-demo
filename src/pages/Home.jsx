import {
    ArrowDown,
    ArrowUpRight,
    ArrowUpRight as ArrowUpRightIcon,
    Check,
} from "lucide-react";
import { Link } from "react-router-dom";

function CheckIcon({ dark = false }) {
    return (
        <span
            className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${dark
                ? "bg-black/15 text-black"
                : "bg-white/10 text-[#FF5A1F]"
                }`}
        >
            <Check size={10} strokeWidth={3} />
        </span>
    );
}

function Home() {
    return (
        <main className="bg-[#080808] text-[#F5F5F5]">

            {/* HERO */}
            <section className="relative min-h-[100svh] overflow-hidden">

                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=2400&q=90"
                        alt="Athlete training inside a modern gym"
                        className="h-full w-full object-cover object-center"
                    />
                </div>

                {/* Dark Image Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Left Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/10" />

                {/* Bottom Fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/20" />

                {/* Hero Content */}
                <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-12 pt-32 lg:px-8 lg:pb-16">

                    {/* Eyebrow */}
                    <div className="mb-7 flex items-center gap-3">

                        <span className="h-px w-9 bg-[#FF5A1F]" />

                        <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#FF5A1F] sm:text-[10px]">
                            Strength • Conditioning • Performance
                        </span>

                    </div>

                    {/* Main Heading */}
                    <h1 className="max-w-5xl font-display text-[clamp(5rem,12vw,11rem)] uppercase leading-[0.76] tracking-tight">

                        <span className="block text-white">
                            Train
                        </span>

                        <span className="block text-white">
                            Harder<span className="text-[#FF5A1F]">.</span>
                        </span>

                        <span className="block text-white">
                            Become
                        </span>

                        <span className="block text-[#FF5A1F]">
                            Stronger<span className="text-white">.</span>
                        </span>

                    </h1>

                    {/* Bottom Content */}
                    <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

                        {/* Description */}
                        <div className="max-w-md">

                            <p className="text-sm leading-7 text-white/55">
                                A performance-driven training environment built
                                for people who refuse to settle for average.
                            </p>

                            <Link
                                to="/contact"
                                className="group mt-6 inline-flex items-center gap-5 bg-[#FF5A1F] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#ff6b35]"
                            >
                                Start Your Free Trial

                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Link>

                        </div>

                        {/* Stats */}
                        <div className="flex w-fit gap-7 border-l border-white/15 pl-5 sm:gap-10 sm:pl-7">

                            <div>
                                <p className="font-display text-3xl leading-none text-white sm:text-4xl">
                                    24/7
                                </p>

                                <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/35">
                                    Access
                                </p>
                            </div>

                            <div>
                                <p className="font-display text-3xl leading-none text-white sm:text-4xl">
                                    15+
                                </p>

                                <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/35">
                                    Coaches
                                </p>
                            </div>

                            <div>
                                <p className="font-display text-3xl leading-none text-white sm:text-4xl">
                                    5K+
                                </p>

                                <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/35">
                                    Members
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-7 right-6 hidden items-center gap-3 xl:flex">

                        <span className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/35">
                            Scroll to explore
                        </span>

                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15">
                            <ArrowDown
                                size={13}
                                className="text-white/50"
                            />
                        </div>

                    </div>

                </div>

            </section>

            {/* PERFORMANCE STATS */}
            <section className="border-y border-white/10 bg-[#080808]">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="grid grid-cols-2 lg:grid-cols-4">

                        {/* Stat 01 */}
                        <div className="group border-r border-white/10 px-4 py-10 sm:px-8 lg:py-12">
                            <div className="flex items-start justify-between">
                                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30">
                                    01
                                </span>

                                <span className="h-2 w-2 rounded-full bg-[#FF5A1F]" />
                            </div>

                            <p className="mt-7 font-display text-5xl leading-none text-white transition-colors duration-300 group-hover:text-[#FF5A1F] sm:text-6xl">
                                5K+
                            </p>

                            <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
                                Members Strong
                            </p>
                        </div>

                        {/* Stat 02 */}
                        <div className="group border-b border-white/10 px-4 py-10 sm:px-8 lg:border-b-0 lg:border-r lg:py-12">
                            <div className="flex items-start justify-between">
                                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30">
                                    02
                                </span>

                                <span className="h-2 w-2 rounded-full bg-[#FF5A1F]" />
                            </div>

                            <p className="mt-7 font-display text-5xl leading-none text-white transition-colors duration-300 group-hover:text-[#FF5A1F] sm:text-6xl">
                                15+
                            </p>

                            <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
                                Expert Coaches
                            </p>
                        </div>

                        {/* Stat 03 */}
                        <div className="group border-r border-white/10 px-4 py-10 sm:px-8 lg:py-12">
                            <div className="flex items-start justify-between">
                                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30">
                                    03
                                </span>

                                <span className="h-2 w-2 rounded-full bg-[#FF5A1F]" />
                            </div>

                            <p className="mt-7 font-display text-5xl leading-none text-white transition-colors duration-300 group-hover:text-[#FF5A1F] sm:text-6xl">
                                24/7
                            </p>

                            <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
                                Gym Access
                            </p>
                        </div>

                        {/* Stat 04 */}
                        <div className="group px-4 py-10 sm:px-8 lg:py-12">
                            <div className="flex items-start justify-between">
                                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30">
                                    04
                                </span>

                                <span className="h-2 w-2 rounded-full bg-[#FF5A1F]" />
                            </div>

                            <p className="mt-7 font-display text-5xl leading-none text-white transition-colors duration-300 group-hover:text-[#FF5A1F] sm:text-6xl">
                                98%
                            </p>

                            <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
                                Member Satisfaction
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* TRAINING PROGRAMS */}
            <section className="bg-[#080808] px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
                <div className="mx-auto max-w-7xl">

                    {/* Section Header */}
                    <div className="grid gap-10 lg:grid-cols-2 lg:items-end">

                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-9 bg-[#FF5A1F]" />

                                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                                    What We Do
                                </span>
                            </div>

                            <h2 className="max-w-2xl font-display text-6xl uppercase leading-[0.82] tracking-tight text-white sm:text-7xl lg:text-8xl">
                                Train With
                                <br />
                                <span className="text-[#FF5A1F]">
                                    Purpose.
                                </span>
                            </h2>
                        </div>

                        <div className="lg:pb-2 lg:pl-10">
                            <p className="max-w-md text-sm leading-7 text-white/45">
                                Every workout has a purpose. Every program is designed
                                to make you stronger, faster and more capable than
                                you were yesterday.
                            </p>
                        </div>

                    </div>


                    {/* Program Grid */}
                    <div className="mt-16 grid gap-5 md:grid-cols-2 lg:mt-20">

                        {/* Strength */}
                        <article className="group relative h-[480px] overflow-hidden sm:h-[560px]">

                            <img
                                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1400&q=85"
                                alt="Strength training"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/40" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">

                                <div className="flex items-end justify-between">

                                    <div>
                                        <span className="text-[9px] font-semibold tracking-[0.25em] text-[#FF5A1F]">
                                            01
                                        </span>

                                        <h3 className="mt-2 font-display text-5xl uppercase leading-none text-white sm:text-6xl">
                                            Strength
                                        </h3>

                                        <p className="mt-3 max-w-sm text-xs leading-6 text-white/55">
                                            Build raw strength, power and confidence with
                                            progressive resistance training.
                                        </p>
                                    </div>

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 text-white transition-all duration-500 group-hover:border-[#FF5A1F] group-hover:bg-[#FF5A1F]">
                                        <ArrowUpRightIcon />
                                    </div>

                                </div>

                            </div>
                        </article>


                        {/* Conditioning */}
                        <article className="group relative h-[480px] overflow-hidden sm:h-[560px]">

                            <img
                                src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1400&q=85"
                                alt="Conditioning workout"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/40" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">

                                <div className="flex items-end justify-between">

                                    <div>
                                        <span className="text-[9px] font-semibold tracking-[0.25em] text-[#FF5A1F]">
                                            02
                                        </span>

                                        <h3 className="mt-2 font-display text-5xl uppercase leading-none text-white sm:text-6xl">
                                            Conditioning
                                        </h3>

                                        <p className="mt-3 max-w-sm text-xs leading-6 text-white/55">
                                            Push your limits with high-intensity sessions
                                            built to improve endurance and performance.
                                        </p>
                                    </div>

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 text-white transition-all duration-500 group-hover:border-[#FF5A1F] group-hover:bg-[#FF5A1F]">
                                        <ArrowUpRightIcon />
                                    </div>

                                </div>

                            </div>
                        </article>


                        {/* Personal Training */}
                        <article className="group relative h-[480px] overflow-hidden sm:h-[560px]">

                            <img
                                src="https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1400&q=85"
                                alt="Personal training session"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/40" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">

                                <div className="flex items-end justify-between">

                                    <div>
                                        <span className="text-[9px] font-semibold tracking-[0.25em] text-[#FF5A1F]">
                                            03
                                        </span>

                                        <h3 className="mt-2 font-display text-5xl uppercase leading-none text-white sm:text-6xl">
                                            Personal
                                            <br />
                                            Training
                                        </h3>

                                        <p className="mt-3 max-w-sm text-xs leading-6 text-white/55">
                                            One-on-one coaching built around your goals,
                                            your body and your performance.
                                        </p>
                                    </div>

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 text-white transition-all duration-500 group-hover:border-[#FF5A1F] group-hover:bg-[#FF5A1F]">
                                        <ArrowUpRightIcon />
                                    </div>

                                </div>

                            </div>
                        </article>


                        {/* Functional Training */}
                        <article className="group relative h-[480px] overflow-hidden sm:h-[560px]">

                            <img
                                src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1400&q=85"
                                alt="Functional fitness training"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/40" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">

                                <div className="flex items-end justify-between">

                                    <div>
                                        <span className="text-[9px] font-semibold tracking-[0.25em] text-[#FF5A1F]">
                                            04
                                        </span>

                                        <h3 className="mt-2 font-display text-5xl uppercase leading-none text-white sm:text-6xl">
                                            Functional
                                        </h3>

                                        <p className="mt-3 max-w-sm text-xs leading-6 text-white/55">
                                            Move better, recover smarter and build real-world
                                            athletic ability.
                                        </p>
                                    </div>

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 text-white transition-all duration-500 group-hover:border-[#FF5A1F] group-hover:bg-[#FF5A1F]">
                                        <ArrowUpRightIcon />
                                    </div>

                                </div>

                            </div>
                        </article>

                    </div>

                </div>
            </section>

            {/* WHY IRONFORGE */}
            <section className="relative overflow-hidden bg-[#111111] px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
                <div className="mx-auto max-w-7xl">

                    {/* Main Content */}
                    <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">

                        {/* Left */}
                        <div>

                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-9 bg-[#FF5A1F]" />

                                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                                    Why IronForge
                                </span>
                            </div>

                            <h2 className="max-w-xl font-display text-7xl uppercase leading-[0.8] tracking-tight text-white sm:text-8xl lg:text-[7rem]">
                                More
                                <br />
                                Than
                                <br />
                                <span className="text-[#FF5A1F]">
                                    A Gym.
                                </span>
                            </h2>

                            <p className="mt-8 max-w-md text-sm leading-7 text-white/45">
                                IRONFORGE is built around one simple belief:
                                training should make you stronger in every part
                                of life — not just inside the gym.
                            </p>

                            <div className="mt-8 flex items-center gap-4">
                                <span className="h-px w-10 bg-white/20" />

                                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30">
                                    Built. Not Born.
                                </span>
                            </div>

                        </div>


                        {/* Right Image */}
                        <div className="group relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">

                            <img
                                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=85"
                                alt="Athlete training at IRONFORGE"
                                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                            />

                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/25" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                            {/* Image Label */}
                            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">

                                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/50">
                                    IRONFORGE / 001
                                </p>

                                <p className="mt-2 font-display text-3xl uppercase text-white">
                                    Train With Intent
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* Principles */}
                    <div className="mt-20 border-t border-white/10 lg:mt-28">

                        <div className="grid md:grid-cols-3">

                            {/* Principle 01 */}
                            <div className="border-b border-white/10 py-8 md:border-b-0 md:border-r md:pr-10 lg:py-10">

                                <span className="text-[9px] font-semibold tracking-[0.25em] text-[#FF5A1F]">
                                    01
                                </span>

                                <h3 className="mt-5 font-display text-4xl uppercase leading-none text-white">
                                    Expert
                                    <br />
                                    Coaching
                                </h3>

                                <p className="mt-4 max-w-xs text-xs leading-6 text-white/40">
                                    Train with experienced coaches who understand
                                    movement, progression and performance.
                                </p>

                            </div>


                            {/* Principle 02 */}
                            <div className="border-b border-white/10 py-8 md:border-b-0 md:border-r md:px-10 lg:py-10">

                                <span className="text-[9px] font-semibold tracking-[0.25em] text-[#FF5A1F]">
                                    02
                                </span>

                                <h3 className="mt-5 font-display text-4xl uppercase leading-none text-white">
                                    Strong
                                    <br />
                                    Community
                                </h3>

                                <p className="mt-4 max-w-xs text-xs leading-6 text-white/40">
                                    Surround yourself with people who show up,
                                    push harder and keep moving forward.
                                </p>

                            </div>


                            {/* Principle 03 */}
                            <div className="py-8 md:pl-10 lg:py-10">

                                <span className="text-[9px] font-semibold tracking-[0.25em] text-[#FF5A1F]">
                                    03
                                </span>

                                <h3 className="mt-5 font-display text-4xl uppercase leading-none text-white">
                                    Real
                                    <br />
                                    Results
                                </h3>

                                <p className="mt-4 max-w-xs text-xs leading-6 text-white/40">
                                    Structured training designed to create measurable
                                    progress and lasting results.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* TRAINERS */}
            <section className="bg-[#080808] px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
                <div className="mx-auto max-w-7xl">

                    {/* Section Header */}
                    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-9 bg-[#FF5A1F]" />

                                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                                    The People Behind The Work
                                </span>
                            </div>

                            <h2 className="font-display text-7xl uppercase leading-[0.8] tracking-tight text-white sm:text-8xl lg:text-9xl">
                                Meet The
                                <br />
                                <span className="text-[#FF5A1F]">
                                    Coaches.
                                </span>
                            </h2>
                        </div>

                        <div className="max-w-sm md:pb-2">
                            <p className="text-sm leading-7 text-white/45">
                                Experience matters. Our coaches bring knowledge,
                                discipline and a genuine commitment to helping you
                                become stronger.
                            </p>
                        </div>

                    </div>


                    {/* Trainers Grid */}
                    <div className="mt-16 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">

                        {/* Trainer 01 */}
                        <article className="group">

                            <div className="relative aspect-[3/4] overflow-hidden bg-[#111111]">

                                <img
                                    src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1000&q=85"
                                    alt="Marcus Reed - Strength Coach"
                                    className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                                <span className="absolute left-5 top-5 text-[9px] font-semibold tracking-[0.25em] text-white/45">
                                    01
                                </span>

                                <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-all duration-500 group-hover:border-[#FF5A1F] group-hover:bg-[#FF5A1F]">
                                    <ArrowUpRight size={16} />
                                </div>

                            </div>

                            <div className="mt-5 border-b border-white/10 pb-5">
                                <h3 className="font-display text-4xl uppercase leading-none text-white">
                                    Marcus Reed
                                </h3>

                                <div className="mt-3 flex items-center justify-between gap-4">
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#FF5A1F]">
                                        Strength & Performance
                                    </p>

                                    <span className="text-[9px] uppercase tracking-[0.15em] text-white/25">
                                        8 Years
                                    </span>
                                </div>
                            </div>

                        </article>


                        {/* Trainer 02 */}
                        <article className="group">

                            <div className="relative aspect-[3/4] overflow-hidden bg-[#111111]">

                                <img
                                    src="https://images.unsplash.com/photo-1609899464926-7d5b9b0d4e1c?auto=format&fit=crop&w=1000&q=85"
                                    alt="Sarah Mitchell - Conditioning Coach"
                                    className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                                <span className="absolute left-5 top-5 text-[9px] font-semibold tracking-[0.25em] text-white/45">
                                    02
                                </span>

                                <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-all duration-500 group-hover:border-[#FF5A1F] group-hover:bg-[#FF5A1F]">
                                    <ArrowUpRight size={16} />
                                </div>

                            </div>

                            <div className="mt-5 border-b border-white/10 pb-5">
                                <h3 className="font-display text-4xl uppercase leading-none text-white">
                                    Sarah Mitchell
                                </h3>

                                <div className="mt-3 flex items-center justify-between gap-4">
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#FF5A1F]">
                                        Conditioning
                                    </p>

                                    <span className="text-[9px] uppercase tracking-[0.15em] text-white/25">
                                        6 Years
                                    </span>
                                </div>
                            </div>

                        </article>


                        {/* Trainer 03 */}
                        <article className="group">

                            <div className="relative aspect-[3/4] overflow-hidden bg-[#111111]">

                                <img
                                    src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1000&q=85"
                                    alt="Daniel Carter - Personal Trainer"
                                    className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                                <span className="absolute left-5 top-5 text-[9px] font-semibold tracking-[0.25em] text-white/45">
                                    03
                                </span>

                                <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-all duration-500 group-hover:border-[#FF5A1F] group-hover:bg-[#FF5A1F]">
                                    <ArrowUpRight size={16} />
                                </div>

                            </div>

                            <div className="mt-5 border-b border-white/10 pb-5">
                                <h3 className="font-display text-4xl uppercase leading-none text-white">
                                    Daniel Carter
                                </h3>

                                <div className="mt-3 flex items-center justify-between gap-4">
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#FF5A1F]">
                                        Personal Training
                                    </p>

                                    <span className="text-[9px] uppercase tracking-[0.15em] text-white/25">
                                        10 Years
                                    </span>
                                </div>
                            </div>

                        </article>


                        {/* Trainer 04 */}
                        <article className="group">

                            <div className="relative aspect-[3/4] overflow-hidden bg-[#111111]">

                                <img
                                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85"
                                    alt="Alex Morgan - Functional Coach"
                                    className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                                <span className="absolute left-5 top-5 text-[9px] font-semibold tracking-[0.25em] text-white/45">
                                    04
                                </span>

                                <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-all duration-500 group-hover:border-[#FF5A1F] group-hover:bg-[#FF6B35]">
                                    <ArrowUpRight size={16} />
                                </div>

                            </div>

                            <div className="mt-5 border-b border-white/10 pb-5">
                                <h3 className="font-display text-4xl uppercase leading-none text-white">
                                    Alex Morgan
                                </h3>

                                <div className="mt-3 flex items-center justify-between gap-4">
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#FF5A1F]">
                                        Functional Training
                                    </p>

                                    <span className="text-[9px] uppercase tracking-[0.15em] text-white/25">
                                        7 Years
                                    </span>
                                </div>
                            </div>

                        </article>

                    </div>


                    {/* Bottom CTA */}
                    <div className="mt-12 flex justify-end">

                        <Link
                            to="/trainers"
                            className="group inline-flex items-center gap-4 border-b border-white/20 pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-[#FF5A1F] hover:text-[#FF5A1F]"
                        >
                            Meet All Trainers

                            <ArrowUpRight
                                size={15}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </Link>

                    </div>

                </div>
            </section>

            {/* MEMBERSHIP */}
            <section className="bg-[#111111] px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
                <div className="mx-auto max-w-7xl">

                    {/* Header */}
                    <div className="grid gap-8 lg:grid-cols-2 lg:items-end">

                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-9 bg-[#FF5A1F]" />

                                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                                    Membership
                                </span>
                            </div>

                            <h2 className="font-display text-7xl uppercase leading-[0.8] tracking-tight text-white sm:text-8xl lg:text-9xl">
                                Choose Your
                                <br />
                                <span className="text-[#FF5A1F]">
                                    Commitment.
                                </span>
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-7 text-white/45 lg:ml-auto lg:pb-2">
                            No complicated packages. Just straightforward memberships
                            designed around how you want to train.
                        </p>

                    </div>


                    {/* Pricing */}
                    <div className="mt-16 grid gap-4 lg:mt-20 lg:grid-cols-3 lg:items-stretch">

                        {/* Starter */}
                        <article className="flex flex-col border border-white/10 bg-[#0b0b0b] p-7 transition-all duration-500 hover:border-white/20 sm:p-8">

                            <div className="flex items-start justify-between">

                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                                        01
                                    </p>

                                    <h3 className="mt-4 font-display text-5xl uppercase leading-none text-white">
                                        Starter
                                    </h3>
                                </div>

                                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
                                    Flexible
                                </span>

                            </div>

                            <div className="mt-10 border-b border-white/10 pb-7">
                                <div className="flex items-end gap-2">
                                    <span className="font-display text-6xl leading-none text-white">
                                        ₹1,499
                                    </span>

                                    <span className="mb-1 text-xs text-white/35">
                                        / month
                                    </span>
                                </div>
                            </div>

                            <ul className="mt-7 space-y-4">

                                <li className="flex gap-3 text-xs text-white/55">
                                    <CheckIcon />
                                    Gym floor access
                                </li>

                                <li className="flex gap-3 text-xs text-white/55">
                                    <CheckIcon />
                                    Basic fitness assessment
                                </li>

                                <li className="flex gap-3 text-xs text-white/55">
                                    <CheckIcon />
                                    Locker access
                                </li>

                                <li className="flex gap-3 text-xs text-white/30">
                                    <span className="mt-0.5 text-[10px]">—</span>
                                    Group classes
                                </li>

                            </ul>

                            <Link
                                to="/membership"
                                className="group mt-auto flex items-center justify-between border border-white/15 px-5 py-4 pt-4 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white hover:bg-[#171717] hover:text-black"
                            >
                                View Plan

                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Link>

                        </article>


                        {/* Featured Plan */}
                        <article className="relative flex flex-col overflow-hidden bg-[#FF5A1F] p-7 sm:p-8">

                            {/* Featured Label */}
                            <div className="absolute right-0 top-0 bg-black px-4 py-2">
                                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white">
                                    Most Popular
                                </span>
                            </div>

                            <div className="flex items-start justify-between">

                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-black/45">
                                        02
                                    </p>

                                    <h3 className="mt-4 font-display text-5xl uppercase leading-none text-black">
                                        Performance
                                    </h3>
                                </div>

                            </div>

                            <div className="mt-10 border-b border-black/15 pb-7">
                                <div className="flex items-end gap-2">

                                    <span className="font-display text-6xl leading-none text-black">
                                        ₹2,499
                                    </span>

                                    <span className="mb-1 text-xs text-black/45">
                                        / month
                                    </span>

                                </div>
                            </div>

                            <ul className="mt-7 space-y-4">

                                <li className="flex gap-3 text-xs text-black/70">
                                    <CheckIcon dark />
                                    Unlimited gym access
                                </li>

                                <li className="flex gap-3 text-xs text-black/70">
                                    <CheckIcon dark />
                                    All group classes
                                </li>

                                <li className="flex gap-3 text-xs text-black/70">
                                    <CheckIcon dark />
                                    Monthly fitness assessment
                                </li>

                                <li className="flex gap-3 text-xs text-black/70">
                                    <CheckIcon dark />
                                    Coach support
                                </li>

                            </ul>

                            <Link
                                to="/membership"
                                className="group mt-auto flex items-center justify-between bg-black px-5 py-4 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#171717]"
                            >
                                Choose Performance

                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Link>

                        </article>


                        {/* Elite */}
                        <article className="flex flex-col border border-white/10 bg-[#0b0b0b] p-7 transition-all duration-500 hover:border-white/20 sm:p-8">

                            <div className="flex items-start justify-between">

                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                                        03
                                    </p>

                                    <h3 className="mt-4 font-display text-5xl uppercase leading-none text-white">
                                        Elite
                                    </h3>
                                </div>

                                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/25">
                                    Complete
                                </span>

                            </div>

                            <div className="mt-10 border-b border-white/10 pb-7">
                                <div className="flex items-end gap-2">
                                    <span className="font-display text-6xl leading-none text-white">
                                        ₹3,999
                                    </span>

                                    <span className="mb-1 text-xs text-white/35">
                                        / month
                                    </span>
                                </div>
                            </div>

                            <ul className="mt-7 space-y-4">

                                <li className="flex gap-3 text-xs text-white/55">
                                    <CheckIcon />
                                    Everything in Performance
                                </li>

                                <li className="flex gap-3 text-xs text-white/55">
                                    <CheckIcon />
                                    4 personal training sessions
                                </li>

                                <li className="flex gap-3 text-xs text-white/55">
                                    <CheckIcon />
                                    Nutrition guidance
                                </li>

                                <li className="flex gap-3 text-xs text-white/55">
                                    <CheckIcon />
                                    Priority coach support
                                </li>

                            </ul>

                            <Link
                                to="/membership"
                                className="group mt-auto flex items-center justify-between border border-white/15 px-5 py-4 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white hover:bg-[#171717] hover:text-black"
                            >
                                View Plan

                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Link>

                        </article>

                    </div>


                    {/* Small Note */}
                    <div className="mt-8 flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />

                        <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                            All memberships include access to changing rooms &amp; lockers
                        </p>
                    </div>

                </div>
            </section>

            {/* TRANSFORMATIONS */}
            <section className="bg-[#080808] px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
                <div className="mx-auto max-w-7xl">

                    {/* Header */}
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-9 bg-[#FF5A1F]" />

                                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                                    Member Stories
                                </span>
                            </div>

                            <h2 className="font-display text-7xl uppercase leading-[0.8] tracking-tight text-white sm:text-8xl lg:text-9xl">
                                Real People.
                                <br />
                                <span className="text-[#FF5A1F]">
                                    Real Progress.
                                </span>
                            </h2>
                        </div>

                        <p className="max-w-sm text-sm leading-7 text-white/40 sm:pb-2">
                            The strongest transformations aren't just physical.
                            They're built through consistency, discipline and
                            showing up every day.
                        </p>

                    </div>


                    {/* Featured Story */}
                    <div className="mt-16 grid overflow-hidden bg-[#111111] lg:grid-cols-[1.1fr_0.9fr] lg:mt-20">

                        {/* Story Content */}
                        <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">

                            <div>

                                <span className="font-display text-7xl leading-none text-white/10 sm:text-8xl">
                                    “
                                </span>

                                <blockquote className="mt-2 max-w-2xl font-display text-4xl uppercase leading-[0.95] text-white sm:text-5xl lg:text-6xl">
                                    The hardest part was starting.
                                    Everything after that changed.
                                </blockquote>

                            </div>


                            {/* Member Info */}
                            <div className="mt-12">

                                <div className="flex items-end justify-between border-b border-white/10 pb-5">

                                    <div>
                                        <p className="font-display text-3xl uppercase leading-none text-white">
                                            Arjun Sharma
                                        </p>

                                        <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#FF5A1F]">
                                            Performance Member
                                        </p>
                                    </div>

                                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                                        08 Months
                                    </span>

                                </div>


                                {/* Progress */}
                                <div className="mt-6">

                                    <div className="flex justify-between text-[8px] font-semibold uppercase tracking-[0.18em] text-white/30">
                                        <span>Starting Point</span>
                                        <span>Current</span>
                                    </div>

                                    <div className="mt-3 h-px bg-white/10">
                                        <div className="h-px w-[82%] bg-[#FF5A1F]" />
                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* Transformation Image */}
                        <div className="group relative min-h-[480px] lg:min-h-[620px]">

                            <img
                                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=85"
                                alt="IRONFORGE member during training"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/20" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            {/* Image Label */}
                            <div className="absolute bottom-7 left-7 sm:bottom-9 sm:left-9">

                                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/45">
                                    Transformation / 01
                                </span>

                                <p className="mt-2 font-display text-3xl uppercase text-white">
                                    Built Through Discipline
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* Testimonial Navigation */}
                    <div className="mt-7 flex items-center justify-between">

                        <div className="flex items-center gap-2">

                            <span className="h-1.5 w-7 bg-[#FF5A1F]" />

                            <span className="h-1.5 w-1.5 bg-white/20" />

                            <span className="h-1.5 w-1.5 bg-white/20" />

                        </div>

                        <div className="flex items-center gap-5">

                            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                                01 / 03
                            </span>

                            <div className="flex gap-2">

                                <button
                                    type="button"
                                    className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/40 transition-all duration-300 hover:border-white/30 hover:text-white"
                                    aria-label="Previous testimonial"
                                >
                                    ←
                                </button>

                                <button
                                    type="button"
                                    className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/40 transition-all duration-300 hover:border-[#FF5A1F] hover:bg-[#FF5A1F] hover:text-white"
                                    aria-label="Next testimonial"
                                >
                                    →
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* GALLERY */}
            <section className="bg-[#111111] px-6 py-24 sm:py-28 lg:px-8 lg:py-36">
                <div className="mx-auto max-w-7xl">

                    {/* Header */}
                    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <span className="h-px w-9 bg-[#FF5A1F]" />

                                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#FF5A1F]">
                                    Inside IronForge
                                </span>
                            </div>

                            <h2 className="font-display text-7xl uppercase leading-[0.8] tracking-tight text-white sm:text-8xl lg:text-9xl">
                                The Work.
                                <br />
                                <span className="text-[#FF5A1F]">
                                    The Energy.
                                </span>
                            </h2>
                        </div>

                        <div className="max-w-sm md:pb-2">
                            <p className="text-sm leading-7 text-white/40">
                                Step inside the space where discipline becomes
                                routine and every session is another step forward.
                            </p>
                        </div>

                    </div>


                    {/* Gallery Grid */}
                    <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:grid-rows-[280px_220px_280px]">

                        {/* Image 01 — Large */}
                        <div className="group relative min-h-[420px] overflow-hidden sm:col-span-2 lg:col-span-5 lg:row-span-2 lg:min-h-0">

                            <img
                                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85"
                                alt="IRONFORGE gym interior"
                                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/30" />

                            <div className="absolute left-5 top-5">
                                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/60">
                                    01 / Training Floor
                                </span>
                            </div>

                            <div className="absolute bottom-5 left-5">
                                <p className="font-display text-3xl uppercase text-white">
                                    Built To Perform
                                </p>
                            </div>

                        </div>


                        {/* Image 02 */}
                        <div className="group relative min-h-[260px] overflow-hidden lg:col-span-3 lg:min-h-0">

                            <img
                                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=85"
                                alt="Athlete lifting weights"
                                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/30" />

                            <div className="absolute bottom-5 left-5">
                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55">
                                    02 / Strength
                                </span>
                            </div>

                        </div>


                        {/* Image 03 */}
                        <div className="group relative min-h-[260px] overflow-hidden lg:col-span-4 lg:min-h-0">

                            <img
                                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85"
                                alt="Athlete workout"
                                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/30" />

                            <div className="absolute bottom-5 left-5">
                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55">
                                    03 / Performance
                                </span>
                            </div>

                        </div>


                        {/* Image 04 */}
                        <div className="group relative min-h-[260px] overflow-hidden lg:col-span-4 lg:min-h-0">

                            <img
                                src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=85"
                                alt="Gym strength equipment"
                                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/30" />

                            <div className="absolute bottom-5 left-5">
                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55">
                                    04 / Equipment
                                </span>
                            </div>

                        </div>


                        {/* Image 05 — Wide */}
                        <div className="group relative min-h-[300px] overflow-hidden sm:col-span-2 lg:col-span-5 lg:min-h-0">

                            <img
                                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1400&q=85"
                                alt="Modern gym training area"
                                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/30" />

                            <div className="absolute bottom-5 left-5">
                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55">
                                    05 / The Environment
                                </span>
                            </div>

                        </div>


                        {/* Image 06 */}
                        <div className="group relative min-h-[300px] overflow-hidden sm:col-span-2 lg:col-span-3 lg:min-h-0">

                            <img
                                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85"
                                alt="IRONFORGE training environment"
                                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/30" />

                            <div className="absolute bottom-5 left-5">
                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55">
                                    06 / Community
                                </span>
                            </div>

                        </div>

                    </div>


                    {/* Gallery CTA */}
                    <div className="mt-10 flex justify-end">

                        <Link
                            to="/gallery"
                            className="group inline-flex items-center gap-4 border-b border-white/20 pb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-[#FF5A1F] hover:text-[#FF5A1F]"
                        >
                            Explore Full Gallery

                            <ArrowUpRight
                                size={15}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </Link>

                    </div>

                </div>
            </section>

            {/* Final CTA */}
            <section className="relative overflow-hidden border-t border-white/10 bg-[#080808]">

                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=90"
                        alt="Athlete training in IronForge gym"
                        className="h-full w-full object-cover object-center"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/75" />

                    {/* Orange atmospheric glow */}
                    <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[#FF5A1F]/10 blur-[120px]" />

                    {/* Bottom fade */}
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />
                </div>


                {/* Content */}
                <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">

                    <div className="max-w-4xl">

                        {/* Eyebrow */}
                        <div className="mb-7 flex items-center gap-3">

                            <span className="h-px w-10 bg-[#FF5A1F]" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                Your Time Is Now
                            </span>

                        </div>


                        {/* Heading */}
                        <h2 className="max-w-4xl font-display text-[4.5rem] leading-[0.82] tracking-tight text-white sm:text-[6rem] lg:text-[8rem]">

                            READY TO

                            <br />

                            GET

                            <span className="text-[#FF5A1F]"> STRONGER?</span>

                        </h2>


                        {/* Description */}
                        <p className="mt-8 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                            Stop waiting for the right time. Start building the strongest
                            version of yourself today.
                        </p>


                        {/* CTA */}
                        <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">

                            <Link
                                to="/contact"
                                className="group inline-flex items-center gap-3 bg-[#FF5A1F] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#ff6b35]"
                            >
                                Start Free Trial

                                <ArrowUpRight
                                    size={15}
                                    strokeWidth={2.5}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </Link>

                            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/35">
                                No Commitment • Just Get Started
                            </span>

                        </div>

                    </div>


                    {/* Bottom statement */}
                    <div className="mt-24 flex items-center gap-4 border-t border-white/10 pt-6">

                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />

                        <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
                            Built. Not Born.
                        </span>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Home;