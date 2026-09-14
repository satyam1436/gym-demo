import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

function Gallery() {
    return (
        <main className="bg-[#080808]">

            {/* Gallery Hero */}
            <section className="relative flex min-h-[75svh] items-end overflow-hidden">

                {/* Background */}
                <div className="absolute inset-0">

                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=90"
                        alt="IronForge gym interior"
                        className="h-full w-full object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/70" />

                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#080808] to-transparent" />

                </div>


                {/* Content */}
                <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-40 sm:px-6 lg:px-8 lg:pb-24">

                    <div className="max-w-5xl">

                        {/* Eyebrow */}
                        <div className="mb-7 flex items-center gap-3">

                            <span className="h-px w-10 bg-[#FF5A1F]" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                Inside IronForge
                            </span>

                        </div>


                        {/* Heading */}
                        <h1 className="font-display text-[5rem] leading-[0.82] tracking-tight text-white sm:text-[7rem] lg:text-[9rem]">

                            SEE THE

                            <br />

                            <span className="text-[#FF5A1F]">
                                FORGE.
                            </span>

                        </h1>


                        {/* Description */}
                        <p className="mt-8 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                            The equipment. The energy. The people.
                            Step inside the environment built for those who show up.
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
                            Explore The Forge
                        </span>

                    </div>

                </div>

            </section>

            {/* The Forge In Motion */}
            <section className="border-t border-white/5 bg-[#080808] py-24 sm:py-28 lg:py-32">

                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="mb-14 flex flex-col gap-8 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-10 bg-[#FF5A1F]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                    The Environment
                                </span>

                            </div>

                            <h2 className="font-display text-6xl leading-[0.85] tracking-tight text-white sm:text-7xl lg:text-8xl">
                                BUILT FOR
                                <br />
                                <span className="text-white/30">THE WORK.</span>
                            </h2>

                        </div>

                        <p className="max-w-sm text-sm leading-7 text-white/40 sm:text-base lg:pb-1">
                            Every corner of IronForge is designed to keep you focused,
                            moving and coming back for more.
                        </p>

                    </div>


                    {/* Editorial Grid */}
                    <div className="grid gap-4 lg:grid-cols-12">


                        {/* Large Feature */}
                        <div className="group relative overflow-hidden lg:col-span-7">

                            <div className="aspect-[4/5] overflow-hidden sm:aspect-[16/10] lg:aspect-[4/5]">

                                <img
                                    src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1600&q=90"
                                    alt="Athlete training with weights"
                                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                />

                            </div>

                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 sm:p-8">

                                <div className="flex items-end justify-between gap-5">

                                    <div>

                                        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">
                                            01 / Strength
                                        </span>

                                        <h3 className="mt-2 font-display text-4xl tracking-wide text-white sm:text-5xl">
                                            BUILT TO LIFT.
                                        </h3>

                                    </div>

                                    <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/40 sm:block">
                                        The Strength Floor
                                    </span>

                                </div>

                            </div>

                        </div>


                        {/* Right Column */}
                        <div className="grid gap-4 lg:col-span-5">


                            {/* Image 02 */}
                            <div className="group relative overflow-hidden">

                                <div className="aspect-[16/10] overflow-hidden">

                                    <img
                                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=90"
                                        alt="IronForge training floor"
                                        className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                    />

                                </div>

                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 sm:p-6">

                                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">
                                        02 / Facility
                                    </span>

                                    <h3 className="mt-1 font-display text-3xl tracking-wide text-white">
                                        NO DISTRACTIONS.
                                    </h3>

                                </div>

                            </div>


                            {/* Image 03 */}
                            <div className="group relative overflow-hidden">

                                <div className="aspect-[16/10] overflow-hidden">

                                    <img
                                        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=90"
                                        alt="Athlete performing a workout"
                                        className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                    />

                                </div>

                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 sm:p-6">

                                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">
                                        03 / Training
                                    </span>

                                    <h3 className="mt-1 font-display text-3xl tracking-wide text-white">
                                        PUT IN THE WORK.
                                    </h3>

                                </div>

                            </div>


                        </div>

                    </div>


                    {/* Bottom Row */}
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">


                        {/* Image 04 */}
                        <div className="group relative overflow-hidden">

                            <div className="aspect-[4/3] overflow-hidden">

                                <img
                                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=90"
                                    alt="Fitness training session"
                                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                />

                            </div>

                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5">

                                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">
                                    04 / Conditioning
                                </span>

                                <h3 className="mt-1 font-display text-3xl tracking-wide text-white">
                                    BUILD YOUR ENGINE.
                                </h3>

                            </div>

                        </div>


                        {/* Image 05 */}
                        <div className="group relative overflow-hidden">

                            <div className="aspect-[4/3] overflow-hidden">

                                <img
                                    src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1400&q=90"
                                    alt="Personal training session"
                                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                />

                            </div>

                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5">

                                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">
                                    05 / Coaching
                                </span>

                                <h3 className="mt-1 font-display text-3xl tracking-wide text-white">
                                    TRAIN WITH PURPOSE.
                                </h3>

                            </div>

                        </div>


                        {/* Image 06 */}
                        <div className="group relative overflow-hidden">

                            <div className="aspect-[4/3] overflow-hidden">

                                <img
                                    src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1400&q=90"
                                    alt="Athlete training at gym"
                                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                />

                            </div>

                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5">

                                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">
                                    06 / Community
                                </span>

                                <h3 className="mt-1 font-display text-3xl tracking-wide text-white">
                                    STRONGER TOGETHER.
                                </h3>

                            </div>

                        </div>

                    </div>


                    {/* Gallery Counter */}
                    <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-6">

                        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/25">
                            IRONFORGE / VISUAL ARCHIVE
                        </span>

                        <span className="font-display text-2xl tracking-wide text-white/20">
                            06 / 06
                        </span>

                    </div>

                </div>

            </section>

            {/* The People */}
            <section className="border-t border-white/5 bg-[#111111] py-24 sm:py-28 lg:py-32">

                <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">

                        <div>

                            <div className="mb-6 flex items-center gap-3">

                                <span className="h-px w-10 bg-[#FF5A1F]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                    The People
                                </span>

                            </div>

                            <h2 className="font-display text-6xl leading-[0.85] tracking-tight text-white sm:text-7xl lg:text-8xl">
                                STRONGER
                                <br />
                                <span className="text-white/30">TOGETHER.</span>
                            </h2>

                        </div>

                        <p className="max-w-md text-sm leading-7 text-white/40 sm:text-base lg:ml-auto">
                            IronForge isn't just about the person in the mirror.
                            It's about the people beside you pushing for something better.
                        </p>

                    </div>


                    {/* Featured Story */}
                    <div className="mt-14 grid overflow-hidden border border-white/10 bg-[#080808] lg:mt-20 lg:grid-cols-[1.15fr_0.85fr]">

                        {/* Image */}
                        <div className="group relative min-h-[420px] overflow-hidden lg:min-h-[600px]">

                            <img
                                src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=1800&q=90"
                                alt="Members training together"
                                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">

                                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#FF5A1F]">
                                    Inside The Forge
                                </span>

                            </div>

                        </div>


                        {/* Story */}
                        <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">

                            <div>

                                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/20">
                                    07 / Community
                                </span>

                                <h3 className="mt-8 font-display text-5xl leading-[0.9] tracking-wide text-white sm:text-6xl">
                                    THE ENERGY
                                    <br />
                                    IS DIFFERENT
                                    <br />
                                    <span className="text-[#FF5A1F]">HERE.</span>
                                </h3>

                                <p className="mt-7 max-w-md text-sm leading-7 text-white/40">
                                    Some days you're the strongest person in the room.
                                    Some days someone else pushes you further than you
                                    thought possible. That's the IronForge community.
                                </p>

                            </div>


                            {/* Stats */}
                            <div className="mt-12 grid grid-cols-2 gap-px border border-white/10 bg-white/10">

                                <div className="bg-[#080808] p-5 sm:p-6">

                                    <span className="font-display text-4xl text-white sm:text-5xl">
                                        5K+
                                    </span>

                                    <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                                        Members
                                    </p>

                                </div>

                                <div className="bg-[#080808] p-5 sm:p-6">

                                    <span className="font-display text-4xl text-white sm:text-5xl">
                                        24/7
                                    </span>

                                    <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                                        Access
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Quote Strip */}
                    <div className="mt-4 border border-white/10 bg-[#080808] px-7 py-10 sm:px-10 lg:px-14">

                        <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

                            <p className="max-w-4xl font-display text-3xl leading-none tracking-wide text-white sm:text-4xl lg:text-5xl">
                                “YOU DON'T NEED TO BE THE BEST.
                                <span className="text-white/30">
                                    {" "}
                                    YOU JUST NEED TO KEEP SHOWING UP.”
                                </span>
                            </p>

                            <span className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#FF5A1F]">
                                — IRONFORGE
                            </span>

                        </div>

                    </div>

                </div>

            </section>

            {/* Gallery Final CTA */}
            <section className="relative overflow-hidden bg-[#080808] py-24 sm:py-28 lg:py-32">

                {/* Background */}
                <div className="absolute inset-0">

                    <img
                        src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=2400&q=90"
                        alt="Athlete training in IronForge gym"
                        className="h-full w-full object-cover object-center opacity-35"
                    />

                    <div className="absolute inset-0 bg-black/70" />

                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/30" />

                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#111111] to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />

                </div>


                {/* Content */}
                <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

                    <div className="border border-white/10 bg-black/30 px-6 py-16 backdrop-blur-[2px] sm:px-10 sm:py-20 lg:px-16 lg:py-24">

                        {/* Eyebrow */}
                        <div className="mb-7 flex items-center gap-3">

                            <span className="h-px w-10 bg-[#FF5A1F]" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                Enough Looking
                            </span>

                        </div>


                        {/* Heading */}
                        <h2 className="max-w-5xl font-display text-7xl leading-[0.8] tracking-tight text-white sm:text-8xl lg:text-[10rem]">

                            NOW COME

                            <br />

                            <span className="text-[#FF5A1F]">
                                TRAIN.
                            </span>

                        </h2>


                        {/* Bottom */}
                        <div className="mt-12 flex flex-col gap-8 border-t border-white/10 pt-8 lg:flex-row lg:items-end lg:justify-between">

                            <p className="max-w-lg text-sm leading-7 text-white/45 sm:text-base">
                                You've seen the space. You've seen the work.
                                Now experience the IronForge difference for yourself.
                            </p>

                            <Link to="/contact" className="group inline-flex h-16 items-center justify-center gap-5 bg-[#FF5A1F] px-8 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-[#FF6B35] sm:px-10">

                                Start Free Trial

                                <span className="flex h-9 w-9 items-center justify-center border border-white/30 transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>

                            </Link>

                        </div>

                    </div>


                    {/* Bottom Brand Line */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/20">
                            IRONFORGE / VISUAL ARCHIVE
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

export default Gallery;