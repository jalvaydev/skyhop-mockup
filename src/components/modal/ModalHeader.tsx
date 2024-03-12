import { X } from 'lucide-react';
import Seperator from '../../ui/seperator';

function ModalHeader() {
  return (
    <>
      <div className="flex h-7">
        <button className="bg-[#293D6A] h-7 w-7 text-white rounded-md justify-center flex shadow-sm hover:bg-[#234175] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#294980]">
          <X className="h-4 my-auto" strokeWidth={3} />
        </button>
      </div>
      <div className="flex flex-col-reverse h-8 pb-3 mx-auto">
        <h3 className="text-2xl leading-6 font-bold text-[rgb(12,41,72)] text-center">
          Document Upload
        </h3>
      </div>
      <div className="w-56 mx-auto">
        <Seperator />
      </div>
    </>
  );
}

export default ModalHeader;
