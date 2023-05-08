import FooterSteps from '@/components/FooterSteps';
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
      <FooterSteps />
    </div>
  );
}

export default LayoutSteps;
