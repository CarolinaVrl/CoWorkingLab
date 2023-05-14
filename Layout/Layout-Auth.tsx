import Ruts_menu from '@/components/Menu';

function LayoutHome({ children }: { children: React.ReactNode }) {


  return (
    <div>
      <style jsx>{
        `
          .box_imgs{
            width: 100%;
            height: 53vh;
            top: 80%;
            background-image: url(/imgs_auth/rectangulo_1.svg);     
        }
        @media only screen and (min-width: 768px){
          .box_imgs{
            width: 100%;
            height: 10%;
            top: 90%;
            background-image: url(/imgs_auth/rectangulo_2.svg);     
        }
        }
          `
      }</style>
      <Ruts_menu />
      {children}
      <div className='box_imgs bg-no-repeat absolute z-[-2] bg-cover'>

      </div>
    </div>
  );
}

export default LayoutHome;
