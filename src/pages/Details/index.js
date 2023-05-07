import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { state } = useLocation();
  const produto = state.img;
  return (
    <main className="flex justify-center gap-9">
      <div className="bg-orange-500 border border-orange-400 w-60 p-3">
        <h2 className="text-yellow-200 font-semibold">Detalhes: {state.nome}</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis aliquid
          sunt maxime eveniet voluptatum, impedit maiores eos nisi
          exercitationem earum nam, amet sequi iusto quia autem suscipit
          cupiditate iste dolorum?
        </p>
      </div>
      <div className="border border-orange-400">
        <img
          className="w-96 m-9"
          src={require(`../../assets/${produto}`)}
          alt="produto"
        />
      </div>
    </main>
  );
};

export default Details;
