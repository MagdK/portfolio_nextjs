import NextImage from "next/legacy/image";

// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
  return src
}

export default function Image(props) {
  return (
    <NextImage
      {...props}
      loader={customLoader}
    />
  );
}
