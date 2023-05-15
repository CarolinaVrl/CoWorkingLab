import LayoutHome from '@/Layout/Layout-Auth';
import { fort_Password } from '@/lib/service/auth.service';
import {
    Button,
    Card,
    Input,
    Typography
} from "@material-tailwind/react";
import cookies from 'js-cookie';
import Link from "next/link";
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";


const ResetPassword = () => {

    const router = useRouter()

    const { register, handleSubmit, formState: { isValid } } = useForm({
        defaultValues: {
            email: '',
        },
        mode: 'onChange'
    });
    const onSubmit = (data: {
        email: string;
    }) => {
        fort_Password({ email: data.email }).then((resp) => {
            cookies.set('app-token', resp.data.token)
            router.push('/auth/new-password')
            console.log(resp.data)
        }).catch((error) => {
            alert('ocurrio un error')
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers)
        })
    }
    console.log('isValid', isValid)



    return (
        <>
            <style jsx>{
                `
          .box_up{
            text-align: -webkit-center;
          }
          .inputs_title{
            margin: -5px 0px -16px 0vh;
            display: flex;
            font-size: 12px;
          }
          .minBoxShadow{
            box-shadow: 0 4px 6px -1px rgb(0 55 255 / 10%), 0 1px 3px 3px rgb(0 46 255 / 10%);
            height: 44vh;
            padding: 3vh 0vh;
          }
          `
            }</style>

            <LayoutHome>
                <div className='box_up  mt-[10rem]'>

                    <div className='minBoxShadow w-[83%] tablet:w-[69vh]'>
                        <Card className="w-[3vh] items-center" shadow={false}>

                            <Card color="transparent" shadow={false}>
                                <Typography variant="h4" color="blue-gray" className="font-nunito text-[#000000]">
                                    Reset your password
                                </Typography>
                                <Typography color="gray" className="mt-1 font-mulish text-[#757575]">
                                    We send a link to reset <br /> you password to your email
                                </Typography>
                                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 font-nunito text-[12px]">
                                    <div className="mb-4 flex flex-col gap-6">
                                        <h1 className="inputs_title font-nunito text-[#000000]">Your email*</h1>
                                        <Input size="lg" label="Enter your email" {...register("email", { required: true })} />
                                    </div>


                                    <Button className="mt-6" fullWidth type="submit">SEND MAIL</Button>


                                </form>
                            </Card>
                        </Card>
                    </div>
                    <Typography color="gray" className="mt-4 text-center font-normal font-nunito text-[12px]">
                        Or Don’t have an account?{" "}
                        <Link
                            href="/auth/sing-up"
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

export default ResetPassword;

