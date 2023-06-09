import Image from 'next/image';
import arrowUp from '../public/arrowUp.svg';
import Card from './Card';
import TextCardHome from './Text-card-home';
import Title from './Title';
import TitleCardHome from './Title-Card-home';

function WhyChoose() {
  return (
    <div className=" bg-white relative flex flex-col items-center gap-2 justify-center pb-[110px]">
      <Title>Why Choose Us</Title>

      <div className="w-7 h-2 bg-blueLight "></div>
      <div className="pt-8 flex flex-col gap-5 items-center justify-center md:flex-row">
        <Card>
          <TitleCardHome>Speed and Simplicity</TitleCardHome>
          <TextCardHome>
            World-class data centers and state-of-the-art security. Your credit
            card information will never be exposed to any government websites!
          </TextCardHome>
        </Card>
        <Card>
          <TitleCardHome>Secure and Safe</TitleCardHome>
          <TextCardHome>
            Easy, traveler-friendly application process. Simple and much less
            complicated than dealing with foreign governments.
          </TextCardHome>
        </Card>
        <Card>
          <TitleCardHome> Awesome support</TitleCardHome>

          <TextCardHome>
            Our customer support is ready to help 24/7. We want you to enjoy
            your travels and avoid the stress of getting a residence!
          </TextCardHome>
        </Card>
      </div>
      <div className="absolute bottom-[25px] right-[84px] flex items-center gap-[22px]">
        <Image alt="arrow" src={arrowUp} height={30} width={30} />
        <a className="font-mulish font-medium text-sm" href="#top">
          Back to top
        </a>
      </div>
    </div>
  );
}

export default WhyChoose;
