import fs from 'fs';
import glob from 'glob';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import styles from './details.module.scss';
import { PrimaryButton, SecondaryButton } from '../../components/Button';

// import required modules
import { FreeMode, Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/bundle";
import path from 'path';

const Work = ({ slug, frontmatter, content }) => {

  return (
    <div className={styles.details_content_wrapper}>
      <h3>{frontmatter.title}</h3>
      <div dangerouslySetInnerHTML={{__html: content}}></div>

      <div className={styles.btn_container}>
        {/* if(frontmatter.websiteURL) {

        } */}
        <PrimaryButton 
          href="https://micah-rolodex.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          Website
        </PrimaryButton>
        <SecondaryButton 
          href="https://github.com/MagdK/rolodex"
          target="_blank"
          rel="noreferrer"
        >
          Github repo
        </SecondaryButton>
      </div>

      <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className={styles.mySwiper}
          >
            <SwiperSlide className={styles.mySwiper_module}>Slide 1</SwiperSlide>
            <SwiperSlide className={styles.mySwiper_module}>Slide 2</SwiperSlide>
            <SwiperSlide className={styles.mySwiper_module}>Slide 3</SwiperSlide>
            <SwiperSlide className={styles.mySwiper_module}>Slide 4</SwiperSlide>
            <SwiperSlide className={styles.mySwiper_module}>Slide 5</SwiperSlide>
            <SwiperSlide className={styles.mySwiper_module}>Slide 6</SwiperSlide>
            <SwiperSlide className={styles.mySwiper_module}>Slide 7</SwiperSlide>
            <SwiperSlide className={styles.mySwiper_module}>Slide 8</SwiperSlide>
            <SwiperSlide className={styles.mySwiper_module}>Slide 9</SwiperSlide>
            <SwiperSlide className={styles.mySwiper_module}>Slide 10</SwiperSlide>
            <SwiperSlide className={styles.mySwiper_module}>Slide 11</SwiperSlide>
            <SwiperSlide className={styles.mySwiper_module}>Slide 12</SwiperSlide>
          </Swiper>
    </div>
  )
}

export async function getStaticProps(context) {
  const slug = context.params.id;
  const filePath = `works/${slug}/${slug}.md`;
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');

  const {data, content} = matter(markdownWithMeta);
  const html = await markdownToHtml(content)

  return {
    props: {
      slug: slug,
      frontmatter: data,
      content: html
    }
  }
}

async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

// https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#getstaticpaths-return-values
// [ {p: {id: 'begame'}}, {p: {id: 'syndy'}} ]
// => /works/begame, /work/syndy
export async function getStaticPaths() {
  return {
    fallback: false, // can also be true or 'blocking'
    // paths: [{ params: { id: 'begame-design-system' } }],
    paths: glob.sync(path.join("works/*")).map(dir => {
      return { params: {id: path.basename(dir) }}
    })
  }
}

export default Work;