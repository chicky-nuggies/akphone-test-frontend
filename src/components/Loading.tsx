import { Loader2 } from 'lucide-react';

export function Loading() {
  return (
    <div className="loading-container">
      <Loader2 className="loading-spinner" size={32} />
      <p>Loading users...</p>
    </div>
  );
}
