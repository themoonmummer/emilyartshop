import React, { useState } from "react";

import art1 from "./assets/art1.jpeg";
import art2 from "./assets/art2.jpeg";
import art3 from "./assets/art3.jpeg";
import art4 from "./assets/art4.jpeg";

import Cherryblossom from "./Cherryblossom";


const artworks = [

  {
    id:1,
    title:"Blossom Memory",
    category:"Traditional",
    description:
    "A quiet moment preserved through delicate lines, colours and seasonal emotions.",
    image:art1
  },

  {
    id:2,
    title:"Dream Garden",
    category:"Illustration",
    description:
    "An imagined world where nature and storytelling grow together.",
    image:art2
  },

  {
    id:3,
    title:"Petals In Light",
    category:"Traditional",
    description:
    "Soft brushwork inspired by warmth, silence and spring.",
    image:art3
  },

  {
    id:4,
    title:"Spring Reverie",
    category:"Illustration",
    description:
    "A fantasy world blooming between memory and imagination.",
    image:art4
  }

];



const Gallery =()=>{


const [activeCategory,setActiveCategory]=useState("All");


const categories=[
"All",
"Traditional",
"Illustration"
];


const filteredArtworks =
activeCategory==="All"
?
artworks
:
artworks.filter(
art=>art.category===activeCategory
);



return (

<section

id="gallery"

className="
relative
min-h-screen
py-32
overflow-hidden
bg-[#F9E7E3]
"

>

<div
className="
absolute
top-10
left-0
w-[450px]
h-[450px]
rounded-full
bg-[#ED97A0]/20
blur-[130px]
"
/>


<div
className="
absolute
bottom-0
right-0
w-[500px]
h-[500px]
rounded-full
bg-[#E3BAB6]/40
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




{/* Heading */}

<div

className="
text-center
mb-20
animate-reveal
"

>


<p

className="
text-[#A66466]
text-xs
uppercase
tracking-[0.5em]
mb-5
"

>

The Collection

</p>



<h2

className="
font-serif
text-5xl
md:text-6xl
text-[#4b3535]
"

>

Stories

<span

className="
italic
text-[#A66466]
"

>

 in Bloom

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

Hand crafted illustrations and traditional artwork
created from imagination, nature and emotion.

</p>


</div>







{/* Filters */}

<div

className="
flex
justify-center
gap-10
mb-20
"

>


{
categories.map(category=>(

<button

key={category}

onClick={()=>setActiveCategory(category)}

className={`
text-xs
uppercase
tracking-[0.35em]
transition-all
duration-500

${
activeCategory===category
?
"text-[#A66466]"
:
"text-[#A66466]/40 hover:text-[#A66466]"
}

`}

>

{category}

</button>

))

}


</div>







{/* Artwork Wall */}

<div

className="
grid
md:grid-cols-2
gap-16
"

>


{

filteredArtworks.map((art,index)=>(


<div

key={art.id}

className={`

group
relative
overflow-hidden
rounded-[3rem]

bg-white

shadow-[0_30px_90px_rgba(166,100,102,0.15)]

animate-reveal

${index%2!==0 ? "md:translate-y-16":""}

hover:-translate-y-3

transition-all
duration-1000

`}

>


<div

className="
overflow-hidden
"

>

<img

src={art.image}

alt={art.title}

className="
w-full
h-[520px]
object-cover

transition-transform
duration-[2500ms]
ease-out

group-hover:scale-105

"

/>

</div>






{/* Permanent subtle gradient */}

<div

className="
absolute
inset-0
bg-gradient-to-t
from-[#A66466]/80
via-transparent
to-transparent

opacity-0

group-hover:opacity-100

transition-opacity
duration-700

"

/>







{/* Artwork info */}

<div

className="
absolute
bottom-0
left-0

p-10

text-white

opacity-0

translate-y-10

group-hover:opacity-100

group-hover:translate-y-0

transition-all
duration-700

"

>


<p

className="
text-[10px]
uppercase
tracking-[0.4em]
text-[#F9E7E3]
mb-4
"

>

{art.category}

</p>



<h3

className="
text-3xl
font-serif
italic
"

>

{art.title}

</h3>



<p

className="
mt-4
text-sm
text-white/80
max-w-sm
"

>

{art.description}

</p>


</div>



</div>


))

}


</div>







{/* Bottom Archive */}

<div

className="
mt-24
text-center
"

>

<p

className="
font-serif
italic
text-2xl
text-[#A66466]
"

>

More stories are waiting to bloom...

</p>


</div>



</div>

<Cherryblossom />
</section>

);


};


export default Gallery;