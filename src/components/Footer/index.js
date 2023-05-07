import React from "react";

const Footer = () => {
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  return (
    <footer className="border border-amber-600 w-full py-9 flex justify-center">
      <h2>{anoAtual}</h2>
    </footer>
  );
};

export default Footer;
