import { styled } from 'nativewind'
import React, { useState } from 'react'
import { Text, View, FlatList, StatusBar } from 'react-native'

// Styled Components
const StyledText = styled(Text)
const StyledView = styled(View)

export default function App() {
  // Sample tasks
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Task 1' },
    { id: '2', text: 'Task 2' },
    { id: '3', text: 'Task 3' },
    // Add more tasks here
  ])

  // Render Task Item
  const renderTask = ({ item }: { item: { id: string; text: string } }) => (
    <StyledView className='p-2 h-screen bg-blue'>
      <StyledText className='text-xl'>{item.text}</StyledText>
    </StyledView>
  )

  return (
    <StyledView>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
      />
      <StatusBar barStyle='default' />
    </StyledView>
  )
}
