"use client";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import { processImage } from "@/libs/processImage";
//import { unlink } from "fs/promises";

function Formulario() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
  });

  const [file, setFile] = useState(null);
  const form = useRef(null);
  const router = useRouter();
  const params = useParams();

  const handleChange = (e) => {
    e.preventDefault();
    e.target.value;
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    //console.log(valor);
  };

  useEffect(() => {
    if (params.id) {
      axios.get(`/api/products/${params.id}`).then((res) => {
        // console.log(res);
        setProduct({
          name: res.data.name,
          description: res.data.description,
          price: res.data.price,
        });
      });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);

    if (file) {
      formData.append("image", file);
    }

    if (!params.id) {
      const res = await axios.post("/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      //console.log(res);
    } else {
      const res = await axios.put(`/api/products/${params.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      //console.log(res);
    }

    form.current.reset();
    router.refresh();
    router.push("/products");
  };

  return (
    <>
      <div className="flex justify-center ">
        <form
          className="bg-slate-200 shadow-md rounded-md px-8 pt-6 pb-5 mb-4 "
          onSubmit={handleSubmit}
          ref={form}
        >
          <label
            className="block text-yellow-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Product Name
          </label>
          <input
            autoFocus
            name="name"
            type="text"
            placeholder="name: "
            onChange={handleChange}
            value={product.name}
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
          <label
            className="block text-yellow-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Product Description
          </label>
          <textarea
            name="description"
            rows={3}
            placeholder="description: "
            onChange={handleChange}
            value={product.description}
            className="h-auto shadow appearance-none border rounded w-full py-2 px-3"
          />
          <label
            className="block text-yellow-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Product Price:
          </label>
          <input
            name="price"
            type="text"
            placeholder="$$ 000.00"
            onChange={handleChange}
            value={product.price}
            className="shadow appearance-none border rounded w-full py-2 px-3"
          />
          <label
            className="block text-yellow-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Product Image
          </label>
          <input
            type="file"
            className="shadow appearance-none rounded w-full py-2 px-3 mb-2"
            onChange={(e) => {
              e.preventDefault();
              setFile(e.target.files[0]);
            }}
          />
          {file && (
            <img
              className="w-fit object-contain m-5"
              src={URL.createObjectURL(file)}
              alt=""
            />
          )}

          <button className="bg-cyan-600 hover:bg-sky-700 text-white font-bold rounded py-2 px-4 mt-2">
            {params.id ? "Update Product" : "Create Product"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Formulario;
