"use client";
import { useState } from "react";
import Link from "next/link";

interface CategoryCardProps {
  name: string;
  slug: string;
  image: string;
}

export default function CategoryImageCard({ name, slug, image }: CategoryCardProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <Link href={`/equipment/${slug}`}>
      <div className="bg-white dark:bg-dark-surface rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
        {/* Image header — placeholder always behind; img covers when it loads */}
        <div className="relative w-full h-40 bg-[#1C2526] flex items-center justify-center flex-shrink-0">
          <span className="text-4xl select-none">⛏️</span>
          {!imgFailed && (
            <img
              src={image}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover"
              onError={() => setImgFailed(true)}
            />
          )}
        </div>

        {/* Card body */}
        <div className="p-4 flex flex-col flex-1 border-t-4 border-gold-600">
          <h3 className="text-lg font-bold text-earth-800 dark:text-dark-text mb-1 leading-tight">
            {name}
          </h3>
          <p className="text-gold-400 text-sm font-semibold mt-auto pt-2">
            Browse →
          </p>
        </div>
      </div>
    </Link>
  );
}
