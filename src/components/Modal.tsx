import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';

function Modal() {
  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full bg-[#b2b2b2b2] overflow-scroll md:overflow-auto">
      <div className="flex min-h-full p-4">
        <div className="bg-white opacity-100 h-full w-full md:h-[623px] md:max-w-[826px] shadow p-4 mx-auto rounded-2xl my-auto text-[#0C2948] ">
          <ModalHeader />
          <ModalContent />
          <ModalFooter />
        </div>
      </div>
    </div>
  );
}

export default Modal;
