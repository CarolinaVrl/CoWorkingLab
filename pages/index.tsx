import LayoutHome from '@/Layout/Layout-Home';
import Hero from '@/components/Hero';
import SeamlessService from '@/components/Seamless-Service';
import SenMessageHome from '@/components/SenMessageHome';
import ValuableInvest from '@/components/Valuable-Invest';
import WhyChoose from '@/components/Why-Choose';
import { useEffect, useState } from 'react';

export default function Index() {
  const [peer, setPeer] = useState(false);
  const whoWhidt = () => {
    if (window.innerWidth <= 900) {
      setPeer(true);
    }
  };
  useEffect(() => {
    whoWhidt();
  }, []);
  let title = 'Lets go it together!';
  let title2 = 'We love to help you!';
  return (
    <>
      <LayoutHome>
        <h1
          id="top"
          className="font-semibold text-nunito text-center text-[41px] py-[141px] md:peer2"
        >
          {peer ? title : title2}
        </h1>
        <section className="px-6 flex flex-col gap-10">
          <Hero />
          <ValuableInvest />
          <SeamlessService />
          <WhyChoose />
        </section>
        <SenMessageHome />
      </LayoutHome>
    </>
  );
}
