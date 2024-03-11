import { useDropzone } from 'react-dropzone';
import { useEffect, useMemo, useState } from 'react';
import { FileIcon } from 'lucide-react';
import { Progress } from '../ui/Progress';

function FileUploader() {
  const baseStyle = {
    transition: 'border .24s ease-in-out',
  };

  const focusedStyle = {
    borderColor: '#2196f3',
  };

  const acceptStyle = {
    borderColor: '#00e676',
  };

  const rejectStyle = {
    borderColor: '#ff1744',
  };
  const { acceptedFiles, getRootProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      maxFiles: 1,
    });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject],
  );

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (acceptedFiles.length === 0) {
      setProgress(0);
      return;
    }
  }, [acceptedFiles]);

  const uploadFile = () => {
    if (acceptedFiles.length === 0) {
      return;
    }
    // Simulate progress
    let timer = setTimeout(() => setProgress(66), 400);
    timer = setTimeout(() => setProgress(100), 1000);

    return () => clearTimeout(timer);
  };

  return (
    <div>
      <label htmlFor="manifest" className="font-bold leading-5 text-2xs ">
        Select a manifest you'd like to import
      </label>
      <div className="flex flex-col h-40 gap-1 p-3 border border-gray-300 rounded-xl">
        <div {...getRootProps({ className: 'dropzone' })}>
          <div
            style={style}
            className="flex flex-col h-24 p-2 border border-gray-300 border-dashed rounded-lg cursor-pointer"
          >
            <div className="my-auto">
              <FileIcon className="h-5 mx-auto" />
              {acceptedFiles.length === 0 && (
                <p className="pt-2 text-center text-2xs">
                  Drag & Drop Here Or <b>Browse</b>
                </p>
              )}
              {acceptedFiles.length > 0 && (
                <div className="">
                  <p className="pt-2 text-center text-2xs">
                    {acceptedFiles[0].name} - {acceptedFiles[0].size} bytes
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <Progress value={progress} className="w-full h-1 bg-gray-300 " />
        </div>
        <div className="mx-auto ">
          <button
            onClick={() => uploadFile()}
            type="button"
            className="px-12 py-2 text-2xs font-semibold text-white bg-[#1F3A68] rounded-lg shadow-sm hover:bg-[#234175] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#294980]"
          >
            Upload Manifest
          </button>
        </div>
      </div>
    </div>
  );
}

export default FileUploader;
