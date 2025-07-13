import {rdeData as data} from '../../json/projects';

const RDETimeline = () => {
  const timelineData = data.timeline.data || [];

  return (
    <div className="w-full flex flex-col">
      <div className="relative w-full">
        <div className="border-l-4 border-stardust absolute h-full left-4 md:left-6 top-0"></div>
        {timelineData.map((item, idx) => (
          <div key={idx} className="mb-12 flex items-start">
            <div className="w-8 h-8 md:w-12 md:h-12 min-w-8 flex items-center justify-center bg-stardust rounded-full">
              <span className="font-display text-lg text-jet-grey uppercase">{}</span>
            </div>
            <div className="md:ml-8">
              <h3 className="font-display-bold text-lg md:text-2xl text-stardust uppercase mb-2">{item.title}</h3>
              <p className="font-display2 text-white text-md md:text-lg max-w-sm px-4 md:max-w-lg lg:max-w-xl">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RDETimeline;
