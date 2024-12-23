"use client";

import React from "react";
import { Typography, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import "../../public/style/styles.css"

const FAQS = [
  {
    title: "1. How do I register for the AI Conference 2023?",
    desc: "You can register for the AI Conference 2023 by visiting our registration page. Follow the simple steps to complete your registration and secure your spot at the conference.",
  },
  {
    title: "2. What are the registration fees, and what is included?",
    desc: "It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter. Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too. We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.",
  },
  {
    title: "3. Can I get a refund if I need to cancel my registration?",
    desc: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it? If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
  },
  {
    title: "4. Will there be on-site registration available?",
    desc: "I always felt like I could do anything. That's the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can't do anything, you won't do anything. I was taught I could do everything. If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
  },
  {
    title: "5. What is the dress code for the conference?",
    desc: "There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill. I'm not really specifically talented at anything except for the ability to learn. That's what I do. That's what I'm here for. Don't be afraid to be wrong because you can't learn anything from a compliment. I always felt like I could do anything. That's the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can't do anything, you won't do anything. I was taught I could do everything.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  const text = "Hiện Đại";

  return (
    <section className="py-8 px-8 lg:py-20 bg-[url('https://i.imgur.com/50Z9OsI.png')]">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h3" color="blue-gray" className="mb-4">
            <span className="text-red-500">Tinh Hoa <br /></span>
            <span className="text-xs transform translate-y-[-50px]" style={{ marginTop: "-10px" }}>chạm tới </span>
            <span id="textHienDai">
            {text.split('').map((char, index) => (
              <span id = "textHienDai"
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
            className="mx-auto mb-24 lg:w-3/5 !text-gray-500"
          >
            Dù đã trải qua bao thăng trầm của lịch sử, rượu cần vẫn giữ được vị trí đặc biệt trong trái tim người Việt Nam. Hôm nay, những chum rượu cần không chỉ hiện diện trong các bản làng Tây Nguyên, mà còn được nâng niu tại các sự kiện giao lưu văn hóa, như một lời chào nồng hậu gửi đến bạn bè quốc tế. <br />

            <span className="text-red-500">Tại Viettel&You 2025</span>, hoạt động thưởng thức rượu cần không chỉ đơn thuần là tái hiện một nét đẹp văn hóa, mà còn là lời khẳng định về sứ mệnh cùng nhau bảo tồn và lan tỏa giá trị di sản. Qua đó, Viettel cùng các nhà báo chia sẻ trách nhiệm gìn giữ và phát huy những giá trị truyền thống, để những di sản quý báu này tiếp tục là niềm tự hào và nguồn cảm hứng cho các thế hệ tương lai.
          </Typography>
        </div>

        {/* <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <Accordion 
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader  className="text-left text-gray-900">
                {title}
              </AccordionHeader>
              <AccordionBody>
                <Typography 
                  color="blue-gray"
                  className="font-normal text-gray-500"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div> */}
      </div>
    </section>
  );
}


export default Faq;
