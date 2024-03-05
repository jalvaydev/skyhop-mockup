function ModalFooter() {
  return (
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
  );
}

export default ModalFooter;
