import { Link } from 'react-router-dom';

function ProductCard({ id, name, description, price, imageUrl }) {
  return (
    <Link to={`/produto/${id}`} className="flex flex-col gap-3 group cursor-pointer">
      <div 
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300 shadow-md"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      />
      <div className="flex flex-col pt-2">
        <p className="text-[#0d121b] dark:text-white text-lg font-bold leading-tight">{name}</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal mt-1">{description}</p>
        <p className="text-primary text-lg font-bold leading-normal mt-2">{price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
