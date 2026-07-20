import React from "react";

import artistArt from "./assets/artist.jpeg";
import Cherryblossom from "./Cherryblossom";


const About = () => {

  return (

    <section
      id="about"
      className="
      relative
      py-32
      overflow-hidden
      bg-[#F9E7E3]
      "
    >


      {/* Cherry Blossom Effect */}
      <Cherryblossom />



      {/* Background Glow */}

      <div
        className="
        absolute
        top-0
        right-0
        w-[500px]
        h-[500px]
        rounded-full
        bg-[#ED97A0]/20
        blur-[140px]
        "
      />


      <div
        className="
        absolute
        bottom-0
        left-0
        w-[500px]
        h-[500px]
        rounded-full
        bg-[#E3BAB6]/30
        blur-[150px]
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



        <div
          className="
          grid
          lg:grid-cols-2
          gap-20
          items-center
          "
        >





          {/* Artist Image */}

          <div
            className="
            relative
            "
          >

            <div
              className="
              rounded-[3rem]
              overflow-hidden
              shadow-[0_40px_100px_rgba(166,100,102,0.18)]
              "
            >

              <img

                src={artistArt}

                alt="Artist artwork"

                className="
                w-full
                aspect-[4/5]
                object-cover

                transition-transform
                duration-[2000ms]

                hover:scale-105
                "

              />

            </div>


          </div>







          {/* Text Content */}


          <div
            className="
            space-y-10
            "
          >


            <div>


              <p
                className="
                text-[#A66466]
                uppercase
                tracking-[0.5em]
                text-xs
                mb-6
                "
              >

                About The Artist

              </p>




              <h2
                className="
                font-serif
                text-5xl
                md:text-6xl
                leading-tight
                text-[#4b3535]
                "
              >

                Creating worlds

                <br/>

                through

                <span
                  className="
                  italic
                  text-[#A66466]
                  "
                >

                  imagination

                </span>


              </h2>


            </div>







            <div
              className="
              text-[#745b5b]
              text-lg
              leading-relaxed
              space-y-6
              max-w-xl
              "
            >

              <p>

                Every illustration begins with a feeling,
                a small idea, or a moment waiting to be
                transformed into a story.

              </p>


              <p>

                Through delicate colours, detailed artwork
                and a love for nature, each piece creates
                a gentle space where imagination and
                emotion come together.

              </p>


              <p>

                This collection explores quiet seasons,
                dreamlike landscapes and the beauty found
                in small unforgettable moments.

              </p>


            </div>







            <div
              className="
              flex
              gap-10
              pt-6
              "
            >

              <div>

                <p
                  className="
                  text-3xl
                  font-serif
                  text-[#A66466]
                  "
                >

                  Art

                </p>

                <p
                  className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#8F6666]
                  mt-2
                  "
                >

                  Created

                </p>

              </div>




              <div>

                <p
                  className="
                  text-3xl
                  font-serif
                  text-[#A66466]
                  "
                >

                  ∞

                </p>

                <p
                  className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#8F6666]
                  mt-2
                  "
                >

                  Stories

                </p>

              </div>




              <div>

                <p
                  className="
                  text-3xl
                  font-serif
                  text-[#A66466]
                  "
                >

                  01

                </p>

                <p
                  className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#8F6666]
                  mt-2
                  "
                >

                  Vision

                </p>

              </div>


            </div>



          </div>



        </div>



      </div>

    <Cherryblossom />
    </section>

  );

};


export default About;