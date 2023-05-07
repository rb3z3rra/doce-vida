import React, { useState } from "react";
import Product from "../Product";

const ProductList = () => {
  const vitrine = [
    {
      id: 1,
      nome: "Baguete Francesa",
      preco: "0,50",
      tipo: "Pão",
      img: "baguete.jpg"
    },
    {
      id: 2,
      nome: "Esfirra",
      preco: "6,00",
      tipo: "Salgado",
      img: "esfirra.jpg"
    },
    {
      id: 3,
      nome: "Torta de Fruta - fatia",
      preco: "12,0",
      tipo: "Doce",
      img: "torta.jpg"
    },
  ];
  const [categoriaTab, setCategoriaTab] = useState("Pães");

  return (
    <section className="my-12 max-w-screen-xl mx-auto px-3">
      {/* menu de categoria */}
      <div className="flex items-center justify-center space-x-6">
        <p
          className={
            categoriaTab === "Pães" ? "active-menu-tab bg-primary" : "menu-tab"
          }
          onClick={() => setCategoriaTab("Pães")}
        >
          Pães
        </p>
        <p
          className={
            categoriaTab === "Salgados"
              ? "active-menu-tab bg-primary"
              : "menu-tab"
          }
          onClick={() => setCategoriaTab("Salgados")}
        >
          Salgados
        </p>
        <p
          className={
            categoriaTab === "Doces" ? "active-menu-tab bg-primary" : "menu-tab"
          }
          onClick={() => setCategoriaTab("Doces")}
        >
          Doces
        </p>
      </div>
      {/* lista de produtos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
        {vitrine.map((produto, index) => (
            
          <Product produto={produto} key={index}/>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
