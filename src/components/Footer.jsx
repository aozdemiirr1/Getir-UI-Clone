import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faGlobe } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <footer className='bg-white border-t mt-20 py-5 pl-3 lg:pl-0 lg:py-20 flex flex-col'>
        <div className="flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-between container mx-auto border-b pb-10">
            <div className="flex flex-col gap-y-5">
                <h4 className=' text-purple-700 text-xl'>Getir'i İndir!</h4>
                <a href="#"><img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" /></a>
                <a href="#"><img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" /></a>
                <a href="#"><img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" /></a>
            </div>
            <div className="flex flex-col gap-y-5 text-gray-500">
                <h4 className=' text-purple-700 text-xl'>Getir'i Keşfet</h4>
                <a href="#">Hakkımızda</a>
                <a href="#">Kariyer</a>
                <a href="#">Teknoloji Kariyerleri</a>
                <a href="#">İletişim</a>
                <a href="#">Sosyal Sorumluluk Projeleri</a>
                <a href="#">Basın Bültenleri</a>
            </div>
            <div className="flex flex-col gap-y-5 text-gray-500">
                <h4 className=' text-purple-700 text-xl'>Yardıma mı ihtiyacın var?</h4>
                <a href="#">Sıkça Sorulan Sorular</a>
                <a href="#">Kişisel Verilerin Korunması</a>
                <a href="#">Gizlilik Politikası</a>
                <a href="#">Kullanım Koşulları</a>
                <a href="#">Çerez Politikası</a>
                <a href="#">İşlem Rehberi</a>
            </div>
            <div className="flex flex-col gap-y-5 text-gray-500">
                <h4 className=' text-purple-700 text-xl'>İş Ortağımız Ol</h4>
                <a href="#">Bayimiz Olun</a>
                <a href="#">Deponu Kirala</a>
                <a href="#">GetirYemek Restoranı Ol</a>
                <a href="#">GetirÇarşı İşletmesi Ol</a>
                <a href="#">Zincir Restoranlar</a>
            </div>
            <a href="#"><img src="https://cdn.getir.com/getirweb-images/common/etbis.png" alt="" /></a>
        </div>
        <div className="flex flex-col lg:flex-row justify-between lg:items-center container mx-auto pt-10">
            <div className="flex flex-row gap-x-4 ">
                <span className='text-gray-500'>© 2024 Getir</span>
                <a href="#" className='text-purple-400'>Bilgi Toplumu Hizmetleri</a>
            </div>
            <a href="#" className='flex flex-row gap-x-3 items-center border border-gray-300 w-28 px-3 hover:bg-purple-100 text-gray-500 hover:text-purple-500'>
                <FontAwesomeIcon icon={faGlobe} />
                <div>Türkçe (TR)</div>
            </a>
        </div>
    </footer>
  )
}

export default Footer