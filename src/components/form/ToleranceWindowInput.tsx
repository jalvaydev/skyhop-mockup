import { Clock } from 'lucide-react';
import { forwardRef, useState } from 'react';
import SwitchButton from '../../ui/switch';
import { Controller, UseFormReturn } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { z } from 'zod';
import { formSchema } from './DocumentUploadForm';

interface ToleranceWindowInputProps {
  form: UseFormReturn<z.infer<typeof formSchema>>;
}
function ToleranceWindowInput({ form }: ToleranceWindowInputProps) {
  const [toleranceWindowStatus, setToleranceWindowStatus] = useState(true);

  const ToleranceWindowPicker = forwardRef(
    ({ value, onClick }: any, ref: React.ForwardedRef<HTMLButtonElement>) => (
      <button
        className="flex gap-2"
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
        ref={ref}
      >
        <Clock className="w-5 h-5" />
        <p className="my-auto text-left w-28 text-2xs">
          {value || 'Select Tolerance Level'}
        </p>
      </button>
    ),
  );
  return (
    <div>
      <label htmlFor="toleranceWindow" className="font-bold leading-5 text-2xs ">
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
                control={form.control}
                render={({ field: { onChange, value } }) => (
                  <DatePicker
                    selected={value}
                    onChange={onChange}
                    value={value?.toLocaleTimeString()}
                    showTimeSelect
                    isClearable
                    customInput={<ToleranceWindowPicker />}
                  />
                )}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ToleranceWindowInput;
