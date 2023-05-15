import LayoutApplication from '@/Layout/Layout-Application';
import {
    Button,
    Card,
    Timeline,
    TimelineBody,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineItem,
    Typography
} from "@material-tailwind/react";
import Link from 'next/link';

export default function ApplicationCard() {
    return (
        <>
            <style jsx>
                {`
      .cio{
        left: 0px;
        top: 0px;
        background: #e6ecf5;
        -webkit-clip-path: polygon(0 0,100%0,100%86%,0%100%);
        clip-path: polygon(0 0,100%0,100%86%,-107%100%);
        height: 131vh;
        position: absolute;
        width: 100%;
        z-index: -1;
      }

      .centers{
        text-align: -webkit-center;
    }
    @media only screen and (min-width: 768px) {
    .cio{
        left: 0px;
        top: 0px;
        background: #e6ecf5;
        -webkit-clip-path: polygon(0 0,100%0,100%86%,0%100%);
        clip-path: polygon(0 0,100%0,100%86%,-21%100%);
        height: 113vh;
        position: absolute;
        width: 100%;
        z-index: -1;
      }
        
      }
      `}
            </style>
            <LayoutApplication page='Application'>
                <div className='centers mt-[4rem]'>
                    <div className='cio'>
                    </div>
                    <div className='w-[54vh] tablet:w-[82vh]'>
                        <div className='px-[14px] tablet:px-[0px]'>
                            <Typography variant="h4" color="blue-gray" className="font-nunito text-[#07469C] mx-[3rem] tablet:mx-[0px] font-[700]">
                                Get your Mexican Residence!
                            </Typography>
                            <br />
                            <p>
                                Lifestyle choices vary, which is why we take the time to learn about your individual situation and requirements.
                            </p>
                            <br />
                            <p> We’ll assist you from start to ﬁnish, ensuring you have the insight and knowledge needed to succeed.
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
                                                <h1 className="h-[42px] w-[42px] text-[32px] text-[#07469C]">1</h1>
                                            </TimelineIcon>
                                            <Typography variant="h5" color="blue-gray">
                                                Your personal information
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-[1rem] ">
                                            <Typography color="gray" className="font-normal text-gray-600 text-start w-[100%]">
                                                Your basic personal information help us to offert the better option to your case
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineConnector />
                                        <TimelineHeader>
                                            <TimelineIcon className="p-2 bg-[#E6ECF5]">
                                                <h1 className="h-[42px] w-[42px] text-[32px] text-[#07469C]">2</h1>
                                            </TimelineIcon>
                                            <Typography variant="h5" color="blue-gray">
                                                Up documentation
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody className="pb-[1rem] ">
                                            <Typography color="gray" className="font-normal text-gray-600 text-start w-[100%]">
                                                Your basic personal information help us to offert the better option to your case
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineHeader>
                                            <TimelineIcon className="p-2 bg-[#E6ECF5]">
                                                <h1 className="h-[42px] w-[42px] text-[32px] text-[#07469C]">3</h1>
                                            </TimelineIcon>
                                            <Typography variant="h5" color="blue-gray">
                                                Date with our lawyers
                                            </Typography>
                                        </TimelineHeader>
                                        <TimelineBody>
                                            <Typography color="gray" className="font-normal text-gray-600 text-start w-[100%]">
                                                Your basic personal information help us to offert the better option to your case
                                            </Typography>
                                        </TimelineBody>
                                    </TimelineItem>
                                </Timeline>
                            </div>
                        </Card>


                        <Link href="/application/steps/stepsPersonalInfoPage">
                            <Button>
                                Step 1
                            </Button>
                        </Link>
                        <Link href="/application/steps/stepsYourLoadInfo">
                            <Button>
                                Step 2
                            </Button>
                        </Link>
                        <Link href="/application/steps/stepsCheckout">
                            <Button>
                                Step 3
                            </Button>
                        </Link>

                    </div>
                </div>
            </LayoutApplication>

        </>
    );
}

