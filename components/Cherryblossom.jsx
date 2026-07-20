import React from "react";

const Cherryblossom = () => {

  const petals = Array.from({ length: 25 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

      {petals.map((_, index) => (
        <span
          key={index}
          className="cherry-petal"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 8}s`
          }}
        />
      ))}

    </div>
  );
};

export default Cherryblossom;