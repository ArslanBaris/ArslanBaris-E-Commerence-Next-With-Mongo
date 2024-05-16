"use client"

import Image from "next/image"
import PageContainer from "../containers/PageContainer"
import Counter from "../general/Counter"
import { useState } from "react"
import { Rating } from "@mui/material"
import Button from "../general/Button"
import Comment from "./Comment"
import Heading from "../general/Heading"

export type CardProductProps = {
    id: string,
    name: string,
    description: string,
    price: number
    quantity: number,
    image: string,
    inSock: boolean
}

const DetailClient = ({ product }: { product: any }) => {

    const [cardProduct, setCardProduct] = useState<CardProductProps>({
        id: product?.id,
        name: product?.name,
        description: product?.description,
        price: product?.price,
        quantity: 1,
        image: product?.image,
        inSock: product?.inStock
    })

    let productRating = product?.reviews?.reduce((acc: number, review: any) => acc + review.rating, 0) / product?.reviews?.length


    const increaseFunc = () => {
        if (cardProduct.quantity === 10) return
        setCardProduct({ ...cardProduct, quantity: cardProduct.quantity + 1 })
    }

    const decreaseFunc = () => {
        if (cardProduct.quantity === 1) return
        setCardProduct({ ...cardProduct, quantity: cardProduct.quantity - 1 })
    }

    return (
        <div className="my-10">
            <PageContainer>
                <div className="block md:flex gap-10 justify-center">
                    <div className="relative h-[200px] md:h-[400px] w-[200px] md:w-[400px] mb-3 md:mb-0">
                        <Image src={product?.image} alt="" fill />
                    </div>
                    <div className="w-full md:w-1/2 space-y-3">
                        <div className="text-xl md:text-3xl font-bold">{product?.name}</div>
                        <Rating name="read-only" value={productRating} readOnly />
                        <div className="text-xl text-slate-500">{product?.description}</div>

                        <div className="flex items-center gap-2">
                            <div>Stok:</div>
                            {
                                product?.inStock ? <div className="text-green-500">In Stock</div> : <div className="text-red-500">Out of Stock</div>
                            }
                        </div>
                        <Counter increaseFunc={increaseFunc} decreaseFunc={decreaseFunc} cardProduct={cardProduct} />
                        <div className="text-2xl font-bold text-orange-600">{product?.price} ₺</div>

                        <Button text="Add to Card" small onClick={() => { }} />

                    </div>
                </div>
                <Heading text="Comments" />
                <div>
                    {
                        product?.reviews?.map((review:any) => (
                            <Comment key={review.id} review={review} />
                        ))
                    }
                </div>
            </PageContainer>
        </div>
    )
}

export default DetailClient