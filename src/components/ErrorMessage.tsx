import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="error-container">
      <div className="error-content">
        <AlertCircle className="error-icon" size={48} />
        <h2>Oops! Something went wrong</h2>
        <p className="error-message">{message}</p>
        {onRetry && (
          <button className="retry-button" onClick={onRetry}>
            <RefreshCw size={16} />
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}
