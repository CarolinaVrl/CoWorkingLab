import Title from './Title';

function WhyChoose() {
  return (
    <div>
      <Title>Why Choose Us</Title>

      <div className="w-7 h-2 bg-blueLight"></div>
      <div className=" flex flex-col gap-5">
        <div className="bg-white rounded-[10px] flex flex-col items-center justify-center gap-5 py-7 px-8">
          <h2>Secure and Safe</h2>

          <div className="flex font-light text-base w flex-col font-nunito ">
            <p>
              World-class data centers and state-of-the-art security. Your
              credit card information will never be exposed to any government
              websites!
            </p>
          </div>
          <div className="bg-white rounded-[10px] flex flex-col items-center justify-center gap-5 py-7 px-8"></div>

          <h2>Speed and Simplicity</h2>

          <div className="flex font-light text-base  flex-col font-nunito ">
            <p>
              Easy, traveler-friendly application process. Simple and much less
              complicated than dealing with foreign governments.
            </p>
          </div>
          <div className="bg-white rounded-[10px] flex flex-col items-center justify-center gap-5 py-7 px-8"></div>
          <div className="bg-white rounded-[10px] flex flex-col items-center justify-center gap-5 py-7 px-8"></div>

          <h2>Awesome support</h2>

          <div className="flex font-light text-base flex-col font-nunito ">
            <p>
              Our customer support is ready to help 24/7. We want you to enjoy
              your travels and avoid the stress of getting a residence!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
