# 📝 Blogify - Modern Blogging Platform

A beautiful, modern blogging platform built with Node.js, Express, MongoDB, and EJS. Share your thoughts, stories, and ideas with the world through an intuitive and visually stunning interface.


## ✨ Features

### 🎨 **Modern UI/UX**
- **Beautiful gradient design** with smooth animations
- **Responsive layout** that works on all devices
- **Interactive elements** with hover effects and transitions
- **Professional typography** using Inter font
- **Icon integration** with Font Awesome

### 📝 **Blog Management**
- **Create and publish blogs** with rich content
- **Upload cover images** for visual appeal
- **Real-time blog listing** with beautiful cards
- **Detailed blog view** with author information
- **Comment system** for community engagement

### 👤 **User Authentication**
- **Secure user registration** and login
- **JWT-based authentication** with cookies
- **User profiles** with avatar support
- **Protected routes** for authenticated users

### 💬 **Community Features**
- **Comment system** on blog posts
- **User avatars** and profile information
- **Author attribution** on all content
- **Social interaction** between users

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/blogify.git
   cd blogify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   Then edit `.env` file with your configuration:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://127.0.0.1:27017/blogify
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   ```

4. **Set up MongoDB**
   - Make sure MongoDB is running on your system
   - The app will automatically connect using your MONGODB_URI

5. **Start the application**
   ```bash
   npm start
   ```

6. **Visit the application**
   - Open your browser and go to `http://localhost:3000`

## 📁 Project Structure

```
blogify/
├── controllers/          # Route controllers
├── middlewares/         # Authentication middleware
├── models/             # MongoDB schemas
│   ├── blog.js        # Blog model
│   ├── user.js        # User model
│   └── comment.js     # Comment model
├── public/            # Static assets
│   ├── images/        # Default images
│   └── uploads/       # User uploaded files
├── routes/            # Express routes
│   ├── blog.js        # Blog routes
│   └── user.js        # User routes
├── services/          # Business logic
│   └── authentication.js
├── views/             # EJS templates
│   ├── partials/      # Reusable components
│   ├── home.ejs       # Homepage
│   ├── blog.ejs       # Blog detail page
│   ├── addBlog.ejs    # Create blog page
│   ├── signin.ejs     # Login page
│   └── signup.ejs     # Registration page
├── index.js           # Main application file
└── package.json       # Dependencies and scripts
```

## 🛠️ Technologies Used

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Multer** - File upload handling
- **JWT** - Authentication tokens

### Frontend
- **EJS** - Template engine
- **Bootstrap 5** - CSS framework
- **Font Awesome** - Icons
- **Inter Font** - Typography
- **Custom CSS** - Styling and animations

### Development
- **Nodemon** - Development server
- **Cookie Parser** - Cookie handling

## 🎯 Key Features Explained

### Authentication System
```javascript
// JWT-based authentication with secure token generation
const token = createTokenForUser(user);
// Includes user ID, email, fullName, profileImageURL, and role
```

### File Upload
```javascript
// Multer configuration for image uploads
const storage = multer.diskStorage({
  destination: './public/uploads',
  filename: (req, file, cb) => {
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  }
});
```

### Blog Creation
```javascript
// Create new blog with cover image
const blog = await Blog.create({
  title,
  body,
  createdBy: req.user._id,
  coverImageURL: `/uploads/${req.file.filename}`,
});
```

## 🎨 UI/UX Highlights

### Modern Design Elements
- **Gradient backgrounds** with animated shapes
- **Card-based layouts** with hover effects
- **Smooth transitions** and micro-interactions
- **Responsive grid system** for blog listings
- **Professional color scheme** with purple/blue gradients

### User Experience
- **Intuitive navigation** with clear call-to-actions
- **Visual feedback** on all interactive elements
- **Consistent design language** throughout the app
- **Mobile-first responsive design**

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
PORT=3000
MONGODB_URI=mongodb://127.0.0.1:27017/blogify
JWT_SECRET=your_jwt_secret_here
```

### Database Setup
The application will automatically create the necessary collections:
- `users` - User accounts and profiles
- `blogs` - Blog posts and content
- `comments` - User comments on blogs

## 🚀 Deployment

### Local Development
```bash
npm run dev
```

### Production
```bash
npm start
```

### Docker (Optional)
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



## 🙏 Acknowledgments

- **Bootstrap** for the responsive framework
- **Font Awesome** for the beautiful icons
- **Inter Font** for the modern typography
- **MongoDB** for the reliable database
- **Express.js** for the robust web framework

## 📞 Support

If you have any questions or need help with the project:

- Create an issue on GitHub
- Contact the maintainers
- Check the documentation

---



*Share your stories, inspire others, and build a community of writers and readers.* 
