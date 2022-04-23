import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Grid } from 'swiper';

const Clients = () => {
  return (
    <section className="clientsSection">
      <div className="container">
        <h3 className="sectionTitle">Clients</h3>
        <p className="clientsDescription">
          We value a great working relationship with our clients above all else.
          It’s why they often come to our parties. It’s also why we’re able to
          challenge and inspire them to reach for the stars.
        </p>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          grid={{ rows: 4 }}
          modules={[Grid]}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 20,
              // grid: { rows: 3 },
            },
            800: {
              slidesPerView: 4,
              spaceBetween: 40,
              // grid: { rows: 4 },
            },
          }}
        >
          <SwiperSlide>
            <a href="#" title="BOL.COM">
              <img
                src={require('../../../../assets/images/logos/Tomtom_logo_zwart.jpg')}
                alt="BOL.COM"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" title="BOL.COM">
              <img
                src={require('../../../../assets/images/logos/Tomtom_logo_zwart.jpg')}
                alt="BOL.COM"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" title="BOL.COM">
              <img
                src={require('../../../../assets/images/logos/Tomtom_logo_zwart.jpg')}
                alt="BOL.COM"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" title="BOL.COM">
              <img
                src={require('../../../../assets/images/logos/Tomtom_logo_zwart.jpg')}
                alt="BOL.COM"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" title="BOL.COM">
              <img
                src={require('../../../../assets/images/logos/Tomtom_logo_zwart.jpg')}
                alt="BOL.COM"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" title="BOL.COM">
              <img
                src={require('../../../../assets/images/logos/Tomtom_logo_zwart.jpg')}
                alt="BOL.COM"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" title="BOL.COM">
              <img
                src={require('../../../../assets/images/logos/Tomtom_logo_zwart.jpg')}
                alt="BOL.COM"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" title="BOL.COM">
              <img
                src={require('../../../../assets/images/logos/Tomtom_logo_zwart.jpg')}
                alt="BOL.COM"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" title="BOL.COM">
              <img
                src={require('../../../../assets/images/logos/Tomtom_logo_zwart.jpg')}
                alt="BOL.COM"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" title="BOL.COM">
              <img
                src={require('../../../../assets/images/logos/Tomtom_logo_zwart.jpg')}
                alt="BOL.COM"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" title="BOL.COM">
              <img
                src={require('../../../../assets/images/logos/Tomtom_logo_zwart.jpg')}
                alt="BOL.COM"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" title="BOL.COM">
              <img
                src={require('../../../../assets/images/logos/Tomtom_logo_zwart.jpg')}
                alt="BOL.COM"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" title="BOL.COM">
              <img
                src={require('../../../../assets/images/logos/Tomtom_logo_zwart.jpg')}
                alt="BOL.COM"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" title="BOL.COM">
              <img
                src={require('../../../../assets/images/logos/Tomtom_logo_zwart.jpg')}
                alt="BOL.COM"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" title="BOL.COM">
              <img
                src={require('../../../../assets/images/logos/Tomtom_logo_zwart.jpg')}
                alt="BOL.COM"
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
