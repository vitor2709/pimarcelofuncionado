import CategoryHeader from '../components/CategoryHeader';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Salgados() {
  const products = [
    {
      id: 5,
      name: "Pão de Queijo",
      description: "Tradicional pão de queijo mineiro quentinho.",
      price: "R$ 3,50",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb-G9a4e_caugvJZRoNym9GpHrR18B7Fd07hKSW0iX1F6NTlNxhrlEAKvNEk4bHdjVRAGcMgm8u00DkSM9GqgGeuiZzM5294WEaExd_8xmFRmeVFpA41raWVyF1QV4ZylR551j7zEYVy0SFQnf1kCeSBHUQwWSf9Zq0426LBGKjlkx1UE7egZWkHMYRlFLCDKAUBcbTiGT1_nPT09LAzsW0t_YzXy6n6l3NLNwYaqV6gWEWczo6ZhbeBEXQF_YhqnT2Ln1KRNxDA"
    },
    {
      id: 17,
      name: "Coxinha de Frango",
      description: "Coxinha crocante recheada com frango desfiado.",
      price: "R$ 5,00",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb-G9a4e_caugvJZRoNym9GpHrR18B7Fd07hKSW0iX1F6NTlNxhrlEAKvNEk4bHdjVRAGcMgm8u00DkSM9GqgGeuiZzM5294WEaExd_8xmFRmeVFpA41raWVyF1QV4ZylR551j7zEYVy0SFQnf1kCeSBHUQwWSf9Zq0426LBGKjlkx1UE7egZWkHMYRlFLCDKAUBcbTiGT1_nPT09LAzsW0t_YzXy6n6l3NLNwYaqV6gWEWczo6ZhbeBEXQF_YhqnT2Ln1KRNxDA"
    },
    {
      id: 18,
      name: "Esfiha de Carne",
      description: "Esfiha aberta com carne temperada.",
      price: "R$ 4,50",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb-G9a4e_caugvJZRoNym9GpHrR18B7Fd07hKSW0iX1F6NTlNxhrlEAKvNEk4bHdjVRAGcMgm8u00DkSM9GqgGeuiZzM5294WEaExd_8xmFRmeVFpA41raWVyF1QV4ZylR551j7zEYVy0SFQnf1kCeSBHUQwWSf9Zq0426LBGKjlkx1UE7egZWkHMYRlFLCDKAUBcbTiGT1_nPT09LAzsW0t_YzXy6n6l3NLNwYaqV6gWEWczo6ZhbeBEXQF_YhqnT2Ln1KRNxDA"
    },
    {
      id: 19,
      name: "Empada de Palmito",
      description: "Empada caseira recheada com palmito.",
      price: "R$ 5,50",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb-G9a4e_caugvJZRoNym9GpHrR18B7Fd07hKSW0iX1F6NTlNxhrlEAKvNEk4bHdjVRAGcMgm8u00DkSM9GqgGeuiZzM5294WEaExd_8xmFRmeVFpA41raWVyF1QV4ZylR551j7zEYVy0SFQnf1kCeSBHUQwWSf9Zq0426LBGKjlkx1UE7egZWkHMYRlFLCDKAUBcbTiGT1_nPT09LAzsW0t_YzXy6n6l3NLNwYaqV6gWEWczo6ZhbeBEXQF_YhqnT2Ln1KRNxDA"
    },
    {
      id: 20,
      name: "Sanduíche Natural",
      description: "Pão integral com peito de peru, queijo e salada.",
      price: "R$ 8,50",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb-G9a4e_caugvJZRoNym9GpHrR18B7Fd07hKSW0iX1F6NTlNxhrlEAKvNEk4bHdjVRAGcMgm8u00DkSM9GqgGeuiZzM5294WEaExd_8xmFRmeVFpA41raWVyF1QV4ZylR551j7zEYVy0SFQnf1kCeSBHUQwWSf9Zq0426LBGKjlkx1UE7egZWkHMYRlFLCDKAUBcbTiGT1_nPT09LAzsW0t_YzXy6n6l3NLNwYaqV6gWEWczo6ZhbeBEXQF_YhqnT2Ln1KRNxDA"
    },
    {
      id: 21,
      name: "Pastel de Queijo",
      description: "Pastel crocante com queijo derretido.",
      price: "R$ 4,00",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBb-G9a4e_caugvJZRoNym9GpHrR18B7Fd07hKSW0iX1F6NTlNxhrlEAKvNEk4bHdjVRAGcMgm8u00DkSM9GqgGeuiZzM5294WEaExd_8xmFRmeVFpA41raWVyF1QV4ZylR551j7zEYVy0SFQnf1kCeSBHUQwWSf9Zq0426LBGKjlkx1UE7egZWkHMYRlFLCDKAUBcbTiGT1_nPT09LAzsW0t_YzXy6n6l3NLNwYaqV6gWEWczo6ZhbeBEXQF_YhqnT2Ln1KRNxDA"
    }
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <CategoryHeader />
      
      <main className="flex-grow max-w-5xl w-full mx-auto">
        <div className="px-6 py-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <nav className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Link to="/home" className="hover:text-primary">Home</Link>
              <span>/</span>
              <span className="text-[#0d121b] dark:text-white font-medium">Salgados</span>
            </nav>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#0d121b] dark:text-white mb-3">Salgados</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Salgados fresquinhos e deliciosos para qualquer hora do dia.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
            {products.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Salgados;
