import React from "react";
import heroImg from "../Assets/heroimage.webp";
import apiBadge from "../Assets/apibadge.svg";

const Landingpage = () => {
  return (
    <div className="section__padding container mx-auto">
      <div className="flex flex-col justify-between gap-5 md:flex-row lg:px-12 2xl:items-center 2xl:gap-0">
        <div className="testimonial hidden basis-1/2 md:block lg:basis-6/12">
          <img
            alt="pm pricing webp"
            src={heroImg}
            className="custom-hero-img mx-auto"
          />
        </div>
        <div className="general-info basis-1/2 lg:basis-7/12 flex flex-col items-center md:items-start">
          <div>
            <div className="flex items-center justify-start mb-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.producthunt.com/posts/api-for-product-managers?utm_source=badge-top-post-badge"
              >
                <img
                  alt="API For Product Manager | Product Hunt"
                  src={apiBadge}
                  width="200"
                  height="44"
                />
              </a>
            </div>
            <h1 className="text-2xl font-bold lg:font-extrbold mb-4 text-center md:text-left">
              API Product Manager course
            </h1>
            <div>
              <p className="lg:text-md pb-4 text-center md:text-left">
                ✔️ Trusted by 7300+ PMs. Lifelong access. 10+ chapters
              </p>
              <p className="lg:text-md pb-4 text-center md:text-left">
                ✔️ Crack PM interview technical rounds with ease
              </p>
              <p className="lg:text-md pb-4 text-center md:text-left">
                ✔️ Transform your product strategy with API skills
              </p>
              <p className="lg:text-md pb-4 text-center md:text-left">
                ✔️ Elevate your career with API knowledge
              </p>
            </div>
            <div className="mb-4 mt-2 text-center md:text-left">
              <p className="text-black">
                <span className="text-2xl font-bold">₹ 999</span>
                <span className="text-gray-500 line-through">₹1,999</span>
                <span className="rounded-md bg-orange-500 px-1.5 py-1 text-xs font-medium text-white">
                  50% OFF
                </span>
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-3">
               <button className="buynow-btn">Buy now</button>
              <p className="free-class text-center md:text-left">
                Interested in a free chapter?
                <span className="text-blue-600"> Get it now</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
