import PromoCard from './PromoCard';

function Carousel() {
  const promos = [
    {
      title: "Café do Dia + Pão de Queijo por R$9,90",
      description: "Aproveite nossa oferta especial e comece o dia com mais sabor.",
      buttonText: "Ver Oferta",
      bgColor: "bg-[#ffecb3] dark:bg-yellow-800/20",
      buttonColor: "bg-[#fbc02d] text-[#0d121b] hover:bg-yellow-500",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsxnT9-7ZkqCzcSV3wfnPx3_y9Cm71FOIh4AqRXRRLGsF0MIYbdWB9RDqnUUjqxa44Ks7JULv7WyXB0xzpSTpqncwX9dOVFhbhbWx161PAA1w0y-BloxXX7wfHek64WMSEUilLvCAR1JVype-5UXPIr1Emc28m1o76m4n5TZNv0hkIlZPJqLe3kHKOnsiP8apZqZAzJOXDHy3r1kuShfqRUnPZRN4p9NmMA-Q7APKRkSlNGn8RqC4zl3DnQ-RsAV6xiYzM-PK6MA"
    },
    {
      title: "Happy Hour de Salgados",
      description: "Na compra de 3 salgados, o 4º é por nossa conta. Das 16h às 18h.",
      buttonText: "Aproveitar",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
      buttonColor: "bg-primary text-white hover:bg-primary/90",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVTEoAjNpIPJC_w03mQ-B_Eu92abLM0chnS1rBCnx98Da8e-EjxzgGDdTBeiXLGQwi1hky4ouwYF7bNGT6oYsXPaLHIrMS-icmLoGWjnhQrBsTNfl9_GAiJs7BDNIJcYVStZSzEFyvstlar_uX0nGq93LF5jOtzlMyzaFKAlw-IgJz9cnbzRg8kVZzQZQt3XR66vVpfZGMsLrmm2N0cae5ZeSpmml5vMfT7y8FfIMCOcoG-1Pgca4L-io1s1ncQNjVNSpsruQzVg"
    },
    {
      title: "Novos Cafés Gelados",
      description: "Experimente nossos novos sabores refrescantes para os dias de calor.",
      buttonText: "Descobrir",
      bgColor: "bg-gray-200 dark:bg-gray-800/50",
      buttonColor: "bg-white dark:bg-gray-700 dark:text-white text-[#0d121b] hover:bg-gray-100 dark:hover:bg-gray-600",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8WsnEz1whSW_kORA9M72d9DcXN9_Vf5NDGtAY5bqfA1NC8-YRNRv2SCvLvxoD4iib4ZUj2ZOvdSSfxVn1Dsa1wZS3n9JqEM3tyB9d0LDTp_TX7ghu1G-9GTjyjdm7dvcaq984KZKkcBpp9Cq9gNb5Ucp9zvEuavHGXVrz_OI8xZXY5_LDG5n8Nfb6AJEZsr8jNtXFBrVmXaFc3B0svFSXfTAbsqe05EaY1JVKjVXJvTnhLo2m3yMv-pagbL-QuTGSxvwcFvHmxA"
    }
  ];

  return (
    <div className="px-4 pt-8 pb-4">
      <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-6">
          {promos.map((promo, index) => (
            <PromoCard key={index} {...promo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
