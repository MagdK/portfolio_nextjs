import NextImage from "next/image";

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src
}

// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
  const config = process.env.__NEXT_IMAGE_OPTS
  // https://github.com/vercel/next.js/blob/canary/packages/next/client/image.tsx#L27
  return `${config.path}${normalizeSrc(src)}`
}

export default function Image(props) {
  return (
    <NextImage
      {...props}
      loader={customLoader}
    />
  );
}
