function QuantitySelector({ quantity, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onDecrease}
        disabled={quantity <= 1}
        className="flex items-center justify-center size-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-bold text-xl hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        -
      </button>
      <input
        className="w-12 h-10 text-center font-bold text-lg bg-transparent border-none text-gray-900 dark:text-white p-0 focus:ring-0"
        readOnly
        type="text"
        value={quantity}
      />
      <button
        onClick={onIncrease}
        className="flex items-center justify-center size-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-bold text-xl hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
