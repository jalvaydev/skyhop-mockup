import { Clock, FileIcon } from 'lucide-react';
import Seperator from '../ui/Seperator';
import Dropdown, { DropdownOption } from './Dropdown';
import SwitchButton from '../ui/Switch';
import Radio from '../ui/Radio';

const manifests: DropdownOption[] = [
  { id: 1, name: 'Passport' },
  { id: 2, name: 'Driver License' },
  { id: 3, name: 'National ID' },
  { id: 4, name: 'Voter ID' },
  { id: 5, name: 'SSN' },
  { id: 6, name: 'Other' },
];

const clients: DropdownOption[] = [
  { id: 1, name: 'Chewbacca' },
  { id: 2, name: 'Han Solo' },
  { id: 3, name: 'Leia Organa' },
  { id: 4, name: 'Luke Skywalker' },
  { id: 5, name: 'Obi-Wan Kenobi' },
  { id: 6, name: 'Yoda' },
];

function ModalContent() {
  return (
    <div className="text-[#0C2948] mx-12 mt-6">
      <div className="flex flex-row ">
        <div className="flex flex-col w-[420px] pr-8 gap-2">
          <Dropdown options={manifests} optionName="manifest" />
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

        <div className="flex flex-col w-[311px] gap-2">
          <div>
            <p className="font-bold leading-5 text-2xs">
              Split schedule using social distancing?
            </p>
            <Radio
              options={[
                { id: 'yes', title: 'Yes' },
                { id: 'no', title: 'No' },
              ]}
            />
          </div>
          <Seperator />
          <div>
            <p className="font-bold leading-5 text-2xs">Location Checking</p>
            <p className="text-[#2EAC8A] text-2xs font-medium">All Available!</p>
          </div>
          <Seperator />
          <div>
            <p className="font-bold leading-5 text-2xs">Client</p>
            <Radio
              options={[
                { id: 'single', title: 'Single' },
                { id: 'multiple', title: 'Multiple' },
              ]}
            />
            <div className="flex gap-2 mt-5">
              <p className="my-auto text-2xs">Testing Center 1</p>
              <Dropdown className="w-38" optionName="client" options={clients} />
              <Clock className="w-5 h-5 my-auto" />
            </div>
            <div className="flex gap-2 mt-5">
              <p className="my-auto text-2xs">Testing Center 1</p>
              <Dropdown className="w-38" optionName="client" options={clients} />
              <Clock className="w-5 h-5 my-auto" />
            </div>
            <div className="flex gap-2 mt-5">
              <p className="my-auto text-2xs">Testing Center 1</p>
              <Dropdown className="w-38" optionName="client" options={clients} />
              <Clock className="w-5 h-5 my-auto" />
            </div>
            <div className="flex gap-2 mt-5">
              <p className="my-auto text-2xs">Testing Center 1</p>
              <Dropdown className="w-38" optionName="client" options={clients} />
              <Clock className="w-5 h-5 my-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <p className="font-semibold leading-4 text-center ">
          Data in the import field is correct. Please press Continue to import.
        </p>
        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="px-12 py-2 text-2xs font-semibold text-white bg-[#1F3A68] rounded-lg shadow-sm hover:bg-[#234175] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#294980]"
          >
            Continue Import
          </button>
          <button
            type="button"
            className="px-12 py-2 text-orange-400 border-2 border-orange-300 rounded-lg shadow-sm text-2xs hover:bg-orange-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalContent;
