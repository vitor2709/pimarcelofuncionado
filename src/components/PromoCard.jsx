function PromoCard({ title, description, buttonText, bgColor, imageUrl, buttonColor }) {
  return (
    <div className={`flex h-full flex-1 flex-col gap-4 rounded-xl ${bgColor} shadow-[0_4px_12px_rgba(0,0,0,0.05)] min-w-80 md:min-w-96`}>
      <div 
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col" 
        style={{ backgroundImage: `url("${imageUrl}")` }}
      ></div>
      <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
        <div>
          <p className="text-[#0d121b] dark:text-yellow-100 text-lg font-bold leading-normal">{title}</p>
          <p className="text-gray-700 dark:text-yellow-200/80 text-sm font-normal leading-normal">{description}</p>
        </div>
        <button className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 ${buttonColor} text-sm font-bold leading-normal tracking-[0.015em] transition-colors`}>
          <span className="truncate">{buttonText}</span>
        </button>
      </div>
    </div>
  );
}

export default PromoCard;
