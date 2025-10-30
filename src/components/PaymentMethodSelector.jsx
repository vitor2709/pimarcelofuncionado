function PaymentMethodSelector({ paymentMethod, onSelectMethod }) {
  const paymentMethods = [
    { id: 'pix', icon: 'qr_code_2', label: 'Pix' },
    { id: 'credit', icon: 'credit_card', label: 'Cartão de Crédito' },
    { id: 'meal-voucher', icon: 'card_membership', label: 'Vale Refeição' }
  ];

  return (
    <>
      <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pt-10 pb-4">
        Forma de Pagamento
      </h2>
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <label 
            key={method.id}
            className={`flex items-center p-4 rounded-lg border cursor-pointer ${
              paymentMethod === method.id
                ? 'border-primary dark:border-accent bg-primary/10 dark:bg-accent/20'
                : 'border-border-light dark:border-gray-600'
            }`}
          >
            <input 
              checked={paymentMethod === method.id}
              className="form-radio text-primary dark:text-accent focus:ring-primary dark:focus:ring-accent" 
              name="payment_method" 
              type="radio"
              value={method.id}
              onChange={(e) => onSelectMethod(e.target.value)}
            />
            <span className="material-symbols-outlined mx-4 text-gray-800 dark:text-white">{method.icon}</span>
            <span className="font-medium text-gray-800 dark:text-white">{method.label}</span>
          </label>
        ))}
      </div>
    </>
  );
}

export default PaymentMethodSelector;
