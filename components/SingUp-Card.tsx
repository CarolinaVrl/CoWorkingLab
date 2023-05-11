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

import {
    Form,
    Formik
} from 'formik';

interface MyFormValues {
    firstName: string;
}


const SingUp_Card = () => {
    const initialValues: MyFormValues = { firstName: '' };

    //     const submitSing = (data: {email: string, password: string}) =>{
    //         login({email: data.email})
    //     }


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
                        <Formik
                            initialValues={initialValues}
                            onSubmit={(values, actions) => {
                                console.log({ values, actions });
                                alert(JSON.stringify(values, null, 2));
                                actions.setSubmitting(false);
                            }}
                        >


                            <Card className="w-[63vh] items-center">
                                <Card color="transparent" shadow={false}>
                                    <Typography variant="h4" color="blue-gray" className="font-nunito text-[#07469C]">
                                        Create an account
                                    </Typography>
                                    <Typography color="gray" className="mt-1 font-mulish text-[#000000]">
                                        And start your trip with us.
                                    </Typography>
                                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 font-nunito text-[12px]">
                                        <div className="mb-4 flex flex-col gap-6">
                                            <h1 className="inputs_title2 font-mulish text-[#000000]">Your email*</h1>
                                            <Input size="lg" label="Please enter your email" />
                                            <h1 className="inputs_title font-mulish text-[#000000]">Create username*</h1>
                                            <Input size="lg" label="Enter your username" />
                                            <h1 className="inputs_title font-mulish text-[#000000]">Password*</h1>
                                            <Input type="password" size="lg" label="Enter password" />
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


                                        <Link href="/auth/login">
                                            <Form><Button className="mt-6" fullWidth type="submit"> Sing Up</Button></Form>
                                        </Link>
                                        {/* <label htmlFor="firstName">First Name</label>
                                        <Field id="firstName" name="firstName" placeholder="First Name" /> */}

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

                        </Formik>
                    </div>
                </LayoutHome>
                <Swipers />
            </div>


        </>
    );
};

export default SingUp_Card;