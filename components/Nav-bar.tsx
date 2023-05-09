import Image from 'next/image';
import mexico from '../public/imgs_users/flag_Mexico.png';
function Navbar() {
  return (
    <div className="bg-blueSky flex justify-between   items-center pt-10 md:px-24">
      <div className="flex">
        <h2 className="text-3xl  px-5 font-bold font-nunito">resimex</h2>
        <Image alt="" width={35} height={35} src={mexico} />
      </div>
      <div className="hidden md:flex ">
        <ul className="flex gap-8 font-medium font-nunito">
          <li>Home</li>
          <li>Testimonies</li>
          <li>Contacts</li>
        </ul>
      </div>
      <button className="hidden md:flex rounded-xl items-center justify-center h-11 w-[157px] bg-blueLight">
        <h2 className="text-white text-base r">Get started</h2>
      </button>
    </div>
  );
}

export default Navbar;
