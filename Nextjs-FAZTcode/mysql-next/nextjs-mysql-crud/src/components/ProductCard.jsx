import Link from "next/link";

function ProductCard({ product }) {
  return (
    <>
      <Link
        className="bg-white rounded-lg mb-3 border-orange-500 hover:bg-orange-500 hover:cursor-context-menu "
        href={`/products/${product.id}`}
      >
        {product.image && (
          <img
            src={product.image}
            className="w-auto h-2/3 rounded-lg m-auto "
            alt="aca va tu imagen "
          />
        )}
        <div className="p-4">
          <h2 className="text-lg text-yellow-400 font-bold">{product.name}</h2>
          <p className="">{product.description}</p>
          <h2 className="text-2xl text-slate-500"> $ {product.price}</h2>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
