function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900/50 mt-12">
      <div className="max-w-5xl mx-auto px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg text-[#0d121b] dark:text-white mb-3">Sesc Senac Cafeteria</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Sabor e qualidade para o seu dia.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-[#0d121b] dark:text-white mb-3">Contato</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Av. Principal, 123 - Centro</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">(99) 99999-9999</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-[#0d121b] dark:text-white mb-3">Horário</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Segunda a Sábado: 8h - 19h</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Domingos: Fechado</p>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© 2024 Sesc Senac Cafeteria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
