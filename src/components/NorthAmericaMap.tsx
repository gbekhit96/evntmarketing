import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const northAmericaIds = ["840", "124", "484"];

const cities: { name: string; coordinates: [number, number] }[] = [
  { name: "Vancouver, BC", coordinates: [-123.1, 49.2] },
  { name: "San Francisco, CA", coordinates: [-122.4, 37.8] },
  { name: "Los Angeles, CA", coordinates: [-118.2, 34.1] },
  { name: "Las Vegas, NV", coordinates: [-115.1, 36.2] },
  { name: "Denver, CO", coordinates: [-104.9, 39.7] },
  { name: "Chicago, IL", coordinates: [-87.6, 41.9] },
  { name: "Toronto, ON", coordinates: [-79.4, 43.7] },
  { name: "Boston, MA", coordinates: [-71.1, 42.4] },
  { name: "New York, NY", coordinates: [-74.0, 40.7] },
  { name: "Washington, DC", coordinates: [-77.0, 38.9] },
  { name: "Atlanta, GA", coordinates: [-84.4, 33.7] },
  { name: "Miami, FL", coordinates: [-80.2, 25.8] },
];

const NorthAmericaMap = () => (
  <div className="w-full h-[340px] sm:h-[400px] md:h-[500px] bg-[#0A0707]">
    <ComposableMap
      projection="geoAlbersUsa"
      projectionConfig={{ scale: 1050 }}
      width={1200}
      height={500}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }: { geographies: any[] }) =>
          geographies
            .filter((geo) => northAmericaIds.includes(geo.id))
            .map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#141D11"
                stroke="#0A0707"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
        }
      </Geographies>
      {cities.map((city) => (
        <Marker key={city.name} coordinates={city.coordinates}>
          <circle r={6} fill="#61C3A7" />
          <text
            x={10}
            y={4}
            fill="#ffffff"
            fontSize={11}
            fontFamily="Inter, system-ui, sans-serif"
          >
            {city.name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  </div>
);

export default NorthAmericaMap;
