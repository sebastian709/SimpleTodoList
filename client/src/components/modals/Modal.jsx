import React from "react";
import { useModal } from "../../context/ModalContext";
import { FaRegWindowClose } from "react-icons/fa";

const Modal = () => {
  const { isOpen, setIsOpen } = useModal();
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="grid grid-cols-1 bg-white w-1/2 xs:w-full xs:mx-3 p-2 rounded-lg shadow-lg px-3">
        <div className="flex justify-between gap-5 border-b-2 pb-2">
          <p className="font-bold text-xl">Title</p>
          <FaRegWindowClose onClick={() => setIsOpen(false)} className="text-red-500 text-2xl cursor-pointer"/>
        </div>
        <div className="my-5">Content</div>
        <div className="grid place-items-end border-t-2">
          <button
            onClick={() => setIsOpen(false)} // ✅ Close Modal
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
