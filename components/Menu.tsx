import {
  Avatar,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';

const Menu_ruts = () => {
  return (
    <>
      <style jsx>{
        `.menu_provisional{
          text-align: center;
          position: absolute;
          top: 11px;
          left: 4px;
          z-index: 2;
            }`
      }
      </style>

      <div className="menu_provisional">
        <Menu placement="top-start">
          <MenuHandler>
            <div className="flex">
              <h2 className="text-3xl  px-5 font-bold font-nunito">resimex</h2>
              <Image
                alt=""
                width={35}
                height={35}
                src={'/imgs_users/flag_Mexico.png'}
              />
            </div>
          </MenuHandler>
          <MenuList>
            <Link href="/">
              <MenuItem className="flex items-center gap-2">
                <Avatar
                  variant="circular"
                  alt="candice wu"
                  className="h-4 w-4"
                  src="/developer_full_stack/user_1.jpg"
                />
                <Typography variant="small" className="font-normal">
                  Home
                </Typography>
              </MenuItem>
            </Link>
            <Link href="/auth/sing-up">
              <MenuItem className="flex items-center gap-2">
                <Avatar
                  variant="circular"
                  alt="candice wu"
                  className="h-4 w-4"
                  src="/developer_full_stack/user_5.jpg"
                />
                <Typography variant="small" className="font-normal">
                  Auth
                </Typography>
              </MenuItem>
            </Link>
            <hr className="my-2 border-blue-gray-50" />
            <Link href="/application">
              <MenuItem className="flex items-center gap-2">
                <Avatar
                  variant="circular"
                  alt="candice wu"
                  className="h-4 w-4"
                  src="/developer_full_stack/user_2.jpg"
                />
                <Avatar
                  variant="circular"
                  alt="candice wu"
                  className="h-4 w-4"
                  src="/developer_full_stack/user_4.jpg"
                />
                <Typography variant="small" className="font-normal">
                  Application
                </Typography>
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </div>
    </>
  );
};

export default Menu_ruts;
