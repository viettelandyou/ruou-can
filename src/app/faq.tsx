"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import "../../public/style/styles.css";

export function Faq() {
  const text = "Hiện Đại";

  return (
    <section className="py-8 px-8 lg:py-20 relative">
      {/* Ảnh nền */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('https://i.imgur.com/50Z9OsI.png')",
        }}
      ></div>

      {/* Ảnh đè lên với hiệu ứng mờ */}
      <div
        className="absolute inset-0 z-10 bg-no-repeat bg-cover opacity-40 filter blur-md"
        style={{
          backgroundImage: "url('https://i.imgur.com/nHKp7a3.jpeg')",
        }}
      ></div>

      {/* Nội dung */}
      <div className="container mx-auto relative z-20">
        <div className="text-center">
          <Typography variant="h3" color="blue-gray" className="mb-4">
            <span className="text-red-500 font-magistral text-5xl">
              Tinh Hoa <br />
            </span>
            <span
              className="text-xs transform translate-y-[-50px]"
              style={{ marginTop: "-10px" }}
            >
              <span className="font-magistral">chạm tới</span>
            </span>
            <span id="textHienDai" className="font-magistral">
              {text.split("").map((char, index) => (
                <span
                  id="textHienDai2"
                  key={`${char}-${index}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 lg:w-3/5 !text-gray-500 font-magistral"
          >
            Dù đã trải qua bao thăng trầm của lịch sử, rượu cần vẫn giữ được vị
            trí đặc biệt trong trái tim người Việt Nam. Hôm nay, những chum rượu
            cần không chỉ hiện diện trong các bản làng Tây Nguyên, mà còn được
            nâng niu tại các sự kiện giao lưu văn hóa, như một lời chào nồng hậu
            gửi đến bạn bè quốc tế. <br />
            <span className="text-red-500">Tại Viettel&You 2025</span>, hoạt
            động thưởng thức rượu cần không chỉ đơn thuần là tái hiện một nét
            đẹp văn hóa, mà còn là lời khẳng định về sứ mệnh cùng nhau bảo tồn
            và lan tỏa giá trị di sản. Qua đó, Viettel cùng các nhà báo chia sẻ
            trách nhiệm gìn giữ và phát huy những giá trị truyền thống, để những
            di sản quý báu này tiếp tục là niềm tự hào và nguồn cảm hứng cho các
            thế hệ tương lai.
          </Typography>
        </div>
      </div>
    </section>
  );
}

export default Faq;
