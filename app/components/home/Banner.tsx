import Image from "next/image"

const Banner = () => {
  return (
    <div className="h-[237px] flex items-center justify-center">
        <div className="h-[137px] relative w-full">
            <Image src="/hepsi.jpeg" alt=""  className="object-cover" fill  />
        </div>
    </div>
  )
}

export default Banner