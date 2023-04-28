import FooterHome from '@/components/Footer-home';
import Navbar from '@/components/Nav-bar';
import { ReactNode } from 'react';

interface layoutHome {
  children: ReactNode;
}
function LayoutHome({ children }: layoutHome) {
  return (
    <div>
      <Navbar />
      <main> {children}</main>
      <FooterHome />
    </div>
  );
}

export default LayoutHome;
