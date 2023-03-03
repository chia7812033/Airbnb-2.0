import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

import Image from "next/image";

function Header() {
  return (
    <header
      className='sticky top-0 z-50 grid grid-cols-3 bg-white
    shadow-md p-5 md:px-10'
    >
      {/* left */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src='https://links.papareact.com/qd3'
          alt="airbnb-logo"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "left",
          }}
        />
      </div>

      {/* middle */}
      <div
        className='flex items-center md:border-2
        rounded-full py-2 px-3 md:shadow-sm'
      >
        <input
          className='flex-grow pl-2 pr-3 bg-transparent outline-none text-small
           text-gray-600 placeholder-gray-400'
          type='text'
          placeholder='Start your search'
        />
        <SearchIcon
          className='hidden md:inline-flex h-8 bg-red-400
         text-white rounded-full p-2 cursor-pointer'
        />
      </div>

      {/* right */}
      <div className='flex items-center justify-end space-x-4 text-gray-400'>
        <p className="hidden md:inline-flex">Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div
          className='flex items-center justify-center space-x-2
        border-2 border-gray-200 rounded-full p-2'
        >
          <MenuIcon className='h-6 cursor-pointer' />
          <UserCircleIcon className='h-6 cursor-pointer' />
        </div>
      </div>
    </header>
  );
}

export default Header;
