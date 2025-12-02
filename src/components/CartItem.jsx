import { useState } from 'react';

function CartItem({ item, onUpdateQuantity, onRemove }) {
  const itemPrice = typeof item.price === 'string'
    ? parseFloat(item.price.replace('R$', '').replace(',', '.').trim())
    : item.price;

  const formattedPrice = `R$ ${itemPrice.toFixed(2).replace('.', ',')}`;
  const totalPrice = `R$ ${(itemPrice * item.quantity).toFixed(2).replace('.', ',')}`;

  return (
    <div className="flex flex-col gap-4 border-b border-border-light dark:border-border-dark py-6 md:grid md:grid-cols-5 md:items-center">
      <div className="flex items-start gap-4 md:col-span-2">
        <div 
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-20 shrink-0" 
          style={{ backgroundImage: `url("${item.image || item.imageUrl}")` }}
        ></div>
        <div className="flex flex-1 flex-col justify-center">
          <p className="text-base font-bold leading-normal">{item.name}</p>
          {item.description && <p className="text-sm text-slate-500 dark:text-slate-400">{item.description}</p>}
        </div>
      </div>
      <p className="text-center text-sm font-medium md:text-base">
        <span className="md:hidden font-semibold">Preço: </span>
        {formattedPrice}
      </p>
      <div className="flex justify-center">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-primary font-bold text-lg transition-transform hover:scale-110 active:scale-95"
          >
            -
          </button>
          <input 
            className="w-8 border-none bg-transparent p-0 text-center font-bold [appearance:textfield] focus:outline-none focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" 
            type="number" 
            value={item.quantity}
            readOnly
          />
          <button 
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-primary font-bold text-lg transition-transform hover:scale-110 active:scale-95"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2">
        <p className="text-right text-base font-bold">
          <span className="md:hidden font-semibold">Total: </span>
          {totalPrice}
        </p>
        <button 
          onClick={() => onRemove(item.id)}
          className="text-slate-400 hover:text-red-500 transition-colors"
        >
          <span className="material-symbols-outlined text-xl">delete</span>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
