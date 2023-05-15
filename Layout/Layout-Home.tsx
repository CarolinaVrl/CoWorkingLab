import FooterHome from '@/components/FooterHome';
import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';

interface layoutHome {
  children: ReactNode;
}
function LayoutHome({ children }: layoutHome) {
  return (
    <div>
      <Navbar />
      <main className="bg-blueSky w-[369px]  h-full "> {children}</main>

      <FooterHome />
    </div>
  );
}

export default LayoutHome;
