import Image from 'next/image';
import background from '../public/Background_image.png';
import users from '../public/archivos';
import arrow from '../public/arrow.png';
function Hero() {
  return (
    <div className="">
      <section className="relative flex items-center pb-36">
        <Image
          alt=""
          className="-z-15 bottom-50 absolute right-24"
          src={background}
          width={496}
          height={341}
        />
        <div className="relative">
          <div className="w-[203px] flex flex-col items-center justify-center relative -left-4 h-[203px] rounded-full bg-white">
            <h2 className="text-blueLight text-nunito font-medium text-2xl">
              Say, <br />
              Hola!
            </h2>
            <div className="absolute bottom-0 right-5 w-12 h-12 bg-blueLight rounded-full flex items-center justify-center">
              <Image alt="" height={20.53} width={20.56} src={arrow} />
            </div>
          </div>
        </div>

        <div className="text-sm font-nunito">
          <h2 className="font-bold">
            Global citizenship and residency at your fingertips
          </h2>
          <p>Everyone has the opportunity to drive, no matter where home is.</p>
        </div>
      </section>
      <section className="flex justify-center items-center gap-4 p-4 ">
        {users.map((user) => (
          <div className="relative">
            <Image src={user.user} alt="" width={64} height={64} />
            <Image
              className="absolute top-0 -right-3"
              src={user.flag}
              alt=""
              width={26}
              height={26}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Hero;
