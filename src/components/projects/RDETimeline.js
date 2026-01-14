import {rdeData as data} from '../../json/projects';

const RDETimeline = () => {
  const timelineData = data.timeline.data || [];

  return (
    <div className="w-full flex flex-col items-center h-fit">
      <div className="w-full overflow-x-scroll h-fit">
        <div className="relative w-max flex flex-row items-center justify-center">
          {/* Horizontal line stretches across all items */}
          <div className="absolute top-[22%] md:top-[25%] lg:top-[25%] left-0 min-w-full h-0.5 bg-stardust"></div>
          {timelineData.map((item, idx) => (
            <div key={idx} className="relative flex flex-col items-center mx-4">
              {/* Timeline dot centered on the line */}
              <div className="absolute left-1/2 top-[22%] md:top-[25%] lg:top-[25%]" style={{transform: 'translate(-50%, -50%)'}}>
                <div className="w-3 h-3 md:w-5 md:h-5 flex items-center justify-center bg-stardust rounded-full">
                  <span className="font-display text-lg text-jet-grey uppercase">{}</span>
                </div>
              </div>
              {/* Timeline content below the dot */}
              <div className="text-center">
                <h3 className="font-display-bold text-md md:text-lg lg:text-xl text-white lg:mb-8">{item.title}</h3>
                <p className="font-display2 text-sm md:text-md lg:text-lg text-white max-w-xs max-w-[70px] md:max-w-[110px] h-[120px] md:h-[120px] lg:h-[140px] lg:max-w-[180px] mt-6 md:mt-12 lg:mt-12">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RDETimeline;
