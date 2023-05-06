import LayoutHome from '@/Layout/Layout-Home';
import Hero from '@/components/Hero';
import SeamlessService from '@/components/Seamless-Service';
import SenMessageHome from '@/components/SenMessageHome';
import ValuableInvest from '@/components/Valuable-Invest';
import WhyChoose from '@/components/Why-Choose';
import Ruts_menu from '../components/Menu';

function Home() {
  return (
    <>
      <Ruts_menu />
      <LayoutHome>
        <main className="bg-blueSky w-full h-full">
          <h1 className="font-semibold text-nunito text-center text-[41px] py-[141px]">
            Lets go it together!
          </h1>
          <section className=" flex flex-col gap-10">
            <Hero />
            <ValuableInvest />
            <SeamlessService />
            <WhyChoose />
            <SenMessageHome />
          </section>
        </main>
      </LayoutHome>
    </>
  );
}

export default Home;

// pruebas de steven
