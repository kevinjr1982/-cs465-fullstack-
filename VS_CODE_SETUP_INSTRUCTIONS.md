# Travlr Angular SPA - Visual Studio Code Setup Instructions

## 🚀 **Quick Start Guide**

This guide will help you set up and run the complete Travlr Angular SPA in Visual Studio Code.

## 📋 **Prerequisites**

Before starting, ensure you have the following installed:

### **Required Software**
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (v5.0 or higher) - [Download here](https://www.mongodb.com/try/download/community)
- **Visual Studio Code** - [Download here](https://code.visualstudio.com/)
- **Git** (optional) - [Download here](https://git-scm.com/)

### **Recommended VS Code Extensions**
- Angular Language Service
- TypeScript Importer
- Prettier - Code formatter
- ES7+ React/Redux/React-Native snippets
- MongoDB for VS Code
- REST Client (for API testing)

## 📁 **Project Structure**

```
travlr/
├── app.js                          # Main Express server
├── package.json                    # Backend dependencies
├── app_api/                        # Backend API
│   ├── controllers/                # API controllers
│   ├── models/                     # MongoDB models
│   ├── routes/                     # API routes
│   ├── middleware/                 # Authentication middleware
│   └── database/                   # Database utilities
├── travlr-client/                  # Angular frontend
│   ├── src/app/                    # Angular application
│   ├── package.json                # Frontend dependencies
│   └── angular.json                # Angular configuration
└── Documentation/                  # Project documentation
```

## 🔧 **Setup Instructions**

### **Step 1: Open Project in VS Code**
1. Extract the project files to your desired location
2. Open Visual Studio Code
3. File → Open Folder → Select the `travlr` folder
4. VS Code will open with the complete project structure

### **Step 2: Install Backend Dependencies**
1. Open VS Code terminal (Terminal → New Terminal)
2. Ensure you're in the root `travlr` directory
3. Run the following commands:
```bash
# Install backend dependencies
npm install

# Verify installation
npm list
```

### **Step 3: Install Frontend Dependencies**
1. Navigate to the Angular client directory:
```bash
cd travlr-client
```

2. Install Angular dependencies:
```bash
# Install frontend dependencies
npm install

# Install Angular CLI globally (if not already installed)
npm install -g @angular/cli

# Verify Angular installation
ng version
```

### **Step 4: Start MongoDB**
1. **Windows**: Start MongoDB service from Services panel
2. **macOS**: 
```bash
brew services start mongodb-community
```
3. **Linux**: 
```bash
sudo systemctl start mongod
```

### **Step 5: Seed the Database**
1. Return to the root directory:
```bash
cd ..
```

2. Seed the database with sample data:
```bash
node app_api/database/seed.js
```

You should see output confirming:
- Admin user created
- 5 sample trips added

### **Step 6: Start the Backend Server**
1. In the root directory, start the Express server:
```bash
npm start
```

2. Verify the server is running:
- You should see: "Server running on port 3000"
- Test API: Open browser to `http://localhost:3000/api/trips`

### **Step 7: Start the Angular Development Server**
1. Open a new terminal (Terminal → New Terminal)
2. Navigate to the Angular client:
```bash
cd travlr-client
```

3. Start the Angular development server:
```bash
ng serve
```

4. Wait for compilation to complete
5. Open browser to `http://localhost:4200`

## 🌐 **Accessing the Application**

### **Frontend URLs**
- **Main Application**: http://localhost:4200
- **Trip List**: http://localhost:4200/trips
- **Add Trip**: http://localhost:4200/add-trip (requires login)
- **Login**: http://localhost:4200/login

### **Backend API URLs**
- **API Base**: http://localhost:3000/api
- **All Trips**: http://localhost:3000/api/trips
- **Authentication**: http://localhost:3000/api/auth/login

### **Default Admin Credentials**
- **Email**: admin@travlr.com
- **Password**: admin123

## 🧪 **Testing the Application**

### **1. Basic Functionality Test**
1. Open http://localhost:4200
2. You should see the trip listing page
3. Verify 5 sample trips are displayed
4. Check responsive design by resizing browser

### **2. Authentication Test**
1. Click "Login" or navigate to http://localhost:4200/login
2. Use admin credentials: admin@travlr.com / admin123
3. Verify successful login and navigation menu appears

### **3. CRUD Operations Test**
1. **Create**: Click "Add New Trip" and fill out the form
2. **Read**: Verify new trip appears in the list
3. **Update**: Click "Edit" on any trip and modify details
4. **Delete**: Click "Delete" on any trip and confirm

### **4. API Testing with Postman**
1. Import the provided Postman collection
2. Run the "Login Admin" test first
3. Execute all CRUD operation tests
4. Verify all tests pass

## 🛠 **Development Workflow**

### **VS Code Workspace Setup**
1. **Multi-root Workspace**: Add both backend and frontend as workspace folders
2. **Terminal Management**: Use split terminals for backend and frontend
3. **Debugging**: Configure launch.json for both Node.js and Angular debugging

### **Recommended VS Code Settings**
Create `.vscode/settings.json` in the root directory:
```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports": true
  },
  "files.exclude": {
    "**/node_modules": true,
    "**/dist": true
  }
}
```

### **Debugging Configuration**
Create `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Backend",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/app.js",
      "env": {
        "NODE_ENV": "development"
      }
    },
    {
      "name": "Launch Angular",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/travlr-client/node_modules/@angular/cli/bin/ng",
      "args": ["serve"],
      "cwd": "${workspaceFolder}/travlr-client"
    }
  ]
}
```

## 🔍 **Troubleshooting**

### **Common Issues and Solutions**

#### **Backend Issues**
- **Port 3000 in use**: Change port in `app.js` or kill existing process
- **MongoDB connection failed**: Ensure MongoDB is running
- **Dependencies missing**: Run `npm install` in root directory

#### **Frontend Issues**
- **Angular CLI not found**: Install globally with `npm install -g @angular/cli`
- **Port 4200 in use**: Angular will prompt to use different port
- **Build errors**: Check TypeScript errors in VS Code Problems panel

#### **Database Issues**
- **Seeding fails**: Ensure MongoDB is running and accessible
- **No data displayed**: Re-run the seed script
- **Connection errors**: Check MongoDB service status

### **Performance Optimization**
1. **VS Code**: Disable unnecessary extensions for better performance
2. **Angular**: Use `ng serve --aot` for ahead-of-time compilation
3. **MongoDB**: Ensure proper indexing for large datasets

## 📊 **Development Tools**

### **VS Code Extensions for Enhanced Development**
- **Angular Snippets**: Quick component and service generation
- **TypeScript Hero**: Auto-import and organize imports
- **Bracket Pair Colorizer**: Better code readability
- **GitLens**: Enhanced Git integration
- **Thunder Client**: API testing within VS Code

### **Browser Developer Tools**
- **Angular DevTools**: Chrome extension for Angular debugging
- **Redux DevTools**: State management debugging
- **Network Tab**: Monitor API requests and responses

## 🚀 **Production Deployment**

### **Build for Production**
1. **Frontend Build**:
```bash
cd travlr-client
ng build --configuration production
```

2. **Backend Optimization**:
- Set NODE_ENV=production
- Configure production database
- Enable HTTPS and security headers

### **Environment Configuration**
Create environment files for different stages:
- `environment.ts` (development)
- `environment.prod.ts` (production)
- `environment.staging.ts` (staging)

## 📞 **Support and Resources**

### **Documentation**
- **Angular**: https://angular.io/docs
- **Express.js**: https://expressjs.com/
- **MongoDB**: https://docs.mongodb.com/
- **Bootstrap**: https://getbootstrap.com/docs/

### **Getting Help**
1. Check VS Code Problems panel for errors
2. Review browser console for frontend issues
3. Check terminal output for backend errors
4. Use VS Code debugger for step-by-step debugging

## ✅ **Verification Checklist**

Before considering setup complete, verify:
- [ ] Backend server running on port 3000
- [ ] Frontend server running on port 4200
- [ ] MongoDB connected and seeded
- [ ] Can view trip list without authentication
- [ ] Can login with admin credentials
- [ ] Can perform CRUD operations
- [ ] All tests pass in Postman collection
- [ ] No console errors in browser
- [ ] Responsive design works on mobile

## 🎯 **Next Steps**

After successful setup:
1. Explore the codebase to understand the architecture
2. Try modifying components and see changes in real-time
3. Add new features or enhance existing ones
4. Run the Postman tests to understand API behavior
5. Experiment with different screen sizes and devices

---

**Happy Coding! 🚀**

Your Travlr Angular SPA is now ready for development and testing in Visual Studio Code!

