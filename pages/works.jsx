import { useRouter } from 'next/router';
import Link from 'next/link';

import path from 'path';
import fs from 'fs';
import glob from 'glob';
import matter from 'gray-matter';

const Works = ({ works }) => {

    return (
        <div className='card-list'>
            {works.map((work) => {

                return(
                    <div key={work.slug}>
                        <h2>{work.frontmatter.title}</h2>
                        <h4>{work.frontmatter.date}</h4>
                        <Link href={`/works/${work.slug}`}>
                            <a>Details</a>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export async function getStaticProps() {
    // Get files from the work directory
    const files = glob.sync(path.join("public/works/*/*.md"))


    const works = files.map(filename => {
        // Create slug - https://magdadot.com/works/<slug>
        const slug = path.basename(filename, '.md')

        // Get fronmatter
        const markdownWithMeta = fs.readFileSync(filename, 'utf-8')

        const {data:frontmatter} = matter(markdownWithMeta)

        return {
            slug, 
            frontmatter
        }
    })


    // Get slug and frontmatter from works
    return {
        props: {
        works
        }
    }
}

export default Works;