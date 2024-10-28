function Footer() {
  return (
    <footer className="bg-[#ff8300] pt-[24px] pb-[32px] ">
      <div className="container px-[30px]">
        <div className="row block-infos flex gap-[20px] lgx:gap-[30px] w-full md:w-[77%] text-[11px] text-[#fff] font-noto font-semibold mb-[40px]">
          <div className="info group flex flex-col items-center lgx:flex-row w-[33.33%]">
            <img
              className="mb-[6px] group-hover:scale-110 transition-transform duration-300 lgx:pr-[27px]"
              src="../src/assets/delivery.svg"
              alt="delivery"
            />
            <p className="text-center lgx:text-start inline-block">
              Pulsuz çatdırılma
              <br />
              50 azn-dən yuxarı
            </p>
          </div>
          <div className="info group flex flex-col items-center lgx:flex-row w-[33.33%]">
            <img
              className="mb-[6px] group-hover:scale-110 transition-transform duration-300 lgx:pr-[27px]"
              src="../src/assets/cash.svg"
              alt=""
            />
            <p className="text-center lgx:text-start inline-block">
              Nağd və ya
              <br />
              kartla ödəniş
            </p>
          </div>
          <div className="info group flex flex-col items-center lgx:flex-row w-[33.33%]">
            <img
              className="mb-[6px] group-hover:scale-110 transition-transform duration-300 lgx:pr-[27px]"
              src="../src/assets/gift.svg"
              alt=""
            />
            <p className="text-center lgx:text-start inline-block">
              Hədiyyə
              <br />
              kuponları
            </p>
          </div>
          <div className="info group hidden md:flex  flex-col lgx:flex-row items-center w-[33.33%]">
            <img
              className="mb-[6px] group-hover:scale-110 transition-transform duration-300 lgx:pr-[27px]"
              src="../src/assets/online.svg"
              alt=""
            />
            <p className="text-center lgx:text-start inline-block">
              Onlayn
              <br />
              müştəri xidmətləri
            </p>
          </div>
          <div className="info group hidden md:flex flex-col lgx:flex-row items-center w-[33.33%]">
            <img
              className="mb-[6px] group-hover:scale-110 transition-transform duration-300 lgx:pr-[27px]"
              src="../src/assets/mobile.svg"
              alt=""
            />
            <p className="text-center lgx:text-start inline-block">
              Sürətli
              <br />
              mobil mağaza
            </p>
          </div>
        </div>

        <div className="row">
          <div className="flex flex-col space-y-4">

            <div className="flex flex-col mdl:flex-row mdl:items-center">
              <p className="text-[11px] w-[153px] font-bold text-white py-[15px]">
                Bizə abunə olun
              </p>
              <form className="w-full mdl:w-auto">
                <div className="relative w-full md:w-[50vw] mdl:w-[22vw]">
                  <input
                    type="email"
                    className="block h-[42px] w-full px-5 text-[.85rem] text-gray-900 border border-[#ff8230] rounded-full bg-white"
                    placeholder="e-poçt ünvanınız..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-[1px] bottom-[0.1rem] bg-[#ff8230] hover:bg-[#dd7128] font-medium rounded-full text-[14px] px-4 py-[9px]"
                  >
                    Abunə ol
                  </button>
                </div>
              </form>
            </div>

            <div className="flex flex-col mdl:flex-row mdl:items-center">
              <p className="text-[11px] w-[153px] font-bold text-white py-[15px]">
                Sms xəbərdarlıq üçün
              </p>
              <form className="flex w-full mdl:w-auto space-x-4">
                <select className="h-[42px] px-[15px] text-[12px] text-[#999] bg-white border border-[#ff8230] rounded-full">
                  <option disabled>
                    ---
                  </option>
                  <option value="050">050</option>
                  <option value="051">051</option>
                  <option value="055">055</option>
                  <option value="070">070</option>
                  <option value="077">077</option>
                </select>
                <div className="relative w-full md:w-[40vw] mdl:w-[16vw]">
                  <input
                    type="text"
                    className="block h-[42px]  w-full px-5 text-[.85rem] text-gray-900 border border-[#ff8230] rounded-full bg-white"
                    placeholder="XXX YY ZZ"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-[1px] bottom-[0.1rem] bg-[#ff8230] hover:bg-[#dd7128] font-medium rounded-full text-[14px] px-4 py-[9px]"
                  >
                    Abunə ol
                  </button>
                </div>
              </form>
            </div>

            <div className="flex flex-col mdl:flex-row mdl:items-center">
              <p className="text-[11px] w-[153px] font-bold text-white py-[15px]">
                  Bizi izleyin
              </p>
            {/* BURDAN DAVAM ELEYERSENN */}
              <ul>
                <li>
                  <a href=""></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
