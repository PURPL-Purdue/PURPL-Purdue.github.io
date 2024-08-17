
const ProjectTable = ({table, title}) => {
    return (
    <div className="flex flex-col w-full bg-dusk space-y-4 ">
        <h2 className="font-display-bold text-3xl md:text-4xl text-stardust text-left">{title}</h2>
        <div className="flex flex-col w-full">
            {Object.entries(table).map(([key, value], index) => (
                <div key={index} className={`flex flex-row items-end w-full md:max-w-[800px] pb-2 pt-4 border-b-2 border-b-stardust space-x-auto ` + (index==0 ? "border-t-2 border-t-stardust" : "")}>
                    <p className="font-display2 max-w-[150px] md:max-w-full text-left text-stardust uppercase text-md md:text-lg">{key}</p>
                    <p className="font-display2 ml-auto max-w-[200px] md:max-w-full text-right text-stardust text-md md:text-lg">{value}</p>
                </div>
            ))}
        </div>
    </div>
    );
};

export default ProjectTable;