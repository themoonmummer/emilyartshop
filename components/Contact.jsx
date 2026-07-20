import React from "react";
import { ArrowUpRight, Camera } from "lucide-react";
import Cherryblossom from "./Cherryblossom";

const Contact = () => {
  return (
    <section
      id="contact"
      className="
      relative
      py-32
      overflow-hidden
      bg-[#F9E7E3]
      "
    >

      {/* Cherry Blossoms */}
      <Cherryblossom />

      {/* Background Glow */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[700px]
        h-[700px]
        rounded-full
        bg-[#ED97A0]/20
        blur-[150px]
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-[450px]
        h-[450px]
        rounded-full
        bg-[#E3BAB6]/40
        blur-[130px]
        "
      />

      <div
        className="
        relative
        z-10
        max-w-6xl
        mx-auto
        px-6
        md:px-12
        "
      >

        {/* Heading */}

        <div
          className="
          text-center
          mb-16
          "
        >

          <p
            className="
            text-[#A66466]
            uppercase
            tracking-[0.5em]
            text-xs
            mb-6
            "
          >
            Get In Touch
          </p>

          <h2
            className="
            font-serif
            text-5xl
            md:text-7xl
            text-[#4b3535]
            "
          >
            Let's create
            <br />

            <span
              className="
              italic
              text-[#A66466]
              "
            >
              something beautiful
            </span>

          </h2>

        </div>

        {/* Instagram Card */}

        <a
          href="https://instagram.com/sammyartshop"
          target="_blank"
          rel="noopener noreferrer"
          className="
          group
          block
          max-w-2xl
          mx-auto
          "
        >

          <div
            className="
            relative
            overflow-hidden
            rounded-[3.5rem]
            bg-white/50
            backdrop-blur-xl
            border
            border-white/70
            p-12
            md:p-20
            text-center
            shadow-[0_40px_100px_rgba(166,100,102,0.15)]
            transition-all
            duration-700
            hover:-translate-y-3
            "
          >

            <div
              className="
              absolute
              inset-0
              bg-gradient-to-br
              from-white/60
              to-transparent
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-700
              "
            />

            <div
              className="
              relative
              w-24
              h-24
              mx-auto
              rounded-full
              bg-white
              flex
              items-center
              justify-center
              shadow-xl
              group-hover:scale-110
              transition-transform
              duration-700
              "
            >

              <Camera
                className="
                w-10
                h-10
                text-[#A66466]
                "
              />

              <div
                className="
                absolute
                -top-2
                -right-2
                w-8
                h-8
                rounded-full
                bg-[#E07C8E]
                text-white
                flex
                items-center
                justify-center
                scale-0
                group-hover:scale-100
                transition-transform
                duration-500
                "
              >

                <ArrowUpRight className="w-4 h-4" />

              </div>

            </div>

            <h3
              className="
              mt-10
              font-serif
              italic
              text-4xl
              md:text-6xl
              text-[#4b3535]
              group-hover:text-[#A66466]
              transition-colors
              duration-500
              "
            >
              @sammyartshop
            </h3>

            <p
              className="
              mt-5
              text-xs
              uppercase
              tracking-[0.4em]
              text-[#8F6666]
              "
            >
              Follow the artwork journey
            </p>

            <div
              className="
              mt-10
              flex
              items-center
              gap-5
              "
            >

              <div className="h-px flex-1 bg-[#E3BAB6]" />

              <span
                className="
                text-[10px]
                uppercase
                tracking-[0.5em]
                text-[#A66466]
                "
              >
                Instagram
              </span>

              <div className="h-px flex-1 bg-[#E3BAB6]" />

            </div>

          </div>

        </a>

      </div>

    </section>
  );
};

export default Contact;