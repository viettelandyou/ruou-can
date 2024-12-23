"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Cutting-Edge Insights!",
    description:
      "Gain deep insights into the latest AI trends, developments, and applications that are reshaping industries worldwide. ",
    subTitle: "Presentation",
  },
  {
    title: "Practical Knowledge!",
    description:
      "Attend workshops and hands-on sessions to acquire practical skills that you can apply immediately.",
    subTitle: "Workshops",
  },
];

export function AboutEvent() {
  return (
    <section className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography
        variant="h6"
        className="text-center mb-2"
        color="orange"
        
      >
        Khu vực trải nghiệm Tranh thêu Văn Lâm
      </Typography>
      <Typography
        variant="h3"
        className="text-center"
        color="blue-gray"
        
      >
        Lịch sử hình thành?
      </Typography>
      <Typography
        
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        Làng nghề thêu tranh Văn Lâm nằm tại xã Ninh Hải, huyện Hoa Lư, tỉnh Ninh Bình – một vùng đất giàu truyền thống lịch sử và văn hóa, nằm bên cạnh quần thể danh thắng Tràng An, di sản thế giới được UNESCO công nhận. Với gần 1000 năm lịch sử, làng nghề Văn Lâm không chỉ là niềm tự hào của người dân Ninh Bình mà còn là biểu tượng của sự khéo léo và tinh hoa nghệ thuật thêu truyền thống Việt Nam.
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Networking!"
            subTitle="Community"
            description="Connect with industry leaders, AI experts, and fellow enthusiasts to build valuable professional relationships."
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
