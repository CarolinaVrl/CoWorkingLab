import Image from 'next/image';
import Link from 'next/link';

const Menu_ruts = () => {
  return (
    <>
      <style jsx>{
        `.menuHome{
          text-align: center;
          top: 13px;
          left: 8px;
          z-index: 2;
            }`
      }
      </style>
      <Link href="/">
        <div className="absolute flex menuHome">
          <h2 className="text-3xl  px-5 font-bold font-nunito">resimex</h2>
          <Image
            alt=""
            width={35}
            height={35}
            src={'/imgs_users/flag_Mexico.png'}
          />
        </div>
      </Link>

    </>
  );
};

export default Menu_ruts;
