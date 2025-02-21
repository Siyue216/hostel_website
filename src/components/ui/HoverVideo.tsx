import { useRef } from "react";

interface HoverVideoProps {
  src: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function HoverVideo({
  src,
  width = 600,
  height = 400,
  className = "",
}: HoverVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };

  return (
    <video
      ref={videoRef}
      width={width}
      height={height}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      muted
      loop
      className={`my-video ${className}`}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
