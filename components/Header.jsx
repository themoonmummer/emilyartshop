import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";


const Header = () => {

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };


    window.addEventListener("scroll", handleScroll);


    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);



  const links = [

    {
      name:"Home",
      href:"#hero"
    },

    {
      name:"Gallery",
      href:"#gallery"
    },

    {
      name:"About",
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



  const scrollToSection = (href) => {

    setMenuOpen(false);

    const section = document.querySelector(href);


    if(section){

      section.scrollIntoView({
        behavior:"smooth",
        block:"start"
      });

    }

  };



  return (

    <header

      className={`
      fixed
      top-0
      left-0
      w-full
      z-50
      transition-all
      duration-500

      ${
        scrolled
        ?
        "bg-[#F9E7E3]/80 backdrop-blur-xl shadow-sm py-4"
        :
        "bg-transparent py-7"
      }

      `}

    >



      <div

        className="
        max-w-[1500px]
        mx-auto
        px-8
        md:px-14
        flex
        items-center
        justify-between
        "

      >



        {/* Logo */}

        <button

          onClick={() =>
            scrollToSection("#hero")
          }

          className="
          font-serif
          text-3xl
          tracking-widest
          uppercase
          text-[#4b3535]
          "

        >

          Emily
          <span className="text-[#A66466]">
            Art
          </span>
          Shop

        </button>






        {/* Desktop Navigation */}

        <nav

          className="
          hidden
          md:flex
          items-center
          gap-10
          "

        >

          {
            links.map((link)=>(

              <button

                key={link.name}

                onClick={() =>
                  scrollToSection(link.href)
                }

                className="
                text-[11px]
                uppercase
                tracking-[0.35em]
                text-[#6f5555]
                hover:text-[#A66466]
                transition
                group
                relative
                "

              >

                {link.name}


                <span

                  className="
                  absolute
                  left-0
                  bottom-[-8px]
                  h-[1px]
                  w-0
                  bg-[#A66466]
                  group-hover:w-full
                  transition-all
                  duration-500
                  "

                />


              </button>

            ))
          }


        </nav>






        {/* Mobile Button */}

        <button

          className="
          md:hidden
          "

          onClick={() =>
            setMenuOpen(true)
          }

        >

          <Menu
            className="
            w-7
            h-7
            text-[#A66466]
            "
          />

        </button>


      </div>








      {/* Mobile Menu */}

      <div

        className={`
        fixed
        inset-0
        bg-[#F9E7E3]
        flex
        flex-col
        justify-center
        items-center
        gap-10

        transition-all
        duration-700

        ${
          menuOpen
          ?
          "opacity-100 visible"
          :
          "opacity-0 invisible"
        }

        `}

      >



        <button

          className="
          absolute
          top-8
          right-8
          "

          onClick={() =>
            setMenuOpen(false)
          }

        >

          <X
            className="
            w-8
            h-8
            text-[#A66466]
            "
          />

        </button>



        {
          links.map((link)=>(

            <button

              key={link.name}

              onClick={() =>
                scrollToSection(link.href)
              }

              className="
              font-serif
              italic
              text-4xl
              text-[#4b3535]
              hover:text-[#A66466]
              "

            >

              {link.name}

            </button>

          ))
        }


      </div>



    </header>

  );

};


export default Header;