function MenuItem({ name, description, price, imageUrl }) {
  return (
    <div className="flex flex-col gap-3 pb-3 group">
      <div 
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300" 
        style={{ backgroundImage: `url("${imageUrl}")` }}
      ></div>
      <div>
        <p className="text-[#0d121b] dark:text-white text-base font-bold leading-normal">{name}</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">{description}</p>
        <p className="text-primary text-base font-bold leading-normal mt-1">{price}</p>
      </div>
    </div>
  );
}

export default MenuItem;
