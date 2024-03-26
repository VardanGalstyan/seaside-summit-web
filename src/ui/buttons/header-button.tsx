import clsx from "clsx";

const HeaderButton = ({ ctaText = "Add Text" }: { ctaText: string }) => {
  return (
    <button
      className={clsx(
        "px-10 py-2 bg-blue-500 font-normal rounded-md",
        "bg-darkBlue hover:bg-blue  text-white  transition-colors duration-500"
      )}
    >
      {ctaText}
    </button>
  );
};

export default HeaderButton;
