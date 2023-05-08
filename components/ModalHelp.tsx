import Image from 'next/image';
import closeImage from '../public/close.svg';
import TextCardHome from './Text-card-home';
function ModalHelp(prop: { visible: boolean; closed: any }) {
  const { visible, closed } = prop;
  if (visible !== true) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 w-full h-full   ">
      <div className="fixed inset-0 rounded-[10px] shadow-lg m-auto overflow-hidden  w-[285px] h-[380px]  bg-blueSky">
        <div className="relative flex flex-col p-8 gap-[26px] justify-center">
          <Image
            onClick={closed}
            className="absolute right-4 top-4"
            height={14}
            width={14}
            alt=""
            src={closeImage}
          />
          <h2 className=" font-bold font-nunito text-left text-xl text-blueDark">
            Help & frequency <br /> questions
          </h2>
          <TextCardHome>
            Lifestyle choices vary, which is why we take the time to learn about
            your individual situation and requirements.
          </TextCardHome>
          <TextCardHome>
            We’ll assist you from start to finish, ensuring you have the insight
            and knowledge needed to succeed.
          </TextCardHome>
        </div>
      </div>
    </div>
  );
}

export default ModalHelp;
