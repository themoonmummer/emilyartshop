import React from "react";
import { ArrowUp } from "lucide-react";
import Cherryblossom from "./Cherryblossom";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  };


  const socialLinks = [
    "Instagram",
    "Pinterest"
  ];


  const navigation = [
    {
      name:"Home",
      href:"#"
    },
    {
      name:"Gallery",
      href:"#gallery"
    },
    {
      name:"About Artist",
      href:"#about"
    },
    {
      name:"Commissions",
      href:"#pricing"
    },
    {
      name:"Contact",
      href:"#contact"
    }
  ];



  return (

    <footer
      id="footer"
      className="
      relative
      bg-[#F9E7E3]
      pt-28
      pb-10
      overflow-hidden
      "
    >


      {/* Blossom ambience */}

      <div
        className="
        absolute
        -top-40
        right-0
        w-[500px]
        h-[500px]
        rounded-full
        bg-[#ED97A0]/20
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



        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-14
          mb-20
          "
        >



          {/* Brand */}

          <div
            className="
            lg:col-span-2
            space-y-8
            "
          >


            <h3
              className="
              font-serif
              text-4xl
              text-[#4b3535]
              "
            >

              Emily Art

            </h3>


            <p
              className="
              max-w-md
              text-[#8F6666]
              leading-relaxed
              "
            >

              A collection of illustrations inspired by
              nature, seasons and stories captured through
              color, imagination and emotion.

            </p>




            <div
              className="
              flex
              gap-8
              "
            >

              {
                socialLinks.map((social)=>(

                  <a
                    key={social}
                    href="#"
                    className="
                    text-xs
                    uppercase
                    tracking-[0.35em]
                    text-[#A66466]
                    hover:text-[#E07C8E]
                    transition
                    "
                  >

                    {social}

                  </a>

                ))
              }


            </div>



          </div>






          {/* Navigation */}


          <div>

            <h4
              className="
              text-xs
              uppercase
              tracking-[0.4em]
              text-[#4b3535]
              mb-8
              "
            >

              Explore

            </h4>


            <ul
              className="
              space-y-4
              "
            >

              {
                navigation.map((item)=>(

                  <li key={item.name}>

                    <a
                      href={item.href}
                      className="
                      text-sm
                      text-[#8F6666]
                      hover:text-[#A66466]
                      transition
                      "
                    >

                      {item.name}

                    </a>

                  </li>

                ))
              }

            </ul>

          </div>






          {/* Newsletter */}

          <div>


            <h4
              className="
              text-xs
              uppercase
              tracking-[0.4em]
              text-[#4b3535]
              mb-8
              "
            >

              Studio Notes

            </h4>


            <p
              className="
              text-sm
              text-[#8F6666]
              leading-relaxed
              mb-5
              "
            >

              Receive artwork updates and new collection
              announcements.

            </p>



            <div
              className="
              relative
              "
            >

              <input
                type="email"
                placeholder="Email"
                className="
                w-full
                rounded-full
                bg-white/60
                border
                border-white
                px-6
                py-4
                outline-none
                text-sm
                "
              />


              <button
                className="
                absolute
                right-2
                top-2
                px-5
                py-2
                rounded-full
                bg-[#A66466]
                text-white
                text-[10px]
                uppercase
                tracking-[0.3em]
                hover:bg-[#E07C8E]
                transition
                "
              >

                Join

              </button>


            </div>


          </div>



        </div>







        <div
          className="
          pt-10
          border-t
          border-[#E3BAB6]
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-6
          "
        >



          <p
            className="
            text-xs
            tracking-[0.3em]
            text-[#A66466]
            "
          >

            © 2026 EMILY ART SHOP

          </p>




          <button

            onClick={scrollToTop}

            className="
            w-12
            h-12
            rounded-full
            bg-white/60
            flex
            items-center
            justify-center
            hover:bg-[#A66466]
            group
            transition
            "
          >

            <ArrowUp
              className="
              w-5
              h-5
              text-[#A66466]
              group-hover:text-white
              transition
              "
            />

          </button>
        </div>
       <Cherryblossom />
      </div>
    </footer>
  );
};

export default Footer;