"use client";

import { useEffect, useRef, useState } from "react";
import type { Review, SiteData } from "@/lib/types";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 18 18" className="h-5 w-5 flex-none" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.8741 2.6836-6.615z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.4673-.8064 5.9564-2.1818l-2.9087-2.2581c-.8064.54-1.8368.8591-3.0477.8591-2.3436 0-4.3282-1.5831-5.0359-3.7104H.9573v2.3318C2.4382 15.9832 5.4818 18 9 18z"
      />
      <path
        fill="#FBBC05"
        d="M3.9641 10.71c-.18-.54-.2823-1.1168-.2823-1.71s.1023-1.17.2823-1.71V4.9582H.9573C.3477 6.1732 0 7.5477 0 9s.3477 2.8268.9573 4.0418L3.9641 10.71z"
      />
      <path
        fill="#EA4335"
        d="M9 3.5773c1.3214 0 2.5077.4541 3.4409 1.3459l2.5818-2.5818C13.4632.8918 11.4259 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.9641 7.29C4.6718 5.1627 6.6564 3.5773 9 3.5773z"
      />
    </svg>
  );
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 flex-none ${filled ? "text-[#C9A227]" : "text-[#E4DDD0]"}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 19.771l-7.416 3.642 1.48-8.279L0 9.306l8.332-1.151z" />
    </svg>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const rating = review.rating ?? 5;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`rounded-2xl border border-[#E4DDD0] bg-white p-8 transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      <div className="flex items-center gap-3">
        <GoogleIcon />
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} filled={i < rating} />
          ))}
        </div>
      </div>
      <p className="mt-5 text-[15px] leading-relaxed text-[#4a453e]">
        {review.text}
      </p>
      <p className="mt-6 text-[13px] uppercase tracking-[0.1em] text-[#6B655D]">
        {review.name}
      </p>
    </div>
  );
}

export default function Reviews({ data }: { data: SiteData }) {
  if (!data.reviews || data.reviews.length === 0) return null;

  return (
    <section
      id="reviews"
      className="bg-[var(--color-primary-soft)] py-28 lg:py-36"
    >
      <div className="mx-auto max-w-content px-6 lg:px-12">
        <p className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#6B655D]">
          <span className="h-px w-8 bg-[var(--color-accent)]" />
          Google Reviews
        </p>
        <h2 className="mb-16 font-serif text-4xl text-[#21201C] sm:text-5xl lg:mb-20">
          What clients are saying
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
