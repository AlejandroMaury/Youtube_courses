import { conn } from "@/libs/mysql";
import { NextResponse } from "next/server";
import { unlink } from 'fs/promises'
import cloudinary from "@/libs/cloudinary";
import { processImage } from "@/libs/processImage";


export async function GET() {
    try {
        const results = await conn.query("SELECT * FROM product");

        return NextResponse.json(results);

    } catch (error) {
        return NextResponse.json({ message: error.message, }, { status: 500, })
    }
};


export async function POST(req) {
    try {

        const data = await req.formData();
        const image = data.get("image");


        if (!data.get('name')) {
            return NextResponse.json({ message: 'Name is required' }, {
                status: 400
            })
        }


        if (!image) {
            return NextResponse.json({
                message: 'Image is required',
            }, {
                status: 400
            })
        }

        /*codigo copiado de github*/

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

        //

        //console.log(res)

        // const filePath = await processImage(image);

        // const res = await cloudinary.uploader.upload(filePath)

        // if (res) {
        //     await unlink(filePath);
        // }

        // console.log(data)
        const result = await conn.query("INSERT INTO product SET ?", {
            name: data.get("name"),
            description: data.get("description"),
            price: data.get("price"),
            image: res.secure_url,

        })

        //console.log(result)

        return NextResponse.json({
            name: data.get("name"),
            description: data.get("description"),
            price: data.get("price"),
            id: result.insertId,

        });
    } catch (error) {
        //console.log('Esto sucede por', error);
        return NextResponse.json(

            { message: `Error en api/products/route ${error.message}` },


            { status: 500 }

        )
    }

};




