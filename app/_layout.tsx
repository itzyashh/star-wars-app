
import React from 'react'
import { Slot, Stack } from 'expo-router'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const RootLayout = () => {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
    <Slot />
    </QueryClientProvider>
  )
}

export default RootLayout