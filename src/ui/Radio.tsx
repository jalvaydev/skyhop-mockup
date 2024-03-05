type RadioOption = {
  id: string;
  title: string;
};

export default function Radio({
  options,
  radioName,
}: {
  options: RadioOption[];
  radioName: string;
}) {
  return (
    <div>
      <fieldset className="mt-4">
        <legend className="sr-only">Split schedule using social distancing?</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {options.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                id={option.id}
                name={radioName}
                type="radio"
                className="w-4 h-4 text-bg-[#1F3A68] border-gray-300 focus:ring-bg-[#1F3A68]"
              />
              <label
                htmlFor={option.id}
                className="block ml-3 leading-6 text-gray-900 text-2xs"
              >
                {option.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
