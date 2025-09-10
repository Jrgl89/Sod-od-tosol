import Image from "next/image";
import Link from "next/link";
import Header from "./components/header";
import { getAllMovies } from "@/services/movieService";

interface MovieType {
  id: number;
  title: string;
  backdrop_bath: string;
  poster_bath: string;
  overview: string;
}
export default async function Home() {
  const movies = await getAllMovies();
  console.log(movies);

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
    </div>
  );
}
