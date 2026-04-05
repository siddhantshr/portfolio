import React from 'react'

function Timeline() {
  return (
    <section className="justify-center items-center mb-8" id="timeline">
        <div className="text-center w-full mb-24" data-aos="fade-up">
            <h2 className="text-xs text-red-400 tracking-widest font-medium title-font mb-1">
                TIMELINE
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Experience
            </h1>
        </div>
        <div class="justify-center items-center w-full max-w-3xl mx-auto px-4">
            <div class="relative pl-8 sm:pl-32 py-6 group" data-aos="fade-up">
                <div class="font-caveat font-medium text-2xl text-blue-500 mb-1 sm:mb-0">Team Lead - Team Mirage</div>
                <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">2022-25</time>
                    <div class="text-xl font-bold text-slate-700">Maharaja Sawai Man Singh Vidyalaya</div>
                    
                </div>
                <div class="text-gray-400">Leader of Team Mirage which participated in many tech competitions like Make-A-Thon [Shaastra IIT Madras], Atomquest [Techfest IIT Bombay], Games of Codes [Techfest IIT Bombay], TechExpo [TechNiche IIT Guwahati ], RoboVR [Techfest IIT Bombay]</div>
            </div>
            
            <div class="relative pl-8 sm:pl-32 py-6 group" data-aos="fade-up">
                <div class="font-caveat font-medium text-2xl text-blue-500 mb-1 sm:mb-0">Member - WCA</div>
                <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Jun 2020</time>
                    <div class="text-xl font-bold text-slate-700">World Cube Association</div>
                </div>
                <div class="text-gray-400">Attained a sub-15 average in 3x3 speedcubing, encouraged rational thought, time management, and a sense of competition through consistent practice and guidance, organized a tournament for speedcubing</div>
            </div>
            
            <div class="relative pl-8 sm:pl-32 py-6 group" data-aos="fade-up">
                <div class="font-caveat font-medium text-2xl text-blue-500 mb-1 sm:mb-0">Member - AIAA</div>
                <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Jun 2025</time>
                    <div class="text-xl font-bold text-slate-700">American Institute of Aeronautics and Astronautics</div>
                </div>
                <div class="text-gray-400">I recently joined the American Institute of Aeronautics and Astronautics in order to network with like-minded people and learn about advancements in aerospace engineering.  I'm excited to take part in research forums, student conferences, and technical activities.</div>
            </div>
            
            <div class="relative pl-8 sm:pl-32 py-6 group" data-aos="fade-up">
                <div class="font-caveat font-medium text-2xl text-blue-500 mb-1 sm:mb-0">BTech - Aerospace Engg</div>
                <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">2025-29</time>
                    <div class="text-xl font-bold text-slate-700">Indian Institute Of Technology, Bombay</div>
                </div>
                <div class="text-gray-400">Pursuing Aerospace Engg at IIT Bombay after clearing JEE Advanced, driven by a deep subject interest in aviation and astro systems.</div>
            </div>
        </div>
    </section>
  )
}

export default Timeline