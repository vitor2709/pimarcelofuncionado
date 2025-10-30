import { Link } from 'react-router-dom';

function Breadcrumb({ items }) {
  return (
    <div className="flex flex-wrap gap-2 pb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && (
            <span className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">/</span>
          )}
          {item.link ? (
            <Link to={item.link} className="text-[#1152d4] text-sm font-medium leading-normal hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 dark:text-white text-sm font-medium leading-normal">{item.label}</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default Breadcrumb;
