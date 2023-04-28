import Image from 'next/image';
import arrow from '../public/arrow.png';
import background from '../public/backgroun-home-city.svg';
import mobilebackground from '../public/backgroun-mobile-version.svg';
function SenMessageHome() {
  return (
    <div className="w-full relative    ">
      <Image
        src={mobilebackground}
        alt=""
        className="flex w-full bg-cover md:hidden"
      />
      <Image className="hidden md:flex w-full  " src={background} alt="" />
      <div className="absolute w-[389px] rounded-2xl  flex flex-col items-center gap-16 justify-center h-[410px] left-0 top-0 bottom-0 right-0 m-auto bg-white">
        <div className=" flex flex-col items-start justify-center gap-9 px-9 ">
          <div className="relative w-full ">
            <input
              id="name"
              className="w-[315px] py-1 border-b-[#2E02494D] border-b-solid border-2 border-opacity-30
             outline-none focus:border-b-blueLight peer"
              placeholder=""
              type="text"
            />
            <label
              className=" absolute left-0 text-[#2E02494D] pl-2 font-mulish font-medium text-opacity-30 top-1"
              htmlFor="name"
            >
              Your Name
            </label>
          </div>
          <div className="relative">
            <input
              id="email"
              className="w-[315px] py-1 border-b-[#2E02494D] border-b-solid border-2 border-opacity-30
             outline-none focus:border-b-blueLight peer"
              placeholder=""
              type="text"
            />
            <label
              className="absolute left-0 text-[#2E02494D] pl-2 font-mulish font-medium text-opacity-30 top-1"
              htmlFor="email"
            >
              Your Email
            </label>
          </div>
          <div className="relative">
            <input
              id="message"
              className="w-[315px] py-1 border-b-[#2E02494D] border-b-solid border-2 border-opacity-30
             outline-none focus:border-b-blueLight peer"
              placeholder=""
              type="text"
            />
            <label
              className="absolute left-0 text-[#2E02494D] pl-2 font-mulish font-medium text-opacity-30 top-1 peer-focus:text-xs peer-focus:-top-3 transition-all duration-950"
              htmlFor="message"
            >
              Your message
            </label>
          </div>
        </div>
        <button className="flex items-center justify-center gap-3 rounded-xl  w-[250px] h-[61px] bg-blueLight text-white font-nunito">
          <Image src={arrow} alt="" />
          <h2>SEND MESSAGE</h2>
        </button>
      </div>
    </div>
  );
}

export default SenMessageHome;
