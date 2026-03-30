import Button from '@/utils/Button/Button';
import { ChangeLangAndThemeContainerStyles, } from '../../header.styles';
import { Link } from 'react-router-dom';
import useHeaderToolsLogic from '../../hooks/header-tools-logic';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown, MenuProps, Space } from 'antd';
import i18n from 'i18next';

import enFlag from './image/usa.png';
import kaFlag from './image/ka.png';
import ruFlag from './image/ru.png';

interface HeaderToolsProps {
  isMenuActive: boolean;
  setIsMenuActive: (state: boolean) => void;
}

const HeaderTools: FC<HeaderToolsProps> = () => {
  const { user, t } = useHeaderToolsLogic();
  const { t: Tprofile } = useTranslation('profile');

  const [lang, setLang] = useState('en');

  const languages = {
    en: { flag: enFlag },
    ka: { flag: kaFlag },
    ru: { flag: ruFlag },
  };

  const items: MenuProps['items'] = Object.entries(languages).map(([key, value]) => ({
    key,
    label: (
      <span className="flex items-center gap-2">
        <img src={value.flag} alt={key} className="h-5 w-5 rounded-sm object-cover" />
      </span>
    ),
  }));

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    const selectedLang = e.key;

    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);

    localStorage.setItem('lang', selectedLang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('lang');

    if (savedLang) {
      setLang(savedLang);
      i18n.changeLanguage(savedLang);
    }
  }, []);

  return (
    <div className={ChangeLangAndThemeContainerStyles()}>
      <Dropdown menu={{ items, onClick: handleMenuClick }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space className="flex cursor-pointer items-center gap-2 rounded-md bg-[#f792a3] p-[0.55rem]">
            <img
              src={languages[lang as keyof typeof languages].flag}
              alt={lang}
              className="h-5 w-5 rounded-sm object-cover"
            />
          </Space>
        </a>
      </Dropdown>

      {/* <div onClick={changeTheme} className={ChangeThemeStyles()}>
        <span>{themeIcon}</span>
      </div> */}

      <div className="block">
        {user ? (
          <Link to={'/profile'}>
            <Button className='bg-[#f792a3]' style={{backgroundColor: "#f792a3"}}>{Tprofile('profile')}</Button>
          </Link>
        ) : (
          <Link to={`/login`}>
            <Button style={{backgroundColor: "#f792a3"}}>{t('headerLogin')}</Button>
          </Link>
        )}
      </div>
{/* 
      <div
        onClick={() => setIsMenuActive(!isMenuActive)}
        className="block cursor-pointer text-3xl lg:hidden"
      >
        {isMenuActive ? <IoClose /> : <FiMenu />}
      </div> */}
    </div>
  );
};

export default HeaderTools;
