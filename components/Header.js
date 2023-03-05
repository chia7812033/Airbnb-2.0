import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";

import { DateRangePicker } from "react-date-range";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setnoOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  return (
    <header
      className='sticky top-0 z-50 grid grid-cols-3 bg-white
    shadow-md p-5 md:px-10'
    >
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className='relative flex items-center h-10 cursor-pointer my-auto'
      >
        <Image
          src='https://links.papareact.com/qd3'
          alt='airbnb-logo'
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
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          className='flex-grow pl-2 pr-3 bg-transparent outline-none text-small
           text-gray-600 placeholder-gray-400'
          type='text'
          placeholder={placeholder ? placeholder : 'Start your search'}
        />
        <SearchIcon
          className='hidden md:inline-flex h-8 bg-red-400
         text-white rounded-full p-2 cursor-pointer'
        />
      </div>

      {/* right */}
      <div className='flex items-center justify-end space-x-4 text-gray-400'>
        <p className='hidden md:inline-flex'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div
          className='flex items-center justify-center space-x-2
        border-2 border-gray-200 rounded-full p-2'
        >
          <MenuIcon className='h-6 cursor-pointer' />
          <UserCircleIcon className='h-6 cursor-pointer' />
        </div>
      </div>

      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto mt-10'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'>
              Number of Guests
            </h2>

            <UsersIcon className='h-5' />
            <input
              value={noOfGuests}
              onChange={(e) => setnoOfGuests(e.target.value)}
              min={1}
              type='number'
              className='w-12 pl-2 text-lg outline-none text-red-400'
            />
          </div>
          <div className='flex'>
            <button onClick={resetInput} className='flex-grow text-gray-500'>
              Cancel
            </button>
            <button onClick={search} className='flex-grow text-red-400'>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
