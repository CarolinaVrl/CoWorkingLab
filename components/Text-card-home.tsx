import { ReactNode } from 'react';
interface itextcard {
  children: ReactNode;
}
function TextCardHome({ children }: itextcard) {
  return (
    <p className="font-mulish font-light text-[#000000] text-base ">
      {children}
    </p>
  );
}

export default TextCardHome;
