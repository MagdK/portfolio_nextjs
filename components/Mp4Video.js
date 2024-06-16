export default function Mp4Video({ width, height, src }) {
  return (
    <video
      autoPlay muted loop playsInline
      src={src} type="video/mp4"
      width={width} height={height}>
      {/* <source src={src} type="video/mp4" />*/}
      Your browser does not support the video tag.
    </video>
  )
}
