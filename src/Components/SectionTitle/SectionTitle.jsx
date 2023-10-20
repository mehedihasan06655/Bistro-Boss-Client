
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-4/12 mx-auto text-center py-14">
            <p className="text-yellow-500 italic pb-2">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase border-y-2 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;