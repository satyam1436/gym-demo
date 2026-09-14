import { ArrowDown } from "lucide-react";

function Contact() {
    return (
        <main className="bg-[#080808]">

            {/* Contact Hero */}
            <section className="relative flex min-h-[75svh] items-end overflow-hidden">

                {/* Background */}
                <div className="absolute inset-0">

                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=90"
                        alt="IronForge gym training floor"
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
                                Start Your Journey
                            </span>

                        </div>


                        {/* Heading */}
                        <h1 className="font-display text-[5rem] leading-[0.82] tracking-tight text-white sm:text-[7rem] lg:text-[9rem]">

                            LET'S GET

                            <br />

                            <span className="text-[#FF5A1F]">
                                STARTED.
                            </span>

                        </h1>


                        {/* Description */}
                        <p className="mt-8 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                            Whether you're starting from zero or chasing your next
                            level, tell us what you're looking for and we'll take it
                            from there.
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
                            Get In Touch
                        </span>

                    </div>

                </div>

            </section>

            {/* Start Your Trial */}
            <section className="border-t border-white/5 bg-[#080808] py-24 sm:py-28 lg:py-32">

                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">


                        {/* Left — Contact Info */}
                        <div className="lg:pt-4">

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-10 bg-[#FF5A1F]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                    Come Say Hello
                                </span>

                            </div>


                            <h2 className="font-display text-6xl leading-[0.85] tracking-tight text-white sm:text-7xl">
                                LET'S BUILD
                                <br />
                                <span className="text-white/30">SOMETHING.</span>
                            </h2>


                            <p className="mt-7 max-w-md text-sm leading-7 text-white/40 sm:text-base">
                                Fill out the form and our team will get back to you.
                                Or drop by the Forge and see what we're all about.
                            </p>


                            {/* Contact Details */}
                            <div className="mt-12 space-y-8">


                                {/* Phone */}
                                <div>

                                    <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25">
                                        Call Us
                                    </span>

                                    <a
                                        href="tel:+919876543210"
                                        className="mt-2 block text-sm text-white transition-colors hover:text-[#FF5A1F]"
                                    >
                                        +91 98765 43210
                                    </a>

                                </div>


                                {/* Email */}
                                <div>

                                    <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25">
                                        Email
                                    </span>

                                    <a
                                        href="mailto:hello@ironforge.com"
                                        className="mt-2 block text-sm text-white transition-colors hover:text-[#FF5A1F]"
                                    >
                                        hello@ironforge.com
                                    </a>

                                </div>


                                {/* Address */}
                                <div>

                                    <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25">
                                        Find Us
                                    </span>

                                    <p className="mt-2 max-w-xs text-sm leading-6 text-white/65">
                                        42 Industrial Avenue
                                        <br />
                                        Jamshedpur, Jharkhand
                                    </p>

                                </div>


                                {/* Hours */}
                                <div>

                                    <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25">
                                        Opening Hours
                                    </span>

                                    <div className="mt-2 space-y-1 text-sm text-white/65">

                                        <p className="flex justify-between gap-8 max-w-xs">
                                            <span>Mon — Fri</span>
                                            <span className="text-white/35">05:00 — 23:00</span>
                                        </p>

                                        <p className="flex justify-between gap-8 max-w-xs">
                                            <span>Saturday</span>
                                            <span className="text-white/35">06:00 — 22:00</span>
                                        </p>

                                        <p className="flex justify-between gap-8 max-w-xs">
                                            <span>Sunday</span>
                                            <span className="text-white/35">07:00 — 20:00</span>
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* Right — Form */}
                        <div className="border border-white/10 bg-[#111111] p-6 sm:p-8 lg:p-10">


                            {/* Form Header */}
                            <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-7">

                                <div>

                                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">
                                        Free Trial
                                    </span>

                                    <h3 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-5xl">
                                        TELL US ABOUT YOU.
                                    </h3>

                                </div>

                                <span className="font-display text-3xl text-white/10">
                                    01
                                </span>

                            </div>


                            {/* Form */}
                            <form className="mt-8 space-y-7">


                                {/* Name */}
                                <div>

                                    <label
                                        htmlFor="name"
                                        className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30"
                                    >
                                        Your Name
                                    </label>

                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Enter your name"
                                        className="h-14 w-full border-b border-white/15 bg-transparent px-0 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-[#FF5A1F]"
                                    />

                                </div>


                                {/* Phone */}
                                <div>

                                    <label
                                        htmlFor="phone"
                                        className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30"
                                    >
                                        Phone Number
                                    </label>

                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="+91 XXXXX XXXXX"
                                        className="h-14 w-full border-b border-white/15 bg-transparent px-0 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-[#FF5A1F]"
                                    />

                                </div>


                                {/* Email */}
                                <div>

                                    <label
                                        htmlFor="email"
                                        className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30"
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className="h-14 w-full border-b border-white/15 bg-transparent px-0 text-sm text-white outline-none placeholder:text-white/20 transition-colors focus:border-[#FF5A1F]"
                                    />

                                </div>


                                {/* Goal */}
                                <div>

                                    <label
                                        htmlFor="goal"
                                        className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30"
                                    >
                                        What's Your Goal?
                                    </label>

                                    <select
                                        id="goal"
                                        defaultValue=""
                                        className="h-14 w-full border-b border-white/15 bg-transparent px-0 text-sm text-white outline-none transition-colors focus:border-[#FF5A1F]"
                                    >

                                        <option
                                            value=""
                                            disabled
                                            className="bg-[#111111]"
                                        >
                                            Select your goal
                                        </option>

                                        <option
                                            value="strength"
                                            className="bg-[#111111]"
                                        >
                                            Build Strength
                                        </option>

                                        <option
                                            value="fitness"
                                            className="bg-[#111111]"
                                        >
                                            Improve Fitness
                                        </option>

                                        <option
                                            value="weight-loss"
                                            className="bg-[#111111]"
                                        >
                                            Lose Weight
                                        </option>

                                        <option
                                            value="muscle"
                                            className="bg-[#111111]"
                                        >
                                            Build Muscle
                                        </option>

                                        <option
                                            value="personal-training"
                                            className="bg-[#111111]"
                                        >
                                            Personal Training
                                        </option>

                                    </select>

                                </div>


                                {/* Experience */}
                                <div>

                                    <label
                                        htmlFor="experience"
                                        className="mb-3 block text-[9px] font-semibold uppercase tracking-[0.2em] text-white/30"
                                    >
                                        Training Experience
                                    </label>

                                    <select
                                        id="experience"
                                        defaultValue=""
                                        className="h-14 w-full border-b border-white/15 bg-transparent px-0 text-sm text-white outline-none transition-colors focus:border-[#FF5A1F]"
                                    >

                                        <option
                                            value=""
                                            disabled
                                            className="bg-[#111111]"
                                        >
                                            Select your experience
                                        </option>

                                        <option
                                            value="beginner"
                                            className="bg-[#111111]"
                                        >
                                            Complete Beginner
                                        </option>

                                        <option
                                            value="some"
                                            className="bg-[#111111]"
                                        >
                                            Some Experience
                                        </option>

                                        <option
                                            value="regular"
                                            className="bg-[#111111]"
                                        >
                                            I Train Regularly
                                        </option>

                                        <option
                                            value="advanced"
                                            className="bg-[#111111]"
                                        >
                                            Advanced
                                        </option>

                                    </select>

                                </div>


                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="group flex h-16 w-full items-center justify-between bg-[#FF5A1F] px-6 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#FF6B35] sm:px-7"
                                >

                                    <span>
                                        Book My Free Trial
                                    </span>

                                    <span className="flex h-9 w-9 items-center justify-center border border-white/30 transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>

                                </button>


                                <p className="text-center text-[9px] uppercase tracking-[0.15em] text-white/20">
                                    No commitment. Just come in and experience the Forge.
                                </p>

                            </form>

                        </div>

                    </div>

                </div>

            </section>

            {/* Visit The Forge */}
            <section className="border-t border-white/5 bg-[#111111] py-24 sm:py-28 lg:py-32">

                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="mb-14 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-10 bg-[#FF5A1F]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                    Find The Forge
                                </span>

                            </div>

                            <h2 className="font-display text-6xl leading-[0.85] tracking-tight text-white sm:text-7xl lg:text-8xl">
                                COME SEE
                                <br />
                                <span className="text-white/30">FOR YOURSELF.</span>
                            </h2>

                        </div>

                        <p className="max-w-md text-sm leading-7 text-white/40 sm:text-base">
                            No pressure. No sales pitch. Just walk in, look around
                            and see why IronForge feels different.
                        </p>

                    </div>


                    {/* Location Layout */}
                    <div className="grid gap-4 lg:grid-cols-12">


                        {/* Map / Location Visual */}
                        <div className="relative min-h-[420px] overflow-hidden border border-white/10 bg-[#080808] lg:col-span-8 lg:min-h-[520px]">

                            {/* Decorative Grid */}
                            <div
                                className="absolute inset-0 opacity-[0.08]"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
                                    backgroundSize: "60px 60px",
                                }}
                            />

                            {/* Center Point */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#FF5A1F]/30">

                                    <div className="absolute h-14 w-14 rounded-full bg-[#FF5A1F]/10" />

                                    <div className="relative h-4 w-4 rounded-full bg-[#FF5A1F] shadow-[0_0_30px_rgba(255,90,31,0.65)]" />

                                </div>

                            </div>


                            {/* Coordinates */}
                            <div className="absolute left-6 top-6">

                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/20">
                                    LOCATION / 01
                                </span>

                            </div>


                            <div className="absolute bottom-6 right-6 text-right">

                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/20">
                                    IRONFORGE HQ
                                </span>

                                <p className="mt-2 text-xs text-white/40">
                                    Jamshedpur, Jharkhand
                                </p>

                            </div>


                            {/* Location Pin Label */}
                            <div className="absolute left-1/2 top-1/2 mt-14 -translate-x-1/2 whitespace-nowrap border border-white/10 bg-[#111111] px-4 py-2">

                                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white">
                                    42 Industrial Avenue
                                </span>

                            </div>

                        </div>


                        {/* Visit Info */}
                        <div className="flex flex-col justify-between border border-white/10 bg-[#080808] p-7 sm:p-8 lg:col-span-4 lg:p-10">


                            <div>

                                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">
                                    Visit Us
                                </span>

                                <h3 className="mt-5 font-display text-5xl leading-[0.9] tracking-wide text-white">
                                    THE FORGE
                                    <br />
                                    IS WAITING.
                                </h3>

                            </div>


                            {/* Address */}
                            <div className="mt-12">

                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                                    Address
                                </span>

                                <p className="mt-3 text-sm leading-7 text-white/65">
                                    42 Industrial Avenue
                                    <br />
                                    Jamshedpur, Jharkhand
                                    <br />
                                    India
                                </p>

                            </div>


                            {/* Hours */}
                            <div className="mt-10">

                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                                    Opening Hours
                                </span>

                                <div className="mt-4 space-y-2">

                                    <div className="flex justify-between gap-5 text-xs">

                                        <span className="text-white/55">
                                            Mon — Fri
                                        </span>

                                        <span className="text-white/30">
                                            05:00 — 23:00
                                        </span>

                                    </div>

                                    <div className="flex justify-between gap-5 text-xs">

                                        <span className="text-white/55">
                                            Saturday
                                        </span>

                                        <span className="text-white/30">
                                            06:00 — 22:00
                                        </span>

                                    </div>

                                    <div className="flex justify-between gap-5 text-xs">

                                        <span className="text-white/55">
                                            Sunday
                                        </span>

                                        <span className="text-white/30">
                                            07:00 — 20:00
                                        </span>

                                    </div>

                                </div>

                            </div>


                            {/* Directions */}
                            <a
                                href="#"
                                className="group mt-12 flex h-14 items-center justify-between border border-white/15 px-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-[#FF5A1F] hover:bg-[#FF5A1F]"
                            >

                                <span>
                                    Get Directions
                                </span>

                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>

                            </a>

                        </div>

                    </div>

                </div>

            </section>

            {/* Final CTA */}
            <section className="relative overflow-hidden bg-[#FF5A1F] py-24 sm:py-28 lg:py-32">

                {/* Decorative Elements */}
                <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-black/10" />

                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-black/10" />

                <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full border border-black/10" />


                {/* Content */}
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">


                        {/* Heading */}
                        <div className="max-w-5xl">

                            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-black/50">
                                One Decision Away
                            </span>

                            <h2 className="mt-6 font-display text-7xl leading-[0.78] tracking-tight text-black sm:text-8xl lg:text-[10rem]">

                                STOP WAITING.

                                <br />

                                START

                                <br />

                                <span className="text-white">
                                    TRAINING.
                                </span>

                            </h2>

                        </div>


                        {/* CTA */}
                        <div className="shrink-0 lg:pb-2">

                            <a
                                href="tel:+919876543210"
                                className="group flex h-20 w-full items-center justify-between gap-10 bg-black px-7 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#181818] sm:w-[320px] sm:px-8"
                            >

                                <span>
                                    Call The Forge
                                </span>

                                <span className="flex h-10 w-10 items-center justify-center border border-white/20 text-lg transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>

                            </a>

                            <p className="mt-4 text-right text-[9px] font-semibold uppercase tracking-[0.18em] text-black/40">
                                +91 98765 43210
                            </p>

                        </div>

                    </div>


                    {/* Bottom Line */}
                    <div className="mt-16 flex flex-col gap-3 border-t border-black/15 pt-6 sm:flex-row sm:items-center sm:justify-between">

                        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-black/40">
                            IRONFORGE
                        </span>

                        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-black/40">
                            BUILT. NOT BORN.
                        </span>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Contact;