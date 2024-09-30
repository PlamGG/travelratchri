let touristAttractions = [
  {
    id: 1,
    title: "อุทยานหินเขางู",
    description: "แหล่งท่องเที่ยวธรรมชาติที่ล้อมรอบด้วยภูเขาหินปูนและทะเลสาบกลางหุบเขา เหมาะแก่การเดินเล่นและถ่ายรูป เป็นสถานที่ท่องเที่ยวที่เต็มไปด้วยบรรยากาศสงบเงียบและวิวทิวทัศน์ที่สวยงาม เหมาะแก่การหลบหนีความวุ่นวายจากชีวิตประจำวัน",
    image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2011/11/IMG_3769.jpg",
    rating: 4.7,
    location: "ราชบุรี, ไทย",
    lat: 13.5443,
    lng: 99.7712,
    "gallery": [
    {
      "image": "https://เที่ยวราชบุรี.com/wp-content/uploads/2011/11/IMG_3784.jpg"
    },
    {
      "image": "https://เที่ยวราชบุรี.com/wp-content/uploads/2011/11/IMG_3769.jpg"
    },
    {
      "image": "https://เที่ยวราชบุรี.com/wp-content/uploads/2011/11/IMG_3801.jpg"
    },
    {
      "image": "https://เที่ยวราชบุรี.com/wp-content/uploads/2011/11/IMG_37911.jpg"
    },
    {
      "image": "https://เที่ยวราชบุรี.com/wp-content/uploads/2011/11/IMG_8581.jpg"
    },
    {
      "image": "https://เที่ยวราชบุรี.com/wp-content/uploads/2011/11/IMG_3827-1.jpg"
    },
  ],
    reviews: [
      {
        reviewer: "สมชาย วงศ์วิสุทธิ์",
        comment: "วิวสวยมาก ถ่ายรูปออกมาดูดีทุกมุม บรรยากาศเงียบสงบเหมาะกับการพักผ่อน แต่ควรเตรียมหมวกและน้ำดื่มมาด้วยเพราะแดดค่อนข้างแรงในช่วงกลางวัน",
        rating: 4.5
      },
      {
        reviewer: "สุนิษา มนตรี",
        comment: "ธรรมชาติที่นี่งดงามมาก เดินทางไม่ไกลจากตัวเมืองและเหมาะกับการเดินเล่นท่ามกลางวิวเขาและทะเลสาบ ประทับใจการเดินป่าที่ไม่ลำบากเกินไป",
        rating: 5
      }
    ],
    category: "Nature",
    openingHours: "06:00 - 18:00 น.",
    entryFee: {
      adult: 100,
      child: 50
    },
    activities: ["เดินป่า", "ถ่ายภาพ", "ปิกนิก"],
    recommendedDuration: "2-3 ชั่วโมง",
    bestTimeToVisit: "พฤศจิกายน - กุมภาพันธ์",
    amenities: ["ที่จอดรถ", "ร้านอาหาร", "ห้องน้ำ"],
    transportation: "รถยนต์ส่วนตัว หรือรถโดยสารประจำทางจากตัวเมืองราชบุรี",
    tags: ["ภูเขา", "ทะเลสาบ", "ธรรมชาติ"]
  },
  {
    id: 2,
    title: "ถ้ำเขาบิน",
    description: "ถ้ำหินปูนที่มีหินงอกหินย้อยสวยงาม เป็นแหล่งท่องเที่ยวที่มีความเย็นสบายใต้ดิน",
    image: "https://www.ratchaburipao.go.th/assets/uploads/travel/travel-199.jpg",
    rating: 4.8,
    location: "ราชบุรี, ไทย",
    lat: 13.6364,
    lng: 99.5317,
    gallery: [
      { image: "https://www.ratchaburipao.go.th/assets/uploads/travel/travel-199.jpg" },
      { image: "https://cbtthailand.dasta.or.th/upload-file-api/Resources/RelateAttraction/Images/RAT700045/1.jpeg" },
      { image: "https://img.wongnai.com/p/1920x0/2019/11/16/c85b74db99604d7db693b14e05db28b0.jpg" }
    ],
    reviews: [
      {
        reviewer: "อนันต์ บุญศรี",
        comment: "เป็นถ้ำที่สวยงามมาก บรรยากาศเย็นสบาย เหมาะกับการเดินเที่ยวชมและผ่อนคลาย",
        rating: 4.7
      }
    ],
    category: "Nature",
    openingHours: "09:00 - 17:00 น.",
    entryFee: {
      adult: 60,
      child: 30
    },
    activities: ["สำรวจถ้ำ", "ถ่ายภาพ"],
    recommendedDuration: "1-2 ชั่วโมง",
    bestTimeToVisit: "ตลอดปี",
    amenities: ["ที่จอดรถ", "ห้องน้ำ"],
    transportation: "รถยนต์ส่วนตัว",
    tags: ["ถ้ำ", "ธรรมชาติ"]
  },
  {
    id: 3,
    title: "ตลาดน้ำดำเนินสะดวก",
    description: "ตลาดน้ำที่มีชื่อเสียงระดับโลก นักท่องเที่ยวสามารถนั่งเรือชมและซื้อของจากพ่อค้าแม่ค้าที่ขายบนเรือ",
    image: "https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbKFfTBhbnJ29nvkMh0CXoaBPslAHkkUd52iMrv8vGxA6mo2vAsX0Y.webp",
    rating: 4.9,
    location: "ราชบุรี, ไทย",
    lat: 13.5192,
    lng: 99.9569,
    gallery: [
      { image: "https://cms.dmpcdn.com/travel/2020/05/28/0b908700-a0b4-11ea-81a6-432b2bbc8436_original.JPG" },
      { image: "https://cms.dmpcdn.com/travel/2020/05/28/3693ba30-a0b4-11ea-81a6-432b2bbc8436_original.JPG" },
      { image: "https://www.khaosod.co.th/wpapp/uploads/2022/11/7-7.jpg" },
      { image: "https://cms.dmpcdn.com/travel/2020/05/28/68336ea0-a0b4-11ea-81a6-432b2bbc8436_original.JPG" },
      { image: "https://www.khaosod.co.th/wpapp/uploads/2022/11/9-6.jpg" },
      { image: "https://cms.dmpcdn.com/travel/2020/05/28/5f695f00-a0b4-11ea-bba7-05529125e8e4_original.JPG" }
    ],
    reviews: [
      {
        reviewer: "ชลธิชา คงเจริญ",
        comment: "ตลาดน้ำสวยงามและเต็มไปด้วยสินค้ามากมาย นักท่องเที่ยวต่างชาติชอบมาก",
        rating: 5
      }
    ],
    category: "Culture",
    openingHours: "06:00 - 12:00 น.",
    entryFee: {
      adult: 0,
      child: 0
    },
    activities: ["นั่งเรือ", "ช็อปปิ้ง", "ถ่ายภาพ"],
    recommendedDuration: "2-3 ชั่วโมง",
    bestTimeToVisit: "เช้าตรู่",
    amenities: ["ที่จอดรถ", "ร้านอาหาร", "ห้องน้ำ"],
    transportation: "เรือ หรือรถยนต์",
    tags: ["ตลาดน้ำ", "วัฒนธรรม"]
  },
  {
    id: 4,
    title: "The Scenery Vintage Farm",
    description: "ฟาร์มแกะที่ตกแต่งในสไตล์ยุโรป เหมาะสำหรับครอบครัวและผู้ที่ต้องการพักผ่อนท่ามกลางธรรมชาติ",
    image: "https://www.nairobroo.com/wp-content/uploads/2018/08/The-Scenery-Vintage-Farm-2.jpg",
    rating: 4.6,
    location: "สวนผึ้ง, ราชบุรี, ไทย",
    lat: 13.6020,
    lng: 99.2667,
    gallery: [
      { image: "https://www.nairobroo.com/wp-content/uploads/2018/08/PPEL1438-1024x683.jpg" },
      { image: "https://www.nairobroo.com/wp-content/uploads/2018/08/2-300x300.jpg" },
      { image: "https://static.wixstatic.com/media/4ad56c_5c601d5c00ef420fa7a0f2dfdb216a81~mv2.jpg" },
      { image: "https://static.wixstatic.com/media/4ad56c_b4c9a6c9c6904c51b2bb3f7ac9dd98b0~mv2.jpg/v1/fill/w_1049,h_1650,al_c,q_90/4ad56c_b4c9a6c9c6904c51b2bb3f7ac9dd98b0~mv2.webp" },
      { image: "https://static.wixstatic.com/media/4ad56c_df395b587d0648d3bd0826d79de483f1~mv2.jpg/v1/fill/w_740,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4ad56c_df395b587d0648d3bd0826d79de483f1~mv2.jpghttps://static.wixstatic.com/media/4ad56c_132fafeaf23f4abaaf1d72f10f6c9376~mv2.jpg/v1/fill/w_1100,h_1650,al_c,q_90/4ad56c_132fafeaf23f4abaaf1d72f10f6c9376~mv2.webp" },
      { image: "https://static.wixstatic.com/media/4ad56c_9231532159aa4dd8b9408aea49dc5af4~mv2.jpg/v1/fill/w_740,h_477,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/4ad56c_9231532159aa4dd8b9408aea49dc5af4~mv2.jpg" }
    ],
    reviews: [
      {
        reviewer: "กัญญารัตน์ รัตนโชค",
        comment: "ฟาร์มแกะน่ารัก บรรยากาศดีมาก เหมาะสำหรับพาเด็ก ๆ มาเที่ยว",
        rating: 4.8
      }
    ],
    category: "Nature",
    openingHours: "09:00 - 18:00 น.",
    entryFee: {
      adult: 50,
      child: 30
    },
    activities: ["ให้อาหารแกะ", "ถ่ายภาพ", "ปิกนิก"],
    recommendedDuration: "1-2 ชั่วโมง",
    bestTimeToVisit: "พฤศจิกายน - กุมภาพันธ์",
    amenities: ["ที่จอดรถ", "ร้านอาหาร", "ห้องน้ำ"],
    transportation: "รถยนต์ส่วนตัว",
    tags: ["ฟาร์ม", "แกะ", "ธรรมชาติ"]
  },
  {
    id: 5,
    title: "Art Gallery เถ้าฮงไถ่",
    description: "โรงงานเซรามิคที่มีชื่อเสียงของราชบุรี พร้อมกับงานศิลปะที่เป็นเอกลักษณ์ของท้องถิ่น",
    image: "https://img.wongnai.com/p/400x0/2019/11/17/e83c261e873f477c93b91870724b0be6.jpg",
    rating: 4.8,
    location: "ราชบุรี, ไทย",
    lat: 13.5275,
    lng: 99.8115,
    gallery: [
      { image: "https://www.museumthailand.com/upload/slide/1499334046_2481.jpg" },
      { image: "https://www.museumthailand.com/upload/slide/1499334046_4007.jpg" },
      { image: "https://www.museumthailand.com/upload/slide/1499334046_2280.jpg" },
      { image: "https://www.museumthailand.com/upload/slide/1499334046_4179.jpg" },
      { image: "https://www.museumthailand.com/upload/slide/1499334046_2797.jpg" }
    ],
    reviews: [
      {
        reviewer: "ธเนศ ชาญวิทย์",
        comment: "งานศิลปะสวยงามและมีเอกลักษณ์มาก บรรยากาศเหมาะสำหรับการเดินชมและถ่ายรูป",
        rating: 4.9
      }
    ],
    category: "Art",
    openingHours: "08:00 - 17:00 น.",
    entryFee: {
      adult: 0,
      child: 0
    },
    activities: ["ชมงานศิลปะ", "ถ่ายภาพ"],
    recommendedDuration: "1-2 ชั่วโมง",
    bestTimeToVisit: "ตลอดปี",
    amenities: ["ที่จอดรถ", "ห้องน้ำ"],
    transportation: "รถยนต์ส่วนตัว หรือรถโดยสาร",
    tags: ["ศิลปะ", "เซรามิค"]
  },
  {
    id: 6,
    title: "ณ สัทธา อุทยานไทย",
    description: "อุทยานที่จัดแสดงศิลปวัฒนธรรมไทยและธรรมชาติอย่างลงตัว มีมุมถ่ายภาพสวยๆ มากมาย",
    image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2014/05/1000-DSC00571.jpg", 
    rating: 4.6,
    location: "ราชบุรี, ไทย",
    lat: 13.6550,
    lng: 99.7025,
    gallery: [
        { image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2014/05/1000-1-IMG_3807.jpg" },
        { image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2014/05/1000-IMG_3926.jpg" },
        { image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2015/01/IMG_3920.jpg" },
        { image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2015/01/IMG_3856.jpg" },
        { image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2015/01/IMG_3945.jpg" },
        { image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2014/05/1000-of-DSC01188.jpg" },
        { image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2014/05/1000IMG_3724.jpg" }
    ],
    reviews: [
        {
            reviewer: "สมศรี สมใจ",
            comment: "สถานที่สวยงาม มีการจัดการดี บรรยากาศดีมาก",
            rating: 4.5
        }
    ],
    category: "Culture",
    openingHours: "08:00 - 18:00 น.",
    entryFee: {
        adult: 80,
        child: 40
    },
    activities: ["ชมศิลปวัฒนธรรม", "ถ่ายภาพ", "เรียนรู้"],
    recommendedDuration: "2-3 ชั่วโมง",
    bestTimeToVisit: "ตลอดปี",
    amenities: ["ที่จอดรถ", "ห้องน้ำ", "ร้านค้า"],
    transportation: "รถยนต์ส่วนตัว, รถบัส",
    tags: ["อุทยาน", "วัฒนธรรม"]
},
{
  id: 7,
  title: "ร้านกาแฟคนรักษ์สวน",
  description: "ร้านกาแฟบรรยากาศดี ตั้งอยู่ในสวนสวย เหมาะแก่การพักผ่อนและสนทนากับเพื่อนๆ",
  image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2013/03/IMG_8962.jpg", 
  rating: 4.5,
  location: "ราชบุรี, ไทย",
  lat: 13.5250,
  lng: 99.8120,
  gallery: [
      { image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2013/03/IMG_1944.jpg" }, 
      { image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2013/03/IMG_1953.jpg" },
      { image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2013/03/IMG_1962.jpg" },
      { image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2013/03/IMG_0575.jpg" },
      { image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2013/03/IMG_0572.jpg" },
      { image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2013/03/IMG_8966.jpg" }
  ],
  reviews: [
      {
          reviewer: "นางสาวอรทัย",
          comment: "กาแฟอร่อยมาก และบรรยากาศดีจริงๆ",
          rating: 4.8
      }
  ],
  category: "Cafe",
  openingHours: "08:00 - 20:00 น.",
  entryFee: {
      adult: 0,
      child: 0
  },
  activities: ["นั่งพักผ่อน", "ถ่ายภาพ", "ดื่มกาแฟ"],
  recommendedDuration: "1-2 ชั่วโมง",
  bestTimeToVisit: "เช้าและบ่าย",
  amenities: ["ที่จอดรถ", "ห้องน้ำ", "Wi-Fi"],
  transportation: "รถยนต์ส่วนตัว",
  tags: ["กาแฟ", "บรรยากาศดี"]
},
{
  id: 8,
  title: "สวนอาหารขวัญดำเนิน",
  description: "ร้านอาหารที่มีบรรยากาศเย็นสบาย มีเมนูอาหารไทยหลากหลายให้เลือกสรร",
  image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2018/10/IMG_3199.jpg",
  rating: 4.7,
  location: "ราชบุรี, ไทย",
  lat: 13.5050,
  lng: 99.7430,
  gallery: [
      { image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2018/10/IMG_6910.jpg" }, 
      { image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2018/10/IMG_6827.jpg" },
      { image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2018/10/IMG_6851.jpg" },
      { image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2018/10/IMG_3153.jpg" },
      { image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2018/10/IMG_3140.jpg" },
      { image: "https://เที่ยวราชบุรี.com/wp-content/uploads/2018/10/IMG_6833.jpg" }
  ],
  reviews: [
      {
          reviewer: "นายสมชาติ",
          comment: "อาหารอร่อย บริการดี แนะนำให้มาลอง",
          rating: 4.6
      }
  ],
  category: "Restaurant",
  openingHours: "10:00 - 22:00 น.",
  entryFee: {
      adult: 0,
      child: 0
  },
  activities: ["ทานอาหาร", "จัดงานเลี้ยง", "ถ่ายภาพ"],
  recommendedDuration: "1-2 ชั่วโมง",
  bestTimeToVisit: "กลางวันและเย็น",
  amenities: ["ที่จอดรถ", "ห้องน้ำ", "Wi-Fi"],
  transportation: "รถยนต์ส่วนตัว",
  tags: ["อาหารไทย", "บรรยากาศดี"]
}

  
];

export const getTouristAttractions = () => {
  return touristAttractions;
};

export const getTouristAttractionById = (id) => {
  return touristAttractions.find(attraction => attraction.id === id);
};

export const addTouristAttraction = (attraction) => {
  const newAttraction = {
    id: touristAttractions.length + 1,
    ...attraction,
    rating: 0,
    lat: 0, 
    lng: 0,
    reviews: []
  };
  touristAttractions.unshift(newAttraction);
  return newAttraction;
};

export const updateTouristAttraction = (id, updatedAttraction) => {
  touristAttractions = touristAttractions.map(attraction =>
    attraction.id === id ? { ...attraction, ...updatedAttraction } : attraction
  );
};

export const deleteTouristAttraction = (id) => {
  touristAttractions = touristAttractions.filter(attraction => attraction.id !== id);
};

export const addReviewToAttraction = (attractionId, review) => {
  const attraction = getTouristAttractionById(attractionId);
  if (attraction) {
    attraction.reviews.push(review);
    updateTouristAttraction(attractionId, attraction);
  }
};
