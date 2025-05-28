import { useState } from 'react';
import { ApiError, handleApiError } from '../utils/apiError';

interface UseFormSubmitProps {
  endpoint: string;
  onSubmitSuccess: () => void;
  isFormData?: boolean;
}

const useFormSubmit = ({ endpoint, onSubmitSuccess, isFormData = false }: UseFormSubmitProps) => {
  const [error, setError] = useState<string>("");

  const handleSubmit = async (formData: any) => {
    setError("");

    try {
      const response = await fetch(`http://localhost:3000/api/leads/${endpoint}`, {
        method: "POST",
        headers: isFormData ? {} : { "Content-Type": "application/json" },
        body: isFormData ? formData : JSON.stringify(formData),
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