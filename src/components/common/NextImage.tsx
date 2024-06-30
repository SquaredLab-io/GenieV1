import Image from "next/image";

type NextImageProps = {
  src: string;
  altText: string;
  className?: string;
};

/**
 * A Next Image that do not have to use fixed width and height, and keeps your images optimized.
 *
 * @params `src`, `altText`, `className`
 */
export default function NextImage({ src, altText, className }: NextImageProps) {
  return (
    <Image
      src={src}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: "100%" }}
      alt={altText}
      className={className}
      loading="lazy"
    />
  );
}
