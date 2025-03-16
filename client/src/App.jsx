import React from 'react'
import Content from './layout/Content'
import Header from './layout/header'
import SideBar from './layout/SideBar'
import Footer from './layout/Footer'
import Modal from './components/modals/Modal'
function App() {
  return (
    <>
      <div className="md:flex sm:grid sm:grid-cols-1">
        <div className="lg:min-w-60 xs:hidden sm:hidden lg:block">
          <SideBar />
        </div>
        <div className="sm:flex sm:flex-col sm:justify-start sm:h-screen sm:grow">
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
      <Modal />
    </>
  )
}

export default App