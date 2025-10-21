// app/[locale]/gallery/_components/GalleryClient.jsx
"use client";

import {useEffect, useMemo, useState, useCallback} from "react";
import Image from "next/image";

export default function GalleryClient({images = [], i18n = {}}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const openAt = useCallback((idx) => {
    setActive(idx);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const prev = useCallback(() => {
    setActive((p) => (p - 1 + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => {
    setActive((p) => (p + 1) % images.length);
  }, [images.length]);

  // ESC kapatma ve ok tuşları
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, prev, next]);

  // Body scroll kilitle
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  // Basit (pasif) filtre çipleri — istersen aktif filtre mantığı ekleriz
  const chips = useMemo(
    () => [
      {label: i18n.all || "All", active: true},
      {label: i18n.recent || "Recent", active: false},
      {label: i18n.featured || "Featured", active: false}
    ],
    [i18n]
  );

  return (
    <>
      {/* Filtre chipleri */}
      

      {/* Grid */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => openAt(i)}
            className="group relative overflow-hidden rounded-xl border bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-black/50"
            aria-label={`Open image ${i + 1}`}
          >
            <Image
              src={img.src}
              alt={img.alt ?? `Image ${i + 1}`}
              width={800}
              height={600}
              className="h-36 sm:h-44 md:h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              priority={i < 4}
            />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Arkaplan */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={close}
          />

          {/* İçerik */}
          <div className="relative z-10 max-w-6xl w-full">
            {/* Close */}
            <button
              onClick={close}
              aria-label={i18n.close || "Close"}
              className="absolute -top-2 right-0 -translate-y-full rounded-full bg-white/90 px-3 py-1 text-sm font-medium shadow hover:bg-white"
            >
              ×
            </button>

            {/* Görsel */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-transparent">
              <Image
                src={images[active].src}
                alt={images[active].alt ?? `Image ${active + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Caption + Kontroller */}
            <div className="mt-3 flex items-center justify-between">
              <div className="text-sm text-neutral-700">
                {images[active].alt ?? `Image ${active + 1}`}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="rounded-lg border px-3 py-1 text-sm hover:bg-neutral-50"
                  aria-label={i18n.prev || "Previous"}
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  className="rounded-lg border px-3 py-1 text-sm hover:bg-neutral-50"
                  aria-label={i18n.next || "Next"}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
