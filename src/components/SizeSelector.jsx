import { useState } from 'react';

function SizeSelector({ sizes, selectedSize, onSelectSize }) {
  return (
    <div className="space-y-3">
      <h3 className="text-gray-900 dark:text-white font-bold text-lg">Escolha o tamanho</h3>
      <div className="flex gap-3">
        {sizes.map((size) => (
          <button
            key={size.id}
            onClick={() => onSelectSize(size.id)}
            className={`flex-1 py-2 px-4 rounded-lg border font-semibold transition-colors ${
              selectedSize === size.id
                ? 'border-primary bg-primary/20 text-primary'
                : 'border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-primary hover:bg-primary/10'
            }`}
          >
            {size.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeSelector;
