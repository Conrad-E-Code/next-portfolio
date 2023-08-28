import React from 'react'
import TypingEffect from './TypingEffect'

const ChatPost = () => {
  return (
    <div id="ChatPost" className='w-full'>
            <TypingEffect text="Welcome, This is my Blog! hopefully I can put some useful stuff in here. Blogs will be rendered below in order from newest to oldest. You can also navigate through recent blogs using the sidebar. Later on, the sidebar may become collapsible." typingSpeed={20} />
    </div>
  )
}

export default ChatPost