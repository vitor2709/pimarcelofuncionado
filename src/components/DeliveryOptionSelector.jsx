function DeliveryOptionSelector({ deliveryOption, onSelectOption }) {
  return (
    <div className="flex">
      <div className="flex h-12 flex-1 items-center justify-center rounded-lg bg-background-light dark:bg-background-dark p-1">
        <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white has-[:checked]:dark:bg-gray-700 has-[:checked]:shadow-md has-[:checked]:text-primary has-[:checked]:dark:text-accent text-text-light dark:text-text-dark text-base font-medium leading-normal transition-all duration-200">
          <span className="truncate">Entrega</span>
          <input 
            checked={deliveryOption === 'delivery'}
            className="invisible w-0" 
            name="delivery_option" 
            type="radio" 
            value="delivery"
            onChange={(e) => onSelectOption(e.target.value)}
          />
        </label>
        <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white has-[:checked]:dark:bg-gray-700 has-[:checked]:shadow-md has-[:checked]:text-primary has-[:checked]:dark:text-accent text-text-light dark:text-text-dark text-base font-medium leading-normal transition-all duration-200">
          <span className="truncate">Retirada</span>
          <input 
            checked={deliveryOption === 'pickup'}
            className="invisible w-0" 
            name="delivery_option" 
            type="radio" 
            value="pickup"
            onChange={(e) => onSelectOption(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}

export default DeliveryOptionSelector;
