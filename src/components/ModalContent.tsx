import { Clock } from 'lucide-react';
import Seperator from '../ui/Seperator';
import Dropdown, { DropdownOption } from '../ui/Dropdown';
import SwitchButton from '../ui/Switch';
import Radio from '../ui/Radio';
import FileUploader from './FileUploader';
import { forwardRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { Toaster } from '../ui/toaster';
import { toast } from '../ui/use-toast';

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

export type IFormValues = {
  import: DropdownOption;
  toleranceLevel: Date | null;
  splitSchedule: number;
  clientType: string;
  client1: number;
  client1Date: Date | null;
  client2: number;
  client2Date: Date | null;
  client3: number;
  client3Date: Date | null;
  client4: number;
  client4Date: Date | null;
};

function ModalContent() {
  const { handleSubmit, register, control } = useForm<IFormValues>({
    defaultValues: {
      import: {},
      toleranceLevel: null,
      splitSchedule: 0,
      clientType: '',
      client1: 0,
      client1Date: null,
      client2: 0,
      client2Date: null,
      client3: 0,
      client3Date: null,
      client4: 0,
      client4Date: null,
    },
  });
  const [toleranceWindowStatus, setToleranceWindowStatus] = useState(true);

  const onSubmit = (d: IFormValues) => {
    d.splitSchedule = Number(d.splitSchedule);
    d.clientType = d.clientType === '0' ? 'single' : 'multiple';
    console.log(d);
    toast({
      title: 'Submitted Form',
      description: `The form has been successfully submitted.`,
    });
  };

  const ToleranceWindowInput = forwardRef(
    ({ value, onClick }: any, ref: React.ForwardedRef<HTMLButtonElement>) => (
      <button className="flex gap-2" onClick={onClick} ref={ref}>
        <Clock className="w-5 h-5" />
        <p className="my-auto text-left w-28 text-2xs">
          {value || 'Select Tolerance Level'}
        </p>
      </button>
    ),
  );

  const ClientDateInput = forwardRef(
    ({ onClick }: any, ref: React.ForwardedRef<HTMLButtonElement>) => (
      <button className="flex my-auto" onClick={onClick} ref={ref}>
        <Clock className="w-5 h-5 my-auto" />
      </button>
    ),
  );

  return (
    <div className="mx-12 mt-6 ">
      <form id="document-upload-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 md:flex-row ">
          <div className="flex flex-col w-full md:w-[420px] md:pr-8 gap-2">
            <Controller
              name="import"
              control={control}
              rules={{
                required: 'Please select an import option',
              }}
              render={({ field: { onChange, value, onBlur } }) => (
                <Dropdown
                  options={manifests}
                  label="Import Name"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
            <Seperator />
            <FileUploader />
            <Seperator />
            <div>
              <label htmlFor="manifest" className="font-bold leading-5 text-2xs ">
                Elapse Data Checking
              </label>
              <div className="mt-2">
                <p className="text-[#2EAC8A] text-2xs font-medium">No Elapsed Dates!</p>
              </div>
            </div>
            <Seperator />
            <div>
              <label htmlFor="manifest" className="font-bold leading-5 text-2xs ">
                Tolerance Window
              </label>
              <div className="flex h-5 gap-4 mt-2">
                <div className="flex gap-2 my-auto">
                  <SwitchButton
                    enabled={toleranceWindowStatus}
                    setEnabled={setToleranceWindowStatus}
                  />
                  <p className="my-auto font-normal text-2xs ">
                    Toggle {toleranceWindowStatus ? 'ON' : 'OFF'}
                  </p>
                </div>
                {toleranceWindowStatus && (
                  <>
                    <div className="border-l border-black"></div>
                    <div className="flex gap-2">
                      <Controller
                        name="toleranceLevel"
                        control={control}
                        rules={{
                          required: 'Please select an client.',
                        }}
                        render={({ field: { onChange, value, onBlur } }) => (
                          <DatePicker
                            selected={value}
                            onChange={onChange}
                            value={value?.toLocaleTimeString()}
                            showTimeSelect
                            isClearable
                            customInput={<ToleranceWindowInput />}
                          />
                        )}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:w-[311px] gap-2">
            <div>
              <p className="font-bold leading-5 text-2xs">
                Split schedule using social distancing?
              </p>
              <Controller
                name="splitSchedule"
                control={control}
                rules={{
                  required: 'Please select an schedule option',
                }}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Radio
                    register={register('splitSchedule')}
                    options={[
                      { id: 1, name: 'Yes' },
                      { id: 0, name: 'No' },
                    ]}
                    radioName={'splitSchedule'}
                  />
                )}
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
              <Controller
                name="import"
                control={control}
                rules={{
                  required: 'Please select an import option',
                }}
                render={({ field: { onChange, value, onBlur } }) => (
                  <Radio
                    options={[
                      { id: 0, name: 'Single' },
                      { id: 1, name: 'Multiple' },
                    ]}
                    register={register('clientType')}
                    radioName={'clientType'}
                  />
                )}
              />
              <div className="flex gap-2 mt-5">
                <p className="my-auto text-2xs">Testing Center 1</p>
                <div className="flex">
                  <Controller
                    name="client1"
                    control={control}
                    rules={{
                      required: 'Please select an client.',
                    }}
                    render={({ field: { onChange, value, onBlur } }) => (
                      <Dropdown
                        className="w-40 px-2"
                        label="Client"
                        options={clients}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    )}
                  />
                  <div className="flex my-auto">
                    <Controller
                      name="client1Date"
                      control={control}
                      rules={{
                        required: 'Please select an client.',
                      }}
                      render={({ field: { onChange, value, onBlur } }) => (
                        <DatePicker
                          selected={value}
                          onChange={onChange}
                          value={value?.toString()}
                          showTimeSelect
                          onBlur={onBlur}
                          customInput={<ClientDateInput />}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-5">
                <p className="my-auto text-2xs">Testing Center 2</p>
                <div className="flex">
                  <Controller
                    name="client2"
                    control={control}
                    rules={{
                      required: 'Please select an client.',
                    }}
                    render={({ field: { onChange, value, onBlur } }) => (
                      <Dropdown
                        className="w-40 px-2"
                        label="Client"
                        options={clients}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    )}
                  />
                  <div className="flex my-auto">
                    <Controller
                      name="client2Date"
                      control={control}
                      rules={{
                        required: 'Please select an client.',
                      }}
                      render={({ field: { onChange, value, onBlur } }) => (
                        <DatePicker
                          selected={value}
                          onChange={onChange}
                          value={value?.toString()}
                          showTimeSelect
                          customInput={<ClientDateInput />}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-5">
                <p className="my-auto text-2xs">Testing Center 3</p>
                <div className="flex">
                  <Controller
                    name="client3"
                    control={control}
                    rules={{
                      required: 'Please select an client.',
                    }}
                    render={({ field: { onChange, value, onBlur } }) => (
                      <Dropdown
                        className="w-40 px-2"
                        label="Client"
                        options={clients}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    )}
                  />
                  <div className="flex my-auto">
                    <Controller
                      name="client3Date"
                      control={control}
                      rules={{
                        required: 'Please select an client.',
                      }}
                      render={({ field: { onChange, value, onBlur } }) => (
                        <DatePicker
                          selected={value}
                          onChange={onChange}
                          value={value?.toString()}
                          showTimeSelect
                          customInput={<ClientDateInput />}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-5">
                <p className="my-auto text-2xs">Testing Center 4</p>
                <div className="flex">
                  <Controller
                    name="client4"
                    control={control}
                    rules={{
                      required: 'Please select an client.',
                    }}
                    render={({ field: { onChange, value, onBlur } }) => (
                      <Dropdown
                        className="w-40 px-2"
                        label="Client"
                        options={clients}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    )}
                  />
                  <div className="flex my-auto">
                    <Controller
                      name="client4Date"
                      control={control}
                      rules={{
                        required: 'Please select an client.',
                      }}
                      render={({ field: { onChange, value, onBlur } }) => (
                        <DatePicker
                          selected={value}
                          onChange={onChange}
                          value={value?.toString()}
                          showTimeSelect
                          customInput={<ClientDateInput />}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModalContent;
