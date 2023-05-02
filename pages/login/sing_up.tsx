import Link from "next/link";
import {
  Button,
  Card,
  Typography,
  Checkbox,
  Input
} from "@material-tailwind/react";

const sing_up = () => {
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

          `
      }</style>


      <div className='box_sing_up'>

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
              <Checkbox
                label={
                  (
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-nunito text-[12px]"
                    >
                      By creating an account you are agreeing to our
                      <a
                        href="#"
                        className="font-medium transition-colors hover:text-blue-500 font-nunito text-[12px]"
                      >
                        &nbsp;Terms and Conditions and Privacy Policy
                      </a>
                    </Typography>
                  )
                }
                containerProps={{ className: "-ml-2.5" }}
              />

              <Link href="/login/login">
                <Button className="mt-6" fullWidth> Sing Up</Button>
              </Link>

              <Typography color="gray" className="mt-4 text-center font-normal font-nunito text-[12px]">
                Already have a member?{" "}
                <Link
                  href="/login/login"
                  className="font-medium text-blue-500 transition-colors hover:text-blue-700 font-nunito text-[12px]"
                >
                  Log in
                </Link>
              </Typography>
            </form>
          </Card>
        </Card>

      </div>
    </>
  );
};

export default sing_up;