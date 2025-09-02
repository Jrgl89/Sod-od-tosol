import Image from "next/image";
import Link from "next/link";

interface MovieType
{
  id:number;
  title:string;
  backdrop_bath:string;
  poster_bath:string;
  overview:string;  
}
export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="flex justify-between items-center p-6 bg-black fixed w-full top-0 z-10">
        <a href="/">
        <img src="logo.png" className="w-36 ml-10"/>
        </a>
        <nav>
          <ul className="flex space-x-8 mr-10">
            <li><Link href="/" className="hover:text-gray-800">Нүүр хуудас</Link></li>
            <li><Link href="/" className="hover:text-gray-800">Кино сан</Link></li>
            <li><Link href="/" className="hover:text-gray-800">ТВ шоу</Link></li>
            <li><Link href="/" className="hover:text-gray-800">Миний жагсаалт</Link></li>  
          </ul>
        </nav>
      </header>
    </div>
  );
}
