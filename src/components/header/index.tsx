import HeaderLogo from './components/header-logo';
// import HeaderNav from './components/header-nav';
import HeaderTools from './components/header-tools';
import { useState } from 'react';

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#a4d0f7] py-5 transition-colors duration-500 dark:bg-[#D1E8FC]">
      <div className="relative m-auto flex w-full items-center justify-between px-3 sm:px-3 xl:px-6 2xl:px-32">
        <HeaderLogo setIsMenuActive={setIsMenuActive} />
        {/* <HeaderNav /> */}
        <HeaderTools isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
      </div>
      <div
        className={`absolute left-0 top-full z-[0] w-full transition-all duration-300 ease-in-out ${
          isMenuActive ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* <HeaderMenu isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} /> */}
      </div>
    </header>
  );
};

export default Header;
