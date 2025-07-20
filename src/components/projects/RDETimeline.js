import {rdeData as data} from '../../json/projects';

const RDETimeline = () => {
  const timelineData = data.timeline.data || [];

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full flex flex-row items-center justify-center overflow-scroll">
        {/* Horizontal line */}
        <div className="absolute top-[45%] lg:top-[35%] left-0 w-full h-0.5 bg-stardust z-0"></div>
        {timelineData.map((item, idx) => (
          <div key={idx} className="relative flex flex-col items-center mx-4 z-10">
            {/* Timeline dot centered on the line */}
            <div className="absolute left-1/2 top-[45%] lg:top-[35%]" style={{transform: 'translate(-50%, -50%)'}}>
              <div className="w-3 h-3 md:w-5 md:h-5 flex items-center justify-center bg-stardust rounded-full">
                <span className="font-display text-lg text-jet-grey uppercase">{}</span>
              </div>
            </div>
            {/* Timeline content below the dot */}
            <div className="text-center">
              <h3 className="font-display-bold text-md md:text-lg lg:text-xl text-white pb-8">{item.title}</h3>
              <p className="font-display2 text-sm md:text-md lg:text-lg text-white max-w-xs md:max-w-md lg:max-w-lg pt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RDETimeline;
