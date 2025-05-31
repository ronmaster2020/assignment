import { useState } from 'react';
import { ApiError, handleApiError } from '../utils/apiError';

interface UseFormSubmitProps {
  endpoint: string;
  onSubmitSuccess: () => void;
  isFormData?: boolean;
}

const useFormSubmit = ({ endpoint, onSubmitSuccess, isFormData = false }: UseFormSubmitProps) => {
  const [error, setError] = useState<string>("");

  const handleSubmit = async (formData: Record<string, unknown>) => {
    setError("");

    try {
      let body: FormData | string;
      if (isFormData) {
        const formDataObj = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          if (value instanceof FileList && value.length > 0) {
            formDataObj.append('resume', value[0]);
          } else if (value instanceof File) {
            formDataObj.append('resume', value);
          } else {
            formDataObj.append(key, value as string);
          }
        });
        body = formDataObj;
      } else {
        body = JSON.stringify(formData);
      }

      const response = await fetch(`http://localhost:3000/api/leads/${endpoint}`, {
        method: "POST",
        headers: isFormData ? {} : { "Content-Type": "application/json" },
        body,
      });

      await handleApiError(response);
      onSubmitSuccess();
    } catch (error) {
      if (error instanceof ApiError) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return {
    error,
    handleSubmit,
  };
};

export default useFormSubmit;