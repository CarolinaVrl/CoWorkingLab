import Image from 'next/image';
import arrow from '../public/arrow.png';
import email from '../public/mailhome.svg';
function FooterHome() {
  return (
    <div className="w-full bg-blueDark h-[149px] md:[198px] flex px-24 justify-between">
      <div className="hidden md:flex items-center gap-2">
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center ">
          <Image alt="" src={email} height={30} width={30} />
        </div>
        <h2 className="text-white">contact.forwork@gmail.com</h2>
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
