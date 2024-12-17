import { default as NextImage } from "next/image";

// opt-out of image optimization, no-op
const customLoader = ({ src, width, quality }) => {
  return src
}

export default function Image(props) {
  return (
    <NextImage
      {...props}
      loader={customLoader}
      upoptimized
      sizes="100vw"
      width={1000}
      height={750}
      style={{
        width: "100%",
        height: "auto",
        objectFit: "contain"
      }} />
  );
}
