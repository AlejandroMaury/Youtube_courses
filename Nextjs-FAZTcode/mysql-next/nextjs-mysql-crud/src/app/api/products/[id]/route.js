import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";
import cloudinary from "@/libs/cloudinary";
import { processImage } from "@/libs/processImage";
import { unlink } from 'fs/promises'




export async function GET(req, { params }) {

    try {
        const result = await conn.query("SELECT * FROM product WHERE id = ?", [params.id,]);

        if (result.length === 0) {
            return NextResponse.json({
                message: "Producto no encontrado"
            },
                { status: 404 });
        }

        return NextResponse.json(result[0]);

    } catch (error) {
        return NextResponse.json({

            message: error.message
        },
            { status: 500 })

    }


};

export async function DELETE(req, { params }) {
    try {
        const result = await conn.query("DELETE FROM product WHERE id = ?", [params.id,]);

        if (result.affectedRows === 0) {
            return NextResponse.json({ message: "Producto no encontrado" }, { status: 404 });
        }
        return NextResponse.json(null, { status: 204 });

    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 })

    }
};



/*CODIGO DE GITHUB */
export async function PUT(request, { params }) {
    try {
        const data = await request.formData();
        const image = data.get("image");
        const updateData = {
            name: data.get("name"),
            price: data.get("price"),
            description: data.get("description"),
        };

        if (!data.get("name")) {
            return NextResponse.json(
                {
                    message: "Name is required",
                },
                {
                    status: 400,
                }
            );
        }

        if (image) {
            const buffer = await processImage(image);

            const res = await new Promise((resolve, reject) => {
                cloudinary.uploader
                    .upload_stream(
                        {
                            resource_type: "image",
                        },
                        async (err, result) => {
                            if (err) {
                                console.log(err);
                                reject(err);
                            }

                            resolve(result);
                        }
                    )
                    .end(buffer);
            });

            updateData.image = res.secure_url;

            const result = await conn.query("UPDATE product SET ? WHERE id = ?", [
                updateData,
                params.id,
            ]);

            if (result.affectedRows === 0) {
                return NextResponse.json(
                    {
                        message: "Producto no encontrado",
                    },
                    {
                        status: 404,
                    }
                );
            }

            const updatedProduct = await conn.query(
                "SELECT * FROM product WHERE id = ?",
                [params.id]
            );

            return NextResponse.json(updatedProduct[0]);
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                message: error.message,
            },
            { status: 500 }
        );
    }
}









// export async function PUT(req, { params }) {
//     try {
//         const data = await req.formData()
//         const image = data.get('image')
//         const updateData = {
//             name: data.get('name'),
//             description: data.get('description'),
//             price: data.get('price'),

//         }


//         if (!data.get('name')) {
//             return NextResponse.json({ message: "Name is requerid" }, {
//                 status: 400,
//             })

//         };


//        if (image) {

//            const filePath = await processImage(image)
//           const res = await cloudinary.uploader.upload(filePath)
//           updateData.image = res.secure_url

//            if (res) {
//                await unlink(filePath);
//            }

//        }    
//         const result = await conn.query('UPDATE product SET ? WHERE id = ?', [
//             updateData,
//             params.id
//         ]);
//         if (result.affectedRows === 0) {
//             return NextResponse.json({
//                 message: "Producto no encontrado",
//             }, {
//                 status: 404,
//             });
//         }
//         const updateProduct = await conn.query("SELECT * FROM product WHERE id = ?", [params.id,]);
//         return NextResponse.json(updateProduct[0]);
//     } catch (error) {
//         return NextResponse.json({ message: error.message }, { status: 500 })
//     }
// };



