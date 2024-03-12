import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { CLIENTS } from '../../mock/data';
import Dropdown from '../../ui/dropdown';
import { FormControl, FormField, FormItem, FormLabel } from '../../ui/form';
import { formSchema } from './DocumentUploadForm';
import DatePicker from 'react-datepicker';
import { forwardRef } from 'react';
import { Clock } from 'lucide-react';

interface AppointmentInputProps {
  locationName: string;
  clientInputName: 'client1Name' | 'client2Name' | 'client3Name' | 'client4Name';
  dateInputName: 'client1Date' | 'client2Date' | 'client3Date' | 'client4Date';
  form: UseFormReturn<z.infer<typeof formSchema>>;
}

function AppointmentInput({
  locationName,
  clientInputName,
  dateInputName,
  form,
}: AppointmentInputProps) {
  const ClientDateInput = forwardRef(
    ({ onClick }: any, ref: React.ForwardedRef<HTMLButtonElement>) => (
      <button
        className="flex my-auto"
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
        ref={ref}
      >
        <Clock className="w-5 h-5 my-auto" />
      </button>
    ),
  );
  return (
    <div className="flex mt-5">
      <FormField
        name={clientInputName}
        control={form.control}
        render={({ field: { onChange, value, onBlur } }) => (
          <FormItem className="flex gap-2">
            <FormLabel className="my-auto font-normal">
              <p className="text-2xs">{locationName}</p>
            </FormLabel>
            <FormControl>
              <Dropdown
                className="w-40 px-2"
                label="Client"
                options={CLIENTS}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            </FormControl>
          </FormItem>
        )}
      />
      <div className="my-auto ">
        <FormField
          name={dateInputName}
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
  );
}

export default AppointmentInput;
