import Image from 'next/image';
import arrow from '../public/arrow.png';
import email from '../public/mailhome.svg';
function FooterHome() {
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
        <ul className=" text-white underline font-medium text-sm font-mulish flex flex-col gap-4 md:hidden">
          <li>Terms and Condition</li>
          <li>Privacy polity</li>
          <li>All right reserved</li>
        </ul>
      </div>
      <div className="hidden md:flex relative">
        <div className="w-[203px] flex flex-col right-0 items-center justify-center absolute bottom-16 h-[203px] rounded-full bg-white">
          <h2 className="text-blueLight text-nunito font-medium text-3xl">
            Say, <br />
            Hello!
          </h2>
          <div className="absolute bottom-0 right-5 w-12 h-12 bg-blueLight rounded-full flex items-center justify-center">
            <Image alt="" height={20.53} width={20.56} src={arrow} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterHome;
