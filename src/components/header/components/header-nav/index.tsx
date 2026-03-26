import { DownOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';

const HeaderNav = () => {
  const { t } = useTranslation('header');
  const { pathname } = useLocation();

  const isActiveLink = (to: string) => pathname === to;

  const items: MenuProps['items'] = [
    {
      key: 'tours',
      label: (
        <NavLink
          to="/domestic-tours"
          className={isActiveLink('/tours') ? 'text-blue-300' : 'hover:text-blue-300'}
        >
          შიდა ტურები
        </NavLink>
      ),
    },
  ];

  return (
    <nav className="hidden gap-x-10 text-[19px] text-white sm:hidden lg:flex">
      <NavLink to="/" className={isActiveLink('/') ? 'text-blue-300' : 'hover:text-blue-300'}>
        {t('navHome')}
      </NavLink>

      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space className="cursor-pointer">
            <NavLink
              to="/tours"
              className={isActiveLink('/tours') ? 'text-blue-300' : 'hover:text-blue-300'}
            >
              {t('navTours')}
            </NavLink>
            <DownOutlined className="text-xs" />
          </Space>
        </a>
      </Dropdown>
    </nav>
  );
};

export default HeaderNav;
