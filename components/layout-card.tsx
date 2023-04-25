import { ReactNode } from 'react';
interface card {
  children: ReactNode;
}
function layoutCard({ children }: card) {
  return (
    <div className="bg-white rounded-[10px] flex flex-col items-center justify-center gap-5 py-7 px-8">
      {children}
    </div>
  );
}

export default layoutCard;
