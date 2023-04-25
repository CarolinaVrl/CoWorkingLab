import { ReactNode } from 'react';
interface layoutCard {
  children: ReactNode;
}
function layoutCard({ children }: layoutCard) {
  return (
    <div className="bg-white rounded-[10px] flex flex-col items-center justify-center gap-5 py-7 px-8">
      <div className="w-[68px] h-16 rounded-full bg-[#D9D9D9]"></div>
      <h2>title</h2>
      <div className="w-7 h-2 bg-blueLight"></div>
      <div className="flex font-light text-center text-base flex-col font-nunito ">
        <p>I'm text</p>
      </div>
    </div>
  );
}

export default layoutCard;
