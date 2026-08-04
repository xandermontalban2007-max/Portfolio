import { LayoutGroup } from "framer-motion";

import portfolioData from "../../data/portfolioData";
import NavItem from "./NavItem";

export default function DesktopNav({
  mobile = false,
  activeSection,
  onNavigate,
}) {
  return (
    <nav
      aria-label="Primary navigation"
      className={
        mobile
          ? "grid gap-1"
          : "relative hidden items-center gap-1 overflow-hidden rounded-full border border-white/10 bg-black/12 p-1.5 shadow-[inset_0_1px_3px_rgba(255,255,255,0.025)] lg:flex"
      }
    >
      <LayoutGroup id={mobile ? "mobile-navigation" : "desktop-navigation"}>
        {portfolioData.navigation.map((item) => (
          <div key={item.id} className="relative z-10">
            <NavItem
              to={item.id}
              label={item.label}
              mobile={mobile}
              active={activeSection === item.id}
              onClick={() => onNavigate?.(item.label, item.id)}
            />
          </div>
        ))}
      </LayoutGroup>
    </nav>
  );
}
