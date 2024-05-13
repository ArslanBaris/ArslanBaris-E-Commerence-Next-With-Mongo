"use client"
const Category = () => {

    const categoryList = [
        { id: 1, name: 'Ayakkabı' },
        { id: 2, name: 'Giyim' },
        { id: 3, name: 'Elektronik' },
        { id: 4, name: 'Spor' },
        { id: 5, name: 'Kitap' },
        { id: 6, name: 'Mobilya' },
        { id: 7, name: 'Kozmetik' },
    ]

  return (
    <div className="flex items-center justify-center px:3 md:px-10 gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto">
        {
            categoryList.map((category) => (
                <div className="border text-slate-500 rounded-full min-w-[120px] flex flex-1 items-center justify-center cursor-pointer px-4 py-2 text-center" key={category.id}>{category.name}</div>
            ))
        }
    </div>
  )
}

export default Category