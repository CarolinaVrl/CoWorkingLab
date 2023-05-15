import LayoutApplication from '@/Layout/Layout-Application';
import {
  Card,
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import dance from '../public/imgs_application/danceMexican.svg';

export default function ApplicationCard() {
  return (
    <>
      <LayoutApplication page="Application">
        <div className="relative flex flex-col items-center justify-center text-center bg-blueSky md:px-[370px] py-[155px] ">
          <div className="cio"></div>
          <div className="w-[54vh] tablet:w-[82vh] z-10 border-l-[58px] border-l-solid border-transparent ">
            <div className="px-[14px] tablet:px-[0px]">
              <Typography
                variant="h4"
                color="blue-gray"
                className="font-nunito text-[#07469C] mx-[3rem] tablet:mx-[0px] font-[700]"
              >
                Get your Mexican Residence!
              </Typography>
              <br />
              <p>
                Lifestyle choices vary, which is why we take the time to learn
                about your individual situation and requirements.
              </p>
              <br />
              <p>
                {' '}
                We’ll assist you from start to ﬁnish, ensuring you have the
                insight and knowledge needed to succeed.
              </p>
              <br />
            </div>
            <br />
            <Card className="w-[97%] tablet:w-[78vh] items-center mb-[2rem]">
              <div className="w-[94%] tablet:w-[32rem] mt-[3rem] mb-[2rem]">
                <Timeline>
                  <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader>
                      <TimelineIcon className="p-2 bg-[#E6ECF5]">
                        <h1 className="h-[42px] w-[42px] text-[32px] text-[#07469C]">
                          1
                        </h1>
                      </TimelineIcon>
                      <Typography variant="h5" color="blue-gray">
                        Your personal information
                      </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-[1rem] ">
                      <Typography
                        color="gray"
                        className="font-normal text-gray-600 text-start w-[100%]"
                      >
                        Your basic personal information help us to offert the
                        better option to your case
                      </Typography>
                    </TimelineBody>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineConnector />
                    <TimelineHeader>
                      <TimelineIcon className="p-2 bg-[#E6ECF5]">
                        <h1 className="h-[42px] w-[42px] text-[32px] text-[#07469C]">
                          2
                        </h1>
                      </TimelineIcon>
                      <Typography variant="h5" color="blue-gray">
                        Up documentation
                      </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-[1rem] ">
                      <Typography
                        color="gray"
                        className="font-normal text-gray-600 text-start w-[100%]"
                      >
                        Your basic personal information help us to offert the
                        better option to your case
                      </Typography>
                    </TimelineBody>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineHeader>
                      <TimelineIcon className="p-2 bg-[#E6ECF5]">
                        <h1 className="h-[42px] w-[42px] text-[32px] text-[#07469C]">
                          3
                        </h1>
                      </TimelineIcon>
                      <Typography variant="h5" color="blue-gray">
                        Date with our lawyers
                      </Typography>
                    </TimelineHeader>
                    <TimelineBody>
                      <Typography
                        color="gray"
                        className="font-normal text-gray-600 text-start w-[100%]"
                      >
                        Your basic personal information help us to offert the
                        better option to your case
                      </Typography>
                    </TimelineBody>
                  </TimelineItem>
                </Timeline>
              </div>
            </Card>

            <Link href="/application/steps/stepsPersonalInfoPage">
              <button className="bg-blueLight text-white w-4/5 rounded-[10px] h-[55px] lg:w-3/5">
                GET STARTED
              </button>
            </Link>
          </div>
          <div className="absolute bottom-0 w-full h-[329px] z-0  ">
            <Image src={dance} alt="" className="w-full " />
          </div>
        </div>
      </LayoutApplication>
    </>
  );
}
