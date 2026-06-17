import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, } from '@fortawesome/free-brands-svg-icons'
const Main = () => {
  return (
    <>
      <section className="relative flex items-center justify-center bg-white overflow-hidden">
        <div
          className="min-h-[500px] md:min-h-[650px] w-screen flex flex-col items-center justify-start text-center px-4 bg-cover bg-center bg-no-repeat pt-14 md:pt-20"
          style={{ backgroundImage: `url('https://www.apple.com/v/home/images/iphone-family/a/hero_iphone_family__be5jkzxszb1e_large.jpg')` }}
        >
          <div className="flex flex-col items-center max-w-2xl z-10">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-black">
              iPhone
            </h1>
            <p className="text-xl md:text-2xl font-normal text-gray-800 mt-2">
              Meet the latest iPhone line-up.
            </p>
            <div className="flex gap-3 mt-4">
              <button
                type="button"
                className="text-white bg-[#0071e3] hover:bg-[#0077ed] font-normal rounded-full text-sm md:text-base px-5 py-2 transition-colors cursor-pointer"
              >
                Learn more
              </button>
              <button
                type="button"
                className="text-[#0071e3] bg-transparent border border-[#0071e3] hover:bg-[#0071e3] hover:text-white font-normal rounded-full text-sm md:text-base px-5 py-2 transition-colors cursor-pointer"
              >
                Shop iPhone
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex items-center justify-center bg-white overflow-hidden mt-3">
        <div
          className="min-h-[500px] md:min-h-[650px] w-screen flex flex-col items-center justify-start text-center px-4 bg-cover bg-center bg-no-repeat pt-14 md:pt-20"
          style={{ backgroundImage: `url('https://www.apple.com/v/home/images/macbook-air-m5/a/hero_macbook_air_m5__eb1idggd120y_large_2x.jpg')` }}
        >
          <div className="flex flex-col items-center max-w-2xl z-10">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-black">
              MacBook Air
            </h1>
            <p className="text-xl md:text-2xl font-normal text-gray-800 mt-2">
              Now supercharged by M5.
            </p>
            <div className="flex gap-3 mt-4">
              <button
                type="button"
                className="text-white bg-[#0071e3] hover:bg-[#0077ed] font-normal rounded-full text-sm md:text-base px-5 py-2 transition-colors cursor-pointer"
              >
                Learn more
              </button>
              <button
                type="button"
                className="text-[#0071e3] bg-transparent border border-[#0071e3] hover:bg-[#0071e3] hover:text-white font-normal rounded-full text-sm md:text-base px-5 py-2 transition-colors cursor-pointer"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-3 pt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-[1440px] mx-auto">
          {/* WWDC Card */}
          <div
            className="relative flex flex-col items-center justify-end text-center px-6 pb-14 min-h-[500px] md:min-h-[580px] bg-black text-white bg-cover bg-center rounded-sm"
            style={{ backgroundImage: `url('https://www.apple.com/v/home/images/wwdc26-announce/a/promo_wwdc26_announce_c__e7p9rd0lwhaq_large_2x.jpg')` }}
          >
            <div className="flex flex-col items-center gap-2 max-w-sm z-10">
              <p className="text-lg md:text-xl font-normal text-gray-300">
                Discover everything announced at the event.
              </p>
              <a
                href="#keynote"
                className="text-[#2997ff] hover:underline text-base md:text-lg font-normal inline-flex items-center gap-1 mt-1"
              >
                Watch the keynote on our US site &gt;
              </a>
            </div>
          </div>
          <div
            className="relative flex flex-col items-center justify-end text-center px-6 pb-14 min-h-[500px] md:min-h-[580px] bg-gray-900 text-white bg-cover bg-center rounded-sm"
            style={{ backgroundImage: `url('https://www.apple.com/in/home/built/images/mac-for-students/promo/promo_college_students__bxqdcoxgjzw2_large_2x.jpg')` }}
          >
            <div className="flex flex-col items-center gap-2 max-w-md z-10">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Mac for students</h2>
              <p className="text-lg md:text-xl font-normal text-gray-200 mt-1">
                No matter what you do, ace it with Mac.
              </p>
              <div className="mt-4">
                <button
                  type="button"
                  className="bg-[#0071e3] hover:bg-[#0077ed] text-white font-normal rounded-full text-sm md:text-base px-5 py-2 transition-colors cursor-pointer"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-3 pt-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-[1440px] mx-auto">
          <div
            className="relative flex flex-col items-center justify-between text-center px-6 pt-14 pb-0 min-h-[500px] md:min-h-[580px] bg-black text-white bg-cover bg-bottom bg-no-repeat rounded-sm"
            style={{ backgroundImage: `url('https://www.apple.com/v/home/images/macbook-pro/a/promo_macbook_pro__c9td9w1mc8ia_large_2x.jpg')` }}
          >
            <div className="flex flex-col items-center max-w-md z-10">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                MacBook Pro
              </h2>
              <p className="text-lg md:text-xl font-normal text-gray-200 mt-1">
                Now with M5, M5 Pro and M5 Max.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="#learn-more-mac"
                  className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm md:text-base font-normal rounded-full px-5 py-2 transition-colors"
                >
                  Learn more
                </a>
                <a
                  href="#buy-mac"
                  className="border border-[#0071e3] text-[#2997ff] hover:bg-[#0071e3] hover:text-white text-sm md:text-base font-normal rounded-full px-5 py-2 transition-colors"
                >
                  Buy
                </a>
              </div>
            </div>
          </div>
          <div
            className="relative flex flex-col items-center justify-between text-center px-6 pt-14 pb-0 min-h-[500px] md:min-h-[580px] bg-[#f5f5f7] text-black bg-cover bg-bottom bg-no-repeat rounded-sm"
            style={{ backgroundImage: `url('https://www.apple.com/in/home/built/images/apple-watch-series-11/promo/promo_apple_watch_series_11__b63hxviqvonm_large_2x.jpg')` }}
          >
            <div className="flex flex-col items-center max-w-md z-10">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight flex items-center justify-center gap-1">
                <span className="inline-block transform -translate-y-[2px] text-[28px] md:text-[34px]"><FontAwesomeIcon icon={faApple} style={{ color: "black", }} /></span>WATCH
                <span className="text-[10px] uppercase font-bold tracking-widest text-red-500 ml-1 bg-gray-200 px-1.5 py-0.5 rounded align-middle">Series 11</span>
              </h2>
              <p className="text-lg md:text-xl font-normal text-gray-600 mt-1">
                The ultimate watch for a healthy life.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="#learn-more-watch"
                  className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm md:text-base font-normal rounded-full px-5 py-2 transition-colors"
                >
                  Learn more
                </a>
                <a
                  href="#buy-watch"
                  className="border border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white text-sm md:text-base font-normal rounded-full px-5 py-2 transition-colors"
                >
                  Buy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-3 py-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-[1440px] mx-auto">
          {/* AirPods Card */}
          <div
            className="relative flex flex-col items-center justify-between text-center px-6 pt-14 pb-0 min-h-[500px] md:min-h-[580px] bg-[#f5f5f7] text-black bg-no-repeat bg-bottom rounded-sm"
            style={{
              backgroundImage: `url('https://www.apple.com/v/home/images/airpods-pro-3/a/promo_airpods_pro_3__e4755qofhnyq_large_2x.jpg')`,
              backgroundSize: '85% auto'
            }}
          >
            <div className="flex flex-col items-center max-w-sm z-10">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                AirPods Pro 3
              </h2>
              <p className="text-lg md:text-xl font-normal text-gray-700 mt-1.5">
                The world’s best in-ear Active Noise Cancellation.¹
              </p>
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="#learn-more-airpods"
                  className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm md:text-base font-normal rounded-full px-5 py-2 transition-colors"
                >
                  Learn more
                </a>
                <a
                  href="#buy-airpods"
                  className="border border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white text-sm md:text-base font-normal rounded-full px-5 py-2 transition-colors"
                >
                  Buy
                </a>
              </div>
            </div>
          </div>
          <div
            className="relative flex flex-col items-center justify-between text-center px-6 pt-14 pb-0 min-h-[500px] md:min-h-[580px] bg-[#f5f5f7] text-black bg-no-repeat bg-bottom rounded-sm"
            style={{
              backgroundImage: `url('https://www.apple.com/v/home/images/iphone-tradein/a/promo_iphone_tradein__e4hrjxmgmf0i_large_2x.jpg')`,
              backgroundSize: '100% auto'
            }}
          >
            <div className="flex flex-col items-center max-w-md z-10">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight flex items-center justify-center gap-1.5">
                <span className="inline-block transform -translate-y-[2px] text-[28px] md:text-[34px]"><FontAwesomeIcon icon={faApple} style={{ color: "black", }} /></span>Trade In
              </h2>
              <p className="text-lg md:text-xl font-normal text-gray-700 mt-1.5">
                Upgrade and save. It’s that easy.
              </p>
              <div className="mt-4">
                <a
                  href="#trade-in-estimate"
                  className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm md:text-base font-normal rounded-full px-5 py-2 transition-colors"
                >
                  Get your estimate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto text-sm text-gray-600 mt-5">
        *No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3- or 6-month tenures from most leading card issuers. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply.
        ‡Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Instant cashback is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.
        1. Testing conducted by Apple in July 2025 using AirPods Pro 3 paired with iPhone 16 with pre-release AirPods firmware and iOS 26. Noise reduction was tested in accordance with IEC 60268-24. Comparison made against the best-selling wireless in-ear headphones commercially available at the time of testing. Performance depends on device settings, environment and many other factors.
        A subscription is required for Apple TV.
        Features are subject to change. Some features, applications and services may not be available in all regions or all languages.
      </section>
    </>
  );
};

export default Main;