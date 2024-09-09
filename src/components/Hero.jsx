import React from 'react' 

// a component is simply just a function that has the same name as the file in our component folder!
export default function Hero() {
    return (
        /* this looks like standard html code, but the special thing with
        jsx is that you can write javascript amongst the html code,
        making development infinitely easier
        jsx = return hmlt or javascript interactive html */
        <div className="min-h-screen flex flex-col gap-10 items-center
        justify-center text-center max-w-[800px] w-full mx-auto p-4">
            <div className="flex flex-col gap-4">
                <p>IT'S TIME TO GET</p>
                <h1 className="uppercase font-semibold text-4xl sm:text-5xl
                md:text-5xl md:text-6xl lg:text-7xl">Gladiator <span className="text-red-400">Jacked</span></h1>
            </div>
            <p className="text-sm md:text-base font-light">
                I hereby acknowledge that I may become a <span className="text-red-400 font-medium">jacked animal
                </span> and accept all risks of becoming the local <span className="text-red-400 font-medium">beast</span>, afflicted
                with severe power, and severe responsibility.
            </p>
            <button className="px-8 py-4 rounded-md border-[2px] bg-slate-950 border-red-400 border-solid redShadow duration-200"><p>Accept & Begin</p></button>
        </div>
    )
}


// Going to pick back up on this project and try and make a ski setting program very soon!!
// Excited to get back into it.