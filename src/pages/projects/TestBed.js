import React from 'react';
import SpecsTable from '../../components/projects/SpecsTable';
import ContentWrapper from '../../components/shared/ContentWrapper';
import PageWrapper from '../../components/shared/PageWrapper';
import Banner from '../../components/shared/banner/Banner';

import { testbedData } from '../../static/projects';

const TestBed = () => {
    return (

        <PageWrapper>
            <Banner>
                <div className="bg-gradient-background bg-cover bg-center h-full ">
                    <div className="absolute w-full bottom-0 h-1/3 bg-gradient-to-t from-dusk" />
                    <div className="absolute left-0 right-0 mx-auto px-4 bottom-24 md:bottom-20">
                        <div className="flex flex-col text-center">
                            <h1 className="font-display-bold text-5xl md:text-6xl lg:text-7xl text-white text-balance">
                                {testbedData.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </Banner>
            <ContentWrapper>
                <div className="lg:w-[800px] flex flex-col space-y-10 md:space-y-18">
                    <p className="text-white text-lg md:text-xl font-display text-left lg:mt-16">{testbedData.blurb}</p>
                    <SpecsTable table={testbedData.specs_table} title="Engine Stats" />
                    <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left">{testbedData.header_1}</h2>
                    <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-start w-full">
                        <div className="flex flex-col space-y-2 lg:space-y-4 max-w-[200px]">
                            {testbedData.images_1.map((photo, index) => (
                                <img key={index} className="w-max" src={photo.src} alt={photo.alt} />
                            ))}
                            <p className="text-white font-display2 text-sm md:text-md">{testbedData.caption_1}</p>
                        </div>
                        <div className="flex flex-col w-auto justify-start text-left lg:pl-8 my-auto">
                            <h2 className="font-display text-lg md:text-xl text-white text-balance">
                                {testbedData.desc_1}
                            </h2>
                        </div>
                    </div>
                    <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left">{testbedData.header_2}</h2>
                    <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:items-start w-full">
                        <div className="flex flex-col space-y-2 lg:space-y-4 max-w-[240px]">
                            {testbedData.images_2.map((photo, index) => (
                                <img key={index} className="w-max" src={photo.src} alt={photo.alt} />
                            ))}
                            <p className="text-white font-display2 text-sm md:text-md">{testbedData.caption_2}</p>
                        </div>
                        <div className="flex flex-col w-auto justify-start text-left lg:pl-8 my-auto">
                            <h2 className="font-display text-lg md:text-xl text-white text-balance">
                                {testbedData.desc_2}
                            </h2>
                        </div>
                    </div>
                    <h2 className="font-display-bold text-3xl lg:text-5xl text-white text-left">More Photos</h2>
                    <div className="flex flex-row flex-wrap w-full justify-items-start">
                        {testbedData.photo_reel.map((photo, index) => (
                            <img key={index} className="w-1/2 md:w-1/3 pr-2 pt-2" src={photo.src} alt={photo.alt} />
                        ))}
                    </div>
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default TestBed;