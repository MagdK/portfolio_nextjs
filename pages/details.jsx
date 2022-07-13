import Link from 'next/link';
import styles from './details.module.scss';


// import required modules
import { FreeMode, Pagination } from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/bundle";



const Details = () => {
    return (
      <div className={styles.details_container}>
        {/* <div className={details_wrapper}> */}
          <div className={styles.header_details}>
            <div className={styles.logo}>
              <Link href="/#home_section">
                <a href="#top">
                  <h2 className={styles.logo_container}>m<span>.</span></h2>
                </a>
              </Link>
            </div>
            <p className={styles.link_primary}>
              <Link href="/#work_section">
                <a>Back to work</a>
              </Link>
            </p>
          </div>
          <div className={styles.details_content_wrapper}>
            <h3>Transactions</h3>
            <div className={styles.work_description}>
              <p>
                The following designs are part of an online bingo project. A tiny part and probably not the most important, but interesting nevertheless.
              </p>
              <p>
                The purpose of these pages is to give a clear overview of all user transactions and help them not to lose track of their spendings.
              </p>
              <p>
                When users are actively engaging with the website, there are different transactions that happen during their experience. This page is supposed to help them keep track all of it: deposits, withdrawals and every game play.
              </p>
              <p>
                During the design process I gathered information from stakeholders to clarify what each and every card should contain, what status the transactions have, if they have any. I also considered fluid design and how the layout would change on different devices. I created the fluid symbol in the shared Sketch symbol library, made a style guide page to make the handover to the front-end team easier and also provided the final UI in Zeplin for all the breakpoints.
              </p>
              <p>
                After a couple of iterations the result was a clean and easily scannable transactions page.
              </p>
            </div>
          </div>
          
          <Swiper
            slidesPerView={3}
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
          </Swiper>
        {/* </div> */}
      </div>
    );
}

export default Details;