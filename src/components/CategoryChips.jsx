import { useState } from 'react';

function CategoryChips() {
  const [selectedCategory, setSelectedCategory] = useState('Bebidas Quentes');
  
  const categories = [
    'Bebidas Quentes',
    'Bebidas Geladas',
    'Salgados',
    'Doces'
  ];

  return (
    <div className="flex gap-3 px-8 py-3 overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-transform duration-200 hover:scale-105 ${
            selectedCategory === category
              ? 'bg-[#ffecb3] text-[#0d121b] ring-2 ring-[#fbc02d]'
              : 'bg-background-light dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          <p className={`text-sm ${selectedCategory === category ? 'font-bold' : 'font-medium'} leading-normal`}>
            {category}
          </p>
        </button>
      ))}
    </div>
  );
}

export default CategoryChips;
