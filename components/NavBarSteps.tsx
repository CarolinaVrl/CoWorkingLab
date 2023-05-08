import Image from 'next/image';
import mexico from '../public/flgMexico.svg';

function NavBarSteps() {
  return (
    <div className="h-[113px] bg-blueSky flex w-full items-center px-8 gap-[15px] ">
      <h2 className="font-nunito font-bold text-3xl">resimex</h2>
      <Image src={mexico} height={35} alt="" width={35}></Image>
    </div>
  );
}

export default NavBarSteps;
