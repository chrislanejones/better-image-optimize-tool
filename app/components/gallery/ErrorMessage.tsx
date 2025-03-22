import React from "react";
import { Card, CardContent } from "~/components/ui/Card";

interface ErrorMessageProps {
  message: string;
  redirecting?: boolean;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  redirecting = false,
}) => {
  return (
    <Card className="mb-6">
      <CardContent className="p-4">
        <div className="flex items-center text-amber-700 dark:text-amber-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <p>{message}</p>
            {redirecting && (
              <p className="text-sm mt-1">Redirecting to upload page...</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ErrorMessage;
