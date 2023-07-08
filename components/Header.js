import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="w-screen h-16 bg-zinc-950 flex justify-center items-center text-white">
      <div className="w-1/3 mx-10">
        <h1 className="text-white">LOGO.</h1>
      </div>
      <div className="w-2/3 px-10">
        <ul className="flex w-full justify-end">
          <Link href="/">
            <li className="mx-5 cursor-pointer">Home</li>
          </Link>
          <Link href="/journals">
            <li className="mx-5 cursor-pointer">Journals</li>
          </Link>
          <Link href="/about">
            <li className="mx-5 cursor-pointer">About</li>
          </Link>
          <Link href="/pricing">
            <li className="mx-5 cursor-pointer">Pricing</li>
          </Link>
          <Link href="/pricing">
            <li className="mx-5 cursor-pointer">Register</li>
          </Link>
          <Link href="/pricing">
            <li className="mx-5 cursor-pointer">Login</li>
          </Link>
          <Link href="/pricing">
            <li className="mx-5 cursor-pointer">Profile</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
