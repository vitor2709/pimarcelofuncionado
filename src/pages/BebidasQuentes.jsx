import CategoryHeader from '../components/CategoryHeader';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function BebidasQuentes() {
  const products = [
    {
      id: 1,
      name: "Cappuccino Italiano",
      description: "Espresso, leite vaporizado e espuma cremosa.",
      price: "R$ 8,00",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6monmtEIUwKOhMacoOFqSsOKjgNcehpH9Nh_a6J_ayYgac96cv220-SKiGDXNgBKNWIXUuA4m9Zswhi00k7f9klAsEi-VvGY0jQ-WWzwMqfN-Urq56M_W8KuWhZ4gGSwir-im22nygR0pnzMYFqplDJFq4onp6D5CnkGcsHITghWPFRLeDrz49pb1VIZbDR3Z1g0P0F-xbO8r0i3OkTZbc3HUREz4kR-h0cw_Skym56RjLFM7i9H2jt2LSIJF2SqKuaRS4N7hug"
    },
    {
      id: 2,
      name: "Café Latte",
      description: "Uma dose de espresso com leite vaporizado.",
      price: "R$ 7,50",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxAEAR8NrEVOQq9tIOTldwvAR0Yyv2Y5j56L9EeQ1pKfmP3Of9yMudyBxJX1_uKVaEadE_hGixxqRrCK7fGD56ousPsKwEXvaQ-ZsHLUXCGIX2xNXsn2AlWNVRlJ-VDHz2MFYR2ZRv9fPkYnRZh46jx3WwW5JytXGyY3v4SxVcivzYETQqE_uQCzvy8AGnuM6DvdRkdQk_YGVSKnUxjQFDRNcgCahHHry4_Wv5NBXz1DbaYHvymmEM0W0gHFuGGEIWPajQeE0nGg"
    },
    {
      id: 3,
      name: "Espresso",
      description: "Café forte e encorpado, puro e intenso.",
      price: "R$ 5,00",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfEhE-lIRdG_VQw-xLtzWI6qnrbzB06wf1PMwhRZpx2OKUtzzyXYf7cGhC80ngeiUsnvzgU1rvmXvxYIzkVakvTenRCD9_He0BnqgOvJwlqN41-sZ5xUPhvEbQjj2kRC9BZX5bOCpHMCCgyz6vDirP7rjSLBpmzttCbXK53Mcem1AneU8GwNcSLIVng1QJLelM3b5V_z_WP5IZlIimV6rjhMiBuI0jCtOIWxmpcPYuW0LHe0lfg8qEMXeKqArK6ngcugG-bDKUTg"
    },
    {
      id: 4,
      name: "Chocolate Quente",
      description: "Cremoso e doce, feito com chocolate nobre.",
      price: "R$ 9,00",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXLT_UbnK6FtCg4fh0t1oSq1DEBwDtf3agX1hsgAV6knntRxDofQj_-odaKEfTfHBU5GbBGQClgBG5qNhyxq5qiWZ47G4O--McAE1XPWI6JL_JqyOKrAhq6ZQA4ylqfchqeoYMhRjyUX7i5gaO9jebjXrPXrOKEpheL6tFSpC-1JpWrUloK3OWIeovd8aVywZXT8_kJMZYnUr3rL7QszxDc9ckdtt7zEoR23IbA6yaqShRc1gXeyZwqVMwDOeuRRIEUabDlQhl6g"
    },
    {
      id: 9,
      name: "Café Macchiato",
      description: "Espresso com uma pequena quantidade de leite vaporizado.",
      price: "R$ 6,50",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPT1pa1Ks7ENLS6DExwFSJOkoYvitOtyEOMTJj8wn6d-ycsrceFrvk-zpGtV2tKk9yiC73LWVubWZSyM4YATh48uKud30RwDk--JY0W2LfdoZN_hAUOVo0RPMmuT36MDFfseQuHutMNcPvDLcpkbaldCrArTJ4JImww1OBwrIT_eKJQinlhwOoYE0EyDW2PJwbeHdjFB4Mkpku-NLdhVIKCQHRpiJsJQOTShoOkTtMGDdNI4Dp3S3nkp_HlNiiAzpGqiorjGiwpA"
    },
    {
      id: 10,
      name: "Café Mocha",
      description: "Espresso com chocolate e leite vaporizado.",
      price: "R$ 10,00",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfEhE-lIRdG_VQw-xLtzWI6qnrbzB06wf1PMwhRZpx2OKUtzzyXYf7cGhC80ngeiUsnvzgU1rvmXvxYIzkVakvTenRCD9_He0BnqgOvJwlqN41-sZ5xUPhvEbQjj2kRC9BZX5bOCpHMCCgyz6vDirP7rjSLBpmzttCbXK53Mcem1AneU8GwNcSLIVng1QJLelM3b5V_z_WP5IZlIimV6rjhMiBuI0jCtOIWxmpcPYuW0LHe0lfg8qEMXeKqArK6ngcugG-bDKUTg"
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
              <span className="text-[#0d121b] dark:text-white font-medium">Bebidas Quentes</span>
            </nav>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#0d121b] dark:text-white mb-3">Bebidas Quentes</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Descubra nossos cafés especiais e bebidas quentes preparadas com carinho.
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

export default BebidasQuentes;
