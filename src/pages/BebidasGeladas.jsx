import CategoryHeader from '../components/CategoryHeader';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function BebidasGeladas() {
  const products = [
    {
      id: 11,
      name: "Suco de Laranja Natural",
      description: "Suco fresco de laranjas selecionadas.",
      price: "R$ 8,00",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-nJj6z_5i55zgVujhryTOOUy3iXNe3aAZqs5NAmXnCA3xrYWyKd9_z3fDAuqHd6NzpAfnvDyr1opx-JUtxCasNGZuzBrzCHNZKHaHLe3PIBYjwdNIAyJ-1I8zrXt2GSkBITWhE-pHTD7BVj1YHuosUZf8reVzsdjlZB9wXyZebsDYdzUkUtuZ7eOuNbtPlMVQ8aPrCj2K1_vn0PeVs__cQ82oUQYbTcislY-SARxNofvXEqonZNJ305yVGHkgnKSLrwkGkzIiZA"
    },
    {
      id: 12,
      name: "Limonada Suíça",
      description: "Refrescante limonada com leite condensado.",
      price: "R$ 7,50",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-nJj6z_5i55zgVujhryTOOUy3iXNe3aAZqs5NAmXnCA3xrYWyKd9_z3fDAuqHd6NzpAfnvDyr1opx-JUtxCasNGZuzBrzCHNZKHaHLe3PIBYjwdNIAyJ-1I8zrXt2GSkBITWhE-pHTD7BVj1YHuosUZf8reVzsdjlZB9wXyZebsDYdzUkUtuZ7eOuNbtPlMVQ8aPrCj2K1_vn0PeVs__cQ82oUQYbTcislY-SARxNofvXEqonZNJ305yVGHkgnKSLrwkGkzIiZA"
    },
    {
      id: 13,
      name: "Chá Gelado de Pêssego",
      description: "Chá gelado com sabor natural de pêssego.",
      price: "R$ 6,50",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-nJj6z_5i55zgVujhryTOOUy3iXNe3aAZqs5NAmXnCA3xrYWyKd9_z3fDAuqHd6NzpAfnvDyr1opx-JUtxCasNGZuzBrzCHNZKHaHLe3PIBYjwdNIAyJ-1I8zrXt2GSkBITWhE-pHTD7BVj1YHuosUZf8reVzsdjlZB9wXyZebsDYdzUkUtuZ7eOuNbtPlMVQ8aPrCj2K1_vn0PeVs__cQ82oUQYbTcislY-SARxNofvXEqonZNJ305yVGHkgnKSLrwkGkzIiZA"
    },
    {
      id: 14,
      name: "Smoothie de Frutas Vermelhas",
      description: "Mix de morango, framboesa e mirtilo.",
      price: "R$ 12,00",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-nJj6z_5i55zgVujhryTOOUy3iXNe3aAZqs5NAmXnCA3xrYWyKd9_z3fDAuqHd6NzpAfnvDyr1opx-JUtxCasNGZuzBrzCHNZKHaHLe3PIBYjwdNIAyJ-1I8zrXt2GSkBITWhE-pHTD7BVj1YHuosUZf8reVzsdjlZB9wXyZebsDYdzUkUtuZ7eOuNbtPlMVQ8aPrCj2K1_vn0PeVs__cQ82oUQYbTcislY-SARxNofvXEqonZNJ305yVGHkgnKSLrwkGkzIiZA"
    },
    {
      id: 15,
      name: "Café Gelado",
      description: "Café espresso com gelo e toque de baunilha.",
      price: "R$ 7,00",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxAEAR8NrEVOQq9tIOTldwvAR0Yyv2Y5j56L9EeQ1pKfmP3Of9yMudyBxJX1_uKVaEadE_hGixxqRrCK7fGD56ousPsKwEXvaQ-ZsHLUXCGIX2xNXsn2AlWNVRlJ-VDHz2MFYR2ZRv9fPkYnRZh46jx3WwW5JytXGyY3v4SxVcivzYETQqE_uQCzvy8AGnuM6DvdRkdQk_YGVSKnUxjQFDRNcgCahHHry4_Wv5NBXz1DbaYHvymmEM0W0gHFuGGEIWPajQeE0nGg"
    },
    {
      id: 16,
      name: "Água de Coco Gelada",
      description: "Água de coco natural e gelada.",
      price: "R$ 5,00",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-nJj6z_5i55zgVujhryTOOUy3iXNe3aAZqs5NAmXnCA3xrYWyKd9_z3fDAuqHd6NzpAfnvDyr1opx-JUtxCasNGZuzBrzCHNZKHaHLe3PIBYjwdNIAyJ-1I8zrXt2GSkBITWhE-pHTD7BVj1YHuosUZf8reVzsdjlZB9wXyZebsDYdzUkUtuZ7eOuNbtPlMVQ8aPrCj2K1_vn0PeVs__cQ82oUQYbTcislY-SARxNofvXEqonZNJ305yVGHkgnKSLrwkGkzIiZA"
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
              <span className="text-[#0d121b] dark:text-white font-medium">Bebidas Geladas</span>
            </nav>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#0d121b] dark:text-white mb-3">Bebidas Geladas</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Refresque-se com nossas deliciosas bebidas geladas e sucos naturais.
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

export default BebidasGeladas;
