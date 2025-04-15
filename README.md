# Mac mini Product Landing Page

[![Live Demo(https://adarshraj5206.github.io/mac-mini/)]


A responsive, animated product landing page for the Apple Mac mini, showcasing its features with smooth scroll animations and interactive elements.

![screencapture-adarshraj5206-github-io-mac-mini-2025-04-16-00_04_09 (1)](https://github.com/user-attachments/assets/19ac6d30-4baa-43e1-8f4e-6b4e1bc5ee2e)


## Features ✨

- **Interactive Animations**:
  - Smooth scroll-triggered animations for hero text
  - Animated performance stats that appear on scroll
  - Interactive model comparison table

- **Responsive Design**:
  - Fully responsive layout for all device sizes
  - Mobile-friendly navigation menu
  - Adaptive image sizing

- **Apple-like UI**:
  - Clean, minimalist design matching Apple's aesthetic
  - Gradient text effects
  - Smooth transitions and hover effects

- **User Experience**:
  - Back-to-top button with smooth scrolling
  - Interactive tech specs comparison
  - Engaging product showcase sections

## Technologies Used 🛠️

- **Frontend**:
  - HTML5, CSS3, JavaScript
  - Tailwind CSS for utility-first styling
  - Remix Icon for icons
  - Custom animations with CSS and JavaScript

- **Tools**:
  - IntersectionObserver API for scroll animations
  - Responsive design with mobile-first approach
  - Smooth scrolling behavior

## Live Demo 🌐

Experience the website live: [https://adarshraj5206.github.io/mac-mini/](https://adarshraj5206.github.io/mac-mini/)

## Installation 💻

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/adarshraj5206/mac-mini.git
   ```
2. Navigate to the project directory:
   ```bash
   cd mac-mini
   ```
3. Open `index.html` in your browser:
   ```bash
   open index.html  # On macOS
   # or
   start index.html # On Windows
   ```

## Project Structure 📂

```
mac-mini/
├── index.html          # Main HTML file
├── README.md           # Project documentation
├── images/             # All website images
│   ├── hero_1__gva2lbdgzpua_medium_2x.jpg
│   ├── m2__ervje1p52cya_large_2x.png
│   ├── m2_pro__bod7oesbsble_large_2x.png
│   └── ...
├── style.css           # Custom CSS styles
└── (optional assets)
```

## Key Code Features 💡

1. **Scroll Animations**:
   ```javascript
   const heroTextObserver = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add('active');
       }
     });
   }, { threshold: 0.5 });
   ```

2. **Responsive Navigation**:
   ```html
   <nav class="upper-nav flex flex-wrap justify-between items-center py-2 bg-[#1d1d1f] px-4 md:px-[150px]">
     <!-- Desktop navigation -->
     <div class="hidden md:flex flex-1 justify-center space-x-4">
       <!-- Navigation items -->
     </div>
     <!-- Mobile menu button -->
     <button class="md:hidden text-gray-300 hover:text-white">
       <i class="ri-menu-line text-[20px]"></i>
     </button>
   </nav>
   ```

3. **Performance Stats Animation**:
   ```html
   <div class="stat-card">
     <p class="text-blue-500 text-lg sm:text-2xl lg:text-3xl font-bold mb-1">
       <span class="stat-number">12</span>
       <span class="stat-number delay-100">×</span>
     </p>
     <p class="text-white text-xs sm:text-sm md:text-base opacity-90">
       Faster than previous gen
     </p>
   </div>
   ```

## Contributing 🤝

Contributions are welcome! Please follow these steps:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## Acknowledgments 🙏

- Apple Inc. for design inspiration
- Tailwind CSS team for the awesome utility framework
- Remix Icon for the beautiful icons

---

Made with ❤️ by [Adarsh Vardhan](https://github.com/adarshraj5206)
