import Title from './Title';

function SeamlessService() {
  return (
    <div className="p-6 flex flex-col bg-blueSky gap-5 md:flex-row px-60 gap-24">
      <div className="flex flex-col gap-4">
        <Title>Seamless service targeting your unique needs</Title>
        <div className="w-7 h-2 bg-blueLight"></div>
        <div className="flex font-light text-base flex-col font-nunito ">
          <p>
            Lifestyle choices vary, which is why we take the time to learn about
            your individual situation and requirements.
          </p>
          <p>
            We’ll assist you from start to ﬁnish, ensuring you have the insight
            and knowledge needed to succeed.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-[10px] flex flex-col items-center justify-center gap-5 py-7 px-8">
        <div className="w-[68px] h-16 rounded-full bg-[#D9D9D9]"></div>

        <h2 className="text-blueDark text-xl font-bold font-nunito ">
          Residency Programs
        </h2>
        <div className="w-7 h-2 bg-blueLight"></div>
        <div className="flex font-light text-base flex-col font-nunito ">
          <p className="font-mulish font-light text-[#000000] text-base ">
            Mexican residency safeguards against future instability and opens up
            a world of opportunities for investors and their families.
          </p>
          <p className="font-mulish font-light text-[#000000] text-base ">
            A Golden Visa permit provides visa-free access to many countries
            across the globe.
          </p>
          <p className="font-mulish font-light text-[#000000] text-base ">
            Evaluate which European residency program is right for you and your
            family.
          </p>
        </div>
        <button className="text-white w-[157px] h-11 rounded-xl text-base bg-blueLight font-sans font-medium">
          Send Message
        </button>
      </div>
    </div>
  );
}

export default SeamlessService;
