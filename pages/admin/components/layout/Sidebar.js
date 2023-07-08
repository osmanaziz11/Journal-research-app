import React, { useRef } from 'react';
import OutsideClick from '../../../../utils/outsideClick';
import Nav from './sidebar/Nav';
import SettingButton from './sidebar/SettingButton';

const Sidebar = ({ mobileNavsidebar }) => {
  const sidebarRef = useRef(null);
  const sidebarOutsideClick = OutsideClick(sidebarRef);

  //console.log("sidebar Ref", sidebarRef)
  //console.log("sidebar Ref sidebarOutsideClick", sidebarOutsideClick)
  return (
    <aside
      className={`${
        mobileNavsidebar ? 'block' : 'hidden'
      } sm:flex sm:flex-col z-50 w-[60px]`}
      ref={sidebarRef}
    >
      <div className="flex-grow flex flex-col justify-between text-gray-400 bg-zinc-950">
        <Nav sidebarOutsideClick={sidebarOutsideClick} />
      </div>
    </aside>
  );
};

export default Sidebar;
