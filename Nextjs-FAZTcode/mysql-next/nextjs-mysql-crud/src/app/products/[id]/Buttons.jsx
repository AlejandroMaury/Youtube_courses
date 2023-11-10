"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

function Buttons({ productId }) {
  const router = useRouter();
  return (
    <>
      <div className="flex gap-x-4 justify-end mt-3">
        <button
          className=" text-white bg-red-500 hover:bg-green-500 py-3 px-3 rounded"
          onClick={async () => {
            if (
              confirm(
                "vas a eliminar este productionBrowserSourceMaps, ¿Estas seguro?"
              )
            ) {
              const res = await axios.delete(`/api/products/${productId}`);
              if (res.status == 204) {
                console.log("funciono esta maricada");
                // router.refresh();
                // router.push("/products");
              }
            }
          }}
        >
          Delete
        </button>
        <button
          className="text-white bg-sky-500 hover:bg-green-500 py-3 px-3 rounded"
          onClick={() => {
            router.push(`/products/edit/${productId}`);
          }}
        >
          Edit
        </button>
      </div>
    </>
  );
}

export default Buttons;
