import { ReactNode } from 'react';
interface titleCard {
  children: ReactNode;
}
function TitleCardHome({ children }: titleCard) {
  return (
    <h2 className="text-blueDark text-xl font-bold font-nunito ">{children}</h2>
  );
}

export default TitleCardHome;
