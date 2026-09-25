import { Plus } from "lucide-react";

// Single source of truth for both the visible FAQ and the FAQPage schema,
// so the two can never drift apart. Only state facts the product actually
// has; never invent prices, dates, or specs here.
export const faqs = [
  {
    q: "What is Theta Sound?",
    a: "Theta Sound is a screenless AI executive assistant built into a pair of true wireless (TWS) earbuds. You talk to it, and it listens, understands what you mean, and gets everyday tasks done, like replies, reminders, and scheduling, without you opening an app or looking at a screen.",
  },
  {
    q: "How is Theta different from the voice assistant on my phone?",
    a: "Phone assistants mostly answer questions and hand you back to a screen. Theta is designed to carry tasks through to completion in the background, from your ear, so the operational work of your day gets handled without you pulling out your phone.",
  },
  {
    q: "What can Theta do?",
    a: "Theta handles natural voice commands and automated routines, sets reminders including location-based memory geo-pins, tracks fitness through built-in biometric sensors, offers panic detection that alerts your emergency contacts, and uses adaptive active noise cancellation (AANC) to keep your surroundings manageable.",
  },
  {
    q: "Does Theta have a screen?",
    a: "No. Theta has no screen and nothing to tap through. You use it entirely by speaking, which is the point: fewer notifications and less time looking at a display.",
  },
  {
    q: "Who is Theta for?",
    a: "Theta is for anyone whose day is crowded with small operational tasks, like messages to answer, meetings to move, and things to remember, and who would rather spend that attention on the work they are best at.",
  },
  {
    q: "How can I get Theta Sound?",
    a: "Theta Sound is currently in development. Join the waitlist on nextheta.com to get early access and updates as it gets closer to launch.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export function FAQSection() {
  return (
    <section id="faq" className="relative py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6 text-center">
          Questions, answered
        </h2>
        <p className="text-xl text-foreground/70 mb-14 text-center">
          Everything you need to know about Theta Sound.
        </p>

        <div className="border-t border-border">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg md:text-xl font-medium text-foreground">{q}</h3>
                <Plus
                  className="h-5 w-5 flex-shrink-0 text-red-500 transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-6 pr-10 text-base md:text-lg leading-relaxed text-foreground/70">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
