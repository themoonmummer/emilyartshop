import React from "react";
import Cherryblossom from "./Cherryblossom";

const reviews = [
  {
    name: "Mia",
    role: "Art Collector",
    text:
      "The artwork feels like a little memory captured forever. Every detail carries so much warmth, softness and emotion."
  },

  {
    name: "Sophia",
    role: "Illustration Lover",
    text:
      "There is something magical about these pieces. The colours and storytelling make every artwork feel alive."
  },

  {
    name: "Emma",
    role: "Collector",
    text:
      "A beautiful addition to my space. The artwork brings a calm feeling and reminds me of the beauty in small moments."
  }
];

const Reviews = () => {
  return (
    <section
      id="pricing"
      className="
      relative
      py-32
      bg-[#F9E7E3]
      overflow-hidden
      "
    >

      {/* Cherry Blossoms */}
      <Cherryblossom />

      {/* Background Atmosphere */}

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
        blur-[120px]
        "
      />

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        md:px-12
        "
      >

        {/* Heading */}

        <div
          className="
          text-center
          mb-20
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
            Kind Words
          </p>

          <h2
            className="
            text-5xl
            md:text-7xl
            font-serif
            text-[#4b3535]
            "
          >
            Loved beyond
            <br />

            <span
              className="
              italic
              text-[#A66466]
              "
            >
              the canvas
            </span>
          </h2>

          <p
            className="
            mt-6
            max-w-xl
            mx-auto
            text-[#8F6666]
            leading-relaxed
            "
          >
            Small stories from people who discovered
            a piece of imagination, emotion and beauty
            through the artwork.
          </p>

        </div>

        {/* Review Cards */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-10
          "
        >

          {reviews.map((review, index) => (

            <div
              key={index}
              className="
              group
              relative
              bg-white/50
              backdrop-blur-xl
              border
              border-white/70
              rounded-[3rem]
              p-10
              shadow-[0_30px_80px_rgba(166,100,102,0.15)]
              transition-all
              duration-700
              hover:-translate-y-3
              "
            >

              <div
                className="
                text-6xl
                font-serif
                text-[#ED97A0]
                leading-none
                mb-6
                "
              >
                “
              </div>

              <p
                className="
                text-[#745B5B]
                text-sm
                leading-relaxed
                "
              >
                {review.text}
              </p>

              <div
                className="
                mt-10
                pt-6
                border-t
                border-[#E3BAB6]
                "
              >

                <h3
                  className="
                  font-serif
                  italic
                  text-2xl
                  text-[#4b3535]
                  "
                >
                  {review.name}
                </h3>

                <p
                  className="
                  mt-2
                  text-[10px]
                  uppercase
                  tracking-[0.4em]
                  text-[#A66466]
                  "
                >
                  {review.role}
                </p>

              </div>

              <div
                className="
                absolute
                top-8
                right-8
                w-3
                h-3
                rounded-full
                bg-[#ED97A0]/40
                "
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Reviews;