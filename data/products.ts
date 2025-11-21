export const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 39900,
    description: 'มาพร้อมชิป A17 Pro และกล้องที่ทรงพลังที่สุด พร้อมความสามารถในการถ่ายภาพระดับโปรที่ไม่เคยมีมาก่อน',
    image: 'https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone_15_pro.png',
    category: 'มือถือ',
    stock: 15,
    features: ['ชิป A17 Pro', 'กล้อง 48MP', 'ชาร์จไร้สายเร็ว', 'จอ ProMotion 120Hz']
  },
  {
    id: 2,
    name: 'MacBook Air M3',
    price: 42900,
    description: 'น้ำหนักเบา ประสิทธิภาพสูง ทำงานได้ทั้งวัน ไม่ต้องกังวลเรื่องแบตเตอรี่',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    category: 'คอมพิวเตอร์',
    stock: 8,
    features: ['ชิป M3', 'RAM 8GB', 'SSD 256GB', 'แบตเตอรี่ 18 ชม.']
  },
  {
    id: 3,
    name: 'AirPods Pro 2',
    price: 8990,
    description: 'การตัดเสียงรบกวนระดับพรีเมี่ยม เสียงคมชัด ใส่สบาย',
    image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400',
    category: 'หูฟัง',
    stock: 25,
    features: ['ANC', 'Transparency Mode', 'ชาร์จไร้สาย', 'กันน้ำ IPX4']
  },
  {
    id: 4,
    name: 'iPad Pro 12.9"',
    price: 45900,
    description: 'จอภาพ Liquid Retina XDR ชิป M2 แรงสุด เหมาะสำหรับงานสร้างสรรค์',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400',
    category: 'แท็บเล็ต',
    stock: 12,
    features: ['จอ 12.9"', 'ชิป M2', 'รองรับ Apple Pencil', '5G']
  },
  {
    id: 5,
    name: 'Apple Watch Series 9',
    price: 14900,
    description: 'ติดตามสุขภาพ ฟิตเนส และการแจ้งเตือนต่างๆ ได้อย่างครบครัน',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400',
    category: 'สมาร์ทวอทช์',
    stock: 20,
    features: ['GPS', 'วัดออกซิเจน', 'ECG', 'กันน้ำ 50m']
  },
  {
    id: 6,
    name: 'Magic Keyboard',
    price: 3590,
    description: 'คีย์บอร์ดไร้สาย ดีไซน์สวยงาม พิมพ์สบาย เชื่อมต่อได้หลายอุปกรณ์',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
    category: 'อุปกรณ์เสริม',
    stock: 30,
    features: ['Bluetooth', 'แบตเตอรี่ 1 เดือน', 'ชาร์จ USB-C', 'ปุ่มกดนุ่ม']
  },
  // สินค้าใหม่ 4 ชิ้น
  {
    id: 7,
    name: 'HomePod Mini',
    price: 3990,
    description: 'ลำโพงอัจฉริยะขนาดเล็ก ให้เสียงคุณภาพสูง รองรับ Siri และการเชื่อมต่อกับอุปกรณ์ Apple',
    image: 'https://www.apple.com/newsroom/images/2024/07/apple-introduces-homepod-mini-in-midnight/article/Apple-HomePod-mini-midnight_inline.jpg.large.jpg',
    category: 'อุปกรณ์เสริม',
    stock: 18,
    features: ['เสียงรอบทิศทาง', 'Siri', 'เชื่อมต่อ HomeKit', 'ดีไซน์กะทัดรัด']
  },
  {
    id: 8,
    name: 'iMac 24"',
    price: 49900,
    description: 'คอมพิวเตอร์ตั้งโต๊ะสีสันสดใส พร้อมชิป M1 ทำงานได้รวดเร็วและประหยัดพลังงาน',
    image: 'https://www.istudiobyspvi.com/cdn/shop/files/iMac_M3_4-ports_Blue_PDP_Image_Position_1__GBEN.jpg?v=1718118485&width=823',
    category: 'คอมพิวเตอร์',
    stock: 7,
    features: ['ชิป M1', 'จอ 24"', 'RAM 8GB', 'SSD 256GB']
  },
  {
    id: 9,
    name: 'iPad Mini 6',
    price: 18900,
    description: 'แท็บเล็ตขนาดกะทัดรัด เหมาะสำหรับพกพา พร้อมชิป A15 และรองรับ Apple Pencil',
    image: 'https://wp-assets-space.sgp1.cdn.digitaloceanspaces.com/ablemenbrand/2024/10/ipad-mini-7.webp',
    category: 'แท็บเล็ต',
    stock: 14,
    features: ['ชิป A15', 'จอ 8.3"', 'รองรับ Apple Pencil', 'น้ำหนักเบา']
  },
  {
    id: 10,
    name: 'AirTag',
    price: 990,
    description: 'อุปกรณ์ติดตามขนาดเล็ก ช่วยให้คุณตามหาของสำคัญได้ง่ายดาย ผ่านแอป Find My',
    image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airtag-double-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=aUZiM0Z1TmxieDdSR0Z6RU5uemRuOHVJWlMva2FYSFVWb3Q4TXJyVGJVY2VnSEp2SE4xaUJuS0VhaWlSWW9obFBJSEI4eEprQ3k5NVh3Y3BXYkFrUFNsZGR5cUwzMzFEcGtUWTFWWHlHNDhsZjhjS2U1N1RFQ3VYKzBrK3l5TkI',
    category: 'อุปกรณ์เสริม',
    stock: 50,
    features: ['ติดตามของ', 'ค้นหาผ่าน Find My', 'แบตเตอรี่ 1 ปี', 'กันน้ำ']
  }
];
