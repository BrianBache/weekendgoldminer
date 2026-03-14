"use client";

import { useEffect, useState, useCallback } from "react";

interface MetalsPrices {
  gold: number | null;
  silver: number | null;
  platinum: number | null;
  palladium: number | null;
  copper: number | null;
  updatedAt: string;
}

function fmt(value: number | null, decimals = 2): string {
  if (value === null) return "—";
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export default function MetalsStrip() {
  const [prices, setPrices] = useState<MetalsPrices | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchPrices = useCallback(async () => {
    try {
      const res = await fetch("/api/metals");
      if (!res.ok) throw new Error("fetch failed");
      const data: MetalsPrices = await res.json();
      setPrices(data);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 60_000);
    return () => clearInterval(interval);
  }, [fetchPrices]);

  return (
    <div
      className="w-full text-center py-1.5 px-4 text-xs font-medium tracking-wide"
      style={{ backgroundColor: "#1C2526" }}
    >
      {loading ? (
        <span className="text-yellow-600 animate-pulse">
          Loading spot prices…
        </span>
      ) : error || !prices ? (
        <span className="text-yellow-700">Prices unavailable</span>
      ) : (
        <span className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span>
            <span className="text-zinc-400">🥇 Gold</span>{" "}
            <span className="text-amber-400 font-semibold">
              ${fmt(prices.gold)}
            </span>
          </span>
          <span className="text-zinc-600 hidden sm:inline">|</span>
          <span>
            <span className="text-zinc-400">🥈 Silver</span>{" "}
            <span className="text-amber-400 font-semibold">
              ${fmt(prices.silver)}
            </span>
          </span>
          <span className="text-zinc-600 hidden sm:inline">|</span>
          <span>
            <span className="text-zinc-400">Platinum</span>{" "}
            <span className="text-amber-400 font-semibold">
              ${fmt(prices.platinum)}
            </span>
          </span>
          <span className="text-zinc-600 hidden sm:inline">|</span>
          <span>
            <span className="text-zinc-400">Palladium</span>{" "}
            <span className="text-amber-400 font-semibold">
              ${fmt(prices.palladium)}
            </span>
          </span>
          <span className="text-zinc-600 hidden sm:inline">|</span>
          <span>
            <span className="text-zinc-400">🔶 Copper</span>{" "}
            <span className="text-amber-400 font-semibold">
              ${fmt(prices.copper, 4)}/lb
            </span>
          </span>
        </span>
      )}
    </div>
  );
}
