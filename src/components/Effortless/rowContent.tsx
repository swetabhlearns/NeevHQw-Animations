type Props = {
  imageSrc: string;
  extraBoldText: string;
  normalText: string;
};

const RowContent = ({ imageSrc, extraBoldText, normalText }: Props) => {
  return (
    <div className="flex flex-row gap-6 text-base sm:text-lg max-w-[540px] mb-6 font-dmsans">
      <div>
        <img src={imageSrc} alt="Icon Image" className="w-[58px]" />
      </div>
      <div>
        <span className="font-extrabold">{extraBoldText} </span>
        {normalText}
      </div>
    </div>
  );
};

export default RowContent;
