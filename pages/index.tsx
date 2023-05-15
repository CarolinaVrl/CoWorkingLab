import LayoutHome from '@/Layout/Layout-Home';
import Hero from '@/components/Hero';
import SeamlessService from '@/components/Seamless-Service';
import SenMessageHome from '@/components/SenMessageHome';
import ValuableInvest from '@/components/Valuable-Invest';
import WhyChoose from '@/components/Why-Choose';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import animation from '../public/Animacion team.json';

export default function Index() {
  const defaultAnimation = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      SVGAnimatedPreserveAspectRatio: 'xMidYMid slice',
    },
  };
  const [peer, setPeer] = useState(false);
  const whoWhidth = () => {
    if (window.innerWidth <= 900) {
      setPeer(true);
    }
  };
  useEffect(() => {
    whoWhidth();
  }, []);
  let title = 'Lets go it together!';
  let title2 = 'We love to help you!';
  return (
    <>
      <LayoutHome>
        <div className="hidden md:flex">
          <Lottie
            options={{ animationData: animation, ...defaultAnimation }}
          ></Lottie>
        </div>

        <h1
          id="top"
          className="font-semibold text-nunito text-center text-[41px] py-[141px] md:hidden"
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
