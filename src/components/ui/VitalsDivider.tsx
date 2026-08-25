export function VitalsDivider({ tone = "gold" }: { tone?: "gold" | "cream" }) {
  const stroke = tone === "gold" ? "#C99A3E" : "#FAF6EC";
  return (
    <div className="w-full overflow-hidden py-1" aria-hidden="true">
      <svg
        viewBox="0 0 1200 28"
        preserveAspectRatio="none"
        className="h-6 w-full"
      >
        <path
          d="M0 14 H420 L440 4 L458 26 L474 10 L486 18 L500 14 H1200"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
