import { Link } from 'react-router-dom';

const HeaderLogo = ({ setIsMenuActive }: { setIsMenuActive: (state: boolean) => void }) => {
  return (
    <div>
      <Link to={`/`} onClick={() => setIsMenuActive(false)}>
        <div className="flex items-center gap-x-2">
          <div className="h-16 w-20 cursor-pointer logo-bg text-2xl text-white lg:h-16 lg:w-20"></div>
          <h1 className="hidden text-2xl text-white sm:hidden md:hidden lg:block xl:block 2xl:block font-bold">
            SQUADTRIP
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default HeaderLogo;
