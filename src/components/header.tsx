
import { Link, useLocation } from "react-router-dom";
import Button from "./button";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/ourServices?animate=true", label: "Our Services" },
  { href: "/ourProducts", label: "Our Products" },
  { href: "/contactUs", label: "Contact Us" },
];

function Header() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className="border-b-2 border-[#DDE1E6] bg-white py-[9.4px]">
      <div className="grid grid-cols-12 items-center">
        <Link to="/" className="col-span-2 grid justify-items-start lg:ps-[80px] md:ps-[20px]">
          <div>
            <img
              className="w-[60px] h-[78px]"
              alt="Logo"
              src="/images/logo/Asset 3@4x 1.png"
            />
          </div>
        </Link>

        <div className="col-span-7 text-[17px] font-inter">
          <ul className="flex justify-center lg:pe-[30px] md:pe-[0] lg:gap-[6%] xl:gap-[7%] md:gap-[14px]">
            {links.map(({ href, label }) => {
              const cleanHref = href.split("?")[0];
              const isActive =
                cleanHref === "/"
                  ? pathname === "/"
                  : pathname.startsWith(cleanHref);

              return (
                <li key={href} className="relative group">
                  <Link
                    to={href}
                    className={`
                      transition-colors duration-300
                      ${
                        isActive
                          ? "blue1"
                          : "text-black group-hover:text-[var(--second)]"
                      }
                    `}
                  >
                    {label}
                    {!isActive && (
                      <span className="absolute bottom-[-4px] left-1/2 w-0 h-[2px] blue-bg transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="col-span-3 grid justify-items-end lg:pe-[80px] md:pe-[20px]">
          <Link to="/contactUs">
            <Button
              title="Get Started"
              clssName="
                text-white 
                hover:border 
                border-transparent 
                hover:![background-image:none] hover:!bg-transparent 
                hover:text-[var(--second)] 
                hover:border-[var(--second)] 
                transition 
                duration-300 
                py-2.5 
                px-9 
                text-[20px] 
                font-medium
              "
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
