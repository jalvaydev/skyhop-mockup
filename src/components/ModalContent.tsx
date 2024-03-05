import { Clock, FileIcon } from 'lucide-react';
import Seperator from '../ui/Seperator';
import Dropdown, { DropdownOption } from './Dropdown';
import SwitchButton from '../ui/Switch';
import Radio, { RadioOption } from '../ui/Radio';
import FileUploader from './FileUploader';
import { forwardRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import ModalFooter from './ModalFooter';
import DatePicker from 'react-datepicker';

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

export interface IFormValues {
  import: DropdownOption;
  toleranceLevel: Date;
  splitSchedule: number;
  clientType: string;
  client1: number;
  client1Date: Date;
  client2: number;
  client2Date: Date;
  client3: number;
  client3Date: Date;
  client4: number;
  client4Date: Date;
}

function ModalContent() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
  } = useForm<IFormValues>({
    defaultValues: {
      import: { id: 0, name: '' },
      toleranceLevel: new Date(),
      splitSchedule: 0,
      clientType: 'single',
      client1: 0,
      client1Date: new Date(),
      client2: 0,
      client2Date: new Date(),
      client3: 0,
      client3Date: new Date(),
      client4: 0,
      client4Date: new Date(),
    },
  });
  const [toleranceWindowStatus, setToleranceWindowStatus] = useState(true);

  const onSubmit = (d: IFormValues) => {
    d.splitSchedule = Number(d.splitSchedule);
    d.clientType = d.clientType === '0' ? 'single' : 'multiple';
    console.log(d);
  };
  const [startDate, setStartDate] = useState(new Date());
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

  const Client1DateInput = forwardRef(
    ({ value, onClick }: any, ref: React.ForwardedRef<HTMLButtonElement>) => (
      <button className="flex my-auto" onClick={onClick} ref={ref}>
        <Clock className="w-5 h-5 my-auto" />
      </button>
    ),
  );

  const Client2DateInput = forwardRef(
    ({ value, onClick }: any, ref: React.ForwardedRef<HTMLButtonElement>) => (
      <button className="flex gap-2" onClick={onClick} ref={ref}>
        <Clock className="w-5 h-5" />
      </button>
    ),
  );

  const Client3DateInput = forwardRef(
    ({ value, onClick }: any, ref: React.ForwardedRef<HTMLButtonElement>) => (
      <button className="flex gap-2" onClick={onClick} ref={ref}>
        <Clock className="w-5 h-5" />
      </button>
    ),
  );

  const Client4DateInput = forwardRef(
    ({ value, onClick }: any, ref: React.ForwardedRef<HTMLButtonElement>) => (
      <button className="flex gap-2" onClick={onClick} ref={ref}>
        <Clock className="w-5 h-5" />
      </button>
    ),
  );

  return (
    <div className="mx-12 mt-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col w-[420px] pr-8 gap-2">
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
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date!)}
                        customInput={<ToleranceWindowInput />}
                        isClearable
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[311px] gap-2">
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
              <p className="font-bold leading-5 text-2xs">Client</p>{' '}
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
                  />{' '}
                  <div className="flex my-auto">
                    {' '}
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date!)}
                      showTimeSelect
                      customInput={<Client1DateInput />}
                    />{' '}
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
                  />{' '}
                  <div className="flex my-auto">
                    <DatePicker
                      selected={startDate}
                      showTimeSelect
                      onChange={(date) => setStartDate(date!)}
                      customInput={<Client2DateInput />}
                    />{' '}
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
                  />{' '}
                  <div className="flex my-auto">
                    <DatePicker
                      selected={startDate}
                      showTimeSelect
                      onChange={(date) => setStartDate(date!)}
                      customInput={<Client3DateInput />}
                    />{' '}
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
                    <DatePicker
                      selected={startDate}
                      showTimeSelect
                      onChange={(date) => setStartDate(date!)}
                      customInput={<Client4DateInput />}
                    />{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalFooter />
      </form>
    </div>
  );
}

export default ModalContent;
