import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faGlobe,faUser,faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header>
        <div className='flex flex-row justify-between items-center container mx-auto text-gray-300 py-3'>
            <div className="menu flex flex-row gap-x-10 items-center">
                <a href="#" className='secili'>getir</a>
                <a href="#">getiryemek</a>
                <a href="#">getirbüyük</a>
                <a href="#">getirsu</a>
                <a href="#">getirçarşı</a>
            </div>
            <div className="flex flex-row gap-x-10 items-center">
                <a href='#' className="flex flex-row items-center gap-x-2">
                    <FontAwesomeIcon icon={faGlobe} />
                    <div>Türkçe (TR)</div>
                </a>
                <a href='#' className="flex flex-row items-center gap-x-2">
                    <FontAwesomeIcon icon={faUser} />
                    <div>Giriş yap</div>
                </a>
                <a href='#' className="flex flex-row items-center gap-x-2">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <div>Kayıt ol</div>
                </a>
            </div>
        </div>
    </header>
  )
}

export default Header