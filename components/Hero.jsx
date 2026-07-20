import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

import heroVideo from "./assets/herobg.mp4";


const Hero = () => {

  const [loaded, setLoaded] = useState(false);


  useEffect(() => {

    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);

  }, []);



  return (

    <section
  id="hero"
  className="
  relative
  min-h-screen
  overflow-hidden
  bg-[#F9E7E3]
  flex
  items-center
  "
>


      {/* Background Artwork Video */}

      <video

        autoPlay
        muted
        loop
        playsInline

        onLoadedData={() => setLoaded(true)}

        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        scale-105
        "

      >

        <source
          src={heroVideo}
          type="video/mp4"
        />

      </video>




      {/* Clean Overlay for Readability */}

      <div

        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-[#FAF3F0]/95
        via-[#FAF3F0]/70
        to-transparent
        "

      />



      <div

        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-[#FAF3F0]/60
        via-transparent
        "

      />






      {/* Small Artistic Background Glow */}

      <div

        className="
        absolute
        top-1/2
        right-20
        -translate-y-1/2
        w-[450px]
        h-[450px]
        rounded-full
        bg-[#E8C7C5]/20
        blur-[120px]
        "

      />







      {/* Hero Content */}

      <div

        className="
        relative
        z-10
        max-w-[1400px]
        mx-auto
        w-full
        px-8
        md:px-16
        "

      >



        <div

          className={`
          max-w-xl

          transition-all
          duration-1000

          ${
            loaded
            ?
            "opacity-100 translate-y-0"
            :
            "opacity-0 translate-y-10"
          }

          `}

        >



          <p

            className="
            uppercase
            tracking-[0.5em]
            text-xs
            text-[#A66466]
            mb-7
            "

          >

            An Artist's Little Universe

          </p>






          <h1

            className="
            font-serif
            text-5xl
            md:text-6xl
            lg:text-7xl
            leading-[1.05]
            text-[#4B3535]
            "

          >

            Turning

            <span
              className="
              italic
              text-[#A66466]
              "
            >
              imagination
            </span>


            <br />


            into hand drawn stories


          </h1>







          <p

            className="
            mt-7
            max-w-md
            text-base
            md:text-lg
            leading-relaxed
            text-[#745B5B]
            "

          >

            Original illustrations created with emotion,
            detail and imagination — where nature,
            dreams and quiet moments become timeless artwork.

          </p>








          <div

            className="
            mt-10
            flex
            gap-5
            "

          >


            <button

              onClick={() =>
                document
                .getElementById("gallery")
                ?.scrollIntoView({
                  behavior:"smooth"
                })
              }


              className="
              px-10
              py-4
              rounded-full

              bg-[#A66466]

              text-white

              text-xs
              uppercase
              tracking-[0.3em]

              transition-all
              duration-500

              hover:bg-[#8F5557]
              hover:-translate-y-1

              shadow-lg
              shadow-[#A66466]/20

              "

            >

              View Artwork

            </button>





            <button

              onClick={() =>
                document
                .getElementById("about")
                ?.scrollIntoView({
                  behavior:"smooth"
                })
              }

              className="
              px-10
              py-4

              rounded-full

              border
              border-[#A66466]/30

              text-[#A66466]

              text-xs
              uppercase
              tracking-[0.3em]

              transition-all
              duration-500

              hover:bg-white/50

              "

            >

              About Artist

            </button>



          </div>





        </div>


      </div>







      {/* Scroll Indicator */}

      <div

        className="
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2

        flex
        flex-col
        items-center
        gap-3

        text-[#A66466]

        "

      >

        <span

          className="
          text-[10px]
          uppercase
          tracking-[0.5em]
          "

        >

          Scroll

        </span>


        <ArrowDown

          className="
          w-4
          animate-bounce
          "

        />


      </div>




    </section>

  );

};


export default Hero;