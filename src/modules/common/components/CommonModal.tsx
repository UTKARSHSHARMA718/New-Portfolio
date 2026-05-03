"use client";

import Modal from "react-modal";
import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  className?: string;
  isRemoveCloseBtn?: boolean;
};

export default function CommonModal({
  isOpen,
  onClose,
  children,
  title,
  className,
  isRemoveCloseBtn,
}: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick
      className="outline-none"
      overlayClassName="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
    >
      <div
        className={clsx(
          "bg-white rounded-2xl shadow-xl w-full max-w-lg mx-4 p-6 relative",
          className,
        )}
      >
        {/* Close button */}
        {!isRemoveCloseBtn && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg"
          >
            ✕
          </button>
        )}

        {/* Title */}
        {title && <h2 className="text-lg font-semibold mb-4">{title}</h2>}

        {/* Content */}
        <div>{children}</div>
      </div>
    </Modal>
  );
}
