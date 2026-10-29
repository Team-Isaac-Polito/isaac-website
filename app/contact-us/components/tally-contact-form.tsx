import Script from "next/script";

const tallyFormUrl =
  "https://tally.so/embed/3xQyky?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

export function TallyContactForm() {
  return (
    <div className="min-h-[34rem] overflow-hidden rounded-2xl bg-white">
      <iframe
        data-tally-src={tallyFormUrl}
        src={tallyFormUrl}
        title="Modulo di contatto Team Isaac"
        width="100%"
        height="550"
        loading="lazy"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        className="block min-h-[34rem] w-full"
      />
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
