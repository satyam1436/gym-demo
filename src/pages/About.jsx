import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
    return (
        <main className="bg-[#080808]">

            {/* About Hero */}
            <section className="relative flex min-h-[75svh] items-end overflow-hidden">

                {/* Background */}
                <div className="absolute inset-0">

                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=90"
                        alt="IronForge training environment"
                        className="h-full w-full object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/65" />

                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#080808] to-transparent" />

                </div>


                {/* Content */}
                <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-6 lg:px-8 lg:pb-24">

                    <div className="max-w-4xl">

                        {/* Eyebrow */}
                        <div className="mb-7 flex items-center gap-3">

                            <span className="h-px w-10 bg-[#FF5A1F]" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                About IronForge
                            </span>

                        </div>


                        {/* Heading */}
                        <h1 className="font-display text-[5rem] leading-[0.82] tracking-tight text-white sm:text-[7rem] lg:text-[9rem]">

                            MORE THAN

                            <br />

                            <span className="text-[#FF5A1F]">
                                A GYM.
                            </span>

                        </h1>


                        {/* Description */}
                        <p className="mt-8 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                            We built IronForge for people who want more from
                            training — more strength, more discipline, and more
                            from themselves.
                        </p>

                    </div>


                    {/* Scroll indicator */}
                    <div className="mt-16 hidden items-center gap-4 xl:flex">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
                            <ArrowDown
                                size={14}
                                strokeWidth={1.5}
                                className="text-white/60"
                            />
                        </div>

                        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/30">
                            Discover Our Story
                        </span>

                    </div>

                </div>

            </section>


            {/* Story Section */}
            <section className="bg-[#080808]">

                <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">

                    {/* Section Header */}
                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

                        <div>

                            <div className="flex items-center gap-3">

                                <span className="h-px w-10 bg-[#FF5A1F]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                    The IronForge Story
                                </span>

                            </div>

                        </div>


                        <div>

                            <h2 className="font-display text-5xl leading-[0.88] tracking-tight text-white sm:text-6xl lg:text-7xl">

                                BUILT FOR THOSE

                                <br />

                                WHO <span className="text-[#FF5A1F]">REFUSE</span>

                                <br />

                                TO STAY THE SAME.

                            </h2>

                        </div>

                    </div>


                    {/* Story Content */}
                    <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-20">

                        {/* Image */}
                        <div className="relative overflow-hidden">

                            <div className="aspect-[4/5] overflow-hidden">

                                <img
                                    src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=90"
                                    alt="Athlete training at IronForge"
                                    className="h-full w-full object-cover grayscale transition-transform duration-700 hover:scale-105"
                                />

                            </div>


                            {/* Image label */}
                            <div className="absolute bottom-5 left-5 border border-white/15 bg-black/70 px-4 py-3 backdrop-blur-md">

                                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50">
                                    Est. 2018
                                </p>

                                <p className="mt-1 font-display text-xl tracking-wide text-white">
                                    BUILT. NOT BORN.
                                </p>

                            </div>

                        </div>


                        {/* Story */}
                        <div className="flex flex-col justify-center">

                            <p className="text-lg leading-8 text-white/75 sm:text-xl sm:leading-9">
                                IronForge started with a simple belief:
                                <span className="text-white">
                                    {" "}strength is built, not given.
                                </span>
                            </p>


                            <div className="mt-8 space-y-6 text-sm leading-7 text-white/45">

                                <p>
                                    We created IronForge for people who wanted more than
                                    a room full of equipment. They wanted a place that
                                    challenged them, pushed them and gave them a reason
                                    to come back stronger every day.
                                </p>

                                <p>
                                    From the first rep to the thousandth, our approach has
                                    stayed the same — train with purpose, surround yourself
                                    with people who push you forward, and never confuse
                                    comfort with progress.
                                </p>

                                <p>
                                    Today, IronForge is a community of athletes, beginners,
                                    professionals and everyday people working toward one
                                    common goal:
                                    <span className="text-white">
                                        {" "}becoming better than yesterday.
                                    </span>
                                </p>

                            </div>


                            {/* Divider */}
                            <div className="my-10 h-px w-full bg-white/10" />


                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6">

                                <div>

                                    <p className="font-display text-4xl text-white sm:text-5xl">
                                        08
                                    </p>

                                    <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                                        Years Strong
                                    </p>

                                </div>


                                <div>

                                    <p className="font-display text-4xl text-white sm:text-5xl">
                                        5K+
                                    </p>

                                    <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                                        Members
                                    </p>

                                </div>


                                <div>

                                    <p className="font-display text-4xl text-[#FF5A1F] sm:text-5xl">
                                        24/7
                                    </p>

                                    <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                                        Access
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Philosophy Section */}
            <section className="border-t border-white/10 bg-[#111111]">

                <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">

                    {/* Header */}
                    <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">

                        <div className="flex items-start gap-3">

                            <span className="mt-1 h-px w-10 bg-[#FF5A1F]" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                Our Philosophy
                            </span>

                        </div>


                        <div>

                            <h2 className="font-display text-5xl leading-[0.88] tracking-tight text-white sm:text-6xl lg:text-8xl">

                                WE DON'T

                                <br />

                                CHASE <span className="text-[#FF5A1F]">MOTIVATION.</span>

                                <br />

                                WE BUILD DISCIPLINE.

                            </h2>

                            <p className="mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                                Motivation comes and goes. Discipline keeps you moving.
                                That's why everything we do at IronForge is built around
                                consistency, purpose and measurable progress.
                            </p>

                        </div>

                    </div>


                    {/* Philosophy Cards */}
                    <div className="mt-20 grid border-l border-t border-white/10 md:grid-cols-3">

                        {/* Card 01 */}
                        <div className="group border-b border-r border-white/10 p-7 transition-colors duration-500 hover:bg-[#181818] sm:p-9 lg:p-10">

                            <div className="flex items-center justify-between">

                                <span className="text-[10px] font-semibold tracking-[0.2em] text-white/25">
                                    01
                                </span>

                                <span className="h-2 w-2 rounded-full bg-[#FF5A1F] opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

                            </div>


                            <h3 className="mt-20 font-display text-4xl tracking-wide text-white sm:text-5xl">
                                DISCIPLINE
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-white/40">
                                Show up even when you don't feel like it.
                                Consistency is what turns effort into strength.
                            </p>

                        </div>


                        {/* Card 02 */}
                        <div className="group border-b border-r border-white/10 p-7 transition-colors duration-500 hover:bg-[#181818] sm:p-9 lg:p-10">

                            <div className="flex items-center justify-between">

                                <span className="text-[10px] font-semibold tracking-[0.2em] text-white/25">
                                    02
                                </span>

                                <span className="h-2 w-2 rounded-full bg-[#FF5A1F] opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

                            </div>


                            <h3 className="mt-20 font-display text-4xl tracking-wide text-white sm:text-5xl">
                                PROGRESS
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-white/40">
                                You don't need to be perfect. You just need
                                to be better than you were yesterday.
                            </p>

                        </div>


                        {/* Card 03 */}
                        <div className="group border-b border-r border-white/10 p-7 transition-colors duration-500 hover:bg-[#181818] sm:p-9 lg:p-10">

                            <div className="flex items-center justify-between">

                                <span className="text-[10px] font-semibold tracking-[0.2em] text-white/25">
                                    03
                                </span>

                                <span className="h-2 w-2 rounded-full bg-[#FF5A1F] opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

                            </div>


                            <h3 className="mt-20 font-display text-4xl tracking-wide text-white sm:text-5xl">
                                COMMUNITY
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-white/40">
                                Train together. Push each other. Celebrate
                                every milestone along the way.
                            </p>

                        </div>

                    </div>


                    {/* Bottom Statement */}
                    <div className="mt-16 flex flex-col justify-between gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center">

                        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25">
                            The IronForge Standard
                        </p>

                        <p className="font-display text-2xl tracking-wide text-white/70 sm:text-3xl">
                            BUILT. <span className="text-[#FF5A1F]">NOT BORN.</span>
                        </p>

                    </div>

                </div>

            </section>

            {/* Facility Section */}
            <section className="border-t border-white/10 bg-[#080808]">

                <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">

                    {/* Header */}
                    <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

                        <div>

                            <div className="flex items-center gap-3">

                                <span className="h-px w-10 bg-[#FF5A1F]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                    Inside The Forge
                                </span>

                            </div>

                            <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[0.88] tracking-tight text-white sm:text-6xl lg:text-8xl">
                                BUILT TO
                                <br />
                                <span className="text-[#FF5A1F]">PERFORM.</span>
                            </h2>

                        </div>


                        <p className="max-w-md text-sm leading-7 text-white/40 lg:pb-2">
                            Every corner of IronForge is designed with one purpose:
                            creating an environment where you can train harder,
                            move better and keep progressing.
                        </p>

                    </div>


                    {/* Main Facility Image */}
                    <div className="group relative mt-16 overflow-hidden sm:mt-20">

                        <div className="aspect-[16/8] overflow-hidden">

                            <img
                                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=2400&q=90"
                                alt="IronForge gym training floor"
                                className="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                            />

                        </div>


                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />


                        {/* Image Content */}
                        <div className="absolute inset-x-0 bottom-0 flex flex-col justify-between gap-6 p-6 sm:flex-row sm:items-end sm:p-8 lg:p-10">

                            <div>

                                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">
                                    The Training Floor
                                </p>

                                <h3 className="mt-2 font-display text-3xl tracking-wide text-white sm:text-4xl">
                                    WHERE THE WORK HAPPENS.
                                </h3>

                            </div>


                            <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 bg-black/30 backdrop-blur-sm">
                                <span className="text-[10px] font-semibold text-white/60">
                                    01
                                </span>
                            </div>

                        </div>

                    </div>


                    {/* Facility Highlights */}
                    <div className="mt-5 grid gap-px bg-white/10 md:grid-cols-3">

                        {/* Highlight 01 */}
                        <div className="bg-[#111111] p-7 sm:p-9">

                            <div className="flex items-center justify-between">

                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                                    01 / Strength
                                </span>

                                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />

                            </div>

                            <h3 className="mt-10 font-display text-3xl tracking-wide text-white sm:text-4xl">
                                STRENGTH FLOOR
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-white/40">
                                Racks, platforms, free weights and everything you need
                                to build serious strength.
                            </p>

                        </div>


                        {/* Highlight 02 */}
                        <div className="bg-[#111111] p-7 sm:p-9">

                            <div className="flex items-center justify-between">

                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                                    02 / Conditioning
                                </span>

                                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />

                            </div>

                            <h3 className="mt-10 font-display text-3xl tracking-wide text-white sm:text-4xl">
                                PERFORMANCE ZONE
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-white/40">
                                Sleds, battle ropes, conditioning equipment and open
                                space built for high-intensity training.
                            </p>

                        </div>


                        {/* Highlight 03 */}
                        <div className="bg-[#111111] p-7 sm:p-9">

                            <div className="flex items-center justify-between">

                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                                    03 / Recovery
                                </span>

                                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />

                            </div>

                            <h3 className="mt-10 font-display text-3xl tracking-wide text-white sm:text-4xl">
                                RECOVERY SPACE
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-white/40">
                                Dedicated areas to cool down, recover and get ready
                                for your next session.
                            </p>

                        </div>

                    </div>


                    {/* Bottom Note */}
                    <div className="mt-8 flex items-center gap-3">

                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A1F]" />

                        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25">
                            Every detail has a purpose.
                        </p>

                    </div>

                </div>

            </section>

            {/* Final About CTA */}
            <section className="border-t border-white/10 bg-[#111111]">

                <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">

                    {/* Statement */}
                    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

                        {/* Label */}
                        <div className="flex items-start gap-3">

                            <span className="mt-1 h-px w-10 bg-[#FF5A1F]" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                The IronForge Standard
                            </span>

                        </div>


                        {/* Main Statement */}
                        <div>

                            <h2 className="font-display text-5xl leading-[0.86] tracking-tight text-white sm:text-6xl lg:text-8xl">

                                SHOW UP.

                                <br />

                                PUT IN THE

                                <br />

                                <span className="text-[#FF5A1F]">
                                    WORK.
                                </span>

                            </h2>

                            <p className="mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                                There are no shortcuts here. No overnight transformations.
                                Just good training, hard work and a community that keeps
                                you moving forward.
                            </p>

                        </div>

                    </div>


                    {/* Principles */}
                    <div className="mt-20 grid gap-px bg-white/10 sm:grid-cols-3">

                        <div className="bg-[#080808] p-7 sm:p-8">

                            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                                01
                            </span>

                            <p className="mt-8 font-display text-3xl tracking-wide text-white">
                                NO SHORTCUTS.
                            </p>

                        </div>


                        <div className="bg-[#080808] p-7 sm:p-8">

                            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                                02
                            </span>

                            <p className="mt-8 font-display text-3xl tracking-wide text-white">
                                NO EXCUSES.
                            </p>

                        </div>


                        <div className="bg-[#080808] p-7 sm:p-8">

                            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                                03
                            </span>

                            <p className="mt-8 font-display text-3xl tracking-wide text-white">
                                JUST PROGRESS.
                            </p>

                        </div>

                    </div>


                    {/* CTA */}
                    <div className="mt-20 border-t border-white/10 pt-8">

                        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

                            <div>

                                <p className="font-display text-3xl tracking-wide text-white sm:text-4xl">
                                    READY TO START?
                                </p>

                                <p className="mt-2 text-xs text-white/35">
                                    Your strongest chapter starts here.
                                </p>

                            </div>


                            <Link
                                to="/contact"
                                className="group inline-flex w-fit items-center gap-3 bg-[#FF5A1F] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#ff6b35]"
                            >
                                Start Training

                                <ArrowUpRight
                                    size={15}
                                    strokeWidth={2.5}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default About;