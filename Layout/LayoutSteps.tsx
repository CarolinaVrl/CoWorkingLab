import FooterHome from '@/components/FooterHome';
import { ReactNode } from 'react';
import NavBarSteps from '../components/NavBarSteps';
interface layout {
  children: ReactNode;
}
function LayoutSteps({ children }: layout) {
  return (
    <div>
      <NavBarSteps />
      <main>{children}</main>
      <FooterHome />
    </div>
  );
}

export default LayoutSteps;
