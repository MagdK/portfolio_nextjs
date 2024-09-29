import fs from 'fs';
import { globSync } from 'glob';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import styles from './[id].module.scss';
import { PrimaryButton, SecondaryButton } from '../../components/Button';
import Image from '../../components/Image';
import Mp4Video from '../../components/Mp4Video';
import Link from 'next/link';

// import probe from "probe-image-size"; // for static site generation - image size

// import required modules
import { FreeMode, Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/bundle";
import Footer from '../../components/Footer';


const Work = ({ slug, frontmatter, content, images, videos }) => {

  return (
    <div className={styles.details_container}>

      <div className={styles.header_details}>
        <div className={styles.logo}>
          <Link href="/#home_section">
            <a href="#top">
              <h2 className={styles.logo_container}>m<span>.</span></h2>
            </a>
          </Link>
        </div>
      </div>

      <div className={styles.details_content_wrapper}>

        <Link href="/#work_section">
          <a className={styles.back_link}>
            Go back
          </a>
        </Link>


        <h1>{frontmatter.title}</h1>
        <div className={styles.work_description} dangerouslySetInnerHTML={{ __html: content }}></div>


        {(frontmatter.websiteURL && frontmatter.github) &&
          <div className={styles.btn_container}>
            <PrimaryButton
              href={`${frontmatter.websiteURL}`}
              target="_blank"
              rel="noreferrer"
            >
              Website
            </PrimaryButton>

            <SecondaryButton
              href={`${frontmatter.github}`}
              target="_blank"
              rel="noreferrer"
            >
              Github repo
            </SecondaryButton>
          </div>
        }

        <div className={styles.image_container} style={{ marginTop: '2em' }}>
          {videos.map((image) => {
            return (<Mp4Video
              key={image}
              src={image}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />)
          })}
        </div>
        <div className={styles.image_container}>
          {images.map((image) => {
            return (<Image
              src={image}
              key={image}
              alt={image}

              unoptimized={true}
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />)
          })}
        </div>
      </div>

      {/* <Swiper
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
      </Swiper> */}
      <Footer />
    </div >
  )
}

// https://nextjs.org/docs/api-reference/data-fetching/get-static-props#getstaticprops-return-values
// Every time the page gets rendered, this function should return the data, that will be shown on the page
export async function getStaticProps(context) {
  const slug = context.params.id;
  const filePath = `public/works/${slug}/${slug}.md`;
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(markdownWithMeta);
  const html = await markdownToHtml(content);
  const replacedHref = html.replaceAll("href", 'target="_blank" href');

  const images = globSync(path.join(`public/works/${slug}/!(${slug}).+(png|gif|jpg|jpeg)`))
    .map(img_path => img_path.replace('public', ''))
  const videos = globSync(path.join(`public/works/${slug}/!(${slug}).+(mp4)`))
    .map(video_path => video_path.replace('public', ''))

  return {
    props: {
      slug: slug,
      frontmatter: data,
      content: replacedHref,
      images: images,
      videos: videos,
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
    paths: globSync(path.join("public/works/*")).map(dir => {
      return { params: { id: path.basename(dir) } }
    })
  }
}

export default Work;
