import React from 'react'
import { useModal } from '../context/ModalContext'

const Modal = () => {
    const { isOpen, setIsOpen } = useModal();
    if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-lg font-bold">This is a modal!</p>
        <button
          onClick={() => setIsOpen(false)} // ✅ Close Modal
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Modal
