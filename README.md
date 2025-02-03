# Kanban Board Project

Live Demo: [Flow Master](https://flow-master.netlify.app/)

## Overview
An interactive Kanban board built with React that allows users to visualize and organize tickets based on different grouping and sorting criteria. The application fetches data from an API and provides a flexible interface for managing tickets effectively.

## Features

### Grouping Options
- **By Status**: View tickets grouped by their current status
- **By User**: Organize tickets based on assigned team members
- **By Priority**: Group tickets according to priority levels (Urgent to No Priority)

### Sorting Options
- **Priority**: Sort tickets in descending order of priority (Urgent → No Priority)
- **Title**: Sort tickets alphabetically by title

### Priority Levels
- Urgent (Level 4)
- High (Level 3)
- Medium (Level 2)
- Low (Level 1)
- No Priority (Level 0)

### Additional Features
- Persistent view state across page reloads
- Responsive design for various screen sizes
- Pure CSS styling without external libraries
- Clean and intuitive user interface

## Technical Details

### Tech Stack
- React.js
- Pure CSS (no external styling libraries)
- API Integration

### API Endpoint
```
https://api.quicksell.co/v1/internal/frontend-assignment
```

## Setup and Installation

1. Clone the repository
```bash
git clone https://github.com/kamil26300/flow-master.git
```

2. Install dependencies
```bash
cd flow-master
npm install
```

3. Start the development server
```bash
npm start
```

4. Build for production
```bash
npm run build
```

### State Management
- Local state for UI controls
- localStorage for persisting view preferences
- Efficient data fetching and caching

## Design Decisions
1. Pure React.js implementation without additional frameworks
2. Custom CSS for pixel-perfect UI matching
3. Component-based architecture for maintainability
4. Optimized business logic for smooth performance

## Future Improvements
- Add drag-and-drop functionality
- Implement ticket editing
- Add search and filter capabilities
- Enhance mobile responsiveness