import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDown, ChevronsUpDownIcon } from 'lucide-react';
import { Fragment, useState } from 'react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

type Manifest = {
  id: number;
  name: string;
};

const manifests: Manifest[] = [
  { id: 1, name: 'Passport' },
  { id: 2, name: 'Driver License' },
  { id: 3, name: 'National ID' },
  { id: 4, name: 'Voter ID' },
  { id: 5, name: 'SSN' },
  { id: 6, name: 'Other' },
];

function Dropdown() {
  const [selected, setSelected] = useState<Manifest | null>(null);
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-xl bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#293D6A] sm:text-sm sm:leading-6">
              <span className="block truncate text-[#0C2948]">
                {selected?.name ?? 'Select Import Name'}
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {manifests.map((manifest) => (
                  <Listbox.Option
                    key={manifest.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-[#293D6A] text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9',
                      )
                    }
                    value={manifest}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate',
                          )}
                        >
                          {manifest.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4',
                            )}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}

export default Dropdown;
