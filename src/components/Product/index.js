import { Link, useLocation } from "react-router-dom";

const Product = ({ produto }) => {
  const { state } = useLocation();
  const image = produto.img;
  console.log(state);

  return (
    <div className="bg-white border border-gray-100 transition transform duration-700 hover: scale-105 p-4 rounded-lg relative">
      <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm px-4 py-1 inline-block mb-4">
        {produto.tipo}
      </span>
      <img
        className="product-vitrine mx-auto transform transition duration-300 hover: scale-105"
        src={require(`../../assets/${image}`)}
        alt="Imagem do Produto"
      />
      <div className="flex flex-cols items-end my-3 space-y-2"></div>
      <p className="text-gray-500 text-sm text-center">{produto.nome}</p>
      <h2 className="text-gray-900 text-2xl font-bold">R$ {produto.preco}</h2>
      <button className=" bg-primary text-white px-8 py-2 rounded-full transition transform duration-300 hover: scale-105">
        <Link to={`/details/${produto.id}`} state={produto}>
          Detalhes
        </Link>
      </button>
    </div>
  );
};

export default Product;
