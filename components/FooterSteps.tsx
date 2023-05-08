import Image from 'next/image';
import email from '../public/mailhome.svg';
function FooterSteps() {
  return (
    <div className="w-full bg-blueDark h-[149px] md:[198px] flex px-24 justify-between">
      <div className="flex w-full justify-between  md:flex items-center gap-2">
        <div className="flex gap-2 items-center">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center ">
            <Image alt="" src={email} height={30} width={30} />
          </div>
          <h2 className="hidden  md:inline text-white">
            contact.forwork@gmail.com
          </h2>
        </div>

        <ul className=" text-white underline font-medium text-sm font-mulish flex flex-col gap-4 md:flex-row">
          <li>Terms and Condition</li>
          <li>Privacy polity</li>
          <li>All right reserved</li>
        </ul>
      </div>
    </div>
  );
}

export default FooterSteps;
