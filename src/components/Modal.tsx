import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type ReactNode } from "react";
import ReactModal from "react-modal";

type ModalProps = Readonly<{
  title: string;
  isOpen: boolean;
  onClose(): void;
  children: ReactNode;
}>;

const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {
  ReactModal.setAppElement("main");

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel={title}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      parentSelector={() =>
        document.getElementsByTagName("main")[0] as HTMLElement
      }
      style={{
        overlay: { backgroundColor: "rgb(from var(--gray) r g b / 0.7)" },
      }}
      className="absolute inset-10 border-1 border-secondary bg-white rounded-xl p-10 max-w-xl mx-auto"
    >
      <>
        <div className="flex justify-between">
          <div className="uppercase font-bold text-lg">{title}</div>
          <button onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="h-full p-6">{children}</div>
      </>
    </ReactModal>
  );
};

export default Modal;
