import LayoutApplication from '@/Layout/Layout-Application';
import {
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  Typography,
} from "@material-tailwind/react";

export default function Home() {
  return (
    <>
      <style jsx>
        {`
      .cio{
        left: 0px;
        top: 0px;
        background: #e6ecf5;
        -webkit-clip-path: polygon(0 0,100%0,100%86%,0%100%);
        clip-path: polygon(0 0,100%0,100%86%,0%100%);
        height: 66vh;
        position: absolute;
        width: 100%;
        z-index: -1;
      }
      .description{
        text-align: -webkit-center;
      }
      `}
      </style>
      <LayoutApplication page='Application'>
        <div className='cio'>
        </div>
        <div className='description'>
          <div>
            <h1>Get your Mexican Residence!</h1>
            <br />
            <p>
              Lifestyle choices vary, which is why we take the time to learn about your individual situation and requirements.
              <br />
              We’ll assist you from start to ﬁnish, ensuring you have the insight and knowledge needed to succeed.

            </p>
          </div>

          <div>

            <div className="w-[32rem]">
              <Timeline>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader>
                    <TimelineIcon className="p-2">
                      <h1>1</h1>
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                      Your personal information
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <Typography color="gray" className="font-normal text-gray-600">
                      Your basic personal information help us to offert the better option to your case
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader>
                    <TimelineIcon className="p-2">
                      <h1>2</h1>
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                      Up documentation
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <Typography color="gray" className="font-normal text-gray-600">
                      Your basic personal information help us to offert the better option to your case
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                  <TimelineHeader>
                    <TimelineIcon className="p-2">
                      <h1>3</h1>
                    </TimelineIcon>
                    <Typography variant="h5" color="blue-gray">
                      Date with our lawyers
                    </Typography>
                  </TimelineHeader>
                  <TimelineBody>
                    <Typography color="gray" className="font-normal text-gray-600">
                      Your basic personal information help us to offert the better option to your case
                    </Typography>
                  </TimelineBody>
                </TimelineItem>
              </Timeline>
            </div>
          </div>

        </div>

      </LayoutApplication>

    </>
  );
}

{/* <div>
          <div>
            <h1>Get your Mexican Residence!</h1>
            <br />
            <p>Lifestyle choices vary, which is why we take the time to learn about your individual situation and requirements.
<br />
We’ll assist you from start to ﬁnish, ensuring you have the insight and knowledge needed to succeed.
</p>
          </div>
          <div>
            <div>
              <div>
                <p>1</p>
              </div>
              <div>
                <h1>

                </h1>
                <p>

                </p>
              </div>
            </div>
            <div>
            <div>
                <p>1</p>
              </div>
              <div>
                <h1>

                </h1>
                <p>

                </p>
              </div>
            </div>
            <div>
            <div>
                <p>1</p>
              </div>
              <div>
                <h1>

                </h1>
                <p>

                </p>
              </div>

            </div>
          </div>
        </div> */}

  // pruebas de steven