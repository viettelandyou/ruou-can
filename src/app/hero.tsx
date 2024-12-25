"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";

const Hero: React.FC = () => {
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
    <div>
    <div className="static min-h-screen bg-cover bg-[url('https://i.imgur.com/nHKp7a3.jpeg')] bg-no-repeat bg-center">
      <div className="static inset-0 h-full w-full" />
      <div className="grid min-h-screen">
        <div className="container static z-10 my-auto mt-10 grid place-items-center text-center">
          <div className="flex justify-center items-center space-x-4 mb-2">
            <img
              src="https://i.imgur.com/Q008Fog.png"
              alt="Image 2"
              className="w-full h-80 sm:h-64 md:h-80 lg:h-96 xl:h-autol object-contain"
            />
          </div>
          <div>
          <Typography
            variant="lead"
            color="black"
            className="mb-12 w-full px-8 text-left static"
          >
            <span
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-red-500 font-magistral"
            >
              Viettel&You 2025
            </span>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-magistral leading-[1.0]">
              đưa các nhà báo tham gia vào hành trình khám phá những giá trị
              tinh hoa của di sản văn hóa Việt Nam với sự kết hợp của công nghệ.{" "}
              <br />
              Từng câu chuyện, nét nghệ thuật truyền thống và làng nghề lâu đời
              được tái hiện và lan tỏa qua lăng kính của công nghệ hiện đại,
              giúp kết nối quá khứ với hiện tại một cách sống động và sáng tạo.{" "}
              <br />
            </span>
          
            <span className="absolute text-right right-0 p-4">
              <span className="text-l sm:text-sm md:text-base lg:text-lg xl:text-xl font-magistral ">
                <b>Trụ sở Viettel</b> <br />
              </span>
              <span className="text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl font-magistral ">
                <b>06 | 01 | 2024</b>
              </span>
            </span>
         
          </Typography>
          </div>
        </div>
      </div>

{/* --------------------------------------------------------------------------------------------------------------------------------------------------------- */}

      <div className="mx-auto max-w-5xl">
          <div className="flex flex-col-reverse items-center gap-y-8 md:flex-row md:gap-x-4">
            <div className="flex-1 min-w-0 md:pl-0">
              <h3 className="text-lg font-medium text-center text-gray-900 sm:text-xl font-magistral">
                Rượu cần
              </h3>
              <h4 className="text-medium font-medium text-gray-900 font-magistral border-white-900 text-center font-magistral">
                DI SẢN NÚI RỪNG
              </h4>
              <p className="mt-2 text-sm text-gray-500 sm:text-base font-magistral">
              Sự kiện Viettel&You 2025 với chủ đề &quotThe Heritage Soul - Hồn di sản&quot không chỉ là hành trình lắng đọng để khám phá di sản văn hóa Việt Nam mà còn là dịp để Viettel và các nhà báo cùng cảm nhận sâu sắc tinh hoa truyền thống thông qua những trải nghiệm độc đáo. Một trong những điểm nhấn đặc biệt tại sự kiện là không gian thưởng thức rượu cần – một di sản mang đậm bản sắc của các dân tộc thiểu số ở Tây Nguyên
              và miền núi phía Bắc.
              </p>
            </div>
            <div className="flex-1 min-w-0 md:pl-0">
              <img
                alt="Rượu cần"
                src="https://i.imgur.com/atqbBwj.png"
                className="w-full rounded-lg object-cover md:ml-0 fade-in"
                ref={(el) => (imgRefs.current[0] = el)}
              />
            </div>
          </div>

          <div className="flex flex-col-reverse items-center gap-y-8 md:flex-row-reverse md:gap-x-4">
            <div className="flex-1 min-w-0 md:pr-0 text-right">
              <h3 className="text-lg font-medium text-gray-900 sm:text-xl font-magistral">
                Giao Thoa hồn nhiên và Ý Nhân
              </h3>
              <p className="mt-2 text-sm text-gray-500 sm:text-base font-magistral">
              Chuyện kể rằng thuở xưa, các vị thần rừng đã ban tặng cho người dân công thức để làm ra rượu cần như một biểu tượng của lòng thành kính và lời cảm tạ đất mẹ. Những chum rượu cần đầu tiên được làm từ gạo nương, sắn rẫy – sản vật quý giá từ đôi tay lao động cần cù – hòa quyện với men lá thơm dịu, đã trở thành thức uống thiêng liêng dâng lên tổ tiên mỗi dịp lễ hội.
              </p>
            </div>
            <div className="flex-1 min-w-0 md:pr-0 text-right">
              <img
                alt="Refined details"
                src="https://i.imgur.com/tHHiifs.png"
                className="w-full rounded-lg object-cover md:mr-0 fade-in"
                ref={(el) => (imgRefs.current[1] = el)}
              />
            </div>
          </div>

          <div className="flex flex-col-reverse items-center gap-y-8 md:flex-row md:gap-x-4">
            <div className="flex-1 min-w-0 md:pl-0">
              <h3 className="text-lg font-medium sm:text-xl font-magistral text-center">
                Hồn cốt của sự khéo léo
              </h3>
              <p className="mt-2 text-sm text-gray-500 sm:text-base font-magistral">
              Để làm nên những chum rượu cần thơm nồng, người ta phải dành rất nhiều tâm huyết và kỹ năng. Nguyên liệu chính là gạo, ngô hoặc sắn – những sản vật gần gũi của núi rừng – được trộn cùng men lá làm từ các loại thảo dược quý hiếm. Hỗn hợp này sau đó được ủ trong những chiếc chum đất sét mộc mạc, để nơi thoáng mát trong nhiều ngày, đôi khi kéo dài cả tháng.
              Điểm đặc biệt của rượu cần là quá trình lên men tự nhiên, không qua nấu. Khi thưởng thức, Người ta không rót rượu vào từng bát, từng ly, mà cùng nhau quây quần bên chum rượu, uống qua những chiếc cần tre dài như uống trọn tình nghĩa, uống trọn cả câu chuyện của núi rừng.
              </p>
            </div>
            <div className="flex-1 min-w-0 md:pl-0">
              <img
                alt="Minimal and thoughtful"
                src="https://i.imgur.com/qZS77OH.png"
                className="w-full rounded-lg  object-cover md:ml-0 fade-in-up"
                ref={(el) => (imgRefs.current[2] = el)}
              />
            </div>
          </div>

          <div className="flex flex-col-reverse items-center gap-y-8 md:flex-row-reverse md:gap-x-4">
            <div className="flex-1 min-w-0 md:pr-0">
              <h3 className="text-lg font-medium sm:text-xl font-magistral text-center">
                Rượu cần và thịt trâu
              </h3>
              <p className="mt-2 text-sm text-gray-500 sm:text-base font-magistral">
               Để làm nên những chum rượu cần thơm nồng, người ta phải dành rất nhiều tâm huyết và kỹ năng. Nguyên liệu chính là gạo, ngô hoặc sắn – những sản vật gần gũi của núi rừng – được trộn cùng men lá làm từ các loại thảo dược quý hiếm. Hỗn hợp này sau đó được ủ trong những chiếc chum đất sét mộc mạc, để nơi thoáng mát trong nhiều ngày, đôi khi kéo dài cả tháng.
               Điểm đặc biệt của rượu cần là quá trình lên men tự nhiên, không qua nấu. Khi thưởng thức, Người ta không rót rượu vào từng bát, từng ly, mà cùng nhau quây quần bên chum rượu, uống qua những chiếc cần tre dài như uống trọn tình nghĩa, uống trọn cả câu chuyện của núi rừng.
              </p>
            </div>
            <div className="flex-1 min-w-0 md:pr-0">
              <img
                alt="Refined details"
                src="https://i.imgur.com/7F57rYH.png"
                className="w-full rounded-lg object-cover md:mr-0 fade-in-down"
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
}

export default Hero;
