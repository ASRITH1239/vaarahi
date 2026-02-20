import React from "react";

const Hero = () => {
  return (
    <section className="bg-primary text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-accent">
            Vaarahi Water
          </h1>
          <p className="mt-4 text-lg text-background">
            Pure Strength. Divine Quality.
          </p>
        </div>

        {/* Infinite Scroll Images */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-8 w-max">

            {/* Duplicate images twice for smooth loop */}

            {[1,2,3,1,2,3].map((item, index) => (
              <img
                key={index}
                src={`https://picsum.photos/400/300?random=${item}`}
                alt="placeholder"
                className="rounded-xl shadow-lg w-[400px] h-[300px] object-cover"
              />
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;