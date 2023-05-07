import React from "react";

const Home = () => {
  return (
    <div className="">
      <section className="home-banner w-full m-2">
        <div className="flex flex-col items-center justify-center h-full bg-gray-700/60">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Como a cozinha da vovó
          </h1>
        </div>
      </section>

      <section>
        <h2 className="text-center mt-6 text-3xl font-permanent text-amber-800">Pães</h2>
        <div className="mt-3 flex items-center bg-white p-6 m-3">
          <div className="pao-banner w-1/2"></div>
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
      </section>

      <section>
        <h2 className="text-center mt-6 text-3xl font-permanent text-amber-800">Doces</h2>
        <div className="mt-3 flex items-center bg-white p-6 m-3">
          <div className=" w-1/2 text-justify mx-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            aliquid sunt maxime eveniet voluptatum, impedit maiores eos nisi
            exercitationem earum nam, amet sequi iusto quia autem suscipit
            cupiditate iste dolorum? Expedita voluptas fugiat, ut minima vero
            aliquid amet necessitatibus incidunt itaque mollitia ipsam corrupti
            consequuntur adipisci temporibus, alias aliquam. Ab fugiat eveniet
            alias doloremque dolorem, doloribus ullam enim natus illum.
          </div>
          <div className="doces-banner w-1/2"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
