import { Link } from 'react-router-dom';

function MenuItem({ id, name, description, price, imageUrl }) {
  return (
    <Link to={`/produto/${id}`} className="flex flex-col gap-3 pb-3 group cursor-pointer">
      <div 
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300" 
        style={{ backgroundImage: `url("${imageUrl}")` }}
      ></div>
      <div>
        <p className="text-[#0d121b] dark:text-white text-base font-bold leading-normal group-hover:text-primary transition-colors">{name}</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">{description}</p>
        <p className="text-primary text-base font-bold leading-normal mt-1">{price}</p>
      </div>
    </Link>
  );
}

export default MenuItem;
