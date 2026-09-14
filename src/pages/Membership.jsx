import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

function Membership() {
    return (
        <main className="bg-[#080808]">

            {/* Membership Hero */}
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
                                Membership
                            </span>

                        </div>


                        {/* Heading */}
                        <h1 className="font-display text-[5rem] leading-[0.82] tracking-tight text-white sm:text-[7rem] lg:text-[9rem]">

                            CHOOSE YOUR

                            <br />

                            <span className="text-[#FF5A1F]">
                                COMMITMENT.
                            </span>

                        </h1>


                        {/* Description */}
                        <p className="mt-8 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                            Simple memberships. Serious training. Choose the level
                            that fits your goals and start building something stronger.
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
                            Compare Memberships
                        </span>

                    </div>

                </div>

            </section>

            {/* Membership Plans */}
            <section className="border-t border-white/5 bg-[#080808] py-24 sm:py-28 lg:py-32">

                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    {/* Section Header */}
                    <div className="mb-16 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end">

                        <div className="max-w-3xl">

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-10 bg-[#FF5A1F]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                    Membership Plans
                                </span>

                            </div>

                            <h2 className="font-display text-6xl leading-[0.85] tracking-tight text-white sm:text-7xl lg:text-8xl">
                                PICK YOUR
                                <br />
                                <span className="text-white/35">LEVEL.</span>
                            </h2>

                        </div>


                        <p className="max-w-md text-sm leading-7 text-white/45 sm:text-base">
                            Every membership gives you access to the Forge.
                            Choose the commitment that matches where you're headed.
                        </p>

                    </div>


                    {/* Pricing Grid */}
                    <div className="grid gap-5 lg:grid-cols-3">


                        {/* Starter */}
                        <div className="group relative flex flex-col border border-white/10 bg-[#111111] p-7 transition-all duration-500 hover:border-white/20 sm:p-8 lg:p-9">

                            <div className="mb-10 flex items-start justify-between">

                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                                        01
                                    </p>

                                    <h3 className="mt-3 font-display text-4xl tracking-wide text-white">
                                        STARTER
                                    </h3>
                                </div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">
                                    Entry
                                </span>

                            </div>


                            <div className="mb-10">

                                <div className="flex items-end gap-2">

                                    <span className="font-display text-6xl leading-none text-white">
                                        ₹1,499
                                    </span>

                                    <span className="mb-1 text-xs uppercase tracking-wider text-white/35">
                                        / month
                                    </span>

                                </div>

                                <p className="mt-4 text-sm leading-6 text-white/40">
                                    Everything you need to start building your foundation.
                                </p>

                            </div>


                            <div className="mb-10 h-px bg-white/10" />


                            <div className="flex-1 space-y-5">

                                {[
                                    "Full gym access",
                                    "Strength & cardio equipment",
                                    "Locker & changing facilities",
                                    "Free fitness assessment",
                                    "Access to group sessions",
                                ].map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="flex h-5 w-5 items-center justify-center border border-white/15 text-[10px] text-[#FF5A1F]">
                                            ✓
                                        </span>

                                        <span className="text-sm text-white/65">
                                            {feature}
                                        </span>
                                    </div>
                                ))}

                            </div>

                            <Link to="/contact" className="mt-12 flex h-14 items-center justify-center border border-white/15 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-[#FF5A1F] hover:bg-[#FF5A1F] hover:text-white">
                                Start Training
                            </Link>

                        </div>


                        {/* Performance — Featured */}
                        <div className="group relative flex flex-col overflow-hidden border border-[#FF5A1F] bg-[#FF5A1F] p-7 sm:p-8 lg:p-9">

                            {/* Featured Label */}
                            <div className="absolute right-0 top-0 bg-black px-5 py-2.5">

                                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                                    Most Popular
                                </span>

                            </div>


                            <div className="mb-10 flex items-start justify-between">

                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/45">
                                        02
                                    </p>

                                    <h3 className="mt-3 font-display text-4xl tracking-wide text-black">
                                        PERFORMANCE
                                    </h3>
                                </div>

                            </div>


                            <div className="mb-10">

                                <div className="flex items-end gap-2">

                                    <span className="font-display text-6xl leading-none text-black">
                                        ₹2,499
                                    </span>

                                    <span className="mb-1 text-xs uppercase tracking-wider text-black/45">
                                        / month
                                    </span>

                                </div>

                                <p className="mt-4 max-w-sm text-sm leading-6 text-black/60">
                                    For members who want structure, progress and serious results.
                                </p>

                            </div>


                            <div className="mb-10 h-px bg-black/15" />


                            <div className="flex-1 space-y-5">

                                {[
                                    "Everything in Starter",
                                    "Unlimited group training",
                                    "Monthly progress assessment",
                                    "Personalised training guidance",
                                    "1 complimentary coach session",
                                    "Priority equipment access",
                                ].map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="flex h-5 w-5 items-center justify-center border border-black/20 text-[10px] font-bold text-black">
                                            ✓
                                        </span>

                                        <span className="text-sm font-medium text-black/75">
                                            {feature}
                                        </span>
                                    </div>
                                ))}

                            </div>

                            <Link to="/contact" className="mt-12 flex h-14 items-center justify-center bg-black text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#181818]">
                                Start Training
                            </Link>

                        </div>


                        {/* Elite */}
                        <div className="group relative flex flex-col border border-white/10 bg-[#111111] p-7 transition-all duration-500 hover:border-white/20 sm:p-8 lg:p-9">

                            <div className="mb-10 flex items-start justify-between">

                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                                        03
                                    </p>

                                    <h3 className="mt-3 font-display text-4xl tracking-wide text-white">
                                        ELITE
                                    </h3>
                                </div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">
                                    Full Focus
                                </span>

                            </div>


                            <div className="mb-10">

                                <div className="flex items-end gap-2">

                                    <span className="font-display text-6xl leading-none text-white">
                                        ₹3,999
                                    </span>

                                    <span className="mb-1 text-xs uppercase tracking-wider text-white/35">
                                        / month
                                    </span>

                                </div>

                                <p className="mt-4 text-sm leading-6 text-white/40">
                                    The complete IronForge experience for maximum progress.
                                </p>

                            </div>


                            <div className="mb-10 h-px bg-white/10" />


                            <div className="flex-1 space-y-5">

                                {[
                                    "Everything in Performance",
                                    "Weekly 1:1 coaching",
                                    "Custom training programme",
                                    "Nutrition guidance",
                                    "Priority coach support",
                                    "Quarterly body composition review",
                                ].map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-3"
                                    >
                                        <span className="flex h-5 w-5 items-center justify-center border border-white/15 text-[10px] text-[#FF5A1F]">
                                            ✓
                                        </span>

                                        <span className="text-sm text-white/65">
                                            {feature}
                                        </span>
                                    </div>
                                ))}

                            </div>

                            <Link to="/contact" className="mt-12 flex h-14 items-center justify-center border border-white/15 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-[#FF5A1F] hover:bg-[#FF5A1F] hover:text-white">
                                Go Elite
                            </Link>

                        </div>

                    </div>


                    {/* Bottom Note */}
                    <div className="mt-10 flex flex-col gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">

                        <p className="text-[10px] uppercase tracking-[0.18em] text-white/25">
                            No joining pressure. No complicated plans.
                        </p>

                        <p className="text-[10px] uppercase tracking-[0.18em] text-white/25">
                            Start with a free trial
                        </p>

                    </div>

                </div>

            </section>

            {/* What You Get */}
            <section className="border-t border-white/5 bg-[#111111] py-24 sm:py-28 lg:py-32">

                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-10 bg-[#FF5A1F]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                    Included With Every Membership
                                </span>

                            </div>

                            <h2 className="font-display text-6xl leading-[0.85] tracking-tight text-white sm:text-7xl lg:text-8xl">
                                MORE THAN
                                <br />
                                <span className="text-white/30">A MEMBERSHIP.</span>
                            </h2>

                        </div>


                        <p className="max-w-md text-sm leading-7 text-white/45 sm:text-base lg:ml-auto">
                            Your membership gives you more than access to equipment.
                            It gives you the environment, tools and support to keep
                            moving forward.
                        </p>

                    </div>


                    {/* Benefits */}
                    <div className="mt-16 border-t border-white/10 lg:mt-20">

                        {/* Benefit 01 */}
                        <div className="group grid gap-8 border-b border-white/10 py-10 transition-colors duration-300 hover:bg-[#181818] lg:grid-cols-[100px_1fr_1fr] lg:items-center lg:px-6">

                            <span className="font-display text-4xl text-white/15 transition-colors duration-300 group-hover:text-[#FF5A1F]">
                                01
                            </span>

                            <div>

                                <h3 className="font-display text-4xl tracking-wide text-white">
                                    TRAINING FLOOR
                                </h3>

                                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/30">
                                    Built for serious work
                                </p>

                            </div>

                            <p className="max-w-md text-sm leading-6 text-white/45 lg:ml-auto">
                                Premium strength, cardio and functional equipment across
                                a dedicated training floor designed for performance.
                            </p>

                        </div>


                        {/* Benefit 02 */}
                        <div className="group grid gap-8 border-b border-white/10 py-10 transition-colors duration-300 hover:bg-[#181818] lg:grid-cols-[100px_1fr_1fr] lg:items-center lg:px-6">

                            <span className="font-display text-4xl text-white/15 transition-colors duration-300 group-hover:text-[#FF5A1F]">
                                02
                            </span>

                            <div>

                                <h3 className="font-display text-4xl tracking-wide text-white">
                                    COACHING
                                </h3>

                                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/30">
                                    Never train without direction
                                </p>

                            </div>

                            <p className="max-w-md text-sm leading-6 text-white/45 lg:ml-auto">
                                From group sessions to 1:1 coaching, get the guidance
                                you need to train with purpose and improve consistently.
                            </p>

                        </div>


                        {/* Benefit 03 */}
                        <div className="group grid gap-8 border-b border-white/10 py-10 transition-colors duration-300 hover:bg-[#181818] lg:grid-cols-[100px_1fr_1fr] lg:items-center lg:px-6">

                            <span className="font-display text-4xl text-white/15 transition-colors duration-300 group-hover:text-[#FF5A1F]">
                                03
                            </span>

                            <div>

                                <h3 className="font-display text-4xl tracking-wide text-white">
                                    PROGRESS TRACKING
                                </h3>

                                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/30">
                                    Measure what matters
                                </p>

                            </div>

                            <p className="max-w-md text-sm leading-6 text-white/45 lg:ml-auto">
                                Regular assessments and progress reviews keep your
                                training focused on measurable improvements.
                            </p>

                        </div>


                        {/* Benefit 04 */}
                        <div className="group grid gap-8 border-b border-white/10 py-10 transition-colors duration-300 hover:bg-[#181818] lg:grid-cols-[100px_1fr_1fr] lg:items-center lg:px-6">

                            <span className="font-display text-4xl text-white/15 transition-colors duration-300 group-hover:text-[#FF5A1F]">
                                04
                            </span>

                            <div>

                                <h3 className="font-display text-4xl tracking-wide text-white">
                                    COMMUNITY
                                </h3>

                                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/30">
                                    Train around people who push
                                </p>

                            </div>

                            <p className="max-w-md text-sm leading-6 text-white/45 lg:ml-auto">
                                A focused training environment surrounded by people
                                who show up, put in the work and keep progressing.
                            </p>

                        </div>

                    </div>


                    {/* Bottom Statement */}
                    <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                        <p className="max-w-xl font-display text-3xl leading-none tracking-wide text-white sm:text-4xl">
                            SHOW UP.
                            <span className="text-[#FF5A1F]"> PUT IN THE WORK.</span>
                        </p>

                        <div className="flex items-center gap-3">

                            <span className="h-2 w-2 rounded-full bg-[#FF5A1F]" />

                            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/30">
                                Built For Progress
                            </span>

                        </div>

                    </div>

                </div>

            </section>

            {/* Find Your Fit */}
            <section className="bg-[#080808] py-24 sm:py-28 lg:py-32">

                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="mb-14 max-w-3xl sm:mb-16">

                        <div className="mb-6 flex items-center gap-3">

                            <span className="h-px w-10 bg-[#FF5A1F]" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                Not Sure Yet?
                            </span>

                        </div>

                        <h2 className="font-display text-6xl leading-[0.85] tracking-tight text-white sm:text-7xl lg:text-8xl">
                            FIND YOUR
                            <br />
                            <span className="text-white/30">FIT.</span>
                        </h2>

                        <p className="mt-7 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                            Start where you are. Choose where you want to go.
                            There's an IronForge membership for every stage of your journey.
                        </p>

                    </div>


                    {/* Fit Cards */}
                    <div className="grid gap-4 md:grid-cols-3">


                        {/* Beginner */}
                        <div className="group relative min-h-[360px] overflow-hidden border border-white/10 bg-[#111111] p-7 sm:p-8">

                            <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-[#FF5A1F]/10 blur-2xl transition-all duration-500 group-hover:bg-[#FF5A1F]/20" />

                            <div className="relative flex h-full flex-col">

                                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/25">
                                    01 — STARTING OUT
                                </span>

                                <div className="mt-auto">

                                    <h3 className="font-display text-5xl tracking-wide text-white">
                                        NEW TO FITNESS?
                                    </h3>

                                    <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">
                                        Build your foundation, learn the basics and get
                                        comfortable in the training environment.
                                    </p>

                                    <div className="mt-7 flex items-center gap-3">

                                        <span className="h-px w-8 bg-[#FF5A1F]" />

                                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#FF5A1F]">
                                            Start With Starter
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* Progress */}
                        <div className="group relative min-h-[360px] overflow-hidden border border-[#FF5A1F]/40 bg-[#151515] p-7 sm:p-8">

                            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FF5A1F]/10 blur-3xl transition-all duration-500 group-hover:bg-[#FF5A1F]/20" />

                            <div className="relative flex h-full flex-col">

                                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">
                                    02 — LEVEL UP
                                </span>

                                <div className="mt-auto">

                                    <h3 className="font-display text-5xl tracking-wide text-white">
                                        READY TO PROGRESS?
                                    </h3>

                                    <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
                                        You already train. Now add structure, coaching and
                                        accountability to accelerate your progress.
                                    </p>

                                    <div className="mt-7 flex items-center gap-3">

                                        <span className="h-px w-8 bg-[#FF5A1F]" />

                                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#FF5A1F]">
                                            Start With Performance
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* Serious */}
                        <div className="group relative min-h-[360px] overflow-hidden border border-white/10 bg-[#111111] p-7 sm:p-8">

                            <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-white/[0.03] blur-3xl transition-all duration-500 group-hover:bg-[#FF5A1F]/10" />

                            <div className="relative flex h-full flex-col">

                                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/25">
                                    03 — ALL IN
                                </span>

                                <div className="mt-auto">

                                    <h3 className="font-display text-5xl tracking-wide text-white">
                                        SERIOUS ABOUT RESULTS?
                                    </h3>

                                    <p className="mt-4 max-w-sm text-sm leading-6 text-white/40">
                                        Get dedicated coaching, personalised programming
                                        and everything you need to maximise your results.
                                    </p>

                                    <div className="mt-7 flex items-center gap-3">

                                        <span className="h-px w-8 bg-[#FF5A1F]" />

                                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#FF5A1F]">
                                            Start With Elite
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Bottom Line */}
                    <div className="mt-12 border-t border-white/5 pt-7">

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                            <p className="text-xs text-white/30">
                                Still deciding? That's okay.
                            </p>

                            <Link to="/contact" className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:text-[#FF5A1F]">

                                Talk To A Coach

                                <span className="flex h-8 w-8 items-center justify-center border border-white/15 transition-all duration-300 group-hover:border-[#FF5A1F] group-hover:bg-[#FF5A1F]">
                                    →
                                </span>
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

            {/* Membership FAQ */}
            <section className="border-t border-white/5 bg-[#111111] py-24 sm:py-28 lg:py-32">

                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

                        {/* Left */}
                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-10 bg-[#FF5A1F]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                    Good To Know
                                </span>

                            </div>

                            <h2 className="font-display text-6xl leading-[0.85] tracking-tight text-white sm:text-7xl lg:text-8xl">
                                GOT
                                <br />
                                <span className="text-white/30">QUESTIONS?</span>
                            </h2>

                            <p className="mt-7 max-w-sm text-sm leading-7 text-white/40">
                                Everything you need to know before you walk through
                                the doors of IronForge.
                            </p>

                            <div className="mt-10 hidden border-l border-[#FF5A1F] pl-5 lg:block">

                                <p className="font-display text-2xl tracking-wide text-white">
                                    NO CONFUSION.
                                    <br />
                                    <span className="text-[#FF5A1F]">
                                        JUST TRAINING.
                                    </span>
                                </p>

                            </div>

                        </div>


                        {/* Questions */}
                        <div className="border-t border-white/10">


                            {/* FAQ 01 */}
                            <div className="group border-b border-white/10 py-7 sm:py-8">

                                <div className="flex gap-5 sm:gap-8">

                                    <span className="pt-1 text-[10px] font-bold tracking-[0.15em] text-[#FF5A1F]">
                                        01
                                    </span>

                                    <div className="flex-1">

                                        <h3 className="font-display text-3xl tracking-wide text-white sm:text-4xl">
                                            CAN I TRY THE GYM BEFORE JOINING?
                                        </h3>

                                        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">
                                            Absolutely. Get in touch with our team to arrange
                                            your free trial session and experience the Forge
                                            before choosing a membership.
                                        </p>

                                    </div>

                                    <span className="hidden text-2xl font-light text-white/20 transition-colors group-hover:text-[#FF5A1F] sm:block">
                                        +
                                    </span>

                                </div>

                            </div>


                            {/* FAQ 02 */}
                            <div className="group border-b border-white/10 py-7 sm:py-8">

                                <div className="flex gap-5 sm:gap-8">

                                    <span className="pt-1 text-[10px] font-bold tracking-[0.15em] text-[#FF5A1F]">
                                        02
                                    </span>

                                    <div className="flex-1">

                                        <h3 className="font-display text-3xl tracking-wide text-white sm:text-4xl">
                                            WHICH MEMBERSHIP SHOULD I CHOOSE?
                                        </h3>

                                        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">
                                            Starter is ideal for building your foundation.
                                            Performance adds structure and coaching. Elite is
                                            designed for members who want dedicated support
                                            and maximum progress.
                                        </p>

                                    </div>

                                    <span className="hidden text-2xl font-light text-white/20 transition-colors group-hover:text-[#FF5A1F] sm:block">
                                        +
                                    </span>

                                </div>

                            </div>


                            {/* FAQ 03 */}
                            <div className="group border-b border-white/10 py-7 sm:py-8">

                                <div className="flex gap-5 sm:gap-8">

                                    <span className="pt-1 text-[10px] font-bold tracking-[0.15em] text-[#FF5A1F]">
                                        03
                                    </span>

                                    <div className="flex-1">

                                        <h3 className="font-display text-3xl tracking-wide text-white sm:text-4xl">
                                            DO I NEED TO BE EXPERIENCED?
                                        </h3>

                                        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">
                                            Not at all. IronForge is built for every level.
                                            Whether you're starting from zero or already
                                            training seriously, we'll help you move forward.
                                        </p>

                                    </div>

                                    <span className="hidden text-2xl font-light text-white/20 transition-colors group-hover:text-[#FF5A1F] sm:block">
                                        +
                                    </span>

                                </div>

                            </div>


                            {/* FAQ 04 */}
                            <div className="group border-b border-white/10 py-7 sm:py-8">

                                <div className="flex gap-5 sm:gap-8">

                                    <span className="pt-1 text-[10px] font-bold tracking-[0.15em] text-[#FF5A1F]">
                                        04
                                    </span>

                                    <div className="flex-1">

                                        <h3 className="font-display text-3xl tracking-wide text-white sm:text-4xl">
                                            CAN I CHANGE MY MEMBERSHIP LATER?
                                        </h3>

                                        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">
                                            Yes. Your training can evolve as your goals change.
                                            Speak with our team and we'll help you move to
                                            the membership that fits your next stage.
                                        </p>

                                    </div>

                                    <span className="hidden text-2xl font-light text-white/20 transition-colors group-hover:text-[#FF5A1F] sm:block">
                                        +
                                    </span>

                                </div>

                            </div>


                            {/* FAQ 05 */}
                            <div className="group border-b border-white/10 py-7 sm:py-8">

                                <div className="flex gap-5 sm:gap-8">

                                    <span className="pt-1 text-[10px] font-bold tracking-[0.15em] text-[#FF5A1F]">
                                        05
                                    </span>

                                    <div className="flex-1">

                                        <h3 className="font-display text-3xl tracking-wide text-white sm:text-4xl">
                                            HOW DO I GET STARTED?
                                        </h3>

                                        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/40">
                                            Start with a free trial. Visit the contact page,
                                            tell us what you're looking for and our team will
                                            help you take the first step.
                                        </p>

                                    </div>

                                    <span className="hidden text-2xl font-light text-white/20 transition-colors group-hover:text-[#FF5A1F] sm:block">
                                        +
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Final CTA */}
            <section className="relative overflow-hidden bg-[#080808] py-24 sm:py-28 lg:py-32">

                {/* Background Image */}
                <div className="absolute inset-0">

                    <img
                        src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=2400&q=90"
                        alt="Athlete training at IronForge"
                        className="h-full w-full object-cover object-center opacity-35"
                    />

                    <div className="absolute inset-0 bg-black/65" />

                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40" />

                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />

                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#080808] to-transparent" />

                </div>


                {/* Content */}
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    <div className="border border-white/10 bg-black/30 px-6 py-16 backdrop-blur-[2px] sm:px-10 sm:py-20 lg:px-16 lg:py-24">

                        {/* Eyebrow */}
                        <div className="mb-7 flex items-center gap-3">

                            <span className="h-px w-10 bg-[#FF5A1F]" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                Your Next Step
                            </span>

                        </div>


                        {/* Heading */}
                        <h2 className="max-w-5xl font-display text-7xl leading-[0.8] tracking-tight text-white sm:text-8xl lg:text-[10rem]">

                            READY TO ENTER

                            <br />

                            <span className="text-[#FF5A1F]">
                                THE FORGE?
                            </span>

                        </h2>


                        {/* Bottom Row */}
                        <div className="mt-12 flex flex-col gap-8 border-t border-white/10 pt-8 lg:flex-row lg:items-end lg:justify-between">

                            <p className="max-w-lg text-sm leading-7 text-white/45 sm:text-base">
                                Don't overthink it. Start with a free trial, meet the
                                coaches and experience IronForge for yourself.
                            </p>

                            <Link to="/contact" className="group inline-flex h-16 items-center justify-center gap-5 bg-[#FF5A1F] px-8 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#FF6B35] sm:px-10">

                                Start Free Trial

                                <span className="flex h-9 w-9 items-center justify-center border border-white/30 transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>

                            </Link>

                        </div>

                    </div>


                    {/* Bottom Statement */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/20">
                            IRONFORGE
                        </span>

                        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/20">
                            BUILT. NOT BORN.
                        </span>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Membership;