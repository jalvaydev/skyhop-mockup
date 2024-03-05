import { Clock, FileIcon } from 'lucide-react';
import Seperator from '../ui/Seperator';
import Dropdown from './Dropdown';
import SwitchButton from '../ui/Switch';

function ModalContent() {
  return (
    <div className="text-[#0C2948] mx-12 mt-6">
      <div className="flex flex-row ">
        <div className="flex flex-col w-[420px] pr-8 gap-2">
          <Dropdown />
          <Seperator />
          <div>
            <label htmlFor="manifest" className="font-bold leading-5 text-2xs ">
              Select a manifest you'd like to import
            </label>
            <div className="flex flex-col gap-1 p-3 border border-gray-300 rounded-xl">
              <div className="flex flex-col h-20 p-2 border border-gray-300 border-dashed rounded-lg">
                <div className="my-auto">
                  <FileIcon className="h-5 mx-auto" />
                  <p className="pt-2 text-center text-2xs">
                    Drag & Drop Here Or <b>Browse</b>
                  </p>
                </div>
              </div>
              <div className="mx-auto ">
                <button
                  type="button"
                  className="px-12 py-2 text-2xs font-semibold text-white bg-[#1F3A68] rounded-lg shadow-sm hover:bg-[#234175] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#294980]"
                >
                  Upload Manifest
                </button>
              </div>
            </div>
          </div>
          <Seperator />
          <div>
            <label htmlFor="manifest" className="font-bold leading-5 text-2xs ">
              Elapse Data Checking
            </label>
            <p className="text-[#2EAC8A] text-2xs font-medium">No Elapsed Dates!</p>
          </div>
          <Seperator />
          <div>
            <label htmlFor="manifest" className="font-bold leading-5 text-2xs ">
              Tolerance Window
            </label>
            <div className="flex gap-4">
              <div className="flex gap-2 my-auto">
                <SwitchButton />
                <p className="my-auto font-normal text-2xs ">Toggle ON</p>
              </div>
              <div className="border-l border-black"></div>
              <div className="flex gap-2">
                <Clock className="w-5 h-5 my-auto" />
                <p className="my-auto text-2xs">Select Tolerance Level</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[311px] ">
          <p>Split schedule using social distancing?</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-12 ">
        <p className="font-semibold leading-5 text-center ">
          Data in the import field is correct. Please press Continue to import.
        </p>
        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="px-12 py-2 text-xs font-semibold text-white bg-[#1F3A68] rounded-lg shadow-sm hover:bg-[#234175] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#294980]"
          >
            Continue Import
          </button>
          <button
            type="button"
            className="px-12 py-2 text-xs text-orange-400 border-2 border-orange-300 rounded-lg shadow-sm hover:bg-orange-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalContent;
