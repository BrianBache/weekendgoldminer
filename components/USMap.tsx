"use client";

// @ts-ignore
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { useState } from "react";
import { useRouter } from "next/navigation";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const stateNames: Record<string, string> = {
  "01": "Alabama", "02": "Alaska", "04": "Arizona", "05": "Arkansas",
  "06": "California", "08": "Colorado", "09": "Connecticut", "10": "Delaware",
  "12": "Florida", "13": "Georgia", "15": "Hawaii", "16": "Idaho",
  "17": "Illinois", "18": "Indiana", "19": "Iowa", "20": "Kansas",
  "21": "Kentucky", "22": "Louisiana", "23": "Maine", "24": "Maryland",
  "25": "Massachusetts", "26": "Michigan", "27": "Minnesota", "28": "Mississippi",
  "29": "Missouri", "30": "Montana", "31": "Nebraska", "32": "Nevada",
  "33": "New Hampshire", "34": "New Jersey", "35": "New Mexico", "36": "New York",
  "37": "North Carolina", "38": "North Dakota", "39": "Ohio", "40": "Oklahoma",
  "41": "Oregon", "42": "Pennsylvania", "44": "Rhode Island", "45": "South Carolina",
  "46": "South Dakota", "47": "Tennessee", "48": "Texas", "49": "Utah",
  "50": "Vermont", "51": "Virginia", "53": "Washington", "54": "West Virginia",
  "55": "Wisconsin", "56": "Wyoming", "11": "District of Columbia",
  "60": "American Samoa", "66": "Guam", "69": "Northern Mariana Islands",
  "72": "Puerto Rico", "78": "U.S. Virgin Islands",
};

function stateToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function USMap() {
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const router = useRouter();

  return (
    <div className="w-full">
      {hoveredState && (
        <p className="text-center text-gold-500 font-semibold text-lg mb-2">{hoveredState}</p>
      )}
      <ComposableMap
        projection="geoAlbersUsa"
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }: { geographies: any[] }) =>
            geographies.map((geo: any) => {
              const fips = geo.id as string;
              const name = stateNames[fips] ?? "Unknown";
              const isHovered = hoveredState === name;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => router.push(`/find-locations/${stateToSlug(name)}`)}
                  onMouseEnter={() => setHoveredState(name)}
                  onMouseLeave={() => setHoveredState(null)}
                  style={{
                    default: {
                      fill: "#2D5A27",
                      stroke: "rgba(212,160,23,0.65)",
                      strokeWidth: 0.8,
                      outline: "none",
                    },
                    hover: {
                      fill: "#D4A017",
                      stroke: "#D4A017",
                      strokeWidth: 0.5,
                      outline: "none",
                      cursor: "pointer",
                    },
                    pressed: {
                      fill: "#B8860B",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
