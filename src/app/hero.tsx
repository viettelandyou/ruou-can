"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="relative min-h-screen bg-cover bg-[url('https://i.imgur.com/nHKp7a3.jpeg')] bg-no-repeat bg-center">
      <div className="absolute inset-0 h-full w-full" />
      <div className="grid min-h-screen">
        <div className="container relative z-10 my-auto mt-10 grid place-items-center text-center">
          <div className="flex justify-center items-center space-x-4 mb-2">
            <img
              src="https://i.imgur.com/z0Zjf8Q.png"
              alt="Image 2"
              className="w-full h-80 sm:h-64 md:h-80 lg:h-96 xl:h-autol object-contain"
            />
          </div>

          <Typography
            variant="lead"
            color="black"
            className="mb-12 w-full px-8 text-left relative"
          >
            <span
              className="mb-4 
      text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
      font-semibold bg-gradient-to-r bg-clip-text text-transparent 
      from-black via-gray-500 to-white animate-text font-magistral"
            >
              HỒN DI SẢN <br />
            </span>
            <span
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
      text-red-500 font-magistral"
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
          </Typography>

          <div className="relative right-0 bottom-0 text-right p-4">
            <div className="text-right">
              <span className="text-l sm:text-sm md:text-base lg:text-lg xl:text-xl font-magistral mb-1">
                <b>Trụ sở Viettel</b> <br />
              </span>
              <span className="text-xl sm:text-sm md:text-base lg:text-lg xl:text-xl font-magistral mt-1">
                <b>06 | 01 | 2024</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
