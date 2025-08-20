import  { useState } from "react";

interface MenuItem {
    label: string;
    href?: string;
    submenu?: MenuItem[];
}

const NAV_ITEMS: MenuItem[] = [
    { label: "Home", href: "/" },
    {
        label: "Services",
        submenu: [
            { label: "Web Development", href: "/webdev" },
            { label: "SEO", href: "/seo" },
        ],
    },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false);
    const [submenuOpenIdx, setSubmenuOpenIdx] = useState<number | null>(null);

    return (
        <nav className="bg-white shadow sticky top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center py-10 px-12">
                <div className="text-xl font-bold">Dog Rescue</div>
                {/* Hamburger Icon */}
                <button
                    className="md:hidden block"
                    onClick={() => setNavOpen((o) => !o)}
                    aria-label="Toggle menu"
                >
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M4 6h16M4 12h16M4 18h16"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                        />
                    </svg>
                </button>

                {/* Top navigation (desktop) */}
                <ul className="hidden md:flex space-x-8">
                    {NAV_ITEMS.map((item, idx) => (
                        <li
                            className="relative group"
                            key={item.label}
                            onMouseEnter={() => setSubmenuOpenIdx(idx)}
                            onMouseLeave={() => setSubmenuOpenIdx(null)}
                        >
                            <a
                                href={item.href || "#"}
                                className="px-3 py-2 hover:text-blue-600 font-semibold"
                            >
                                {item.label}
                            </a>
                            {item.submenu && (
                                <ul
                                    className={`absolute left-0 mt-2 bg-white shadow-lg rounded py-2 min-w-max transition-all ${
                                        submenuOpenIdx === idx ? "block" : "hidden"
                                    }`}
                                >
                                    {item.submenu.map((sm) => (
                                        <li key={sm.label}>
                                            <a
                                                href={sm.href}
                                                className="block px-4 py-2 hover:bg-blue-50"
                                            >
                                                {sm.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile navigation */}
            <ul
                className={`md:hidden bg-white transition-all ${
                    navOpen ? "block" : "hidden"
                }`}
            >
                {NAV_ITEMS.map((item, idx) => (
                    <li key={item.label}>
                        <button
                            className="w-full text-left px-4 py-3 border-b font-semibold flex items-center justify-between"
                            onClick={() =>
                                setSubmenuOpenIdx(submenuOpenIdx === idx ? null : idx)
                            }
                        >
                            {item.label}
                            {item.submenu && (
                                <svg
                                    className={`h-4 w-4 ml-2 transform transition-transform ${
                                        submenuOpenIdx === idx ? "rotate-90" : ""
                                    }`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6 6L10 10L14 6"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </button>
                        {item.submenu && submenuOpenIdx === idx && (
                            <ul className="bg-gray-100">
                                {item.submenu.map((sm) => (
                                    <li key={sm.label}>
                                        <a
                                            href={sm.href}
                                            className="block px-8 py-2 hover:bg-gray-200"
                                        >
                                            {sm.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
// export default Navbar
