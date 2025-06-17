import { Users, Activity } from 'lucide-react';
import { useState, useEffect } from 'react';
import { apiService } from '../services/api';

interface HeaderProps {
  userCount: number;
}

export function Header({ userCount }: HeaderProps) {
  const [healthStatus, setHealthStatus] = useState<'checking' | 'healthy' | 'error'>('checking');

  useEffect(() => {
    const checkHealth = async () => {
      try {
        await apiService.healthCheck();
        setHealthStatus('healthy');
      } catch {
        setHealthStatus('error');
      }
    };

    checkHealth();
    const interval = setInterval(checkHealth, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-left">
          <div className="header-title">
            <Users size={32} />
            <h1>User Management</h1>
          </div>
          <p className="header-subtitle">
            FastAPI Backend Integration
          </p>
        </div>

        <div className="header-right">
          <div className="stats-card">
            <span className="stats-count">{userCount}</span>
            <span className="stats-label">Total Users</span>
          </div>

          <div className={`health-indicator ${healthStatus}`}>
            <Activity size={16} />
            <span>
              {healthStatus === 'checking' && 'Checking...'}
              {healthStatus === 'healthy' && 'API Healthy'}
              {healthStatus === 'error' && 'API Error'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
