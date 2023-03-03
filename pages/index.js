import { useEffect, useState } from "react";

import Banner from "../components/Banner";
import Head from "next/head";
import Header from "../components/Header";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import { nanoid } from "nanoid";

const Home = () => {
  const [exploreData, setExploreData] = useState();
  const [cardData, setCardData] = useState();

  useEffect(() => {
    async function loadData() {
      const request = await fetch("/api/explore");
      const result = await request.json();
      setExploreData(result.exploreData);
    }
    loadData();
  }, []);

  useEffect(() => {
    async function loadData() {
      const request = await fetch("/api/card");
      const result = await request.json();
      setCardData(result.cardData);
    }
    loadData();
  }, []);

  return (
    <div>
      <Head>
        <title>Airbnb 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map((item) => (
              <SmallCard
                key={nanoid()}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3">
            {cardData?.map((item) => (
              <MediumCard key={nanoid()} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
