# Simply Chocolate 🍫

A modern landing page for a craft chocolate company, built to demonstrate precise adaptive layout techniques, interactive UI components, and a professional development workflow using Vite.

🔗 **[Live Demo](https://oksanavakuliak.github.io/simply-chocolate/)** | 🎨 **[Figma Design](https://www.figma.com/design/b5rrShBUGfbcx8wXqsHN5x/Simply-Chocolate--Copy---Copy-?m=auto&t=FWkXvjkmHi0dDMoR-6)**

## 🚀 Technologies Used

- **HTML5 & CSS3**: Semantic markup and modern styling.
- **JavaScript (ES6+)**: Logic for UI interactions.
- **Vite**: Next-generation frontend tooling for fast development.
- **Swiper.js**: Modern touch sliders for product showcases and reviews.
- **GH-Pages**: Automated deployment workflow.

## 🌟 Key Features

- **Adaptive Layout**: The design is strictly optimized for specific breakpoints (Mobile 320px+, Tablet 768px+, Desktop 1200px+) to ensure pixel-perfect representation of the Figma design.
- **Interactive Sliders**: Implemented custom-styled Swiper.js carousels for the "Top Sellers" and "Reviews" sections.
- **Form Validation**: Client-side validation using Regular Expressions (RegEx) for email and phone number inputs to ensure data integrity.
- **Modals & Navigation**: Smooth modal windows for orders/reviews and a functional mobile menu with scroll-lock.

## 🛠️ Development Challenges & Solutions

### 1. Swiper.js Layout Conflicts

**Challenge:** In the "Reviews" section, user avatars were positioned to overflow the card boundaries. Initially, they were being clipped by the default `overflow: hidden` property of the Swiper container.
**Solution:** Instead of struggling with complex overflow rules, I calculated and implemented a fixed height for the slider container and carefully centered the cards. This provided enough internal space for the overlapping avatars to be fully visible while maintaining the slider's functional integrity.

### 2. Deployment of Modular JS (Vite)

**Challenge:** Deploying a project that uses npm modules directly to GitHub Pages often results in "Failed to resolve module specifier" errors because browsers cannot read the `node_modules` folder.
**Solution:** Configured a professional build pipeline using **Vite** and **gh-pages**. I automated the process where the project is bundled into a production-ready `dist` folder, ensuring all dependencies like Swiper.js are correctly optimized and accessible after deployment.

## 💻 How to Run Locally

1. Clone the repository:

   ```bash
   git clone [https://github.com/OksanaVakuliak/simply-chocolate.git](https://github.com/OksanaVakuliak/simply-chocolate.git)
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
