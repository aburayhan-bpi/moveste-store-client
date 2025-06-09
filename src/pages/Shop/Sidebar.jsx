const Sidebar = ({ filters, updateFilter, updatePriceRange }) => {
  const handleCheckboxChange = (key, value) => {
    const currentValues = filters[key];
    const isSelected = currentValues.includes(value);
    updateFilter(
      key,
      isSelected
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value]
    );
  };

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>

      <div className="space-y-4 w-full pb-8">
        {/* Price Range */}
        <div className="collapse bg-white border border-gray-300 rounded-md shadow-sm px-2">
          <input type="checkbox" defaultChecked />
          <div className="collapse-title font-semibold text-sm border-b border-gray-200 cursor-pointer">
            Price Range
          </div>
          <div className="collapse-content text-sm space-y-3 py-2 px-1">
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <span className="text-xs min-w-[30px]">Min:</span>
                <input
                  type="number"
                  min={0}
                  placeholder="Min Price"
                  value={filters.priceRange.min}
                  onChange={(e) => updatePriceRange("min", +e.target.value)}
                  onKeyDown={(e) =>
                    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
                  }
                  className="input input-sm input-bordered w-full focus-within:border-none focus:outline-sky-400"
                />
              </label>
              <label className="flex items-center gap-2">
                <span className="text-xs min-w-[30px]">Max:</span>
                <input
                  type="number"
                  min={0}
                  placeholder="Max Price"
                  value={filters.priceRange.max}
                  onChange={(e) => updatePriceRange("max", +e.target.value)}
                  onKeyDown={(e) =>
                    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
                  }
                  className="input input-sm input-bordered w-full focus-within:border-none focus:outline-sky-400"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Category */}
        <div className="collapse bg-white border border-gray-300 rounded-md shadow-sm px-2">
          <input type="checkbox" defaultChecked/>
          <div className="collapse-title font-semibold text-sm border-b border-gray-200 cursor-pointer">
            Category
          </div>
          <div className="collapse-content text-sm space-y-2 py-2 px-1">
            {["T-Shirts", "Pants", "Jackets"].map((item) => (
              <label
                key={item}
                className="flex items-center gap-2 cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  checked={filters.category.includes(item)}
                  onChange={() => handleCheckboxChange("category", item)}
                  className="checkbox checkbox-sm"
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Color */}
        <div className="collapse bg-white border border-gray-300 rounded-md shadow-sm px-2">
          <input type="checkbox" defaultChecked/>
          <div className="collapse-title font-semibold text-sm border-b border-gray-200 cursor-pointer">
            Color
          </div>
          <div className="collapse-content text-sm flex flex-wrap gap-3 py-2 px-1">
            {["Red", "Blue", "Black", "White", "Green"].map((item) => (
              <label
                key={item}
                className="flex items-center gap-1 cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  checked={filters.color.includes(item)}
                  onChange={() => handleCheckboxChange("color", item)}
                  className="checkbox checkbox-xs"
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Size */}
        <div className="collapse bg-white border border-gray-300 rounded-md shadow-sm px-2">
          <input type="checkbox" defaultChecked/>
          <div className="collapse-title font-semibold text-sm border-b border-gray-200 cursor-pointer">
            Size
          </div>
          <div className="collapse-content text-sm space-y-1 py-2 px-1">
            {["S", "M", "L", "XL", "XXL"].map((item) => (
              <label
                key={item}
                className="flex items-center gap-2 cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  checked={filters.size.includes(item)}
                  onChange={() => handleCheckboxChange("size", item)}
                  className="checkbox checkbox-sm"
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        {/* Brand */}
        <div className="collapse bg-white border border-gray-300 rounded-md shadow-sm px-2">
          <input type="checkbox" defaultChecked/>
          <div className="collapse-title font-semibold text-sm border-b border-gray-200 cursor-pointer">
            Brand
          </div>
          <div className="collapse-content text-sm space-y-1 py-2 px-1">
            {["Nike", "Adidas", "Puma", "Zara"].map((item) => (
              <label
                key={item}
                className="flex items-center gap-2 cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  checked={filters.brand.includes(item)}
                  onChange={() => handleCheckboxChange("brand", item)}
                  className="checkbox checkbox-sm"
                />
                {item}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
