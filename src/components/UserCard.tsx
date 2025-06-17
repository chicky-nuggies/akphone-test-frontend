import type { User } from '../types/api';
import { Mail, Calendar, User as UserIcon } from 'lucide-react';

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="user-card">
      <div className="user-card-header">
        <div className="user-avatar">
          <UserIcon size={24} />
        </div>
        <div className="user-info">
          <h3 className="user-name">{user.name}</h3>
          <span className="user-id">ID: {user.id}</span>
        </div>
      </div>
      
      <div className="user-details">
        <div className="user-detail">
          <Mail size={16} />
          <span>{user.email}</span>
        </div>
        
        <div className="user-detail">
          <Calendar size={16} />
          <span>Created {formatDate(user.created_at)}</span>
        </div>
      </div>
    </div>
  );
}
