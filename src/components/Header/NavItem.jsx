import { ChevronDown } from "lucide-react";

const NavItem = ({ item, index, activeDropdown, setActiveDropdown }) => (
  <div
    className="relative group"
    onMouseEnter={() => setActiveDropdown(item.dropdown ? item.name : null)}
    onMouseLeave={() => setActiveDropdown(null)}
  >
    <a
      href={item.href}
      className="flex items-center text-slate-300 hover:text-white px-4 py-3 text-sm font-medium tracking-wide transition-all rounded-lg hover:bg-slate-800/30"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {item.name}
      {item.dropdown && (
        <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
      )}
    </a>

    {/* Dropdown */}
    {item.dropdown && activeDropdown === item.name && (
      <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 py-4 mt-2 transition-all">
        <div className="px-6 py-2 border-b border-slate-100">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
            {item.name}
          </h3>
        </div>
        {item.dropdown.map((subItem) => (
          <a
            key={subItem.name}
            href={subItem.href}
            className="block px-6 py-3 hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 opacity-60 group-hover:opacity-100"></div>
              <div>
                <div className="text-slate-900 font-semibold text-sm group-hover:text-orange-600">
                  {subItem.name}
                </div>
                <div className="text-slate-500 text-xs mt-1">
                  {subItem.desc}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    )}
  </div>
);

export default NavItem;
