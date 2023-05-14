import Ruts_menu from '@/components/Menu';

function LayoutHome({ children }: { children: React.ReactNode }) {


  return (
    <div>
      <style jsx>{
        `
          .box_imgs{
            width: 100%;
            height: 10%;
            position: absolute;
            top: 90%;
            z-index: -2;
            background-image: url(/imgs_auth/rectangulo_2.svg);
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
        }
          
          `
      }</style>
      <Ruts_menu />
      {children}
      <div className='box_imgs'>

      </div>
    </div>
  );
}

export default LayoutHome;
