import Image from 'next/image';
import checked from '../public/checked.svg';
import close from '../public/close.svg';
function ModalSendMessage(props: { visible: boolean; close: any }) {
  if (!props.visible) return null;
  return (
    <div className="inset-0 fixed bg-black bg-opacity-30 ">
      <div className="fixed inset-0 m-auto rounded-[13px] bg-white w-[553px] h-[266px]">
        <div className="relative p-[46px] flex flex-col gap-[27px]">
          <Image alt="" src={checked} height={43} width={43} />
          <div className="flex flex-col gap-2">
            <h2 className="text-blueDark text-3xl  font-nunito">
              Información enviada con éxito!
            </h2>
            <h3 className="font-mulish text-base">
              Información enviada con éxito!
            </h3>
          </div>
          <div className="absolute top-10 right-10">
            <Image
              onClick={props.close}
              src={close}
              height={14}
              width={14}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalSendMessage;
