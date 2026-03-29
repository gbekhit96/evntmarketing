const cities = [
  { name: "Vancouver, BC", x: 130, y: 95 },
  { name: "San Francisco, CA", x: 105, y: 195 },
  { name: "Los Angeles, CA", x: 120, y: 230 },
  { name: "Las Vegas, NV", x: 150, y: 215 },
  { name: "Denver, CO", x: 210, y: 195 },
  { name: "Chicago, IL", x: 330, y: 155 },
  { name: "Toronto, ON", x: 390, y: 130 },
  { name: "Boston, MA", x: 445, y: 135 },
  { name: "New York, NY", x: 435, y: 155 },
  { name: "Washington, DC", x: 420, y: 175 },
  { name: "Atlanta, GA", x: 370, y: 225 },
  { name: "Miami, FL", x: 395, y: 290 },
];

const NorthAmericaMap = () => (
  <svg
    viewBox="0 0 560 400"
    className="w-full"
    style={{ maxHeight: "480px" }}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Map of North America showing EVNT office locations"
  >
    {/* North America land mass */}
    <path
      d="
        M 80 20 L 120 15 L 160 10 L 200 8 L 240 12 L 280 10 L 320 8
        L 360 15 L 400 20 L 430 18 L 455 25 L 470 40 L 475 55
        L 468 70 L 460 80 L 455 95 L 450 105 L 458 110 L 465 120
        L 470 130 L 465 140 L 458 148 L 450 155 L 445 165 L 440 178
        L 435 190 L 425 200 L 415 210 L 405 220 L 395 235
        L 390 250 L 388 265 L 392 280 L 398 295 L 400 310
        L 395 320 L 385 315 L 375 305 L 365 295 L 355 290
        L 340 285 L 320 275 L 300 268 L 280 262 L 260 258
        L 240 255 L 220 252 L 200 250 L 180 248 L 160 250
        L 140 255 L 125 260 L 115 255 L 108 245 L 105 235
        L 100 220 L 95 205 L 92 190 L 90 175 L 88 160
        L 85 145 L 82 130 L 80 115 L 78 100 L 75 85
        L 72 70 L 70 55 L 72 40 L 75 30 L 80 20 Z
      "
      fill="#1a3d35"
      stroke="none"
    />
    {/* Alaska */}
    <path
      d="
        M 25 45 L 45 35 L 65 30 L 75 35 L 72 45 L 68 55
        L 60 65 L 50 72 L 40 75 L 30 70 L 22 62 L 20 52 L 25 45 Z
      "
      fill="#1a3d35"
      stroke="none"
    />
    {/* Mexico partial */}
    <path
      d="
        M 115 255 L 125 260 L 140 255 L 160 250 L 180 248
        L 185 260 L 190 275 L 195 290 L 200 305 L 210 320
        L 220 330 L 225 340 L 220 350 L 210 355 L 195 350
        L 180 340 L 165 330 L 150 320 L 140 310 L 130 300
        L 120 290 L 115 280 L 110 270 L 108 260 L 115 255 Z
      "
      fill="#1a3d35"
      stroke="none"
    />

    {/* City markers and labels */}
    {cities.map((city, i) => {
      const labelOnLeft = city.x > 350;
      const labelX = labelOnLeft ? city.x - 8 : city.x + 8;
      const anchor = labelOnLeft ? "end" : "start";

      return (
        <g key={i}>
          {/* Glow */}
          <circle cx={city.x} cy={city.y} r={8} fill="#4ecdc4" opacity={0.15} />
          {/* Dot */}
          <circle cx={city.x} cy={city.y} r={3} fill="#4ecdc4" />
          {/* Label background */}
          <rect
            x={labelOnLeft ? labelX - city.name.length * 5.8 - 6 : labelX - 6}
            y={city.y - 8}
            width={city.name.length * 5.8 + 12}
            height={16}
            rx={8}
            fill="rgba(0,0,0,0.6)"
          />
          {/* Label text */}
          <text
            x={labelOnLeft ? labelX - city.name.length * 5.8 / 2 : labelX + city.name.length * 5.8 / 2}
            y={city.y + 3.5}
            textAnchor="middle"
            fill="#ffffff"
            fontSize="9"
            fontFamily="Inter, system-ui, sans-serif"
          >
            {city.name}
          </text>
        </g>
      );
    })}
  </svg>
);

export default NorthAmericaMap;
