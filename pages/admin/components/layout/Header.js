import { MoonIcon } from '@heroicons/react/24/solid';
import React from 'react';
import LogOutButton from './header/LogOutButton';
import Notifications from './header/Notifications';
import SearchBox from './header/SearchBox';
import UserMenu from './header/UserMenu';
import { useRouter } from 'next/router';

const Header = ({ mobileNavsidebar, setMobileNavsidebar }) => {
  const router = useRouter();
  return (
    <header className="flex items-center h-14 px-6 sm:px-10 bg-white">
      <MoonIcon
        className="h-12 stroke-slate-600 cursor-pointer sm:hidden"
        onClick={() => setMobileNavsidebar(!mobileNavsidebar)}
      />
      <SearchBox />

      <div className="flex flex-shrink-0 items-center ml-auto">
        <div className="border-l pl-3 ml-3 space-x-1">
          <Notifications />
          <span onClick={() => router.replace('/admin/')}>
            <LogOutButton />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
