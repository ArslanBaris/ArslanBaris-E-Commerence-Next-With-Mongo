"use client"
import Image from "next/image"
import { Rating } from "@mui/material"
import textClip from "@/utils/TextClip"
import { useRouter } from "next/navigation"

export const ProductCard = ({ product }: { product: any }) => {
    const router = useRouter()
    

    let productRating = product?.reviews?.reduce((acc: number, review: any) => acc + review.rating, 0) / product?.reviews?.length 

    return (
        <div onClick={()=> router.push(`/product/${product.id}`)} className="w-[240px] shadow-lg p-2 rounded-lg ">
            <div className="relative h-[150px]">
                <Image src={product.image} alt="" fill className="object-contain" />
            </div>
            <div className="text-center mt-2 space-y-1">
                <div>{textClip(product.name)}</div>
                <Rating name="read-only" value={productRating} readOnly />
                <div className="text-orange-600 font-bold text-lg md:text-xl">{product.price} ₺</div>
            </div>
        </div>
    )
}
