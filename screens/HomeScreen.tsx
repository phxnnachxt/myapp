import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}:any) => {
  return (
    <ScrollView className='flex-1 bg-gray-50'>
        <View className='flex-1 justify-center items-center p-6'>
            <Text className='text-4xl font-bold text-gray-800 mb-2'>HomeScreen</Text>
            <Text className='text-lg text-gray-600 mb-10 text-center'>Welcome to Navigation Workshop</Text>

            {/* info */}
            <View className='mt-10 bg-blue-100 rounded-2xl p-5 border-2 border-blue-300 w-full'>
                <Text className='text-blue-900 font-bold text-lg mb-3'>Tips</Text>
                <Text className='text-blue-800 mb-1'>Tap to Detail</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
              <Text>Go to Detail</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

export default HomeScreen