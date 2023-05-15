
import LayoutHome from '@/Layout/Layout-Auth';
import {
    Button,
    Card,
    Typography,
} from "@material-tailwind/react";
import Link from "next/link";

const successful_password = () => {
    return (
        <>
            <style jsx>{
                `
          .box_up{
            text-align: -webkit-center;
          
          }
          .minBoxShadow{
            box-shadow: 0 4px 6px -1px rgb(0 55 255 / 10%), 0 1px 3px 3px rgb(0 46 255 / 10%);
            height: 35vh;
            padding: 3vh 0vh;
          }
          `
            }</style>

            <LayoutHome>
                <div className='box_up mt-[14rem]'>

                    <div className='minBoxShadow w-[83%] tablet:w-[69vh]'>
                        <Card className="w-[3vh] items-center" shadow={false}>

                            <Card color="transparent" shadow={false}>
                                <Typography variant="h4" color="blue-gray" className="font-nunito text-[#000000]">
                                    Successful password reset!
                                </Typography>
                                <Typography color="gray" className="mt-1 font-mulish text-[#757575]">
                                    You can use you new password<br />to login to your account 🙌
                                </Typography>
                                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 font-nunito text-[12px]">

                                    <Link href="/">
                                        <Button className="mt-6" fullWidth>LOGIN</Button>
                                    </Link>

                                </form>
                            </Card>
                        </Card>
                    </div>
                </div>
            </LayoutHome>


        </>
    );
};

export default successful_password;

