# Drawer - Interactive Whiteboard Application

A modern, feature-rich whiteboard application built with Next.js, TypeScript, and Canvas API. Create, draw, and collaborate with an intuitive drawing interface.

## 🎨 Features

### ✅ **Currently Working**
- **Drawing Tools**: Pen, shapes (rectangle, circle, square, diamond, line, arrow)
- **Text Input**: Add text annotations to your canvas
- **Shape Selection**: Click on any drawn shape to select it
- **Interactive Option Menu**: 
  - Color picker with 7 predefined colors
  - Opacity slider (0-100%)
  - Delete and copy actions
- **Canvas Navigation**: Pan and zoom functionality
- **Persistent Storage**: All drawings are saved locally
- **Responsive Design**: Works on desktop and mobile devices

### 🚧 **Work in Progress**
- Shape transformation (resize, rotate)
- Advanced text formatting options
- Image upload and manipulation
- Undo/Redo functionality
- Export options (PNG, SVG, PDF)
- Real-time collaboration
- Layer management
- Custom brush sizes and styles

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Canvas**: HTML5 Canvas API
- **State Management**: React Context API
- **Storage**: LocalStorage
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd drawer
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) (or the port shown in terminal)

## 📖 How to Use

### Drawing
1. **Select a tool** from the navigation bar
2. **Click and drag** on the canvas to draw
3. **Release** to complete the shape

### Shape Selection & Editing
1. **Click on any shape** to select it
2. **Option menu appears** with editing controls
3. **Change color** by clicking color buttons
4. **Adjust opacity** using the slider
5. **Delete shape** with the trash icon
6. **Click empty space** to deselect

### Navigation
- **Pan**: Click and drag with hand tool
- **Zoom**: Use mouse wheel or pinch gestures
- **Reset**: Use zoom controls in the interface

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── (app)/             # App routes
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── Canvas.tsx         # Main canvas component
│   ├── OptionMenu/        # Shape editing menu
│   ├── shapes/           # Drawing shape implementations
│   └── ...               # Other UI components
├── context/              # React contexts
│   ├── colorContext.tsx  # Color management
│   ├── cursorContext.tsx # Tool state
│   ├── dataContext.tsx   # Data management
│   └── selectionContext.tsx # Shape selection
├── helper/               # Utility functions
├── math/                # Mathematical utilities
├── types/               # TypeScript definitions
└── utils/               # General utilities
```

## 🎯 Key Components

### Canvas Component
- Handles all drawing interactions
- Manages shape creation and rendering
- Implements selection and editing logic

### Option Menu
- Context-aware shape editing
- Real-time property updates
- Persistent storage integration

### Shape System
- Modular shape implementations
- Consistent rendering pipeline
- Hit detection for selection

## 🔧 Development

### Adding New Shapes
1. Create shape function in `src/components/shapes/`
2. Add to renderer switch statement
3. Update hit detection logic
4. Add to navigation types

### Adding New Properties
1. Update `Shape` interface in `src/types/shape.ts`
2. Modify shape creation in Canvas
3. Add UI controls in OptionMenu
4. Update rendering logic

### State Management
- **Color Context**: Global color settings
- **Cursor Context**: Active tool state
- **Selection Context**: Shape selection and editing
- **Data Context**: File and data management

## 🐛 Known Issues

- Some advanced features are still in development
- Mobile touch interactions may need refinement
- Performance optimization needed for large drawings
- Export functionality not yet implemented

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🚀 Roadmap

- [ ] Advanced shape transformations
- [ ] Real-time collaboration
- [ ] Export/Import functionality
- [ ] Plugin system
- [ ] Performance optimizations
- [ ] Mobile app version

---

**Note**: This is a work in progress. Some features may not be fully functional yet. Check the "Currently Working" section for stable features.