import { Field, Form, Formik } from 'formik';
import Link from 'next/link';

import { useState } from 'react';
import ModalHelp from './ModalHelp';
import TextCardHome from './Text-card-home';
function StepsPersonalInfo() {
  const [isVisible, setIsVisible] = useState(false);
  const showData = () => {
    <Link href="/application"></Link>;
  };
  const closeModal = () => {
    setIsVisible(false);
  };

  return (
    <div
      className="flex items-center justify-center md:flex  px-[150px] items-center justify-center 
    "
    >
      <div className="flex flex-col items-center justify-center text-left gap-10 py-[60px]">
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

        <section className="pb-10 shadow-lg">
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
            <Form className="rounded-[10px] w-[391px] shadow-lg  font-mulish  flex flex-col px-[17px] gap-10 pb-16 items-center text-left lg: w-[665px] h-[679px] ">
              <Field
                className=" font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black"
                name="name"
                placeholder="Legal Name"
                type="text"
              />
              <div className="flex flex-col md:flex-row gap-[10px] w-full">
                <Field
                  className=" font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black"
                  name="nacionality"
                  placeholder="Your Nacionality"
                  type="text"
                />
                <Field
                  className=" font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black"
                  name="gender"
                  placeholder="Your Gender"
                  type="text"
                />
              </div>

              <Field
                className=" font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black"
                name="residence"
                placeholder="Your Residence"
                type="text"
              />
              <div className="flex flex-col md:flex-row gap-[10px] w-full">
                <Field
                  className=" font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black "
                  name="addres"
                  placeholder="Residence Addres"
                  type="text"
                />
                <Field
                  className="font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black md:w-3/5"
                  name="postcode"
                  placeholder="Postcode"
                  type="text"
                />
              </div>

              <Field
                className="font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black"
                name="phone"
                placeholder="Contact Phone"
                type="text"
              />
              <Field
                className="font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black"
                name="email"
                placeholder="E-mail"
                type="email"
              />
              <Field
                className="font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black"
                name="job"
                placeholder="Your Job"
                type="text"
              />
              <Field
                className="font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black"
                name="birthday"
                placeholder="Date of birth"
                type="text"
              />
              <Field
                className="font-mulish w-full px-7 py-1 border-b-black border-b-solid border-2                outline-none focus:border-b-blueLight peer placeholder-black"
                name="comments"
                placeholder="Any comments"
                type="text"
              />
              <Link
                className="text-white w-full text-sm h-[55.92px] rounded-[10px] bg-blueLight text-mulish font-bold"
                href="/application"
              >
                <button
                  className="text-white w-full text-sm h-[55.92px] rounded-[10px] bg-blueLight text-mulish font-bold"
                  type="submit"
                >
                  SAVE AND CONTINUE
                </button>
              </Link>
            </Form>
          </Formik>
        </section>
        <h2
          onClick={() => setIsVisible(true)}
          className="underline decoration-solid font-bold font-nunito text-center text-xl text-blueDark
      md:hidden"
        >
          Help & frequency questions
        </h2>
        <div className="md:hidden">
          <ModalHelp visible={isVisible} closed={closeModal} />
        </div>
      </div>

      <div className="hidden  md:flex relative flex-col p-8 gap-[26px] justify-center rounded-[10px] shadow-lg m-auto w-[285px] h-[380px]  bg-blueSky">
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
