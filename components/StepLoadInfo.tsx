import Image from 'next/image';
import Link from 'next/link';
import upload from '../public/upload.svg';
function StepLoadInfo() {
  return (
    <div className="w-full md:px-[150px] ">
      <div className="flex flex-col items-center justify-center gap-10 py-[60px] px-[17px]">
        <section className=" flex flex-col gap-4 w-full">
          <Link
            href="/"
            className="font-normal underline decoration-solid text-mulish text-blueLight"
          >
            {`< Back to home`}
          </Link>
          <div className="text-left">
            <h2 className="text-blueDark text-3xl font-bold font-nunito ">
              Upload your <br className="md:hidden" />
              documentation
            </h2>
          </div>
        </section>
        <section className="rounded-[10px] w-[391px] shadow-lg  font-mulish  flex flex-col px-[17px] gap-10 pb-16 items-center text-left">
          <div className="flex flex-col gap-[9px]">
            <h3 className="font-mulish font-semibold">
              Upload front to your Passport
            </h3>
            <div className="w-full h-[120px] flex items-center justify-center gap-4 border-[#8e8e8e] border-dashed border-2 ">
              <Image alt="" height={24} width={24} src={upload} />
              <h3 className="text-base text-[#8e8e8e] font-normal">
                Upload Additional file
              </h3>
            </div>
            <h3 className="text-[#8E8E8E] text-[13px] text-center">
              Attach file. File size of your documents should not exceed 10MB
            </h3>
          </div>
          <div className="flex flex-col gap-[9px]">
            <h3 className="font-mulish font-semibold">
              Upload back to your Passport
            </h3>
            <div className="w-full h-[120px] flex items-center justify-center gap-4 border-[#8e8e8e] border-dashed border-2 ">
              <Image alt="" height={24} width={24} src={upload} />
              <h3 className="text-base text-[#8e8e8e] font-normal">
                Upload Additional file
              </h3>
            </div>
            <h3 className="text-[#8E8E8E] text-[13px] text-center">
              Attach file. File size of your documents should not exceed 10MB
            </h3>
          </div>
          <div>
            <h3>I want to protect my data by signing an NDA</h3>
          </div>
          <button
            className="text-white w-full text-sm h-[55.92px] rounded-[10px] bg-blueLight text-mulish font-bold"
            type="submit"
          >
            SAVE AND CONTINUE
          </button>
        </section>
        <h2 className="text-blueDark text-xl underline font-bold font-nunito">
          Why is important this information?
        </h2>
      </div>
    </div>
  );
}

export default StepLoadInfo;
