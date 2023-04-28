import Image from 'next/image';
import Imagen from '../public/twoPerson.png';
import Title from './Title';
function ValuableInvest() {
  return (
    <div className="bg-white flex flex-col items-center justify-center  md:flex-row w-full px-60 gap-5">
      <Image className="  " alt="" src={Imagen} width={405} />

      <div className="p-6 flex flex-col gap-5">
        <Title> The most valuable investment you may ever make</Title>
        <div className="w-7 h-2 bg-blueLight"></div>
        <div className="flex font-light text-base flex-col font-nunito gap-5">
          <p>
            Resimex is a multidisciplinary firm offering bespoke residence and
            citizenship solutions in Mexico.
          </p>
          <p>
            Whether it’s matching you to your ideal investment, Golden Visa
            program or tax benefit, we help investors successfully uproot their
            lives and lifestyles.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ValuableInvest;
