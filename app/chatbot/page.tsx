import GetCurrentUserComponent from '@/components/shared/GetUserComponent'
import React from 'react'

export const metadata={
  title:"Chatbot",
  description:"Chat with your loving once like freind mother father grandmother."
}
const page = () => {
  return (
    <>
    <GetCurrentUserComponent />
    </>
  )
}

export default page