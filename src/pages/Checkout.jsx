import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CheckoutHeader from '../components/CheckoutHeader';
import Breadcrumb from '../components/Breadcrumb';
import DeliveryOptionSelector from '../components/DeliveryOptionSelector';
import ContactAddressForm from '../components/ContactAddressForm';
import PaymentMethodSelector from '../components/PaymentMethodSelector';
import CheckoutOrderSummary from '../components/CheckoutOrderSummary';

function Checkout() {
  const navigate = useNavigate();
  
  const [deliveryOption, setDeliveryOption] = useState('delivery');
  const [paymentMethod, setPaymentMethod] = useState('pix');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cep: '',
    address: '',
    number: '',
    complement: ''
  });

  const orderItems = [
    {
      name: "Salada Tropical",
      quantity: 1,
      price: 22.50,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-rq1OiHqZhtApdzdfnAQt0s8h33PbMnFRIYPT-e-1bajwQpAtdlwqrxjD0LL7GATuEj-e0OlznRdmp2nYFbjdvX6t5rqCgtlXxRbFM3jO-AB1PeqSlQtp-AS1X8p8OXpXGO_Pxzg0ule4Sz6FkmYTPAK26rjLRzQXa1n-X1-8eqYBzjVc_ya2wM3_EE7ORbsgD1vk0vLwHyVpvAnHW60QZofuHgBnwXZB0ZS72vyzxuNrb4IyPnpbu90Tw2TBfLoI6MNf24TNew"
    },
    {
      name: "Pizza Individual",
      quantity: 1,
      price: 18.00,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3k-pXQnpHIlBGkwKAyy_A_eH5w1xQ6DegKQpvAcZFwF_2A66bkMZJ5AzwoHA6OVCHxzF40wrUI967nSPpWAnW_tPzRF70mgET5UOF-CZpqm9Hlns_luG86Lb2Y-ml-CAom50kZeUA6uft6uhkuF56aokjGfuFtslF0_bmJZvTf4UjuOqLnqkk0XZ0JRrZr4A79Ssysj-GPL1agYDC5wrvpmmRRezd-rTnOy2FomjFdBsl7ELS9CusJqHPopTSPuDfyYzCZ8iQ4Q"
    },
    {
      name: "Suco de Laranja",
      quantity: 2,
      price: 14.00,
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrmrMsWxAtTrLJB8Ae_RCfDMMLqoFEDF5zkixoN9nh5VuYsZaraHlwuEYRVAZUQ5Wn04MkFEOxEduEINgNZicazG93aRCD8aspUBN_ydCctcdiNPSFib77zy7y_jNGPGwIZKI9xWDZTSI7D3o_EyuSS32KSlXTEfwPex9zM7-gbLRTPzbLOPrHoJ_TABsWSH7kAKYw0o6jPfuMNvge_rCC-rXAEIPLpe_oFnfTPIR0Zias-QJJ8MF3IxE3l6fsxzzb0_t_WsW5zQ"
    }
  ];

  const breadcrumbItems = [
    { label: 'Carrinho', link: '/carrinho' },
    { label: 'Pagamento', link: null },
    { label: 'Confirmação', link: null }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const deliveryFee = deliveryOption === 'delivery' ? 5.00 : 0;
  const total = subtotal + deliveryFee;

  const handleConfirmOrder = () => {
    // Validação básica
    if (!formData.name || !formData.phone) {
      alert('Por favor, preencha os campos obrigatórios');
      return;
    }

    if (deliveryOption === 'delivery' && (!formData.address || !formData.cep)) {
      alert('Por favor, preencha o endereço de entrega');
      return;
    }

    // Aqui você pode adicionar a lógica para processar o pedido
    console.log('Pedido confirmado:', {
      deliveryOption,
      paymentMethod,
      formData,
      orderItems,
      total
    });

    alert('Pedido confirmado com sucesso!');
    navigate('/home');
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
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
                <DeliveryOptionSelector 
                  deliveryOption={deliveryOption}
                  onSelectOption={setDeliveryOption}
                />
                
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
