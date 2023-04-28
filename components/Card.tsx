import { ReactNode } from 'react';
interface iCard {
  children: ReactNode;
}
function Card({ children }: iCard) {
  return (
    <div className="w-[351px] flex flex-col gap-3 bg-white text-center shadow-md  py-8 rounded-[10px] px-7  md:w-64 h-56">
      {children}
    </div>
  );
}

export default Card;
