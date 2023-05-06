import Ruts_menu from '@/components/Menu';
import Image from 'next/image';

function LayoutHome({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <style jsx>{
        `
          .box_imgs{
            position: fixed;
            width: 100%;
            height: 100%;
            top: 45vh;
            z-index: -1;
          }`
      }</style>
      <Ruts_menu />
      {children}
      <div className='box_imgs'>
        <Image alt="" src={'/imgs_auth/rectangulo_2.svg'} fill />
      </div>
    </div>
  );
}

export default LayoutHome;
