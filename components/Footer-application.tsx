import Image from "next/image";
const FooterApplication = () => {

    const imgRandom = [
        '/imgs_application/img-1.svg',
        '/imgs_application/img-2.svg',
        '/imgs_application/img-3.svg',
        '/imgs_application/img-4.svg'
    ]

    const random = Math.floor(Math.random() * imgRandom.length)

    return (
        <>
            <style jsx>
                {`
            .footerApp{
                height: 21vh;
                width: 100%;
                -webkit-border-radius: 0px;
                -moz-border-radius: 0px;
                border-radius: 0px;
                background: #07469c;
                position: absolute;
                z-index: -1;
                top: 138%;
            }
            .minBox{
                position: absolute;
                width: 1vh;
                height: 7vh;
                top: 116vh;
                right: 31vh;
            }

            .boxImgs{
                position: absolute;
                width: 100%;
                height: 100%;
                top: 61vh;
                z-index: -2;
            }
            .imagen{
                width: 100%;
                height: 41vh;
                position: absolute;
                top: 97vh;
                z-index: -2;
                background-image: url(${imgRandom[random]});
                background-repeat: no-repeat;
                background-position: center center;
                background-size: cover;
            }
            `}
            </style>
            <div className="minBox justify-center w-full md:gap-14">

                <div className="relative">
                    <div className="w-[203px] flex flex-col items-center justify-center relative -left-4 h-[203px] rounded-full bg-white">
                        <p>👋</p>
                        <h2 className="text-blueLight text-nunito font-medium text-2xl">
                            Say, <br />
                            Hola!
                        </h2>
                        <div className="absolute bottom-0 right-5 w-12 h-12 bg-blueLight rounded-full flex items-center justify-center">
                            <Image alt="hhh" height={20.53} width={20.56} src={'/imgs_application/arrow.png'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="imagen">
            </div>
            <div className="footerApp">
            </div>
        </>

    );
};

export default FooterApplication;