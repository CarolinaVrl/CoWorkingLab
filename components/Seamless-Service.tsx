import Title from './Title';

function SeamlessService() {
  return (
    <div className="p-6 flex flex-col bg-blueSky gap-5">
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
      <div className="bg-white rounded-[10px] flex flex-col items-center justify-center gap-5 py-7 px-8">
        <div className="w-[68px] h-16 rounded-full bg-[#D9D9D9]"></div>

        <h2>Residency Programs</h2>
        <div className="w-7 h-2 bg-blueLight"></div>
        <div className="flex font-light text-base flex-col font-nunito ">
          <p>
            Mexican residency safeguards against future instability and opens up
            a world of opportunities for investors and their families.
          </p>
          <p>
            A Golden Visa permit provides visa-free access to many countries
            across the globe.
          </p>
          <p>
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
