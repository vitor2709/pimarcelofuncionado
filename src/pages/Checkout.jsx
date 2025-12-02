import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CheckoutHeader from '../components/CheckoutHeader';
import Breadcrumb from '../components/Breadcrumb';
import ContactAddressForm from '../components/ContactAddressForm';
import PaymentMethodSelector from '../components/PaymentMethodSelector';
import CheckoutOrderSummary from '../components/CheckoutOrderSummary';

function Checkout() {
  const navigate = useNavigate();
  
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [orderItems, setOrderItems] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  // Carregar itens do carrinho
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    // Converter formato do carrinho para formato do checkout
    const items = cart.map(item => {
      // Garantir que o preço seja um número
      const price = typeof item.price === 'string'
        ? parseFloat(item.price.replace('R$', '').replace(',', '.').trim())
        : item.price;
      
      return {
        name: item.name,
        quantity: item.quantity,
        price: price,
        imageUrl: item.image
      };
    });
    setOrderItems(items);
  }, []);

  const breadcrumbItems = [
    { label: 'Carrinho', link: '/carrinho' },
    { label: 'Pagamento', link: null },
    { label: 'Confirmação', link: null }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 0;
  const total = subtotal;

  const handleConfirmOrder = () => {
    // Validação básica
    if (!formData.name || !formData.phone) {
      alert('Por favor, preencha os campos obrigatórios');
      return;
    }

    if (orderItems.length === 0) {
      alert('Seu carrinho está vazio!');
      return;
    }

    // Criar objeto do pedido
    const newOrder = {
      id: `#${Date.now().toString().slice(-4)}`,
      customer: formData.name,
      phone: formData.phone,
      date: new Date().toLocaleDateString('pt-BR'),
      timestamp: Date.now(),
      total: `R$ ${total.toFixed(2).replace('.', ',')}`,
      status: 'Em Preparo',
      statusColor: 'yellow',
      paymentMethod: paymentMethod,
      items: orderItems,
      deliveryOption: 'pickup'
    };

    // Salvar pedido no localStorage
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    existingOrders.unshift(newOrder); // Adicionar no início
    localStorage.setItem('orders', JSON.stringify(existingOrders));

    // Processar o pedido
    console.log('Pedido confirmado:', newOrder);

    // Limpar carrinho
    localStorage.setItem('cart', JSON.stringify([]));

    // Mostrar notificação de sucesso
    setShowSuccess(true);

    // Redirecionar após 3 segundos
    setTimeout(() => {
      navigate('/escolher-lanchonete');
    }, 3000);
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      {/* Notificação de Sucesso */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-md mx-4 animate-bounce-in">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-5xl">check_circle</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Pedido Confirmado!
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                Seu pedido foi realizado com sucesso.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Retire na lanchonete em 15-20 minutos.
              </p>
              <div className="mt-6 flex items-center gap-2 text-primary dark:text-accent">
                <span className="material-symbols-outlined animate-spin">autorenew</span>
                <span className="text-sm font-medium">Redirecionando...</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="layout-container flex h-full grow flex-col">
        <CheckoutHeader />
        
        <main className="flex flex-1 justify-center py-5 mt-16">
          <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 p-4">
              {breadcrumbItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {index > 0 && (
                    <span className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">/</span>
                  )}
                  {item.link ? (
                    <Link to={item.link} className="text-text-light dark:text-text-dark text-sm font-medium leading-normal hover:text-primary">
                      {item.label}
                    </Link>
                  ) : index === 1 ? (
                    <span className="text-primary dark:text-accent text-sm font-medium leading-normal">{item.label}</span>
                  ) : (
                    <span className="text-gray-800 dark:text-white text-sm font-medium leading-normal">{item.label}</span>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                Finalize seu Pedido
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
              {/* Left Column */}
              <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-sm">
                <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-3xl">store</span>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Retirada na Lanchonete</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Seu pedido ficará pronto em 15-20 minutos</p>
                    </div>
                  </div>
                </div>
                
                <ContactAddressForm 
                  formData={formData}
                  onFormChange={setFormData}
                />
                
                <PaymentMethodSelector 
                  paymentMethod={paymentMethod}
                  onSelectMethod={setPaymentMethod}
                />
              </div>

              {/* Right Column */}
              <CheckoutOrderSummary 
                items={orderItems}
                subtotal={subtotal}
                deliveryFee={deliveryFee}
                total={total}
                onConfirm={handleConfirmOrder}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Checkout;
