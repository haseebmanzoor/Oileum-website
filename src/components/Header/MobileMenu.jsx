import { ChevronDown, Phone, Mail } from "lucide-react";

const MobileMenu = ({
  navItems,
  mobileMenuOpen,
  setMobileMenuOpen,
  contact,
}) => (
  <div
    className={`lg:hidden transition-all duration-500 ${
      mobileMenuOpen
        ? "max-h-screen opacity-100 visible"
        : "max-h-0 opacity-0 invisible"
    } overflow-hidden`}
  >
    <div className="px-4 pt-4 pb-8 space-y-2 bg-slate-900/98 backdrop-blur-xl rounded-b-2xl border-t border-slate-700/50 mx-4 mb-4">
      {navItems.map((item) => (
        <div key={item.name}>
          <button
            onClick={() =>
              item.dropdown
                ? setMobileMenuOpen((prev) => !prev) // toggle dropdowns on mobile
                : setMobileMenuOpen(false)
            }
            className="flex items-center justify-between w-full px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-xl font-medium"
          >
            <span>{item.name}</span>
            {item.dropdown && <ChevronDown className="h-4 w-4" />}
          </button>
          {item.dropdown && (
            <div className="ml-4 mt-2 space-y-1">
              {item.dropdown.map((subItem) => (
                <a
                  key={subItem.name}
                  href={subItem.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800/30 rounded-lg transition-all"
                >
                  {subItem.name}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* CTA */}
      <div className="pt-6 px-4">
        <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all transform hover:scale-105">
          Request Proposal
        </button>
      </div>

      {/* Contact Info */}
      <div className="pt-4 px-4 border-t border-slate-700/50">
        <div className="text-xs text-slate-500 mb-2">Need Help?</div>
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Phone className="h-3 w-3" />
            <span>{contact.phone}</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Mail className="h-3 w-3" />
            <span>{contact.email}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MobileMenu;
