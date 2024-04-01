interface HeaderType {
  title: string;
  paragraph?: string;
}

const SectionTitle = ({ title = "", paragraph = "" }: HeaderType) => {
  return (
    <div className="text-2xl sm:text-3xl lg:text-4xl flex font-extrabold flex-col text-center uppercase text-dark">
      <span>{title}</span>
      {paragraph && (
        <span className="text-sm sm:text-base lg:text-lg">{`- ${paragraph} -`}</span>
      )}
    </div>
  );
};

export default SectionTitle;
