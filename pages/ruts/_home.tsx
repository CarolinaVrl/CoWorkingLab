import Hero from '@/components/Hero';
import SeamlessService from '@/components/Seamless-Service';
import ValuableInvest from '@/components/Valuable-Invest';
import Link from 'next/link';
import Navbar from '../../components/Nav-bar';

function Home() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/ruts/_auth">Ahth</Link>
        </li>
        <li>
          <Link href="/ruts/_home-application">Application</Link>
        </li>
      </ul>
      <Navbar />
      <main className="bg-blueSky w-full h-full">
        <h1 className="font-semibold text-nunito text-[41px] py-[141px]">
          Let's go it together!
        </h1>
        <section className=" flex flex-col gap-10">
          <Hero />
          <ValuableInvest />
          <SeamlessService />
        </section>
      </main>
    </>
  );
}

export default Home;

// pruebas de steven
