import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const DetailScreen = () => {
  return (
    <ScrollView className='flex-1 bg-gray-50'>
        <View className='flex-1 justify-center items-center p-6'>
            <Text className='text-4xl font-bold text-gray-800 mb-10'>DetailScreen</Text>
        </View>
    </ScrollView>
  )
}

export default DetailScreen