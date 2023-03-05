import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import MapboxMap from "../components/MapboxMap";
import { format } from "date-fns";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";

async function getData() {
  const res = await fetch("/api/searchResult");
  return res.json();
}

function Search() {
  const router = useRouter();
  let { location, startDate, endDate, noOfGuests } = router.query;
  if (!startDate) {
    startDate = new Date()
  }
  if (!endDate) {
    endDate = new Date()
  }

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  const [searchResult, setSearchResult] = useState([]);
  const locations = searchResult.map((item) => ({
    latitude: item.lat,
    longitude: item.long,
  }));

  useEffect(() => {
    async function loadData() {
      const res = await getData();
      setSearchResult(res.searchResult);
    }
    loadData();
  }, []);

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>
            300+ Stays - {range} - for {noOfGuests} guests
          </p>

          <h1 className='text-3xl font-semibold mt-2 mb-6'>
            Stays in {location}
          </h1>

          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'>Type of Place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More filters</p>
          </div>

          <div className='flex flex-col'>
            {searchResult.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={nanoid()}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>

        <section className='hidden xl:inline-flex xl:min-w-[600px] xl:h-screen xl:sticky xl:top-20'>
          <MapboxMap searchResult={searchResult} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;
