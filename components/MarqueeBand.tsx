const marqueeItems = [
  { label: "Dholera SIR", highlight: true },
  { label: "Verified Industrial Plots" },
  { label: "Delhi–Mumbai Corridor" },
  { label: "Logistics Hubs", highlight: true },
  { label: "Government-Backed Titles" },
  { label: "Freight & Metro Connectivity" },
];

function MarqueeSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="premium-marquee-set" aria-hidden={hidden}>
      {marqueeItems.map((item, index) => (
        <span
          className={`premium-marquee-item${item.highlight ? " is-highlight" : ""}`}
          key={`${hidden ? "duplicate" : "original"}-${item.label}`}
        >
          {index > 0 && <span className="premium-marquee-separator" aria-hidden="true" />}
          {item.label}
        </span>
      ))}
    </div>
  );
}

export default function MarqueeBand() {
  return (
    <section className="premium-marquee" aria-label="Dholera project highlights">
      <div className="premium-marquee-track">
        <MarqueeSet />
        <MarqueeSet hidden />
      </div>
    </section>
  );
}
