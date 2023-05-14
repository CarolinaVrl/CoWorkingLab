import LayoutHome from '@/Layout/Layout-Auth';
import Swipers from '@/components/swipers';
import { Button, Card, Checkbox, Input, Typography } from "@material-tailwind/react";
import Link from "next/link";

import { sing_Up } from '@/lib/service/auth.service';
import cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";

import SwiperText from './textSwiper';

// import Swal from 'sweetalert2';
const SingUp_Card = () => {
    // const alertsucces = Swal.fire({
    //     title: 'Información guardada con éxito!',
    //     text: 'Something went wrong!',
    //     icon: 'success',
    //     iconColor: '#30a702'
    // })
    const router = useRouter()

    const { register, handleSubmit, formState: { isValid } } = useForm({
        defaultValues: {

            email: '',
            password: ''
        },
        mode: 'onChange'
    });
    const onSubmit = (data: {
        email: string;
        password: string
    }) => {
        sing_Up({ email: data.email, password: data.password }).then((resp) => {
            cookies.set('app-token', resp.data.token)
            router.push('/application')
            console.log(resp.data)
            // alertsucces
            // console.log(cookies)
        }).catch((error) => {
            alert('ocurrio un error')
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers)
            // alertsucces
        })
    }
    console.log('isValid', isValid)

    return (
        <>
            <style jsx>{
                `
        .box_auth{
          
          grid-template-columns: 1fr 59vh;
          width: 100%;
          height: 100%;
         
        }
          .box_sing_up{
            text-align: -webkit-center;
            margin-top: 5rem;
          }
          .inputs_title{
            margin: -5px 0px -16px 0vh;
            display: flex;
            font-size: 12px;
          }
          .inputs_title2{
            margin: -22px 0px -16px 0vh;
            display: flex;
            font-size: 12px;
          }

          `
            }</style>
            <div className="box_auth tablet:grid">
                <LayoutHome>
                    <div className='box_sing_up mt-[4rem]'>
                        <Card className="w-[63vh] items-center">
                            <Card color="transparent" shadow={false}>
                                <Typography variant="h4" color="blue-gray" className="font-nunito text-[#07469C]">
                                    Create an account
                                </Typography>
                                <Typography color="gray" className="mt-1 font-mulish text-[#000000]">
                                    And start your trip with us.
                                </Typography>
                                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 font-nunito text-[12px]">
                                    <div className="mb-4 flex flex-col gap-6">
                                        <h1 className="inputs_title2 font-mulish text-[#000000]" >Your email*</h1>
                                        <Input size="lg" label="Please enter your email" {...register("email", { required: true })} />
                                        <h1 className="inputs_title font-mulish text-[#000000]">Create username*</h1>
                                        <Input size="lg" label="Enter your username" />
                                        <h1 className="inputs_title font-mulish text-[#000000]"  >Password*</h1>
                                        <Input type="password" size="lg" label="Enter password" {...register("password", { required: true })} />
                                    </div>
                                    <div className='flex'>
                                        <Checkbox />
                                        <p>
                                            By creating an account you are agreeing to our
                                            <a
                                                href="#"
                                                className="font-medium transition-colors hover:text-blue-500 font-nunito text-[12px]"
                                            >
                                                &nbsp;Terms and Conditions and Privacy Policy
                                            </a>
                                        </p>
                                    </div>
                                    <Button className="mt-6" fullWidth type="submit"> Sing Up</Button>
                                    <Typography color="gray" className="mt-4 text-center font-normal font-nunito text-[12px]">
                                        Already have a member?{" "}
                                        <Link
                                            href="/auth/login"
                                            className="font-medium text-blue-500 transition-colors hover:text-blue-700 font-nunito text-[12px]"
                                        >
                                            Log in
                                        </Link>
                                    </Typography>
                                </form>
                            </Card>
                        </Card>
                    </div>
                </LayoutHome>

                <Swipers />


            </div>
            <SwiperText />
        </>
    );
};

export default SingUp_Card;