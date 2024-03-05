import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';

function Modal() {
  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full bg-[#b2b2b2b2]">
      <div className="flex h-full">
        <div className="bg-white opacity-100 h-[623px] w-[826px] p-4 mx-auto rounded-3xl my-auto text-[#0C2948] ">
          <ModalHeader />
          <ModalContent />
          <ModalFooter />
        </div>
      </div>
    </div>
  );
}

export default Modal;
