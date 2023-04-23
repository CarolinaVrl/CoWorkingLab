import Image from 'next/image';
import mexico from '../public/imgs_users/flag_Mexico.png';
function Navbar() {
  return (
    <div className="bg-blueSky flex items-center pt-10">
      <h2 className="text-3xl px-5 font-bold font-nunito">resimex</h2>
      <Image alt="" width={35} height={35} src={mexico} />
    </div>
  );
}

export default Navbar;
