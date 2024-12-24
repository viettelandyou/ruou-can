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
              className="w-full object-contain"
            />
          </div>

          <Typography
            variant="lead"
            color="black"
            className="mb-12 w-full md:max-w-full lg:max-w-2xl text-[10px] text-right px-8"
          >
            <span className="mb-4 text-2xl font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-black via-gray-500 to-white
            animate-text
            ">
              HỒN DI SẢN <br />
            </span>
            <span className="text-red-500" style={{ color: 'red' }}>Viettel&You 2025</span> đưa các nhà báo tham gia vào hành trình khám phá những giá trị tinh hoa của di sản văn hóa Việt Nam với sự kết hợp của công nghệ.
            Từng câu chuyện, nét nghệ thuật truyền thống và làng nghề lâu đời được tái hiện và lan tỏa qua lăng kính của công nghệ hiện đại, giúp kết nối quá khứ với hiện tại một cách sống động và sáng tạo. <br/>
            <span className="text-2l"><b>Trụ sở Viettel</b> <br /> </span>
            <span className="text-2l"><b>06|01|2024</b></span>
          </Typography>
          <div
            className="absolute bottom-3 right-4 text-right">
            {/* <p className="text-[10px]">Trụ sở Viettel</p>
            <p className="text-[10px]">06|01|2025</p> */}
          </div>
        </div>

      </div>
      <div className="flex items-center gap-4">

      </div>
    </div>
    // bg-[url('https://i.imgur.com/btYf1wh.png')]

    // <div className="relative w-full h-[calc(100vh/1.5)] bg-[url('https://i.imgur.com/nHKp7a3.jpeg')] bg-cover bg-no-repeat bg-center">
    //   <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    //   <div className="grid w-full h-full px-8">
    //     <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
    //       <div className="flex justify-center items-center space-x-4 mb-2">
    //         <img
    //           src="https://i.imgur.com/IPLaPfA.png"
    //           alt="Image 1"
    //           className="w-14 h-12 object-contain"
    //         />
    //         <img
    //           src="https://i.imgur.com/2jAOwqV.png"
    //           alt="Image 2"
    //           className="w-10 h-25 object-contain"
    //         />
    //       </div>
    //       <Typography
    //         variant="lead"
    //         color="white"
    //         className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl text-[10px] text-left"
    //       >
    //         <span className="text-red-500" style={{ color: 'red' }}>Viettel&You 2025</span> đưa các nhà báo tham gia vào hành trình khám phá những giá trị tinh hoa của di sản văn hóa Việt Nam với sự kết hợp của công nghệ.<br />
    //         Từng câu chuyện, nét nghệ thuật truyền thống và làng nghề lâu đời được tái hiện và lan tỏa qua lăng kính của công nghệ hiện đại, giúp kết nối quá khứ với hiện tại một cách sống động và sáng tạo.
    //       </Typography>
    //     </div>
    //   </div>
    //   <div className="flex items-center gap-4">
    //     <div className="absolute bottom-4 right-4 text-right space-y-2">
    //       <Typography
    //         variant="lead"
    //         color="white"
    //         className="mt-1"
    //       >
    //         Trụ sở Viettel
    //       </Typography>
    //       <Typography
    //         variant="lead"
    //         color="white"
    //         className="mt-1"
    //       >
    //         06 | 01 | 2025
    //       </Typography>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Hero;
