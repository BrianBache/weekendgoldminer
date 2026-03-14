import { NextResponse } from "next/server";

const TICKERS: Record<string, string> = {
  gold: "GC=F",
  silver: "SI=F",
  platinum: "PL=F",
  palladium: "PA=F",
  copper: "HG=F",
};

async function fetchPrice(ticker: string): Promise<number | null> {
  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(ticker)}?interval=1m&range=1d`;
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "application/json",
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;

    const data = await res.json();
    const price =
      data?.chart?.result?.[0]?.meta?.regularMarketPrice ?? null;
    return typeof price === "number" ? price : null;
  } catch {
    return null;
  }
}

export async function GET() {
  const [gold, silver, platinum, palladium, copper] = await Promise.all([
    fetchPrice(TICKERS.gold),
    fetchPrice(TICKERS.silver),
    fetchPrice(TICKERS.platinum),
    fetchPrice(TICKERS.palladium),
    fetchPrice(TICKERS.copper),
  ]);

  return NextResponse.json(
    {
      gold,
      silver,
      platinum,
      palladium,
      copper,
      updatedAt: new Date().toISOString(),
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=30",
      },
    }
  );
}
