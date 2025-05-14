import ReactDOM from "react-dom"
import React, { useEffect } from "react"
import { IoIosCloseCircleOutline } from "react-icons/io"

interface Props {
  children: React.ReactNode
  onClose: () => void
}

export default function PortalModal({ children, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 ">
      <div className="relative bg-dark-blue-isaac text-white w-min midtablap:w-[70%] h-fit rounded-xl ">
        <div className="p-6 rounded-xl ">
          <button
            onClick={onClose}
            className="absolute top-4 right-10 text-white text-3xl font-bold z-10"
          >
            <IoIosCloseCircleOutline />
          </button>
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}
