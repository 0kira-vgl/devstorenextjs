import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-never-stop-learning.png"
          className="transition-transform duration-500 group-hover:scale-105"
          width={920}
          height={920}
          quality={100}
          alt=""
        />

        <div className="absolute right-28 bottom-28 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">Moletom AI Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/moletom-java.png"
          className="transition-transform duration-500 group-hover:scale-105"
          width={920}
          height={920}
          quality={100}
          alt=""
        />

        <div className="absolute right-10 bottom-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">Moletom AI Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
      >
        <Image
          src="/camiseta-dowhile-2022.png"
          className="transition-transform duration-500 group-hover:scale-105"
          width={920}
          height={920}
          quality={100}
          alt=""
        />

        <div className="absolute right-10 bottom-10 flex h-12 max-w-[280px] items-center gap-2 rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="truncate text-sm">Moletom AI Side</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
          </span>
        </div>
      </Link>
    </div>
  );
}
