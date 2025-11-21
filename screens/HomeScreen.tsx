import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { products } from '../data/products'

const HomeScreen = ({navigation}:any) => {
  return (
    <ScrollView className='flex-1 bg-gray-50'>
        <View className='flex-1 justify-center items-center p-6'>
            <Text className='text-4xl font-bold text-gray-800 mb-2'>ร้านค้า</Text>
            <Text className='text-lg text-gray-600 mb-10 text-center'>เลือกดูสินค้าที่คุณสนใจ</Text>

           <View className='bg-blue-100 rounded-2xl p-5 border-2 border-blue-300 mb-6'>
            <Text className='text-blue-900 font-bold text-lg mb-2'>สินค้าแนะนำ </Text>
           </View>

          <View className='flex-row flex-wrap justify-between'>
            {products.map((p) => (
              <TouchableOpacity key={p.id} className='w-[48%] bg-white rounded-2xl mb-4
              overflow-hidden shadow-sm' onPress={() => navigation.navigate('Detail', {product: p})}>
                <View className='bg-gray-200 h-40 justify-center items-center'>
                  <Image source={{uri: p.image}} className='w-full h-full' resizeMode='cover' />
                </View>
                <View className='p-4'>
                  <Text className='text-xs text-blue-600 font-semibold mb-1'>
                    {p.category}
                  </Text>
                  <Text className='text-base font-bold text-gray-800 mb-2'>
                    {p.name}
                  </Text>
                  <Text className='text-lg font-bold text-blue-600 mb-2'>
                    {p.price}
                  </Text>
                  <View className='flex-row items-center'>
                    <View className='bg-green-100 rounded-full px-3 py-1'>
                      <Text className='text-xs text-hreen-700 font-semibold'>
                        คงเหลือ {p.stock} ชิ้น
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            
            ))}
          </View>
        </View>
    </ScrollView>
  )
}

export default HomeScreen