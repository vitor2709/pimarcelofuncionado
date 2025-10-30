function AddonsSelector({ addons, selectedAddons, onToggleAddon }) {
  return (
    <div className="space-y-3">
      <h3 className="text-gray-900 dark:text-white font-bold text-lg">Adicionais</h3>
      <div className="space-y-2">
        {addons.map((addon) => (
          <label
            key={addon.id}
            className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/10"
          >
            <div className="flex flex-col">
              <span className="text-gray-800 dark:text-gray-200">{addon.name}</span>
              {addon.price > 0 && (
                <span className="text-primary text-sm font-medium">+ R$ {addon.price.toFixed(2).replace('.', ',')}</span>
              )}
            </div>
            <input
              className="rounded border-gray-300 text-primary focus:ring-primary"
              type="checkbox"
              checked={selectedAddons.includes(addon.id)}
              onChange={() => onToggleAddon(addon.id)}
            />
          </label>
        ))}
      </div>
    </div>
  );
}

export default AddonsSelector;
