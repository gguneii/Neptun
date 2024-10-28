import { FaCartShopping } from "react-icons/fa6";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useEffect, useState } from "react";

function SpecialOffers() {
  const [PRODUCT, setPRODUCT] = useState([])
  useEffect(() => {
    fetch('https://neptunbk.vercel.app/products/discounted')
      .then(res => res.json())
      .then(data => setPRODUCT(data.products))
  }, [])
  return (
    <div className="bg-gray-100 h-full">
      <div className="max-w-[1200px] w-[95%] mx-auto py-4">
        <div className="flex items-center justify-between py-4">
          <h3 className="font-semibold">Endirimli məhsullar</h3>
          <div>
            <p className="text-[#ff8230] cursor-pointer">Hamsına bax</p>
          </div>
        </div>
        <Swiper
          className=" h-[400px] mb-6 lgx:mr-2 lgx:mb-0 w-full"
          style={{
            "--swiper-navigation-color": "#ff8300",
            "--swiper-navigation-size": "12px",
          }}
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          breakpoints={{
            400: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            880: { slidesPerView: 4 },
            1180: { slidesPerView: 5 },
            1230: { slidesPerView: 6 },
          }}
          spaceBetween={18}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          navigation={{
            nextEl: '.swiper-button-next.swiper-button-2',
            prevEl: '.swiper-button-prev.swiper-button-2',
          }}
        >
          <SwiperSlide className="relative">
            <div className="bg-white border-[1px] rounded-md flex flex-col items-center justify-center  w-full md:w-[200px] lg:w-[250px]">
              <div className="flex w-[80%] mt-4 justify-end">
                <div className="w-[21.6px] h-[22px]">
                  <svg
                    className="fill-transparent object-cover stroke-[#ff8230] stroke-[8.07px] hover:fill-[#ff8230] duration-200"
                    xmlns="http://www.w3.org/2000svg"
                    viewBox="-5 0 156.69 110.07">
                    <defs></defs>
                    <path
                      data-name="neptun_heart"
                      className="cls-1"
                      d="M1322.95,268.738c-7.63,17.621-62.02,55.614-62.94,56.251V325a0.011,0.011,0,0,0-.02,0v-0.015c-0.92-.637-55.31-38.63-62.94-56.251a34.807,34.807,0,0,1,18.68-45.924A35.749,35.749,0,0,1,1260,236.828a35.749,35.749,0,0,1,44.27-14.014A34.807,34.807,0,0,1,1322.95,268.738Z"
                      transform="translate(-1191.655 -217.465)"></path>
                  </svg>
                </div>
              </div>
              <div className="w-[100px] h-[140px] ">
                <img className="object-cover" src="../src/assets/qaymaq.webp" alt="" />
              </div>
              <h3 className="text-[0.65rem] font-semibold mb-4 px-4 text-center">AZER SUD 200GR QAYMAQ 26% T/P</h3>
              <div className="flex items-center gap-2">
                <div className="w-[40px] h-[40px] flex justify-center items-center transition duration-200 text-[0.8rem] font-bold rounded-full bg-[#ff84003f] hover:bg-[#ff8230]">
                  <h3>-17%</h3>
                </div>
                <div>
                  <h3 className="text-[1rem] line-through text-gray-500">2.39 ₼</h3>
                  <h2 className="text-[1.3rem] font-bold">0.55 ₼</h2>
                </div>
              </div>
              <div className="flex justify-between items-center w-[110px]">
                <button className="text-[#ff8230] text-[2.3rem] font-bold">-</button>
                <span>1</span>
                <button className="text-[#ff8230] text-[2.2rem]  font-bold">+</button>
              </div>
              <button className="bg-[#ff8230] hover:bg-[#e4742a] transition duration-200 text-white rounded-full w-[65px] h-[30px] mb-10"><FaCartShopping className="flex w-full justify-center" /></button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="bg-white border-[1px] rounded-md flex flex-col items-center justify-center  w-full md:w-[200px] lg:w-[250px]">
              <div className="flex w-[80%] mt-4 justify-end">
                <div className="w-[21.6px] h-[22px]">
                  <svg
                    className="fill-transparent object-cover stroke-[#ff8230] stroke-[8.07px] hover:fill-[#ff8230] duration-200"
                    xmlns="http://www.w3.org/2000svg"
                    viewBox="-5 0 156.69 110.07">
                    <defs></defs>
                    <path
                      data-name="neptun_heart"
                      className="cls-1"
                      d="M1322.95,268.738c-7.63,17.621-62.02,55.614-62.94,56.251V325a0.011,0.011,0,0,0-.02,0v-0.015c-0.92-.637-55.31-38.63-62.94-56.251a34.807,34.807,0,0,1,18.68-45.924A35.749,35.749,0,0,1,1260,236.828a35.749,35.749,0,0,1,44.27-14.014A34.807,34.807,0,0,1,1322.95,268.738Z"
                      transform="translate(-1191.655 -217.465)"></path>
                  </svg>
                </div>
              </div>
              <div className="w-[100px] h-[140px] ">
                <img className="object-cover" src="../src/assets/qaymaq.webp" alt="" />
              </div>
              <h3 className="text-[0.65rem] font-semibold mb-4 px-4 text-center">AZER SUD 200GR QAYMAQ 26% T/P</h3>
              <div className="flex items-center gap-2">
                <div className="w-[40px] h-[40px] flex justify-center items-center transition duration-200 text-[0.8rem] font-bold rounded-full bg-[#ff84003f] hover:bg-[#ff8230]">
                  <h3>-17%</h3>
                </div>
                <div>
                  <h3 className="text-[1rem] line-through text-gray-500">2.39 ₼</h3>
                  <h2 className="text-[1.3rem] font-bold">0.55 ₼</h2>
                </div>
              </div>
              <div className="flex justify-between items-center w-[110px]">
                <button className="text-[#ff8230] text-[2.3rem] font-bold">-</button>
                <span>1</span>
                <button className="text-[#ff8230] text-[2.2rem]  font-bold">+</button>
              </div>
              <button className="bg-[#ff8230] hover:bg-[#e4742a] transition duration-200 text-white rounded-full w-[65px] h-[30px] mb-10"><FaCartShopping className="flex w-full justify-center" /></button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="bg-white border-[1px] rounded-md flex flex-col items-center justify-center  w-full md:w-[200px] lg:w-[250px]">
              <div className="flex w-[80%] mt-4 justify-end">
                <div className="w-[21.6px] h-[22px]">
                  <svg
                    className="fill-transparent object-cover stroke-[#ff8230] stroke-[8.07px] hover:fill-[#ff8230] duration-200"
                    xmlns="http://www.w3.org/2000svg"
                    viewBox="-5 0 156.69 110.07">
                    <defs></defs>
                    <path
                      data-name="neptun_heart"
                      className="cls-1"
                      d="M1322.95,268.738c-7.63,17.621-62.02,55.614-62.94,56.251V325a0.011,0.011,0,0,0-.02,0v-0.015c-0.92-.637-55.31-38.63-62.94-56.251a34.807,34.807,0,0,1,18.68-45.924A35.749,35.749,0,0,1,1260,236.828a35.749,35.749,0,0,1,44.27-14.014A34.807,34.807,0,0,1,1322.95,268.738Z"
                      transform="translate(-1191.655 -217.465)"></path>
                  </svg>
                </div>
              </div>
              <div className="w-[100px] h-[140px] ">
                <img className="object-cover" src="../src/assets/qaymaq.webp" alt="" />
              </div>
              <h3 className="text-[0.65rem] font-semibold mb-4 px-4 text-center">AZER SUD 200GR QAYMAQ 26% T/P</h3>
              <div className="flex items-center gap-2">
                <div className="w-[40px] h-[40px] flex justify-center items-center transition duration-200 text-[0.8rem] font-bold rounded-full bg-[#ff84003f] hover:bg-[#ff8230]">
                  <h3>-17%</h3>
                </div>
                <div>
                  <h3 className="text-[1rem] line-through text-gray-500">2.39 ₼</h3>
                  <h2 className="text-[1.3rem] font-bold">0.55 ₼</h2>
                </div>
              </div>
              <div className="flex justify-between items-center w-[110px]">
                <button className="text-[#ff8230] text-[2.3rem] font-bold">-</button>
                <span>1</span>
                <button className="text-[#ff8230] text-[2.2rem]  font-bold">+</button>
              </div>
              <button className="bg-[#ff8230] hover:bg-[#e4742a] transition duration-200 text-white rounded-full w-[65px] h-[30px] mb-10"><FaCartShopping className="flex w-full justify-center" /></button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="bg-white border-[1px] rounded-md flex flex-col items-center justify-center  w-full md:w-[200px] lg:w-[250px]">
              <div className="flex w-[80%] mt-4 justify-end">
                <div className="w-[21.6px] h-[22px]">
                  <svg
                    className="fill-transparent object-cover stroke-[#ff8230] stroke-[8.07px] hover:fill-[#ff8230] duration-200"
                    xmlns="http://www.w3.org/2000svg"
                    viewBox="-5 0 156.69 110.07">
                    <defs></defs>
                    <path
                      data-name="neptun_heart"
                      className="cls-1"
                      d="M1322.95,268.738c-7.63,17.621-62.02,55.614-62.94,56.251V325a0.011,0.011,0,0,0-.02,0v-0.015c-0.92-.637-55.31-38.63-62.94-56.251a34.807,34.807,0,0,1,18.68-45.924A35.749,35.749,0,0,1,1260,236.828a35.749,35.749,0,0,1,44.27-14.014A34.807,34.807,0,0,1,1322.95,268.738Z"
                      transform="translate(-1191.655 -217.465)"></path>
                  </svg>
                </div>
              </div>
              <div className="w-[100px] h-[140px] ">
                <img className="object-cover" src="../src/assets/qaymaq.webp" alt="" />
              </div>
              <h3 className="text-[0.65rem] font-semibold mb-4 px-4 text-center">AZER SUD 200GR QAYMAQ 26% T/P</h3>
              <div className="flex items-center gap-2">
                <div className="w-[40px] h-[40px] flex justify-center items-center transition duration-200 text-[0.8rem] font-bold rounded-full bg-[#ff84003f] hover:bg-[#ff8230]">
                  <h3>-17%</h3>
                </div>
                <div>
                  <h3 className="text-[1rem] line-through text-gray-500">2.39 ₼</h3>
                  <h2 className="text-[1.3rem] font-bold">0.55 ₼</h2>
                </div>
              </div>
              <div className="flex justify-between items-center w-[110px]">
                <button className="text-[#ff8230] text-[2.3rem] font-bold">-</button>
                <span>1</span>
                <button className="text-[#ff8230] text-[2.2rem]  font-bold">+</button>
              </div>
              <button className="bg-[#ff8230] hover:bg-[#e4742a] transition duration-200 text-white rounded-full w-[65px] h-[30px] mb-10"><FaCartShopping className="flex w-full justify-center" /></button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="bg-white border-[1px] rounded-md flex flex-col items-center justify-center  w-full md:w-[200px] lg:w-[250px]">
              <div className="flex w-[80%] mt-4 justify-end">
                <div className="w-[21.6px] h-[22px]">
                  <svg
                    className="fill-transparent object-cover stroke-[#ff8230] stroke-[8.07px] hover:fill-[#ff8230] duration-200"
                    xmlns="http://www.w3.org/2000svg"
                    viewBox="-5 0 156.69 110.07">
                    <defs></defs>
                    <path
                      data-name="neptun_heart"
                      className="cls-1"
                      d="M1322.95,268.738c-7.63,17.621-62.02,55.614-62.94,56.251V325a0.011,0.011,0,0,0-.02,0v-0.015c-0.92-.637-55.31-38.63-62.94-56.251a34.807,34.807,0,0,1,18.68-45.924A35.749,35.749,0,0,1,1260,236.828a35.749,35.749,0,0,1,44.27-14.014A34.807,34.807,0,0,1,1322.95,268.738Z"
                      transform="translate(-1191.655 -217.465)"></path>
                  </svg>
                </div>
              </div>
              <div className="w-[100px] h-[140px] ">
                <img className="object-cover" src="../src/assets/qaymaq.webp" alt="" />
              </div>
              <h3 className="text-[0.65rem] font-semibold mb-4 px-4 text-center">AZER SUD 200GR QAYMAQ 26% T/P</h3>
              <div className="flex items-center gap-2">
                <div className="w-[40px] h-[40px] flex justify-center items-center transition duration-200 text-[0.8rem] font-bold rounded-full bg-[#ff84003f] hover:bg-[#ff8230]">
                  <h3>-17%</h3>
                </div>
                <div>
                  <h3 className="text-[1rem] line-through text-gray-500">2.39 ₼</h3>
                  <h2 className="text-[1.3rem] font-bold">0.55 ₼</h2>
                </div>
              </div>
              <div className="flex justify-between items-center w-[110px]">
                <button className="text-[#ff8230] text-[2.3rem] font-bold">-</button>
                <span>1</span>
                <button className="text-[#ff8230] text-[2.2rem]  font-bold">+</button>
              </div>
              <button className="bg-[#ff8230] hover:bg-[#e4742a] transition duration-200 text-white rounded-full w-[65px] h-[30px] mb-10"><FaCartShopping className="flex w-full justify-center" /></button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="bg-white border-[1px] rounded-md flex flex-col items-center justify-center  w-full md:w-[200px] lg:w-[250px]">
              <div className="flex w-[80%] mt-4 justify-end">
                <div className="w-[21.6px] h-[22px]">
                  <svg
                    className="fill-transparent object-cover stroke-[#ff8230] stroke-[8.07px] hover:fill-[#ff8230] duration-200"
                    xmlns="http://www.w3.org/2000svg"
                    viewBox="-5 0 156.69 110.07">
                    <defs></defs>
                    <path
                      data-name="neptun_heart"
                      className="cls-1"
                      d="M1322.95,268.738c-7.63,17.621-62.02,55.614-62.94,56.251V325a0.011,0.011,0,0,0-.02,0v-0.015c-0.92-.637-55.31-38.63-62.94-56.251a34.807,34.807,0,0,1,18.68-45.924A35.749,35.749,0,0,1,1260,236.828a35.749,35.749,0,0,1,44.27-14.014A34.807,34.807,0,0,1,1322.95,268.738Z"
                      transform="translate(-1191.655 -217.465)"></path>
                  </svg>
                </div>
              </div>
              <div className="w-[100px] h-[140px] ">
                <img className="object-cover" src="../src/assets/qaymaq.webp" alt="" />
              </div>
              <h3 className="text-[0.65rem] font-semibold mb-4 px-4 text-center">AZER SUD 200GR QAYMAQ 26% T/P</h3>
              <div className="flex items-center gap-2">
                <div className="w-[40px] h-[40px] flex justify-center items-center transition duration-200 text-[0.8rem] font-bold rounded-full bg-[#ff84003f] hover:bg-[#ff8230]">
                  <h3>-17%</h3>
                </div>
                <div>
                  <h3 className="text-[1rem] line-through text-gray-500">2.39 ₼</h3>
                  <h2 className="text-[1.3rem] font-bold">0.55 ₼</h2>
                </div>
              </div>
              <div className="flex justify-between items-center w-[110px]">
                <button className="text-[#ff8230] text-[2.3rem] font-bold">-</button>
                <span>1</span>
                <button className="text-[#ff8230] text-[2.2rem]  font-bold">+</button>
              </div>
              <button className="bg-[#ff8230] hover:bg-[#e4742a] transition duration-200 text-white rounded-full w-[65px] h-[30px] mb-10"><FaCartShopping className="flex w-full justify-center" /></button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="bg-white border-[1px] rounded-md flex flex-col items-center justify-center  w-full md:w-[200px] lg:w-[250px]">
              <div className="flex w-[80%] mt-4 justify-end">
                <div className="w-[21.6px] h-[22px]">
                  <svg
                    className="fill-transparent object-cover stroke-[#ff8230] stroke-[8.07px] hover:fill-[#ff8230] duration-200"
                    xmlns="http://www.w3.org/2000svg"
                    viewBox="-5 0 156.69 110.07">
                    <defs></defs>
                    <path
                      data-name="neptun_heart"
                      className="cls-1"
                      d="M1322.95,268.738c-7.63,17.621-62.02,55.614-62.94,56.251V325a0.011,0.011,0,0,0-.02,0v-0.015c-0.92-.637-55.31-38.63-62.94-56.251a34.807,34.807,0,0,1,18.68-45.924A35.749,35.749,0,0,1,1260,236.828a35.749,35.749,0,0,1,44.27-14.014A34.807,34.807,0,0,1,1322.95,268.738Z"
                      transform="translate(-1191.655 -217.465)"></path>
                  </svg>
                </div>
              </div>
              <div className="w-[100px] h-[140px] ">
                <img className="object-cover" src="../src/assets/qaymaq.webp" alt="" />
              </div>
              <h3 className="text-[0.65rem] font-semibold mb-4 px-4 text-center">AZER SUD 200GR QAYMAQ 26% T/P</h3>
              <div className="flex items-center gap-2">
                <div className="w-[40px] h-[40px] flex justify-center items-center transition duration-200 text-[0.8rem] font-bold rounded-full bg-[#ff84003f] hover:bg-[#ff8230]">
                  <h3>-17%</h3>
                </div>
                <div>
                  <h3 className="text-[1rem] line-through text-gray-500">2.39 ₼</h3>
                  <h2 className="text-[1.3rem] font-bold">0.55 ₼</h2>
                </div>
              </div>
              <div className="flex justify-between items-center w-[110px]">
                <button className="text-[#ff8230] text-[2.3rem] font-bold">-</button>
                <span>1</span>
                <button className="text-[#ff8230] text-[2.2rem]  font-bold">+</button>
              </div>
              <button className="bg-[#ff8230] hover:bg-[#e4742a] transition duration-200 text-white rounded-full w-[65px] h-[30px] mb-10"><FaCartShopping className="flex w-full justify-center" /></button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="bg-white border-[1px] rounded-md flex flex-col items-center justify-center  w-full md:w-[200px] lg:w-[250px]">
              <div className="flex w-[80%] mt-4 justify-end">
                <div className="w-[21.6px] h-[22px]">
                  <svg
                    className="fill-transparent object-cover stroke-[#ff8230] stroke-[8.07px] hover:fill-[#ff8230] duration-200"
                    xmlns="http://www.w3.org/2000svg"
                    viewBox="-5 0 156.69 110.07">
                    <defs></defs>
                    <path
                      data-name="neptun_heart"
                      className="cls-1"
                      d="M1322.95,268.738c-7.63,17.621-62.02,55.614-62.94,56.251V325a0.011,0.011,0,0,0-.02,0v-0.015c-0.92-.637-55.31-38.63-62.94-56.251a34.807,34.807,0,0,1,18.68-45.924A35.749,35.749,0,0,1,1260,236.828a35.749,35.749,0,0,1,44.27-14.014A34.807,34.807,0,0,1,1322.95,268.738Z"
                      transform="translate(-1191.655 -217.465)"></path>
                  </svg>
                </div>
              </div>
              <div className="w-[100px] h-[140px] ">
                <img className="object-cover" src="../src/assets/qaymaq.webp" alt="" />
              </div>
              <h3 className="text-[0.65rem] font-semibold mb-4 px-4 text-center">AZER SUD 200GR QAYMAQ 26% T/P</h3>
              <div className="flex items-center gap-2">
                <div className="w-[40px] h-[40px] flex justify-center items-center transition duration-200 text-[0.8rem] font-bold rounded-full bg-[#ff84003f] hover:bg-[#ff8230]">
                  <h3>-17%</h3>
                </div>
                <div>
                  <h3 className="text-[1rem] line-through text-gray-500">2.39 ₼</h3>
                  <h2 className="text-[1.3rem] font-bold">0.55 ₼</h2>
                </div>
              </div>
              <div className="flex justify-between items-center w-[110px]">
                <button className="text-[#ff8230] text-[2.3rem] font-bold">-</button>
                <span>1</span>
                <button className="text-[#ff8230] text-[2.2rem]  font-bold">+</button>
              </div>
              <button className="bg-[#ff8230] hover:bg-[#e4742a] transition duration-200 text-white rounded-full w-[65px] h-[30px] mb-10"><FaCartShopping className="flex w-full justify-center" /></button>
            </div>
          </SwiperSlide>
          <div className="swiper-button-prev swiper-button-2" />
          <div className="swiper-button-next swiper-button-2" />
        </Swiper>
      </div>
    </div>
  )
}
export default SpecialOffers