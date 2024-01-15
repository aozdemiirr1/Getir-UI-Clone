import React from 'react'

const Getircarsi = () => {
  return (
    <>
        <div className='relative banner'>
            <img className='w-full brightness-50' src="https://cdn.getir.com/getirweb_images/common/hero_posters/locals_2.jpeg" alt="" />
            <div className="absolute top-52 left-10 lg:left-36 flex flex-row justify-between items-center text-white">
                <div className="bannertext flex flex-col gap-y-10">
                <img className='w-44' src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
                <p className='text-4xl'>GetirYemek'le indirimi yakala!</p>
                </div>
            </div>
        </div>
        <div className='bg-gray-100 lg:py-10'>
            <div className="flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row items-center justify-between container mx-auto mt-20">
                <div className="flex homecard flex-col items-center gap-y-4 border border-white bg-white px-2 py-5">
                    <img src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" alt="" />
                    <h4  className='text-2xl text-purple-500'>Her siparişine bir kampanya</h4>
                    <p className='text-gray-500'>Getir’de vereceğin her siparişe uygun bir kampanya <br /> <span className='flex justify-center'>bulabilirsin.</span> </p>
                </div>
                <div className="flex homecard flex-col items-center gap-y-4 border border-white bg-white px-2 py-5">
                    <img src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg" alt="" />
                    <h4  className='text-2xl text-purple-500'>Dakikalar içinde kapında</h4>
                    <p className='text-gray-500'>Getir’le siparişin dakikalar içinde kapına gelir.</p>
                </div>
                <div className="flex homecard flex-col items-center gap-y-4 border border-white bg-white px-2 py-5">
                    <img src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg" alt="" />
                    <h4  className='text-2xl text-purple-500'>Binlerce çeşit mutluluk</h4>
                    <p className='text-gray-500'>Getir’de binlerce çeşit arasından seçimini<br /> <span className='flex justify-center'>yapabilirsin.</span> </p>
                </div>
            </div>
            <div className="restoransahibi py-12 px-5 lg:px-20 flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-between items-center container mx-auto mt-20">
                <div className="flex flex-col gap-y-5">
                    <h3 className='text-4xl text-purple-700'>İşletme sahibi olmak ister misiniz?</h3>
                    <p className='text-xl text-gray-500'>GetirYemek restoran iş ortaklarından biri olun, işinizi daha az maliyetle büyütün, müşteri memnuniyetini artırın.</p>
                </div>
                <a href="#" className='text-purple-700  text-2xl px-5 h-14 flex items-center border rounded-lg bg-yellow-400'>Hemen Başvur</a>
            </div>
        </div>
    </>
  )
}

export default Getircarsi