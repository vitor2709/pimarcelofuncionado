function CheckoutOrderSummary({ items, subtotal, deliveryFee, total, onConfirm }) {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm sticky top-24">
        <h2 className="text-gray-900 dark:text-white text-xl font-bold border-b border-border-light dark:border-gray-700 pb-4 mb-4">
          Resumo do Pedido
        </h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <img 
                className="size-16 rounded-lg object-cover" 
                src={item.imageUrl} 
                alt={item.name}
              />
              <div className="flex-grow">
                <p className="font-semibold text-gray-800 dark:text-white">{item.name}</p>
                <p className="text-sm text-text-light dark:text-text-dark">{item.quantity}x</p>
              </div>
              <p className="font-medium text-gray-800 dark:text-white">
                R$ {item.price.toFixed(2).replace('.', ',')}
              </p>
            </div>
          ))}
        </div>
        <div className="border-t border-border-light dark:border-gray-700 mt-6 pt-4 space-y-2">
          <div className="flex justify-between text-text-light dark:text-text-dark">
            <span>Subtotal</span>
            <span>R$ {subtotal.toFixed(2).replace('.', ',')}</span>
          </div>
          <div className="flex justify-between text-text-light dark:text-text-dark">
            <span>Taxa de Entrega</span>
            <span>R$ {deliveryFee.toFixed(2).replace('.', ',')}</span>
          </div>
          <div className="flex justify-between font-bold text-lg text-gray-900 dark:text-white mt-2">
            <span>Total a Pagar</span>
            <span>R$ {total.toFixed(2).replace('.', ',')}</span>
          </div>
        </div>
        <button 
          onClick={onConfirm}
          className="flex items-center justify-center w-full mt-6 bg-primary text-accent h-14 rounded-xl text-lg font-bold shadow-lg hover:opacity-90 transition-opacity"
        >
          Confirmar Pedido
          <span className="material-symbols-outlined ml-2">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}

export default CheckoutOrderSummary;
