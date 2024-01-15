import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faUser, faUserPlus, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className='flex flex-row justify-between items-center container mx-auto text-gray-300 py-3'>
        <div className={`menu ${isMenuOpen ? 'flex acik' : 'hidden'} lg:flex flex-row gap-x-10 items-center`}>
          <Link to="/" className={`menu-link ${location.pathname === '/' ? 'secili' : ''}`}>getir</Link>
          <Link to="/getiryemek" className={`menu-link ${location.pathname === '/getiryemek' ? 'secili' : ''}`}>getiryemek</Link>
          <Link to="/getirbuyuk" className={`menu-link ${location.pathname === '/getirbuyuk' ? 'secili' : ''}`}>getirbüyük</Link>
          <Link to="/getirsu" className={`menu-link ${location.pathname === '/getirsu' ? 'secili' : ''}`}>getirsu</Link>
          <Link to="/getircarsi" className={`menu-link ${location.pathname === '/getircarsi' ? 'secili' : ''}`}>getirçarşı</Link>
        </div>

        <div className="flex flex-row gap-x-10 items-center">
          <Link to='#' className="hidden lg:flex flex-row items-center gap-x-2">
            <FontAwesomeIcon icon={faGlobe} />
            <div>Türkçe (TR)</div>
          </Link>
          <Link to='#' className="hidden lg:flex flex-row items-center gap-x-2">
            <FontAwesomeIcon icon={faUser} />
            <div>Giriş yap</div>
          </Link>
          <Link to='#' className="hidden lg:flex flex-row items-center gap-x-2">
            <FontAwesomeIcon icon={faUserPlus} />
            <div>Kayıt ol</div>
          </Link>
          <FontAwesomeIcon
            className={`text-3xl flex lg:hidden pl-4 md:pl-0 cursor-pointer ${isMenuOpen ? 'acik' : ''}`}
            icon={faBars}
            onClick={toggleMenu}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
