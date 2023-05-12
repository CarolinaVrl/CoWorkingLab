import LayoutHome from '@/Layout/Layout-Auth';
import Swipers from '@/pages/auth/swipers';
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import Link from "next/link";

// import { login } from '@/lib/service/auth.service';
// import cookies from 'js-cookie';
// import { useRouter } from 'next/router';
// import { useForm } from "react-hook-form";

const loginUps = () => {
  // const router = useRouter()
  // const { register, handleSubmit, formState: { isValid } } = useForm({
  //   defaultValues: {
  //     email: '',
  //     password: ''
  //   },
  //   mode: 'onChange'
  // });
  // const onSubmit = (data: {
  //   email: string;
  //   password: string
  // }) => {
  //   login({ email: data.email, password: data.password }).then((resp) => {
  //     cookies.set('app-token', resp.data.token);
  //     router.push('/')
  //   }).catch(() => {
  //     alert('ocurrio un error')
  //   })
  // }
  // console.log('isValid', isValid)

  return (
    <>
      <style jsx>{
        `
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
          .box_auth{
            display: grid;
            grid-template-columns: 1fr 59vh;
            width: 100%;
            height: 100%;
           
          }
          `
      }</style>

      <div className="box_auth">
        <LayoutHome>
          <div className='box_sing_up'>
            <Card className="w-[63vh] items-center">
              <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray" className="font-nunito text-[#07469C]">
                  Welcome to you Resimex
                </Typography>
                <Typography color="gray" className="mt-1 font-mulish text-[#000000]">
                  Log in to your account.
                </Typography>
                {/* {onSubmit={handleSubmit(onSubmit)} } */}
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 font-nunito text-[12px]">

                  <div className="mb-4 flex flex-col gap-6">
                    <h1 className="inputs_title font-nunito text-[#000000]"  >Create username*</h1>
                    <Input size="lg" label="Enter your username" />
                    <h1 className="inputs_title font-nunito text-[#000000]" >Password*</h1>
                    <Input type="password" size="lg" label="Enter password" />
                  </div>
                  <Link
                    href="/auth/reset-password"
                    className="font-medium transition-colors hover:text-blue-500 font-nunito text-[12px]"
                  >
                    &nbsp;Forgot you password?
                  </Link>
                  {/* <Link href="/"></Link> */}
                  <Button className="mt-6" fullWidth type="submit"> Log in</Button>

                  <Typography color="gray" className="mt-4 text-center font-normal font-nunito text-[12px]">
                    Or Don’t have an account?{" "}
                    <a
                      href="#"
                      className="font-medium text-blue-500 transition-colors hover:text-blue-700 "
                    >
                      Sing Up
                    </a>
                  </Typography>
                </form>
              </Card>
            </Card>

          </div>
        </LayoutHome>
        <Swipers />
      </div>
    </>
  );
};

export default loginUps;

