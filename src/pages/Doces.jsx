import CategoryHeader from '../components/CategoryHeader';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Doces() {
  const products = [
    {
      id: 6,
      name: "Brownie de Chocolate",
      description: "Brownie úmido com pedaços de chocolate.",
      price: "R$ 7,00",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXLT_UbnK6FtCg4fh0t1oSq1DEBwDtf3agX1hsgAV6knntRxDofQj_-odaKEfTfHBU5GbBGQClgBG5qNhyxq5qiWZ47G4O--McAE1XPWI6JL_JqyOKrAhq6ZQA4ylqfchqeoYMhRjyUX7i5gaO9jebjXrPXrOKEpheL6tFSpC-1JpWrUloK3OWIeovd8aVywZXT8_kJMZYnUr3rL7QszxDc9ckdtt7zEoR23IbA6yaqShRc1gXeyZwqVMwDOeuRRIEUabDlQhl6g"
    },
    {
      id: 22,
      name: "Torta de Limão",
      description: "Torta cremosa de limão com merengue.",
      price: "R$ 8,50",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXLT_UbnK6FtCg4fh0t1oSq1DEBwDtf3agX1hsgAV6knntRxDofQj_-odaKEfTfHBU5GbBGQClgBG5qNhyxq5qiWZ47G4O--McAE1XPWI6JL_JqyOKrAhq6ZQA4ylqfchqeoYMhRjyUX7i5gaO9jebjXrPXrOKEpheL6tFSpC-1JpWrUloK3OWIeovd8aVywZXT8_kJMZYnUr3rL7QszxDc9ckdtt7zEoR23IbA6yaqShRc1gXeyZwqVMwDOeuRRIEUabDlQhl6g"
    },
    {
      id: 23,
      name: "Cheesecake de Morango",
      description: "Cheesecake cremoso com calda de morango.",
      price: "R$ 10,00",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXLT_UbnK6FtCg4fh0t1oSq1DEBwDtf3agX1hsgAV6knntRxDofQj_-odaKEfTfHBU5GbBGQClgBG5qNhyxq5qiWZ47G4O--McAE1XPWI6JL_JqyOKrAhq6ZQA4ylqfchqeoYMhRjyUX7i5gaO9jebjXrPXrOKEpheL6tFSpC-1JpWrUloK3OWIeovd8aVywZXT8_kJMZYnUr3rL7QszxDc9ckdtt7zEoR23IbA6yaqShRc1gXeyZwqVMwDOeuRRIEUabDlQhl6g"
    },
    {
      id: 24,
      name: "Cookie com Gotas de Chocolate",
      description: "Cookie crocante por fora e macio por dentro.",
      price: "R$ 4,50",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXLT_UbnK6FtCg4fh0t1oSq1DEBwDtf3agX1hsgAV6knntRxDofQj_-odaKEfTfHBU5GbBGQClgBG5qNhyxq5qiWZ47G4O--McAE1XPWI6JL_JqyOKrAhq6ZQA4ylqfchqeoYMhRjyUX7i5gaO9jebjXrPXrOKEpheL6tFSpC-1JpWrUloK3OWIeovd8aVywZXT8_kJMZYnUr3rL7QszxDc9ckdtt7zEoR23IbA6yaqShRc1gXeyZwqVMwDOeuRRIEUabDlQhl6g"
    },
    {
      id: 25,
      name: "Bolo de Cenoura com Chocolate",
      description: "Fatia de bolo de cenoura com cobertura de chocolate.",
      price: "R$ 6,00",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXLT_UbnK6FtCg4fh0t1oSq1DEBwDtf3agX1hsgAV6knntRxDofQj_-odaKEfTfHBU5GbBGQClgBG5qNhyxq5qiWZ47G4O--McAE1XPWI6JL_JqyOKrAhq6ZQA4ylqfchqeoYMhRjyUX7i5gaO9jebjXrPXrOKEpheL6tFSpC-1JpWrUloK3OWIeovd8aVywZXT8_kJMZYnUr3rL7QszxDc9ckdtt7zEoR23IbA6yaqShRc1gXeyZwqVMwDOeuRRIEUabDlQhl6g"
    },
    {
      id: 26,
      name: "Pudim de Leite Condensado",
      description: "Pudim caseiro com calda de caramelo.",
      price: "R$ 7,50",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXLT_UbnK6FtCg4fh0t1oSq1DEBwDtf3agX1hsgAV6knntRxDofQj_-odaKEfTfHBU5GbBGQClgBG5qNhyxq5qiWZ47G4O--McAE1XPWI6JL_JqyOKrAhq6ZQA4ylqfchqeoYMhRjyUX7i5gaO9jebjXrPXrOKEpheL6tFSpC-1JpWrUloK3OWIeovd8aVywZXT8_kJMZYnUr3rL7QszxDc9ckdtt7zEoR23IbA6yaqShRc1gXeyZwqVMwDOeuRRIEUabDlQhl6g"
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
              <span className="text-[#0d121b] dark:text-white font-medium">Doces</span>
            </nav>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#0d121b] dark:text-white mb-3">Doces</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Sobremesas irresistíveis para adoçar o seu dia.
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

export default Doces;
