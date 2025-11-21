import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const featureEmojis: { [key: string]: string } = {
  'ชิป A17 Pro': '⚡',
  'ชิป M3': '⚡',
  'RAM 8GB': '💾',
  'SSD 256GB': '💽',
  'กล้อง 48MP': '📸',
  'จอ ProMotion 120Hz': '🖥️',
  'ชาร์จไร้สายเร็ว': '🔋',
  'ANC': '🎧',
  'Transparency Mode': '👂',
  'ชาร์จไร้สาย': '🔌',
  'กันน้ำ IPX4': '💧',
  'จอ 12.9"': '🖌️',
  'ชิป M2': '⚡',
  'รองรับ Apple Pencil': '✏️',
  '5G': '📶',
  'GPS': '🧭',
  'วัดออกซิเจน': '🩸',
  'ECG': '❤️',
  'กันน้ำ 50m': '💦',
  'Bluetooth': '📡',
  'แบตเตอรี่ 1 เดือน': '🔋',
  'ชาร์จ USB-C': '🔌',
  'ปุ่มกดนุ่ม': '⌨️'
};

const DetailScreen = ({ route, navigation }: any) => {
  const { product } = route.params;

  return (
    <ScrollView className='flex-1 bg-gray-50'>
      {/* ภาพสินค้า */}
      <View className='bg-white shadow-lg'>
        <Image
          className='w-full h-80 rounded-b-3xl'
          source={{ uri: product.image }}
          resizeMode='cover'
        />
      </View>

      <View className='p-6'>
        {/* แท็กประเภทสินค้า */}
        <View className='bg-blue-50 rounded-full px-4 py-2 self-start mb-3 shadow-sm'>
          <Text className='text-blue-600 font-semibold text-sm'>
            {product.category}
          </Text>
        </View>

        {/* ชื่อสินค้า */}
        <Text className='text-3xl font-bold text-gray-800 mb-2'>
          {product.name}
        </Text>

        {/* ราคา */}
        <Text className='text-4xl font-extrabold text-blue-700 mb-5'>
          ฿{product.price.toLocaleString()}
        </Text>

        {/* คำอธิบายสินค้า */}
        <Text className='text-gray-600 text-base mb-5 leading-relaxed'>
          {product.description}
        </Text>

        {/* ฟีเจอร์สินค้า */}
        <View className='mb-6'>
          <Text className='text-gray-800 font-semibold mb-3 text-lg'>คุณสมบัติ:</Text>
          <View className='flex-row flex-wrap -m-1'>
            {product.features.map((feature: string, index: number) => (
              <View
                key={index}
                className='flex-row items-center bg-blue-50 border border-blue-200 rounded-xl px-3 py-2 m-1 shadow-sm'
              >
                <Text className='mr-2 text-xl'>
                  {featureEmojis[feature] || '🔹'}
                </Text>
                <Text className='text-gray-700 font-medium'>{feature}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* สต็อกสินค้า */}
        <View className='bg-green-50 border border-green-200 rounded-lg px-4 py-3 mb-6 shadow-sm flex-row items-center'>
          <Text className='text-green-600 font-semibold text-lg mr-2'>📦</Text>
          <Text className='text-gray-800 font-semibold'>
            คงเหลือ: {product.stock} ชิ้น
          </Text>
        </View>

        {/* ปุ่มเพิ่มลงตะกร้า */}
        <TouchableOpacity className='bg-gradient-to-r from-blue-500 to-blue-700 py-4 rounded-2xl items-center shadow-xl'>
          <Text className='text-white text-lg font-bold'>เพิ่มลงตะกร้า</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default DetailScreen
