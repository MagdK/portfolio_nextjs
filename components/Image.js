import { default as NextImage } from "next/image";

export default async function Image(props) {
  return (
    <NextImage
      {...props}
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
