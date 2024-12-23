"use client";

import { Tab, Tabs, TabsHeader } from "@material-tailwind/react";

import EventContentCard from "@/components/event-content-card";

const EVENT_CONTENT = [
  {
    title: "Xuất phát từ thời nhà Trần",
    des: "khi các cung nữ lui về vùng đất này và truyền dạy kỹ thuật thêu cho người dân địa phương, nghề thêu tại Văn Lâm đã dần phát triển và trở thành một di sản văn hóa quý báu, được gìn giữ qua nhiều thế hệ. Những sản phẩm của làng nghề mang đậm dấu ấn văn hóa dân tộc, nổi bật với sự tinh xảo, tỉ mỉ và sáng tạo trong từng đường kim mũi chỉ",
    name: "",
    position: "",
    panel: "",
    img: "/image/avatar1.jpg",
  },
  {
    title: "",
    des: "Điều làm nên sự đặc biệt của làng thêu Văn Lâm không chỉ là tay nghề khéo léo mà còn ở sự gắn bó và tâm huyết của người dân nơi đây. Với họ, mỗi đường chỉ không chỉ là một nét nghệ thuật mà còn là cách để kể câu chuyện về quê hương, đất nước và con người Việt Nam. Những bức tranh thêu từ Văn Lâm tái hiện sinh động hình ảnh làng quê thanh bình, phong cảnh thiên nhiên hùng vĩ hay các biểu tượng văn hóa truyền thống, gợi lên niềm tự hào và cảm xúc sâu lắng cho người chiêm ngưỡng.",
    name: "",
    position: "",
    panel: "",
    img: "/image/avatar2.jpg",
  },
  {
    title: "",
    des: "Ngày nay, làng nghề Văn Lâm không chỉ phục vụ thị trường trong nước mà còn xuất khẩu sang nhiều quốc gia trên thế giới, đưa nghệ thuật thêu truyền thống Việt Nam đến với bạn bè quốc tế. Đặc biệt, nằm gần các điểm du lịch nổi tiếng như Tam Cốc – Bích Động và Tràng An, làng nghề Văn Lâm trở thành điểm đến hấp dẫn, nơi du khách có thể khám phá quy trình thêu tay tỉ mỉ và thậm chí tham gia trải nghiệm cùng các nghệ nhân lành nghề.",
    name: "",
    position: "",
    panel: "",
    img: "/image/avatar3.jpg",
  },
];

export function EventContent() {
  return (
    <section className="min-h-screen bg-black text-white py-8 px-8 lg:py-20">
      <Tabs value="Day1" className="mb-8">
        <div className="w-full flex mb-8 flex-col items-center">
          <TabsHeader
            className="h-12 w-72 md:w-96"
  
          >
            <Tab
            
              value="Day1"
              className="font-medium"
            >
              Day 1
            </Tab>
            <Tab
             
              value="Day2"
              className="font-medium"
            >
              Day 2
            </Tab>
            <Tab
              
              value="Day3"
              className="font-medium"
            >
              Day 3
            </Tab>
          </TabsHeader>
        </div>
      </Tabs>
      <div className="mx-auto container">
        {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent;
