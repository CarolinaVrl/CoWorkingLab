
import LayoutHome from '@/layout_auth/layout_auth';
import Link from "next/link";
import {
    Button,
    Card,
    Typography,
    Input
} from "@material-tailwind/react";

const reset_password = () => {
    return (
        <>
            <style jsx>{
                `
          .box_up{
            text-align: -webkit-center;
            margin-top: 2rem;
          }
          .inputs_title{
            margin: -5px 0px -16px 0vh;
            display: flex;
            font-size: 12px;
          }
          .minBoxShadow{
            box-shadow: 0 4px 6px -1px rgb(0 55 255 / 10%), 0 1px 3px 3px rgb(0 46 255 / 10%);
            width: 69vh;
            height: 44vh;
            padding: 3vh 0vh;
          }
          `
            }</style>

            <LayoutHome>
                <div className='box_up'>

                    <div className='minBoxShadow'>
                        <Card className="w-[63vh] items-center" shadow={false}>

                            <Card color="transparent" shadow={false}>
                                <Typography variant="h4" color="blue-gray" className="font-nunito text-[#000000]">
                                    Reset your password
                                </Typography>
                                <Typography color="gray" className="mt-1 font-mulish text-[#757575]">
                                    We send a link to reset <br /> you password to your email
                                </Typography>
                                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 font-nunito text-[12px]">
                                    <div className="mb-4 flex flex-col gap-6">
                                        <h1 className="inputs_title font-nunito text-[#000000]">Your email*</h1>
                                        <Input size="lg" label="Enter your email" />
                                    </div>

                                    <Link href="/login/new_password">
                                        <Button className="mt-6" fullWidth>SEND MAIL</Button>
                                    </Link>

                                </form>
                            </Card>
                        </Card>
                    </div>
                    <Typography color="gray" className="mt-4 text-center font-normal font-nunito text-[12px]">
                        Or Don’t have an account?{" "}
                        <Link
                            href="/auth"
                            className="font-medium text-blue-500 transition-colors hover:text-blue-700 "
                        >
                            Sing Up
                        </Link>
                    </Typography>
                </div>
            </LayoutHome>


        </>
    );
};

export default reset_password;

