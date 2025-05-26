export class ApiError extends Error {
  statusCode: number;
  details?: any;

  constructor(statusCode: number, message: string, details?: any) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    this.name = 'ApiError';
  }
}

export const handleApiError = async (response: Response) => {
  if (!response.ok) {
    const errorData = await response.json();
    throw new ApiError(
      response.status,
      errorData.message || 'An error occurred',
      errorData.details
    );
  }
  return response.json();
}; 