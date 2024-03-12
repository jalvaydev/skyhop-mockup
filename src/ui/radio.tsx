import { UseFormRegisterReturn } from 'react-hook-form';

export type RadioOption = {
  id: number;
  name: string;
};

export default function Radio({
  options,
  radioName,
  register,
}: {
  options: RadioOption[];
  radioName: string;
  register?: UseFormRegisterReturn<string>;
}) {
  return (
    <div>
      <fieldset className="mt-4">
        <legend className="sr-only">Split schedule using social distancing?</legend>
        <div className="space-y-4 md:flex md:items-center md:space-x-6 md:space-y-0">
          {options.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                {...register}
                value={option.name}
                name={radioName}
                type="radio"
                className="w-4 h-4 text-bg-[#1F3A68] border-gray-300 focus:ring-bg-[#1F3A68]"
              />
              <label
                htmlFor={option.name}
                className="block ml-3 leading-6 text-gray-900 capitalize text-2xs"
              >
                {option.name}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
