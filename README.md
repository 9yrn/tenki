# Tenki 天気 ⛅️

**Tenki** is a beautiful, minimalist weather application built entirely with vanilla JavaScript. Inspired by traditional Japanese aesthetics (Washi paper textures, sumi ink, and Shippori Mincho typography), it provides real-time weather forecasts with a clean, distraction-free interface and fun dynamic loading screens. 

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

## ✨ Features

- **Real-Time Weather:** Get accurate, up-to-date weather data for any location powered by the Visual Crossing Weather API.
- **Dynamic Loading States:** Enjoy fun, condition-specific kaomoji loading screens based on whether it's sunny, rainy, or cloudy.
- **Unit Toggling:** Seamlessly switch between Metric (°C) and US (°F) units with a single click.
- **Minimalist Aesthetic:** A gorgeous Japanese-oriented brutalist design featuring solid Washi paper colors and elegant serif typography with zero gradients.
- **Error Handling:** Graceful error messages and empty states featuring themed kanji.
- **Responsive Design:** A structured, centralized layout that adapts beautifully to any screen size.

## 🛠 Tech Stack

- **Vanilla JavaScript (ES6+):** Core application logic, DOM manipulation, asynchronous API fetching.
- **Visual Crossing API:** Reliable endpoint for retrieving granular weather data.
- **Webpack 5:** Module bundling, asset management, and development server environment.

## 🚀 Getting Started

If you want to run **Tenki** locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/tenki.git
   cd tenki
   ```

2. **Install the dependencies:**
   ```bash
   npm install
   ```

3. **Spin up the development server:**
   ```bash
   npm start
   ```
   *The app will automatically open in your browser.*

### Building for Production
To bundle the files for deployment, run:
```bash
npm run build
```
This will compile the optimized HTML, CSS, JavaScript, and assets into the `/dist` directory.

## 🌐 Deployment
This project is configured and bundled with Webpack, making the `/dist` folder ready for out-of-the-box deployment to static hosting platforms like Vercel, Netlify, or GitHub Pages.

