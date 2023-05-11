import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import arrow from '../public/arrow.png';
import background from '../public/backgroun-home-city.svg';
import mobilebackground from '../public/backgroun-mobile-version.svg';
import ModalSendMessage from './ModalSendMessage';

function SenMessageHome() {
  const SendMessage = () => {
    alert('hola');
  };
  return (
    <div className="w-full relative    ">
      <Image
        src={mobilebackground}
        alt=""
        className="flex w-full bg-cover md:hidden"
      />
      <Image className="hidden md:flex w-full  " src={background} alt="" />
      <div className="absolute w-[389px] rounded-2xl  flex flex-col items-center gap-16 justify-center h-[410px] left-0 top-0 bottom-0 right-0 m-auto bg-white">
        <div className=" flex flex-col items-start justify-center gap-9  ">
          <Formik
            initialValues={{
              name: '',
              email: '',
              message: '',
            }}
            onSubmit={SendMessage}
          >
            <Form className=" flex flex-col h-full gap-12 items-center ">
              <Field
                name="name"
                className="w-[315px] py-1 border-b-[#2E02494D] border-b-solid border-2 border-opacity-30
             outline-none focus:border-b-blueLight peer placeholder-[#2E02494D] placeholder-opacity-30"
                placeholder="Your name"
                type="text"
              />

              <Field
                name="email"
                className="w-[315px] py-1 border-b-[#2E02494D] border-b-solid border-2 border-opacity-30
             outline-none focus:border-b-blueLight peer placeholder-[#2E02494D] placeholder-opacity-30"
                placeholder="Your email"
                type="text"
              />

              <Field
                name="message"
                className="w-[315px] py-1 border-b-[#2E02494D] border-b-solid border-2 border-opacity-30
             outline-none focus:border-b-blueLight placeholder-[#2E02494D] placeholder-opacity-30"
                placeholder="Your message"
                type="text"
              />
              <div className="pb-[20px]">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-3 rounded-xl   w-[250px] h-[61px] bg-blueLight text-white font-nunito"
                >
                  <Image src={arrow} alt="" />
                  <h2>SEND MESSAGE</h2>
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <ModalSendMessage />
    </div>
  );
}

export default SenMessageHome;
