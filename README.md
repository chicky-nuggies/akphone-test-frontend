# User Management Frontend

A modern React frontend application that connects to a FastAPI backend to display and manage users.

## Features

- 🎨 Modern, responsive UI with gradient design
- 📊 Real-time API health monitoring
- 👥 User listing with detailed information
- 🔄 Auto-refresh and manual refresh capabilities
- 📱 Mobile-friendly responsive design
- ⚡ Built with React 19 + TypeScript + Vite

## Prerequisites

- Node.js 18+
- FastAPI backend running on `http://localhost:8000` (or configure different URL)

## Installation

1. Install dependencies:

```bash
npm install
```

2. (Optional) Configure API URL:

```bash
cp .env.example .env.local
# Edit .env.local to set VITE_API_BASE_URL if different from http://localhost:8000
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Backend API Requirements

Your FastAPI backend should provide these endpoints:

- `GET /api/users` - Returns array of user objects
- `GET /api/health` - Health check endpoint

### Expected User Object Structure:

```json
{
  "id": 1,
  "name": "Alice Smith",
  "email": "alice@example.com",
  "created_at": "2025-06-03T16:42:30.455061"
}
```

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # App header with stats
│   ├── UserCard.tsx    # Individual user card
│   ├── Loading.tsx     # Loading spinner
│   └── ErrorMessage.tsx# Error handling
├── services/           # API services
│   └── api.ts         # Axios API client
├── types/             # TypeScript types
│   └── api.ts         # API response types
├── config/            # Configuration
│   └── index.ts       # App configuration
└── App.tsx            # Main application
```

## Technologies Used

- **React 19** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Axios** - HTTP Client
- **Lucide React** - Icons
- **CSS3** - Styling with CSS Grid & Flexbox

## API Integration

The app automatically:

- Fetches users on load
- Monitors API health every 30 seconds
- Handles loading states
- Provides error handling with retry functionality
- Supports manual refresh

## Troubleshooting

**Can't connect to API:**

- Ensure your FastAPI backend is running on `http://localhost:8000`
- Check CORS settings in your FastAPI application
- Verify the API endpoints are accessible

**CORS Issues:**
Add this to your FastAPI application:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```
