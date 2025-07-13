
import SpecsTable from '../../components/projects/SpecsTable';
import ContentWrapper from '../../components/layout/ContentWrapper';
import PageWrapper from '../../components/layout/PageWrapper';
import Banner from '../../components/banner/Banner';
import Carousel from 'react-bootstrap/Carousel';
import { testbedData as data } from '../../json/projects';

const TestBed = () => {
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
                    <div className="w-full z-0 mb-[190px] md:mb-0 lg:mb-0">
                        <div className="w-full relative min-h-min">
                            <div className="w-[90%] md:w-[70%] lg:w-[70%] relative top-0 left-0">
                                <img src={data.featured.photo.src} alt={data.featured.photo.alt} />
                            </div>
                            <div className="bg-moon/70 p-4 lg:p-6 max-w-[90%] w-[350px] md:w-[310px] lg:w-[40%] absolute top-[92%] md:top-[8%] lg:top-[6%] right-2 md:right-0 z-10">
                                <p className="text-white font-display2 text-sm md:text-lg text-left">{data.featured.blurb}</p>
                            </div>
                        </div>
                    </div>
                    <SpecsTable table={data.specs_table} title="Engine Stats" />
                    <div>
                        <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3">{data.header_1}</h2>
                        <h2 className="font-display2 text-md md:text-lg text-white text-balance text-left">
                            {data.desc_1}
                        </h2>
                    </div>
                    <div>
                        <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-3">{data.header_2}</h2>
                        <h2 className="font-display2 text-md md:text-lg text-white text-balance text-left">
                            {data.desc_2}
                        </h2>
                    </div>
                    <div>
                        <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left mb-5">{data.photo_reel.title}</h2>
                        <div className="contained-bootstrap w-[100%] md:w-[75%] mx-auto">
                            {/* Need to include data-bs-theme=light attribute to apply Bootstrap CSS classes */}
                            <Carousel className="text-white" data-bs-theme="light"
                                controls={true}
                                slide={true}
                                indicators={true}
                                touch={true}
                            >
                                {data.photo_reel.photos.map((photo, index) => {
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
            </ContentWrapper>
        </PageWrapper>
    );
};

export default TestBed;