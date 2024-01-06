import React from 'react'

const Content = () => {
  return (
    <>
        <div className='kategori container mx-auto mt-20 flex- flex-col gap-y-4'>
            <h4 className='text-gray-500 font-bold text-lg'>Kategoriler</h4>
            <div className="ml-10 mt-5 flex flex-row gap-x-6 gap-y-8 items-center flex-wrap">
                <a href="#" className='flex flex-col items-center gap-y-3 border border-white px-3 pb-3 text-gray-500 hover:bg-purple-100 hover:text-purple-500'>
                    <img src="../public/kategori1.png" alt="" />
                    <div className='font-bold'>Su & İçecek</div>
                </a>
                <a href="#" className='flex flex-col items-center gap-y-3 border border-white px-3 pb-3 text-gray-500 hover:bg-purple-100 hover:text-purple-500'>
                    <img src="../public/kategori2.png" alt="" />
                    <div className='font-bold'>Meyve & Sebze</div>
                </a>
                <a href="#" className='flex flex-col items-center gap-y-3 border border-white px-3 pb-3 text-gray-500 hover:bg-purple-100 hover:text-purple-500'>
                    <img src="../public/kategori3.png" alt="" />
                    <div className='font-bold'>Fırından</div>
                </a>
                <a href="#" className='flex flex-col items-center gap-y-3 border border-white px-3 pb-3 text-gray-500 hover:bg-purple-100 hover:text-purple-500'>
                    <img src="../public/kategori4.png" alt="" />
                    <div className='font-bold'>Süt Ürünleri</div>
                </a>
                <a href="#" className='flex flex-col items-center gap-y-3 border border-white px-3 pb-3 text-gray-500 hover:bg-purple-100 hover:text-purple-500'>
                    <img src="../public/kategori5.png" alt="" />
                    <div className='font-bold'>Atıştırmalık</div>
                </a>
                <a href="#" className='flex flex-col items-center gap-y-3 border border-white px-3 pb-3 text-gray-500 hover:bg-purple-100 hover:text-purple-500'>
                    <img src="../public/kategori6.png" alt="" />
                    <div className='font-bold'>Dondurma</div>
                </a>
                <a href="#" className='flex flex-col items-center gap-y-3 border border-white px-3 pb-3 text-gray-500 hover:bg-purple-100 hover:text-purple-500'>
                    <img src="../public/kategori7.png" alt="" />
                    <div className='font-bold'>Temel Gıda</div>
                </a>
                <a href="#" className='flex flex-col items-center gap-y-3 border border-white px-3 pb-3 text-gray-500 hover:bg-purple-100 hover:text-purple-500'>
                    <img src="../public/kategori8.png" alt="" />
                    <div className='font-bold'>Kahvaltılık</div>
                </a>
                <a href="#" className='flex flex-col items-center gap-y-3 border border-white px-3 pb-3 text-gray-500 hover:bg-purple-100 hover:text-purple-500'>
                    <img src="../public/kategori9.png" alt="" />
                    <div className='font-bold'>Yiyecek</div>
                </a>
                <a href="#" className='flex flex-col items-center gap-y-3 border border-white px-3 pb-3 text-gray-500 hover:bg-purple-100 hover:text-purple-500'>
                    <img src="../public/kategori10.png" alt="" />
                    <div className='font-bold'>Fit & Form</div>
                </a>
                <a href="#" className='flex flex-col items-center gap-y-3 border border-white px-3 pb-3 text-gray-500 hover:bg-purple-100 hover:text-purple-500'>
                    <img src="../public/kategori11.png" alt="" />
                    <div className='font-bold'>Kişisel Bakım</div>
                </a>
                <a href="#" className='flex flex-col items-center gap-y-3 border border-white px-3 pb-3 text-gray-500 hover:bg-purple-100 hover:text-purple-500'>
                    <img src="../public/kategori12.png" alt="" />
                    <div className='font-bold'>Ev Bakım</div>
                </a>

                <a href="#" className='flex flex-col items-center gap-y-3 border border-white px-3 pb-3 text-gray-500 hover:bg-purple-100 hover:text-purple-500'>
                    <img src="../public/kategori13.png" alt="" />
                    <div className='font-bold'>Ev & Yaşam</div>
                </a>
                <a href="#" className='flex flex-col items-center gap-y-3 border border-white px-3 pb-3 text-gray-500 hover:bg-purple-100 hover:text-purple-500'>
                    <img src="../public/kategori14.png" alt="" />
                    <div className='font-bold'>Teknoloji</div>
                </a>
                <a href="#" className='flex flex-col items-center gap-y-3 border border-white px-3 pb-3 text-gray-500 hover:bg-purple-100 hover:text-purple-500'>
                    <img src="../public/kategori15.png" alt="" />
                    <div className='font-bold'>Evcil Hayvan</div>
                </a>
                <a href="#" className='flex flex-col items-center gap-y-3 border border-white px-3 pb-3 text-gray-500 hover:bg-purple-100 hover:text-purple-500'>
                    <img src="../public/kategori16.png" alt="" />
                    <div className='font-bold'>Bebek</div>
                </a>
                <a href="#" className='flex flex-col items-center gap-y-3 border border-white px-3 pb-3 text-gray-500 hover:bg-purple-100 hover:text-purple-500'>
                    <img src="../public/kategori17.png" alt="" />
                    <div className='font-bold'>Cinsel Sağlık</div>
                </a>
            </div>
        </div>
        <div className="getirindir mt-20 flex flex-row justify-between items-center pl-20 container mx-auto">
            <div className="flex flex-col gap-y-4">
                <div className='text-white text-5xl'>Getiri'i İndir!</div>
                <p className='text-white text-2xl'>İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>
                <div className="flex flex-row gap-x-3">
                    <a href="#"><img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" /></a>
                    <a href="#"><img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" /></a>
                    <a href="#"><img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" /></a>
                </div>
            </div>
            <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="" />
        </div>
        <div className="flex flex-row items-center justify-between container mx-auto mt-20">
            <div className="flex homecard flex-col items-center gap-y-4 border border-gray-300 bg-white px-2 py-5">
                <img src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" alt="" />
                <h4  className='text-2xl text-purple-500'>Her siparişine bir kampanya</h4>
                <p className='text-gray-500'>Getir’de vereceğin her siparişe uygun bir kampanya <br /> <span className='flex justify-center'>bulabilirsin.</span> </p>
            </div>
            <div className="flex homecard flex-col items-center gap-y-4 border border-gray-300 bg-white px-2 py-5">
                <img src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg" alt="" />
                <h4  className='text-2xl text-purple-500'>Dakikalar içinde kapında</h4>
                <p className='text-gray-500'>Getir’le siparişin dakikalar içinde kapına gelir.</p>
            </div>
            <div className="flex homecard flex-col items-center gap-y-4 border border-gray-300 bg-white px-2 py-5">
                <img src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg" alt="" />
                <h4  className='text-2xl text-purple-500'>Binlerce çeşit mutluluk</h4>
                <p className='text-gray-500'>Getir’de binlerce çeşit arasından seçimini<br /> <span className='flex justify-center'>yapabilirsin.</span> </p>
            </div>
        </div>
    </>
  )
}

export default Content