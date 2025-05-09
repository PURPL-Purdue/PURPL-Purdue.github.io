

const ContentWrapper = ({ children }) => {
    return (
    <div className="flex flex-col w-full bg-dusk" id="contentWrapper">
        <div className="flex flex-col mx-8 md:mx-12 lg:mx-auto max-w-[1100px] pt-8 lg:pt-8" id="paddedContentWrapper">
            {children}
        </div>
    </div>
    );
};

export default ContentWrapper;