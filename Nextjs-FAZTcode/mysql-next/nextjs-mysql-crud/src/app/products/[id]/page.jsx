import axios from "axios";
import Buttons from "./Buttons";

async function loadProduct(productId) {
  const { data } = await axios.get(
    `http://localhost:3000/api/products/${productId}`
  );
  return data;
}

async function ProducPage({ params }) {
  const product = await loadProduct(params.id);
  return (
    <>
      <h1 className="text-white">Product page</h1>

      <section className="flex justify-center items-center h-[calc(100vh-10rem)]">
        <div className="flex  h-2/5">
          <div className="p-6 bg-blue-300 w-96 ">
            <h3 className="text-2xl font-bold">Name: {product.name}</h3>
            <p className="text-slate-800">Description: {product.description}</p>
            <h4 className="text-4xl">Price: $ {product.price}</h4>

            <Buttons productId={product.id} />
          </div>
          <img src={product.image} className=" rounded-lg  " alt="" />
        </div>
      </section>
    </>
  );
}

export default ProducPage;
