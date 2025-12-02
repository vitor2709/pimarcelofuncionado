// Todos os itens do cardápio padrão
export const defaultMenuItems = [
  // CAFÉS QUENTES
  {
    id: 'americano',
    name: 'Americano',
    description: 'Espresso diluído em água quente',
    price: 'R$ 6,00',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400'
  },
  {
    id: 'brasileiro',
    name: 'Brasileiro',
    description: 'Café filtrado tradicional brasileiro',
    price: 'R$ 13,00',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400'
  },
  {
    id: 'cafe-senac-parana',
    name: 'Café Senac Paraná',
    description: 'Blend exclusivo Senac Paraná',
    price: 'R$ 17,00',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400'
  },
  {
    id: 'caffe-corretto',
    name: 'Caffè Corretto',
    description: 'Espresso com toque de licor',
    price: 'R$ 14,00',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400'
  },
  {
    id: 'caffe-latte',
    name: 'Caffè Latte',
    description: 'Espresso com leite vaporizado',
    price: 'R$ 8,00',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400'
  },
  {
    id: 'caffe-napoli',
    name: 'Caffè Napoli',
    description: 'Espresso ao estilo napolitano',
    price: 'R$ 12,00',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400'
  },
  {
    id: 'carioca',
    name: 'Carioca (Lasciato)',
    description: 'Café suave e alongado',
    price: 'R$ 6,00',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400'
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Espresso, leite e espuma em partes iguais',
    price: 'R$ 7,50',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400'
  },
  {
    id: 'cappuccino-brasileiro',
    name: 'Cappuccino Brasileiro',
    description: 'Cappuccino com toque brasileiro',
    price: 'R$ 9,00',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400'
  },
  {
    id: 'doppio',
    name: 'Doppio',
    description: 'Dose dupla de espresso',
    price: 'R$ 10,50',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400'
  },
  {
    id: 'doppio-macchiato',
    name: 'Doppio Macchiato',
    description: 'Doppio com mancha de leite',
    price: 'R$ 10,50',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400'
  },
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Café expresso italiano autêntico',
    price: 'R$ 5,50',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?w=400'
  },
  {
    id: 'espresso-lungo',
    name: 'Espresso Lungo',
    description: 'Espresso mais alongado',
    price: 'R$ 6,00',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=400'
  },
  {
    id: 'espresso-romano',
    name: 'Espresso Romano',
    description: 'Espresso com casca de limão',
    price: 'R$ 6,50',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400'
  },
  {
    id: 'irish-coffee',
    name: 'Irish Coffee',
    description: 'Café com whisky irlandês e chantilly',
    price: 'R$ 21,50',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1514066558159-fc8c737ef259?w=400'
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    description: 'Espresso manchado com leite',
    price: 'R$ 5,00',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?w=400'
  },
  {
    id: 'ristretto',
    name: 'Ristretto',
    description: 'Espresso curto e concentrado',
    price: 'R$ 5,00',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1508766206392-8bd5cf550d1c?w=400'
  },
  // CAFÉS GELADOS
  {
    id: 'affogato',
    name: 'Affogato',
    description: 'Sorvete de creme com espresso quente',
    price: 'R$ 15,00',
    category: 'bebidas-geladas',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400'
  },
  {
    id: 'cafe-senac-shake',
    name: 'Café Senac Paraná Shake',
    description: 'Milk shake especial com café Senac',
    price: 'R$ 22,00',
    category: 'bebidas-geladas',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400'
  },
  {
    id: 'coffee-shake',
    name: 'Coffee Shake',
    description: 'Milk shake cremoso de café',
    price: 'R$ 16,50',
    category: 'bebidas-geladas',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400'
  },
  {
    id: 'moccha-freddo',
    name: 'Moccha Freddo',
    description: 'Café gelado com chocolate',
    price: 'R$ 15,00',
    category: 'bebidas-geladas',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400'
  },
  {
    id: 'shakerato',
    name: 'Shakerato',
    description: 'Espresso gelado batido',
    price: 'R$ 11,00',
    category: 'bebidas-geladas',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400'
  },
  // BEBIDAS REFRESCANTES
  {
    id: 'agua',
    name: 'Água (com e sem gás)',
    description: 'Água mineral natural ou com gás',
    price: 'R$ 4,00',
    category: 'bebidas-geladas',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400'
  },
  {
    id: 'agua-tonica',
    name: 'Água Tônica',
    description: 'Água tônica gelada',
    price: 'R$ 4,50',
    category: 'bebidas-geladas',
    image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400'
  },
  {
    id: 'agua-coco',
    name: 'Água de Coco',
    description: 'Água de coco natural',
    price: 'R$ 6,00',
    category: 'bebidas-geladas',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400'
  },
  {
    id: 'refrigerante',
    name: 'Refrigerante',
    description: 'Refrigerante gelado',
    price: 'R$ 4,50',
    category: 'bebidas-geladas',
    image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400'
  },
  {
    id: 'soda-italiana',
    name: 'Soda Italiana',
    description: 'Soda artesanal com frutas',
    price: 'R$ 9,00',
    category: 'bebidas-geladas',
    image: 'https://images.unsplash.com/photo-1556679341-ddffbf0c48e0?w=400'
  },
  {
    id: 'suco-integral',
    name: 'Suco Integral',
    description: 'Suco natural 100% fruta',
    price: 'R$ 5,50',
    category: 'bebidas-geladas',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400'
  },
  // CHOCOLATES
  {
    id: 'chocolate-gelado',
    name: 'Chocolate Gelado',
    description: 'Chocolate cremoso gelado',
    price: 'R$ 18,00',
    category: 'bebidas-geladas',
    image: 'https://images.unsplash.com/photo-1542990253-a781e04c0082?w=400'
  },
  {
    id: 'chocolate-quente-pequeno',
    name: 'Chocolate Quente Pequeno',
    description: 'Chocolate quente cremoso',
    price: 'R$ 9,50',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=400'
  },
  {
    id: 'chocolate-quente-medio',
    name: 'Chocolate Quente Médio',
    description: 'Chocolate quente cremoso tamanho médio',
    price: 'R$ 14,00',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400'
  },
  {
    id: 'chocolate-licor-cafe',
    name: 'Chocolate Quente com Licor de Café',
    description: 'Chocolate quente com toque de licor',
    price: 'R$ 15,50',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1514066558159-fc8c737ef259?w=400'
  },
  // CHÁS
  {
    id: 'cha-quente',
    name: 'Chá Quente',
    description: 'Chá selecionado servido quente',
    price: 'R$ 5,50',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400'
  },
  {
    id: 'massala-chai-gelado',
    name: 'Massala Chai Indiano (Gelado)',
    description: 'Chá indiano aromático gelado',
    price: 'R$ 9,00',
    category: 'bebidas-geladas',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400'
  },
  {
    id: 'massala-chai-quente',
    name: 'Massala Chai Indiano (Quente)',
    description: 'Chá indiano aromático quente',
    price: 'R$ 10,00',
    category: 'bebidas-quentes',
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400'
  },
  {
    id: 'mate-batido',
    name: 'Mate Batido',
    description: 'Mate gelado batido e refrescante',
    price: 'R$ 9,00',
    category: 'bebidas-geladas',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400'
  },
  // DOCES
  {
    id: 'brigadeiro-cacau',
    name: 'Brigadeiro de Cacau 100%',
    description: 'Brigadeiro gourmet de cacau puro',
    price: 'R$ 6,50',
    category: 'doces',
    image: 'https://images.unsplash.com/photo-1548848979-47519fe94385?w=400'
  },
  {
    id: 'brownie',
    name: 'Brownie',
    description: 'Brownie de chocolate denso e úmido',
    price: 'R$ 10,50',
    category: 'doces',
    image: 'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400'
  },
  {
    id: 'cheesecake-frutas-vermelhas',
    name: 'Cheesecake de Frutas Vermelhas',
    description: 'Cheesecake cremoso com calda de frutas',
    price: 'R$ 10,50',
    category: 'doces',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400'
  },
  {
    id: 'muffin-cafe-chocolate',
    name: 'Muffin de Café com Chocolate',
    description: 'Muffin com café e gotas de chocolate',
    price: 'R$ 8,50',
    category: 'doces',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400'
  },
  {
    id: 'palha-paranaeuse',
    name: 'Palha Paranaeuse',
    description: 'Doce tradicional paranaense',
    price: 'R$ 6,50',
    category: 'doces',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400'
  },
  {
    id: 'torta-trufada-cereja',
    name: 'Torta Trufada de Cereja',
    description: 'Torta de chocolate com cerejas',
    price: 'R$ 10,50',
    category: 'doces',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400'
  },
  {
    id: 'torta-tiramissu',
    name: 'Torta Tiramissu',
    description: 'Clássico italiano de café e mascarpone',
    price: 'R$ 13,00',
    category: 'doces',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400'
  },
  // SALGADOS
  {
    id: 'escondidinho-barreado',
    name: 'Escondidinho de Barreado',
    description: 'Escondidinho com tradicional barreado paranaense',
    price: 'R$ 13,00',
    category: 'salgados',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400'
  },
  {
    id: 'escondidinho-fit',
    name: 'Escondidinho Fit',
    description: 'Versão saudável do escondidinho',
    price: 'R$ 12,50',
    category: 'salgados',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400'
  },
  {
    id: 'muffin-gorgonzola-nozes',
    name: 'Muffin de Gorgonzola e Nozes',
    description: 'Muffin salgado com queijo e nozes',
    price: 'R$ 7,00',
    category: 'salgados',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400'
  },
  {
    id: 'muffin-peito-peru',
    name: 'Muffin de Peito de Peru',
    description: 'Muffin salgado com peito de peru',
    price: 'R$ 7,00',
    category: 'salgados',
    image: 'https://images.unsplash.com/photo-1603046891726-36bfd957e0f3?w=400'
  },
  {
    id: 'quiche-bacon-alho-poro',
    name: 'Quiche de Bacon e Alho Poró',
    description: 'Quiche francesa com bacon e alho poró',
    price: 'R$ 13,00',
    category: 'salgados',
    image: 'https://images.unsplash.com/photo-1602126003341-c0ad0c277f93?w=400'
  },
  {
    id: 'quiche-tomate-seco-rucula',
    name: 'Quiche de Tomate Seco com Rúcula',
    description: 'Quiche vegetariana com tomate seco',
    price: 'R$ 13,00',
    category: 'salgados',
    image: 'https://images.unsplash.com/photo-1619895092538-128341789043?w=400'
  },
  {
    id: 'torta-batata-baroa-carne-seca',
    name: 'Torta de Batata Baroa com Carne Seca',
    description: 'Torta regional com mandioquinha e carne',
    price: 'R$ 13,00',
    category: 'salgados',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400'
  }
];
