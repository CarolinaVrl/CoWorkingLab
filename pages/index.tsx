import LayoutHome from '@/Layout/Layout-Home';
import Hero from '@/components/Hero';
import SeamlessService from '@/components/Seamless-Service';
import SenMessageHome from '@/components/SenMessageHome';
import ValuableInvest from '@/components/Valuable-Invest';
import WhyChoose from '@/components/Why-Choose';

export default function Index() {
  return (
    <>
      <LayoutHome>
        <h1 className="font-semibold text-nunito text-center text-[41px] py-[141px]">
          Lets go it together!
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
