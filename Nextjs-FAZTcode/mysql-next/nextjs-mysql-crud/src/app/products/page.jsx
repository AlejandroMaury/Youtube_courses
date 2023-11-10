/* ESTO es DESDE BDD LOCAl*/
// import { conn } from "@/libs/mysql";

// async function loadProducts() {
//   const result = await conn.query("SELECT * FROM product");
// }}
import ProductCard from "@/components/ProductCard";
import axios from "axios";

async function loadProducts() {
  const { data } = await axios.get("http://localhost:3000/api/products");
  //   console.log(data);
  return data;
}

async function ProductsPage() {
  const products = await loadProducts();
  return (
    <>
      <h1 className="text-bold text-amber-500 flex justify-center">
        Listado Productos{" "}
      </h1>
      ;
      <div className="m-10 grid grid-cols-4 gap-4 ">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default ProductsPage;
