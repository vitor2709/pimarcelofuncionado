function ContactAddressForm({ formData, onFormChange }) {
  const handleChange = (e) => {
    const { id, value } = e.target;
    onFormChange({ ...formData, [id]: value });
  };

  return (
    <>
      <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pt-8 pb-4">
        Informações de Contato e Endereço
      </h2>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2" htmlFor="name">
            Nome Completo
          </label>
          <input 
            className="w-full rounded-lg border-border-light dark:border-gray-600 focus:ring-primary focus:border-primary bg-background-light dark:bg-gray-700 text-gray-900 dark:text-white" 
            id="name" 
            placeholder="Seu nome" 
            type="text"
            value={formData.name || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2" htmlFor="phone">
            Telefone
          </label>
          <input 
            className="w-full rounded-lg border-border-light dark:border-gray-600 focus:ring-primary focus:border-primary bg-background-light dark:bg-gray-700 text-gray-900 dark:text-white" 
            id="phone" 
            placeholder="(00) 00000-0000" 
            type="tel"
            value={formData.phone || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2" htmlFor="cep">
            CEP
          </label>
          <input 
            className="w-full rounded-lg border-border-light dark:border-gray-600 focus:ring-primary focus:border-primary bg-background-light dark:bg-gray-700 text-gray-900 dark:text-white" 
            id="cep" 
            placeholder="00000-000" 
            type="text"
            value={formData.cep || ''}
            onChange={handleChange}
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2" htmlFor="address">
            Endereço
          </label>
          <input 
            className="w-full rounded-lg border-border-light dark:border-gray-600 focus:ring-primary focus:border-primary bg-background-light dark:bg-gray-700 text-gray-900 dark:text-white" 
            id="address" 
            placeholder="Rua, Avenida, etc." 
            type="text"
            value={formData.address || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2" htmlFor="number">
            Número
          </label>
          <input 
            className="w-full rounded-lg border-border-light dark:border-gray-600 focus:ring-primary focus:border-primary bg-background-light dark:bg-gray-700 text-gray-900 dark:text-white" 
            id="number" 
            type="text"
            value={formData.number || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-light dark:text-text-dark mb-2" htmlFor="complement">
            Complemento
          </label>
          <input 
            className="w-full rounded-lg border-border-light dark:border-gray-600 focus:ring-primary focus:border-primary bg-background-light dark:bg-gray-700 text-gray-900 dark:text-white" 
            id="complement" 
            placeholder="Apto, Bloco" 
            type="text"
            value={formData.complement || ''}
            onChange={handleChange}
          />
        </div>
      </form>
    </>
  );
}

export default ContactAddressForm;
