import { Link } from 'react-router-dom';

function CategoryChips() {
  const categories = [
    { name: 'Bebidas Quentes', path: '/bebidas-quentes' },
    { name: 'Bebidas Geladas', path: '/bebidas-geladas' },
    { name: 'Salgados', path: '/salgados' },
    { name: 'Doces', path: '/doces' }
  ];

  return (
    <div className="flex gap-3 px-8 py-3 overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {categories.map((category) => (
        <Link
          key={category.name}
          to={category.path}
          className="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-transform duration-200 hover:scale-105 bg-background-light dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          <p className="text-sm font-medium leading-normal">
            {category.name}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default CategoryChips;
