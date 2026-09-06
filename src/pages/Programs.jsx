import {
    ArrowDown,
    ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

function Programs() {
    return (
        <main className="bg-[#080808]">

            {/* Programs Hero */}
            <section className="relative flex min-h-[75svh] items-end overflow-hidden">

                {/* Background Image */}
                <div className="absolute inset-0">

                    <img
                        src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=2400&q=90"
                        alt="Athlete performing strength training"
                        className="h-full w-full object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/65" />

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
                                Training Programs
                            </span>

                        </div>


                        {/* Heading */}
                        <h1 className="font-display text-[5rem] leading-[0.82] tracking-tight text-white sm:text-[7rem] lg:text-[9rem]">

                            TRAIN WITH

                            <br />

                            <span className="text-[#FF5A1F]">
                                PURPOSE.
                            </span>

                        </h1>


                        {/* Description */}
                        <p className="mt-8 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                            Whether you're building strength, improving conditioning
                            or preparing for peak performance, there's a program
                            built around your goals.
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
                            Explore Programs
                        </span>

                    </div>

                </div>

            </section>

            {/* Programs Showcase */}
            <section className="border-t border-white/10 bg-[#080808]">

                <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">

                    {/* Section Header */}
                    <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

                        <div className="flex items-start gap-3">

                            <span className="mt-1 h-px w-10 bg-[#FF5A1F]" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                Find Your Focus
                            </span>

                        </div>

                        <div>

                            <h2 className="font-display text-5xl leading-[0.88] tracking-tight text-white sm:text-6xl lg:text-8xl">
                                TRAIN FOR
                                <br />
                                <span className="text-[#FF5A1F]">WHAT MATTERS.</span>
                            </h2>

                            <p className="mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                                Every body has different goals. Every program at IronForge
                                is built to help you train with direction, structure and
                                measurable progress.
                            </p>

                        </div>

                    </div>


                    {/* Program 01 */}
                    <div className="group mt-20 border-t border-white/10">

                        <div className="grid lg:grid-cols-[80px_1fr_1.1fr]">

                            {/* Number */}
                            <div className="hidden border-r border-white/10 py-8 lg:block">

                                <span className="text-[10px] font-semibold tracking-[0.2em] text-white/25">
                                    01
                                </span>

                            </div>


                            {/* Content */}
                            <div className="border-b border-white/10 py-8 lg:px-10 lg:py-12">

                                <div className="flex items-start justify-between gap-6">

                                    <div>

                                        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#FF5A1F]">
                                            Strength
                                        </p>

                                        <h3 className="mt-3 font-display text-5xl tracking-wide text-white sm:text-6xl">
                                            BUILD STRENGTH.
                                        </h3>

                                    </div>

                                    <span className="text-[10px] font-semibold tracking-[0.2em] text-white/20 lg:hidden">
                                        01
                                    </span>

                                </div>

                                <p className="mt-6 max-w-lg text-sm leading-7 text-white/40">
                                    Build a stronger foundation through progressive resistance
                                    training, compound movements and structured programming
                                    designed to make you stronger week after week.
                                </p>


                                {/* Details */}
                                <div className="mt-8 flex flex-wrap gap-3">

                                    <span className="border border-white/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/35">
                                        Strength
                                    </span>

                                    <span className="border border-white/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/35">
                                        Hypertrophy
                                    </span>

                                    <span className="border border-white/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/35">
                                        Power
                                    </span>

                                </div>

                            </div>


                            {/* Image */}
                            <div className="relative min-h-[300px] overflow-hidden border-b border-white/10">

                                <img
                                    src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=90"
                                    alt="Strength training at IronForge"
                                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                />

                                <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/10" />

                                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center border border-white/20 bg-black/40 text-white backdrop-blur-md">

                                    <span className="text-[10px] font-semibold">
                                        01
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Program 02 */}
                    <div className="group border-b border-white/10">

                        <div className="grid lg:grid-cols-[80px_1fr_1.1fr]">

                            <div className="hidden border-r border-white/10 py-8 lg:block">

                                <span className="text-[10px] font-semibold tracking-[0.2em] text-white/25">
                                    02
                                </span>

                            </div>


                            <div className="border-b border-white/10 py-8 lg:border-b-0 lg:px-10 lg:py-12">

                                <div className="flex items-start justify-between gap-6">

                                    <div>

                                        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#FF5A1F]">
                                            Conditioning
                                        </p>

                                        <h3 className="mt-3 font-display text-5xl tracking-wide text-white sm:text-6xl">
                                            BUILD ENGINE.
                                        </h3>

                                    </div>

                                    <span className="text-[10px] font-semibold tracking-[0.2em] text-white/20 lg:hidden">
                                        02
                                    </span>

                                </div>

                                <p className="mt-6 max-w-lg text-sm leading-7 text-white/40">
                                    Improve cardiovascular fitness, stamina and work capacity
                                    with high-intensity conditioning sessions designed to
                                    make you faster, fitter and harder to fatigue.
                                </p>


                                <div className="mt-8 flex flex-wrap gap-3">

                                    <span className="border border-white/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/35">
                                        HIIT
                                    </span>

                                    <span className="border border-white/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/35">
                                        Cardio
                                    </span>

                                    <span className="border border-white/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/35">
                                        Endurance
                                    </span>

                                </div>

                            </div>


                            <div className="relative min-h-[300px] overflow-hidden">

                                <img
                                    src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1600&q=90"
                                    alt="Conditioning workout at IronForge"
                                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                />

                                <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/10" />

                                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center border border-white/20 bg-black/40 text-white backdrop-blur-md">

                                    <span className="text-[10px] font-semibold">
                                        02
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Program 03 */}
                    <div className="group border-b border-white/10">

                        <div className="grid lg:grid-cols-[80px_1fr_1.1fr]">

                            <div className="hidden border-r border-white/10 py-8 lg:block">

                                <span className="text-[10px] font-semibold tracking-[0.2em] text-white/25">
                                    03
                                </span>

                            </div>


                            <div className="border-b border-white/10 py-8 lg:border-b-0 lg:px-10 lg:py-12">

                                <div className="flex items-start justify-between gap-6">

                                    <div>

                                        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#FF5A1F]">
                                            Personal Training
                                        </p>

                                        <h3 className="mt-3 font-display text-5xl tracking-wide text-white sm:text-6xl">
                                            TRAIN 1:1.
                                        </h3>

                                    </div>

                                    <span className="text-[10px] font-semibold tracking-[0.2em] text-white/20 lg:hidden">
                                        03
                                    </span>

                                </div>

                                <p className="mt-6 max-w-lg text-sm leading-7 text-white/40">
                                    Get a program built around you. Work directly with an
                                    experienced coach who tracks your progress and keeps
                                    every session focused on your goals.
                                </p>


                                <div className="mt-8 flex flex-wrap gap-3">

                                    <span className="border border-white/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/35">
                                        1:1 Coaching
                                    </span>

                                    <span className="border border-white/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/35">
                                        Custom Plan
                                    </span>

                                    <span className="border border-white/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/35">
                                        Progress Tracking
                                    </span>

                                </div>

                            </div>


                            <div className="relative min-h-[300px] overflow-hidden">

                                <img
                                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=90"
                                    alt="Personal training session at IronForge"
                                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                />

                                <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/10" />

                                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center border border-white/20 bg-black/40 text-white backdrop-blur-md">

                                    <span className="text-[10px] font-semibold">
                                        03
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Program 04 */}
                    <div className="group border-b border-white/10">

                        <div className="grid lg:grid-cols-[80px_1fr_1.1fr]">

                            <div className="hidden border-r border-white/10 py-8 lg:block">

                                <span className="text-[10px] font-semibold tracking-[0.2em] text-white/25">
                                    04
                                </span>

                            </div>


                            <div className="py-8 lg:px-10 lg:py-12">

                                <div className="flex items-start justify-between gap-6">

                                    <div>

                                        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#FF5A1F]">
                                            Functional
                                        </p>

                                        <h3 className="mt-3 font-display text-5xl tracking-wide text-white sm:text-6xl">
                                            MOVE BETTER.
                                        </h3>

                                    </div>

                                    <span className="text-[10px] font-semibold tracking-[0.2em] text-white/20 lg:hidden">
                                        04
                                    </span>

                                </div>

                                <p className="mt-6 max-w-lg text-sm leading-7 text-white/40">
                                    Build mobility, stability, coordination and real-world
                                    movement with training that makes your body stronger
                                    and more capable outside the gym too.
                                </p>


                                <div className="mt-8 flex flex-wrap gap-3">

                                    <span className="border border-white/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/35">
                                        Mobility
                                    </span>

                                    <span className="border border-white/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/35">
                                        Movement
                                    </span>

                                    <span className="border border-white/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/35">
                                        Athletic
                                    </span>

                                </div>

                            </div>


                            <div className="relative min-h-[300px] overflow-hidden">

                                <img
                                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=90"
                                    alt="Functional training at IronForge"
                                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                                />

                                <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/10" />

                                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center border border-white/20 bg-black/40 text-white backdrop-blur-md">

                                    <span className="text-[10px] font-semibold">
                                        04
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* How We Train */}
            <section className="border-t border-white/10 bg-[#111111]">

                <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">

                    {/* Header */}
                    <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">

                        <div>

                            <div className="flex items-center gap-3">

                                <span className="h-px w-10 bg-[#FF5A1F]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                    Our Method
                                </span>

                            </div>

                        </div>


                        <div>

                            <h2 className="font-display text-5xl leading-[0.88] tracking-tight text-white sm:text-6xl lg:text-8xl">

                                NO RANDOM

                                <br />

                                WORKOUTS.

                                <br />

                                <span className="text-[#FF5A1F]">
                                    JUST A PLAN.
                                </span>

                            </h2>

                            <p className="mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                                Every session has a purpose. We assess where you are,
                                build a plan around your goals and continuously adjust
                                your training as you get stronger.
                            </p>

                        </div>

                    </div>


                    {/* Method Steps */}
                    <div className="mt-20 grid gap-px bg-white/10 md:grid-cols-3">

                        {/* Step 01 */}
                        <div className="group relative min-h-[360px] bg-[#080808] p-7 transition-colors duration-500 hover:bg-[#151515] sm:p-9 lg:p-10">

                            <div className="flex items-center justify-between">

                                <span className="font-display text-5xl text-white/10 transition-colors duration-500 group-hover:text-[#FF5A1F]/20">
                                    01
                                </span>

                                <span className="h-2 w-2 rounded-full bg-[#FF5A1F]" />

                            </div>


                            <div className="absolute bottom-9 left-7 right-7 sm:left-9 sm:right-9 lg:left-10 lg:right-10">

                                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#FF5A1F]">
                                    Start Here
                                </p>

                                <h3 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-5xl">
                                    ASSESS
                                </h3>

                                <p className="mt-4 max-w-sm text-sm leading-7 text-white/40">
                                    Understand your current fitness level, movement,
                                    strengths and goals before we build your plan.
                                </p>

                            </div>

                        </div>


                        {/* Step 02 */}
                        <div className="group relative min-h-[360px] bg-[#080808] p-7 transition-colors duration-500 hover:bg-[#151515] sm:p-9 lg:p-10">

                            <div className="flex items-center justify-between">

                                <span className="font-display text-5xl text-white/10 transition-colors duration-500 group-hover:text-[#FF5A1F]/20">
                                    02
                                </span>

                                <span className="h-2 w-2 rounded-full bg-[#FF5A1F]" />

                            </div>


                            <div className="absolute bottom-9 left-7 right-7 sm:left-9 sm:right-9 lg:left-10 lg:right-10">

                                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#FF5A1F]">
                                    Put In The Work
                                </p>

                                <h3 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-5xl">
                                    TRAIN
                                </h3>

                                <p className="mt-4 max-w-sm text-sm leading-7 text-white/40">
                                    Follow structured sessions designed around your
                                    goals, ability and training experience.
                                </p>

                            </div>

                        </div>


                        {/* Step 03 */}
                        <div className="group relative min-h-[360px] bg-[#080808] p-7 transition-colors duration-500 hover:bg-[#151515] sm:p-9 lg:p-10">

                            <div className="flex items-center justify-between">

                                <span className="font-display text-5xl text-white/10 transition-colors duration-500 group-hover:text-[#FF5A1F]/20">
                                    03
                                </span>

                                <span className="h-2 w-2 rounded-full bg-[#FF5A1F]" />

                            </div>


                            <div className="absolute bottom-9 left-7 right-7 sm:left-9 sm:right-9 lg:left-10 lg:right-10">

                                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#FF5A1F]">
                                    Keep Moving
                                </p>

                                <h3 className="mt-3 font-display text-4xl tracking-wide text-white sm:text-5xl">
                                    PROGRESS
                                </h3>

                                <p className="mt-4 max-w-sm text-sm leading-7 text-white/40">
                                    Track your improvements, adapt your training and keep
                                    pushing toward the next level.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* Bottom Statement */}
                    <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

                        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/25">
                            Train With Intention
                        </p>

                        <p className="font-display text-2xl tracking-wide text-white/60 sm:text-3xl">
                            EVERY REP <span className="text-[#FF5A1F]">COUNTS.</span>
                        </p>

                    </div>

                </div>

            </section>

            {/* Find Your Program */}
            <section className="border-t border-white/10 bg-[#080808]">

                <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">

                    {/* Header */}
                    <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

                        <div>

                            <div className="flex items-center gap-3">

                                <span className="h-px w-10 bg-[#FF5A1F]" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                    Find Your Program
                                </span>

                            </div>

                        </div>


                        <div>

                            <h2 className="font-display text-5xl leading-[0.88] tracking-tight text-white sm:text-6xl lg:text-8xl">

                                WHERE DO YOU

                                <br />

                                WANT TO

                                <br />

                                <span className="text-[#FF5A1F]">
                                    GO?
                                </span>

                            </h2>

                            <p className="mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                                Choose your primary goal and we'll point you toward
                                the training approach that fits it best.
                            </p>

                        </div>

                    </div>


                    {/* Goal Selector */}
                    <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        {/* Goal 01 */}
                        <button
                            type="button"
                            className="group min-h-[260px] border border-[#FF5A1F] bg-[#FF5A1F] p-6 text-left transition-all duration-500 sm:p-7"
                        >

                            <div className="flex items-center justify-between">

                                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/45">
                                    Goal 01
                                </span>

                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 text-black">
                                    →
                                </span>

                            </div>


                            <div className="mt-20">

                                <h3 className="font-display text-4xl tracking-wide text-black sm:text-5xl">
                                    GET STRONGER
                                </h3>

                                <p className="mt-3 text-xs leading-6 text-black/60">
                                    Build strength, muscle and power.
                                </p>

                            </div>

                        </button>


                        {/* Goal 02 */}
                        <button
                            type="button"
                            className="group min-h-[260px] border border-white/10 bg-[#111111] p-6 text-left transition-all duration-500 hover:border-white/25 hover:bg-[#151515] sm:p-7"
                        >

                            <div className="flex items-center justify-between">

                                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
                                    Goal 02
                                </span>

                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 group-hover:border-[#FF5A1F] group-hover:bg-[#FF5A1F] group-hover:text-white">
                                    →
                                </span>

                            </div>


                            <div className="mt-20">

                                <h3 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
                                    GET FITTER
                                </h3>

                                <p className="mt-3 text-xs leading-6 text-white/35">
                                    Improve stamina and conditioning.
                                </p>

                            </div>

                        </button>


                        {/* Goal 03 */}
                        <button
                            type="button"
                            className="group min-h-[260px] border border-white/10 bg-[#111111] p-6 text-left transition-all duration-500 hover:border-white/25 hover:bg-[#151515] sm:p-7"
                        >

                            <div className="flex items-center justify-between">

                                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
                                    Goal 03
                                </span>

                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 group-hover:border-[#FF5A1F] group-hover:bg-[#FF5A1F] group-hover:text-white">
                                    →
                                </span>

                            </div>


                            <div className="mt-20">

                                <h3 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
                                    MOVE BETTER
                                </h3>

                                <p className="mt-3 text-xs leading-6 text-white/35">
                                    Build mobility and functional strength.
                                </p>

                            </div>

                        </button>


                        {/* Goal 04 */}
                        <button
                            type="button"
                            className="group min-h-[260px] border border-white/10 bg-[#111111] p-6 text-left transition-all duration-500 hover:border-white/25 hover:bg-[#151515] sm:p-7"
                        >

                            <div className="flex items-center justify-between">

                                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
                                    Goal 04
                                </span>

                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 group-hover:border-[#FF5A1F] group-hover:bg-[#FF5A1F] group-hover:text-white">
                                    →
                                </span>

                            </div>


                            <div className="mt-20">

                                <h3 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
                                    TRAIN 1:1
                                </h3>

                                <p className="mt-3 text-xs leading-6 text-white/35">
                                    Get personalised coaching and guidance.
                                </p>

                            </div>

                        </button>

                    </div>


                    {/* Recommendation */}
                    <div className="mt-5 border border-white/10 bg-[#111111] p-6 sm:p-8">

                        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">

                            <div>

                                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#FF5A1F]">
                                    Recommended For You
                                </p>

                                <h3 className="mt-2 font-display text-3xl tracking-wide text-white sm:text-4xl">
                                    STRENGTH PROGRAM
                                </h3>

                                <p className="mt-2 text-xs leading-6 text-white/35">
                                    Progressive strength training focused on building
                                    power, muscle and confidence.
                                </p>

                            </div>


                            <Link
                                to="/contact"
                                className="group inline-flex w-fit shrink-0 items-center gap-3 border border-white/15 px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-[#FF5A1F] hover:bg-[#FF5A1F]"
                            >
                                Talk To A Coach

                                <ArrowUpRight
                                    size={14}
                                    strokeWidth={2.5}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

            {/* Programs CTA */}
            <section className="border-t border-white/10 bg-[#111111]">

                <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-36">

                    <div className="relative overflow-hidden border border-white/10 bg-[#080808]">

                        {/* Orange Glow */}
                        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#FF5A1F]/10 blur-[100px]" />

                        {/* Content */}
                        <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end lg:p-16">

                            <div>

                                {/* Eyebrow */}
                                <div className="flex items-center gap-3">

                                    <span className="h-px w-10 bg-[#FF5A1F]" />

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#FF5A1F]">
                                        Your Next Level
                                    </span>

                                </div>


                                {/* Heading */}
                                <h2 className="mt-7 max-w-3xl font-display text-5xl leading-[0.85] tracking-tight text-white sm:text-6xl lg:text-8xl">

                                    YOUR GOAL.

                                    <br />

                                    YOUR

                                    <span className="text-[#FF5A1F]"> PROGRAM.</span>

                                    <br />

                                    YOUR NEXT LEVEL.

                                </h2>


                                <p className="mt-7 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
                                    You know where you want to go. Now it's time to put
                                    a plan behind it. Talk to our team and find the training
                                    approach that's right for you.
                                </p>

                            </div>


                            {/* CTA */}
                            <div className="lg:pb-1">

                                <Link
                                    to="/contact"
                                    className="group inline-flex items-center gap-3 bg-[#FF5A1F] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#ff6b35]"
                                >
                                    Talk To A Coach

                                    <ArrowUpRight
                                        size={15}
                                        strokeWidth={2.5}
                                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                    />
                                </Link>

                                <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/20">
                                    No pressure • Just a conversation
                                </p>

                            </div>

                        </div>


                        {/* Bottom Line */}
                        <div className="relative flex items-center justify-between border-t border-white/10 px-8 py-4 sm:px-12 lg:px-16">

                            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/20">
                                IRONFORGE TRAINING
                            </span>

                            <span className="font-display text-lg tracking-wide text-white/30">
                                BUILT. <span className="text-[#FF5A1F]">NOT BORN.</span>
                            </span>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Programs;