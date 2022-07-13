import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';

const Work = ({ title }) => {
  const router = useRouter()
  const { id } = router.query

  return <p>Work: {id}, {title}</p>
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("works"))

  return {
    props: {
      posts: "The Posts"
    }
  }
}
rk
export default Work;