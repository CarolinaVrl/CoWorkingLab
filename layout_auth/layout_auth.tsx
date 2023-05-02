import Image from 'next/image';
import Ruts_menu from '@/pages/ruts';

function LayoutHome({ children }: {children: React.ReactNode}) {
  return (
    <div>
      <style jsx>{
            `
          .contento{
            position: fixed;
            width: 83%;
            height: 100%;
            top: 45vh;
            z-index: -1;
          }`
        }</style>
        <Ruts_menu/>
      <main> {children}</main>
     <div className='contento'>
     <Image alt=""  src={'/imgs_auth/rectangulo_2.svg'} fill/>
     </div>
    </div>
  );
}

export default LayoutHome;
