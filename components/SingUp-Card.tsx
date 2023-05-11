import LayoutHome from '@/Layout/Layout-Auth';
import Swipers from '@/pages/auth/swipers';

import {
    Button,
    Card,
    Checkbox,
    Input,
    Typography
} from "@material-tailwind/react";
import Link from "next/link";

import { login } from '@/lib/service/auth.service';

import { Form, Formik } from "formik";
import Cookies from 'js-cookie';
// import { useRouter } from 'next/router';


interface Values {
    email: string
    password: string
}

const SingUp_Card = () => {
    const initialValues: Values = { email: " ", password: " " }

    const submitUp = (data: { email: string, password: string }) => {
        login({ email: data.email, passuord: data.password }).then((res) => {
            Cookies.set('app-token', res.data.token)
            // useRouter().push('/application')
        }).catch(() => {
            alert('ocurrio un error')
        })
    }
    return (
        <>
            <style jsx>{
                `
        .box_auth{
          display: grid;
          grid-template-columns: 1fr 59vh;
          width: 100%;
          height: 100%;
         
        }
          .box_sing_up{
            text-align: -webkit-center;
            margin-top: 2rem;
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

            <div className="box_auth">


                <LayoutHome>
                    <div className='box_sing_up'>
                        <Formik initialValues={initialValues}
                            onSubmit={(
                                values: Values,
                            ) => { submitUp }}>

                            <Card className="w-[63vh] items-center">
                                <Card color="transparent" shadow={false}>
                                    <Typography variant="h4" color="blue-gray" className="font-nunito text-[#07469C]">
                                        Create an account
                                    </Typography>
                                    <Typography color="gray" className="mt-1 font-mulish text-[#000000]">
                                        And start your trip with us.
                                    </Typography>
                                    <Form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 font-nunito text-[12px]">

                                        <div className="mb-4 flex flex-col gap-6">
                                            <h1 className="inputs_title2 font-mulish text-[#000000]">Your email*</h1>
                                            <Input size="lg" label="Please enter your email" id="email" />
                                            <h1 className="inputs_title font-mulish text-[#000000]">Create username*</h1>
                                            <Input size="lg" label="Enter your username" />
                                            <h1 className="inputs_title font-mulish text-[#000000]">Password*</h1>
                                            <Input type="password" size="lg" label="Enter password" id='password' />
                                        </div>
                                        <div>
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


                                        {/* <Link href="/auth/login"> </Link> */}
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

                                    </Form>
                                </Card>
                            </Card>

                        </Formik>
                    </div>
                </LayoutHome>
                <Swipers />
            </div>


        </>
    );
};

export default SingUp_Card;