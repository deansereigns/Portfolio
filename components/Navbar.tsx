"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname =usePathname();

    const links =[
        {href: "/", label: "Home" },
        {href: "/about", label: "About"},
        {href: "/projects", label: "Projects"},
        {href: "/publications", label: "Publications"},
        {href: "/cv", label: "CV"},
        {href: "/contact", label: "Contact"},
    ];

    return(
        <nav className="bg-gray-900 shadow-lg">
            <div className = "container mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-xl font-semibold text-white">Mayank Thakur</h1>
                <ul className="flex space-x-6">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                              href={link.href}
                                 className={`hover:text-teal-400 ${
                                    pathname === link.href ? "text-teal-400" : "text-gray-300"
                                }`}
                            >
                             {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );

};

export default Navbar;