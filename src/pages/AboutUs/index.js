import React from "react";
import  cafe from "../../assets/cafe.jpg"

const AboutUs = () => {
  return (
    <main className=" h-full">
      <div className="mt-3 flex items-center bg-white p-6 m-3">
          <div className="w-1/2">
            <img src={cafe} alt="Cafe"/>
          </div>
          <div className=" w-1/2 text-justify mx-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            aliquid sunt maxime eveniet voluptatum, impedit maiores eos nisi
            exercitationem earum nam, amet sequi iusto quia autem suscipit
            cupiditate iste dolorum? Expedita voluptas fugiat, ut minima vero
            aliquid amet necessitatibus incidunt itaque mollitia ipsam corrupti
            consequuntur adipisci temporibus, alias aliquam. Ab fugiat eveniet
            alias doloremque dolorem, doloribus ullam enim natus illum.
          </div>
        </div>
    </main>
  );
};

export default AboutUs;
