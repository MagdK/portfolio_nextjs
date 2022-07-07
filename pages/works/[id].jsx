import { useRouter } from 'next/router';

const Work = ({ title }) => {
  const router = useRouter()
  const { id } = router.query

  return <p>Work: {id}, {title}</p>
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
// export async function getStaticProps() {
  
//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     return {
//       props: {
//         title: 'Hard work',
//       },
//     }
// }

// export async function getStaticPaths() {
//     return {
//       paths: [
//         { params: {id: ["1", "2"]} }
//       ],
//       fallback: true // false or 'blocking'
//     };
// }

export default Work;