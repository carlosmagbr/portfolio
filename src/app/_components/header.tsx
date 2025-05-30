import Link from "next/link";
import { menu } from "../_constants/menu";
import { Github, LinkedinIcon } from "lucide-react";


const Header = () => {
    return (
        <header className="flex justify-between px-16 py-4 fixed w-full items-center z-10">
            <h2 className="text-xl text-white">Carlos Magno</h2>
            <nav>
                <ul className="flex gap-x-8 uppercase rounded-full border p-4 transparent backdrop-blur-sm">
                    {menu.map((item) => (
                        <li key={item.title}>
                            <Link href={item.url} className="hover:text-white text-gray-300 mx-4">
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <Link href="">
                            <Github className="border bg-gray-300 rounded-xl fill-black" />
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <LinkedinIcon className="border bg-gray-300 rounded-sm fill-black" />
                        </Link>
                    </li>
                </ul>

            </nav>
        </header>
    );
}

export default Header;