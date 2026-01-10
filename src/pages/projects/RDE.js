import ContentWrapper from '../../components/layout/ContentWrapper';
import PageWrapper from '../../components/layout/PageWrapper';
import Banner from '../../components/banner/Banner';
import Carousel from 'react-bootstrap/Carousel';
import Timeline from '../../components/projects/RDETimeline';
import SpecsTable from '../../components/projects/SpecsTable';

import { rdeData as data } from '../../json/projects';

const RDE = () => {
    return (
        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full ">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                        <div className="flex flex-col text-center">
                            <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white text-balance">
                                {data.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </Banner>
            <ContentWrapper>
                <div className="lg:w-[800px] flex flex-col space-y-8 md:space-y-12">
                    <div className="flex flex-col mx-auto space-x-2 lg:space-x-4">
                        <div className="w-full z-0 mb-[140px] md:mb-0 lg:mb-0">
                            <div className="w-full relative min-h-min">
                                <div className="w-[65%] md:w-[60%] lg:w-[50%] relative top-0 left-0">
                                    <div className="col-span-1 contained-bootstrap w-[100%] mx-auto mt-2">
                                        {/* Need to include data-bs-theme=light attribute to apply Bootstrap CSS classes */}
                                        <Carousel className="text-white" data-bs-theme="light"
                                            controls={true}
                                            slide={true}
                                            indicators={true}
                                            touch={true}
                                        >
                                            {data.featured.photos.map((photo, index) => {
                                                return (<Carousel.Item key={index} className="" interval={2000}>
                                                    <img src={photo.src} alt={photo.alt} className="">
                                                    </img>
                                                </Carousel.Item>
                                                )
                                            })
                                            }
                                        </Carousel>
                                    </div>
                                </div>
                                <div className="bg-moon/80 p-4 lg:p-6 max-w-[90%] w-[350px] md:w-[310px] lg:w-[52%] absolute top-[95%] md:top-[8%] lg:top-[10%] right-2 md:right-0 z-10">
                                    <p className="text-white font-display2 text-sm md:text-lg text-left">{data.featured.blurb}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3 uppercase md:mt-4">
                            {data.photo_reel1.title}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 w-full">
                            <h2 className="col-span-1 font-display2 text-md md:text-lg text-white text-left">
                                {data.photo_reel1.blurb}
                            </h2>
                            <div className="col-span-1 contained-bootstrap w-[100%] mx-auto mt-2">
                                {/* Need to include data-bs-theme=light attribute to apply Bootstrap CSS classes */}
                                <Carousel className="text-white" data-bs-theme="light"
                                    controls={true}
                                    slide={true}
                                    indicators={true}
                                    touch={true}
                                >
                                    {data.photo_reel1.photos.map((photo, index) => {
                                        return (<Carousel.Item key={index} className="" interval={2000}>
                                            <img src={photo.src} alt={photo.alt} className="">
                                            </img>
                                        </Carousel.Item>
                                        )
                                    })
                                    }
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-old-gold to-stardust from-30% h-full w-full">
                        <div className="flex flex-col m-1 items-center h-fit">
                            <div className="w-full bg-dusk py-3 px-auto space-y-1">
                                <h2 className="font-display2 italic text-md md:text-lg text-white text-balance">{data.highlight}</h2>
                            </div>
                        </div>
                    </div>
                    <SpecsTable table={data.specs_table} title="Engine Stats" />
                    <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left uppercase mb-3">{data.timeline.title}</h2>
                    <Timeline />
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default RDE;