import React from 'react'
import { FiPlusSquare } from "react-icons/fi";
import { useModal } from '../context/ModalContext';

const OpenModal = () => {
    const { setIsOpen } = useModal();
  return (
    <FiPlusSquare size={20} className="cursor-pointer" onClick={() => setIsOpen(true)}/>
  )
}

export default OpenModal
