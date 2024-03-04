import { X } from 'lucide-react';

function ModalHeader() {
  return (
    <>
      <div className="flex h-7">
        <div className="bg-[#293D6A] h-7 w-7 text-white rounded-md justify-center flex">
          <X className="h-4 my-auto" strokeWidth={3} />
        </div>
      </div>
      <div className="flex flex-col-reverse h-12 pb-3 mx-auto">
        <h3 className="text-xl font-bold text-[rgb(12,41,72)] text-center">
          Document Upload
        </h3>
      </div>
      <div className="mx-auto border-b-2 w-44 border-gray-150"> </div>
    </>
  );
}

export default ModalHeader;
