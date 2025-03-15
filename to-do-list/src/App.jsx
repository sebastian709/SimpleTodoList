import React from 'react'
import Content from './layout/Content'
import Header from './layout/header'
import SideBar from './layout/SideBar'
import Footer from './layout/Footer'

function App() {
  return (
    <>
      <div className="flex">
        <div className="min-w-60">
          <SideBar />
        </div>
        <div className="flex flex-col justify-start h-screen grow">
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
