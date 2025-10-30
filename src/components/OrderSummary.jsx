import { Link } from 'react-router-dom';

function OrderSummary({ subtotal, fees, total }) {
  return (
    <div className="col-span-1 lg:sticky lg:top-28 lg:h-fit">
      <div className="rounded-lg border border-border-light dark:border-border-dark bg-slate-50 dark:bg-slate-800/50 p-6">
        <h2 className="text-2xl font-bold mb-6">Resumo do Pedido</h2>
        <div className="space-y-4 text-sm">
          <div className="flex justify-between">
            <span className="text-slate-500 dark:text-slate-400">Subtotal</span>
            <span className="font-medium">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500 dark:text-slate-400">Taxas</span>
            <span className="font-medium">R$ {fees.toFixed(2).replace('.', ',')}</span>
          </div>
          <div className="border-t border-border-light dark:border-border-dark my-4"></div>
          <div className="flex justify-between text-base font-bold">
            <span>Total</span>
            <span>R$ {total.toFixed(2).replace('.', ',')}</span>
          </div>
        </div>
        <div className="mt-8">
          <Link to="/checkout" className="group flex h-14 w-full cursor-pointer items-center justify-center overflow-hidden rounded-md bg-primary text-base font-bold text-white shadow-lg shadow-primary/30 transition-all duration-300 ease-in-out hover:shadow-primary/50">
            <span className="transition-transform duration-300 group-hover:-translate-y-12">Finalizar Pedido</span>
            <span className="absolute translate-y-12 transition-transform duration-300 group-hover:translate-y-0">
              <div className="flex items-center gap-2">
                <span>Confirmar</span>
                <span className="material-symbols-outlined text-xl text-secondary">arrow_right_alt</span>
              </div>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
