import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import close from '../public/close.svg';
import ModalHelp from './ModalHelp';
import TextCardHome from './Text-card-home';
function StepsPersonalInfo() {
  const showData = (values: object) => {
    alert(values);
  };

  return (
    <div
      className="flex items-center justify-center md:flex items-center justify-center
    "
    >
      <div className="flex flex-col items-center justify-center gap-10 py-[60px]">
        <section className="px-3.5 flex flex-col gap-4">
          <Link
            href="/"
            className="font-normal underline decoration-solid text-mulish text-blueLight"
          >
            {`< Back to home`}
          </Link>
          <div className="text-center">
            <h2 className="text-blueDark text-3xl font-bold font-nunito ">
              Your personal information
            </h2>
          </div>
        </section>

        <section>
          <Formik
            initialValues={{
              name: '',
              nacionality: '',
              gender: '',
              residence: '',
              addres: '',
              postcode: '',
              phone: '',
              email: '',
              job: '',
              birthday: '',
              comments: '',
            }}
            onSubmit={showData}
          >
            <Form className="rounded-[10px] w-[391px] shadow-lg  font-mulish  flex flex-col px-[17px] gap-10 pb-16 items-center text-left">
              <Field
                className=" font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black"
                name="name"
                placeholder="Legal Name"
                type=""
              />
              <Field
                className=" font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black"
                name="nacionality"
                placeholder="Your Nacionality"
                type=""
              />
              <Field
                className=" font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black"
                name="gender"
                placeholder="Your Gender"
                type=""
              />
              <Field
                className=" font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black"
                name="residence"
                placeholder="Your Residence"
                type=""
              />
              <Field
                className=" font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black"
                name="addres"
                placeholder="Residence Addres"
                type=""
              />
              <Field
                className="font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black"
                name="postcode"
                placeholder="Postcode"
                type=""
              />
              <Field
                className="font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black"
                name="phone"
                placeholder="Contact Phone"
                type=""
              />
              <Field
                className="font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black"
                name="email"
                placeholder="E-mail"
                type=""
              />
              <Field
                className="font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black"
                name="job"
                placeholder="Your Job"
                type=""
              />
              <Field
                className="font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black"
                name="birthday"
                placeholder="Date of birth"
                type=""
              />
              <Field
                className="font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black"
                name="comments"
                placeholder="Any comments"
                type=""
              />
              <button
                className="text-white w-full text-sm h-[55.92px] rounded-[10px] bg-blueLight text-mulish font-bold"
                type="submit"
              >
                SAVE AND CONTINUE
              </button>
            </Form>
          </Formik>
        </section>
        <h2
          className="underline decoration-solid font-bold font-nunito text-center text-xl text-blueDark
      md: hidden"
        >
          Help & frequency questions
        </h2>
        <ModalHelp />
      </div>

      <div className="hidden  md:flex relative flex-col p-8 gap-[26px] justify-center rounded-[10px] shadow-lg m-auto w-[285px] h-[380px]  bg-blueSky">
        <Image
          className="absolute right-4 top-4"
          height={14}
          width={14}
          alt=""
          src={close}
        />
        <h2 className=" font-bold font-nunito text-left text-xl text-blueDark">
          Help & frequency <br /> questions
        </h2>
        <TextCardHome>
          Lifestyle choices vary, which is why we take the time to learn about
          your individual situation and requirements.
        </TextCardHome>
        <TextCardHome>
          We’ll assist you from start to finish, ensuring you have the insight
          and knowledge needed to succeed.
        </TextCardHome>
      </div>
    </div>
  );
}

export default StepsPersonalInfo;
