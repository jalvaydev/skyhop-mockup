import Seperator from '../../ui/seperator';
import Dropdown from '../../ui/dropdown';
import Radio from '../../ui/radio';
import FileUploader from './FileUploader';
import { useForm } from 'react-hook-form';
import { toast } from '../../ui/use-toast';
import { MANIFESTS } from '../../mock/data';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../ui/form';
import ToleranceWindowInput from './ToleranceWindowInput';
import AppointmentInput from './AppointmentInput';

export const formSchema = z.object({
  importName: z.string().nullable(),
  toleranceLevel: z.date().nullable(),
  splitSchedule: z
    .enum(['yes', 'no'], {
      invalid_type_error: 'Please select a split schedule option',
    })
    .nullable(),
  clientType: z
    .enum(['single', 'multiple'], {
      invalid_type_error: 'Please select a split schedule option',
    })
    .nullable(),
  client1Name: z.string().nullable(),
  client1Date: z.date().nullable(),
  client2Name: z.string().nullable(),
  client2Date: z.date().nullable(),
  client3Name: z.string().nullable(),
  client3Date: z.date().nullable(),
  client4Name: z.string().nullable(),
  client4Date: z.date().nullable(),
});

function DocumentUploadForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      importName: null,
      toleranceLevel: null,
      splitSchedule: null,
      clientType: null,
      client1Name: '',
      client1Date: null,
      client2Name: '',
      client2Date: null,
      client3Name: '',
      client3Date: null,
      client4Name: '',
      client4Date: null,
    },
  });

  console.log(form.formState.errors);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: 'Submitted Form',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-gray-900 p-2">
          <code className="text-white ">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form id="document-upload-form" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 md:flex-row ">
          <div className="flex flex-col w-full md:w-[420px] md:pr-8 gap-2">
            <FormField
              control={form.control}
              name="importName"
              render={({ field: { onChange, value, onBlur } }) => (
                <FormItem>
                  <FormControl>
                    <Dropdown
                      options={MANIFESTS}
                      label="Import Name"
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  </FormControl>
                  <FormMessage className="py-1" />
                </FormItem>
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
            <ToleranceWindowInput form={form} />
          </div>

          <div className="flex flex-col md:w-[311px] gap-2">
            <FormField
              control={form.control}
              name="splitSchedule"
              render={() => (
                <FormItem>
                  <FormLabel>
                    <p className="font-bold leading-5 text-2xs">
                      Split schedule using social distancing?
                    </p>
                  </FormLabel>
                  <FormControl>
                    <Radio
                      register={form.register('splitSchedule')}
                      options={[
                        { id: 1, name: 'yes' },
                        { id: 0, name: 'no' },
                      ]}
                      radioName={'splitSchedule'}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Seperator />
            <div>
              <p className="font-bold leading-5 text-2xs">Location Checking</p>
              <p className="text-[#2EAC8A] text-2xs font-medium">All Available!</p>
            </div>
            <Seperator />
            <div>
              <FormField
                name="clientType"
                control={form.control}
                render={() => (
                  <FormItem>
                    <FormLabel>
                      <p className="font-bold leading-5 text-2xs">Client</p>
                    </FormLabel>
                    <FormControl>
                      <Radio
                        options={[
                          { id: 0, name: 'single' },
                          { id: 1, name: 'multiple' },
                        ]}
                        register={form.register('clientType')}
                        radioName={'clientType'}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <AppointmentInput
                locationName="Testing Center 1"
                dateInputName="client1Date"
                clientInputName="client1Name"
                form={form}
              />
              <AppointmentInput
                locationName="Testing Center 2"
                dateInputName="client2Date"
                clientInputName="client2Name"
                form={form}
              />
              <AppointmentInput
                locationName="Testing Center 3"
                dateInputName="client3Date"
                clientInputName="client3Name"
                form={form}
              />
              <AppointmentInput
                locationName="Testing Center 4"
                dateInputName="client4Date"
                clientInputName="client4Name"
                form={form}
              />
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default DocumentUploadForm;
