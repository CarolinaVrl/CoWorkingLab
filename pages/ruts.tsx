import Link from "next/link";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Typography,
  } from "@material-tailwind/react";
import Image from "next/image";

const ruts = () => {
    return (
        <>
        <style jsx>{
            `.menu_provisional{
                text-align: center;
            }`
        }</style>
        <div className="menu_provisional">
      <Menu placement="top-start">
      <MenuHandler>
      <div className="flex">
        <h2 className="text-3xl  px-5 font-bold font-nunito">resimex</h2>
        <Image alt="" width={35} height={35} src={'/imgs_users/flag_Mexico.png'} />
      </div>
      </MenuHandler>
      <MenuList>
        <MenuItem className="flex items-center gap-2">
            <Avatar
          variant="circular"
          alt="candice wu"
          className="h-4 w-4"
          src="/developer_full_stack/user_1.jpg"
        />
          <Typography variant="small" className="font-normal">
          <Link href="/">Home</Link>
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2">
        <Avatar
          variant="circular"
          alt="candice wu"
          className="h-4 w-4"
          src="/developer_full_stack/user_5.jpg"
        />
          <Typography variant="small" className="font-normal">
          <Link href="/auth">Auth</Link>
          </Typography>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
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
          <Link href="/application">Application</Link>
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
        
    </div>
        </>
    );
};

export default ruts;