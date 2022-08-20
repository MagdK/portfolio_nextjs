import Link from 'next/link';
import styles from './works/details.module.scss';


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
                <p className={styles.navigation_link}>Back to works</p>
            </Link>
            <h2>Bingocams transactions</h2>
            <div className={styles.work_description}>
              <p>
                <h5>Project overview</h5>
                To give a clear overview of all user transactions and help users keep track of their spendings on the site. 
              </p>

              <p>
                <h5>Problem</h5>
                When users are actively engaging with the website, there are different transactions that happen during their experience: deposits, withdrawals and different kind of game plays. At the moment the site has only one table to list all these transactions. By improving the transactions page will give the users a better overview of their spendings.
              </p>

              <p>
                <h5>Objectives</h5>
                <ul>
                  <li>Research and observe spending behaviour.</li>
                  <li>Find a way to give the users clear overview of their spendings.</li>
                  <li>Design a page to be accessible and intuitive.</li>
                </ul>
              </p>

              <p>
                <h5>Goal</h5>
                How might we create an experience that allows users to stay on top of their spendings and provides them clear overview of their transaction history?
              </p>

              <p>
                <h5>Needs</h5>
                <ul>
                  <li>Ability to differentiate between transaction types.</li>
                  <li>Ability to differentiate between transaction occurances by providing a transaction ID.</li>
                  <li>Ability to differentiate and get informed about transaction statuses.</li>
                  <li>Ability to access transaction methods.</li>
                  <li>Ability to access transaction times. </li>
                </ul>
              </p>

              <p>
                <h5>Wants</h5>
                <ul>
                  <li>Track transactions without needing to reach out to customer support.</li>
                  <li>Clear overview of all transactions.</li>
                </ul>
              </p>

              <p>
              During the design process I gathered information from stakeholders and the dev team to clarify what data do we already have and what is required, what transaction statuses we store on the backend, if there are any. I also considered fluid design and how the layout would change on different devices. After the wireframes were approved, I created the symbols in the shared Sketch symbol library, made a style guide page to make the handover to the front-end team easier and also provided the final UI in Zeplin for all the breakpoints.
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