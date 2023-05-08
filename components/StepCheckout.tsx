import Link from 'next/link';

function StepCheckout() {
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
              Checkout
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
}

export default StepCheckout;
