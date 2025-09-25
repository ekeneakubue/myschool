"use client";

import dynamic from "next/dynamic";

const HeroSlider = dynamic(() => import("./HeroSlider"), { ssr: false });

type Props = {
  images: { src: string; alt: string }[];
  intervalMs?: number;
};

export default function HeroBackgroundClient({ images, intervalMs = 5000 }: Props) {
  return (
    <div className="absolute inset-0 -z-10">
      <HeroSlider images={images} intervalMs={intervalMs} />
    </div>
  );
}


