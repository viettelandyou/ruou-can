/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";

const Example1: React.FC = () => {
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      imgRefs.current.forEach((img) => {
        if (img) {
          const rect = img.getBoundingClientRect();
          const windowHeight =
            window.innerHeight || document.documentElement.clientHeight;

          if (rect.top <= windowHeight && rect.bottom >= 0) {
            img.classList.add("show");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll); // for cases where the image is already in view

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  return (
    <div className="mt-0 bg-[url('https://i.imgur.com/nHKp7a3.jpeg')]">
      <div className="mx-auto max-w-5xl pl-0 pr-0 py-24">
        <div className="space-y-16">
          <div className="flex flex-col-reverse items-center gap-y-8 md:flex-row md:gap-x-4">
            <div className="flex-1 min-w-0 md:pl-0">
              <h3 className="text-lg font-medium text-gray-900 sm:text-xl font-mycustomfont">
                Rượu cần
              </h3>
              <h4 className="text-medium font-medium text-gray-900 font-magistral border-b-2 border-white-900 inline-block">
                DI SẢN NÚI RỪNG
              </h4>
              <p className="mt-2 text-sm text-gray-500 sm:text-base">
                Rượu cần là một thức uống truyền thống độc đáo, gắn liền với đời
                sống văn hóa của các dân tộc thiểu số ở Tây Nguyên và miền núi
                phía Bắc Việt Nam. Loại rượu này không chỉ mang giá trị ẩm thực
                mà còn là biểu tượng của sự đoàn kết và giao lưu trong cộng
                đồng.
              </p>
            </div>
            <div className="flex-1 min-w-0 md:pl-0">
              <img
                alt="Rượu cần"
                src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-07-detail-01.jpg"
                className="w-full rounded-lg bg-gray-100 object-cover md:ml-0 fade-in"
                ref={(el) => (imgRefs.current[0] = el)}
              />
            </div>
          </div>

          <div className="flex flex-col-reverse items-center gap-y-8 md:flex-row-reverse md:gap-x-4">
            <div className="flex-1 min-w-0 md:pr-0 text-right">
              <h3 className="text-lg font-medium text-gray-900 sm:text-xl">
                Refined details
              </h3>
              <p className="mt-2 text-sm text-gray-500 sm:text-base">
                Điểm đặc biệt của rượu cần chính là cách uống qua các ống tre
                gọi là cần, mang đậm tính gắn kết. Trong các sự kiện, mọi người
                quây quần bên chum rượu, cùng uống và trò chuyện trong không khí
                ấm áp, thân tình. Cách uống này không chỉ tạo nên sự gần gũi mà
                còn phản ánh tinh thần cộng đồng của người dân.
              </p>
            </div>
            <div className="flex-1 min-w-0 md:pr-0 text-right">
              <img
                alt="Refined details"
                src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-07-detail-02.jpg"
                className="w-full rounded-lg bg-gray-100 object-cover md:mr-0 fade-in-right"
                ref={(el) => (imgRefs.current[1] = el)}
              />
            </div>
          </div>

          <div className="flex flex-col-reverse items-center gap-y-8 md:flex-row md:gap-x-4">
            <div className="flex-1 min-w-0 md:pl-0">
              <h3 className="text-lg font-medium text-gray-900 sm:text-xl">
                Minimal and thoughtful
              </h3>
              <p className="mt-2 text-sm text-gray-500 sm:text-base">
                Our laptop sleeve is compact and precisely fits 13&quot;
                devices. The zipper allows you to access the interior with ease,
                and the front pouch provides a convenient place for your charger
                cable.
              </p>
            </div>
            <div className="flex-1 min-w-0 md:pl-0">
              <img
                alt="Minimal and thoughtful"
                src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-07-detail-01.jpg"
                className="w-full rounded-lg bg-gray-100 object-cover md:ml-0 fade-in-up"
                ref={(el) => (imgRefs.current[2] = el)}
              />
            </div>
          </div>

          <div className="flex flex-col-reverse items-center gap-y-8 md:flex-row-reverse md:gap-x-4">
            <div className="flex-1 min-w-0 md:pr-0">
              <h3 className="text-lg font-medium text-gray-900 sm:text-xl">
                Refined details
              </h3>
              <p className="mt-2 text-sm text-gray-500 sm:text-base">
                We design every detail with the best materials and finishes.
                This laptop sleeve features durable canvas with double-stitched
                construction, a felt interior, and a high quality zipper that
                hold up to daily use.
              </p>
            </div>
            <div className="flex-1 min-w-0 md:pr-0">
              <img
                alt="Refined details"
                src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-07-detail-02.jpg"
                className="w-full rounded-lg bg-gray-100 object-cover md:mr-0 fade-in-down"
                ref={(el) => (imgRefs.current[3] = el)}
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .fade-in {
          opacity: 0;
          transform: translateX(
            -100px
          ); /* Tăng giá trị translateX để di chuyển rõ hơn */
          transition: opacity 1s ease-in-out, transform 1s ease-in-out;
        }
        .fade-in-right {
          opacity: 0;
          transform: translateX(100px); /* Di chuyển từ phải sang trái */
          transition: opacity 1s ease-in-out, transform 1s ease-in-out;
        }
        .fade-in-up {
          opacity: 0;
          transform: translateY(50px); /* Di chuyển từ dưới lên */
          transition: opacity 1s ease-in-out, transform 1s ease-in-out;
        }
        .fade-in-down {
          opacity: 0;
          transform: translateY(-100px); /* Di chuyển từ trên xuống */
          transition: opacity 1s ease-in-out, transform 1s ease-in-out;
        }
        .show {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </div>
  );
};

export default Example1;
