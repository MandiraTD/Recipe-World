# Recipe-World

## 🎨 Design Rationale & User-Centered Choices

### Colors

Primary (#1D641D – Green): Used for main CTAs, navigation highlights, and visual emphasis. Green is associated with freshness and food, which fits a recipe website. It also conveys positivity and motivates users to explore recipes.

Secondary (#852221 – Red): Applied to error states and critical actions. Red instantly grabs attention, ensuring users don’t miss important warnings.

Accent (#E2AE14 – Yellow): Used for highlights, ratings, or badges. Yellow provides contrast and warmth, helping users quickly identify important elements without overwhelming the interface.

Text (#000000 – Black): Ensures maximum readability for body text and headings.

Background (#FFFFFF – White): Keeps the design clean, simple, and distraction-free, allowing recipe content and images to stand out.

### Typography & Hierarchy

Font Family – Arial: Chosen for its wide availability, simplicity, and readability across devices. This ensures a consistent experience for all users.

#### Font Sizes:

Large headings (H1, H2) help users quickly scan and understand recipe categories.

Smaller headings and body text are optimized for clarity on desktop, tablet, and mobile, supporting responsive design and accessibility.

### Components

Input Fields: A search bar allows users to quickly find recipes by ingredients or categories. This helps users who want practical, fast results.

Buttons: Clear, distinct button styles guide users to actions like searching recipes or getting random suggestions. The use of green for CTAs ensures they stand out.

Recipe Card: Visually rich recipe previews encourage exploration. Including an image, title, and quick actions (save, favorite) makes it easier for users to engage with content.


## UX Justification – Helping the Target User

The primary target users are home cooks and food enthusiasts who want easy access to recipes. This design supports them by:

Clarity & Simplicity: A minimal color palette and clean typography reduce cognitive load, letting users focus on recipes.

Accessibility Across Devices: Responsive font sizes and simple components ensure usability on desktops, tablets, and mobiles.

Quick Exploration: Search functionality + surprise/random recipe options cater to different user needs (goal-driven vs. discovery-driven users).

Visual Engagement: Recipe images and consistent card layout make browsing enjoyable and intuitive.



## ✨ Features Implemented

1. **Recipe Search & Display**

   * Users can search recipes by **ingredients**, **categories**, or **recipe name**.
   * Displays a list of matching recipes with images and basic info.

2. **Detailed Recipe View**

   * Clicking a recipe opens a **details page**.
   * Shows full recipe information including **name, image, ingredients, and step-by-step instructions**.

3. **Favorites System**

   * Users can **favorite** or **unfavorite** recipes.
   * Favorites are stored and displayed in a **dedicated favorites list** for quick access.

4. **Dynamic Navigation Categories**

   * The navigation bar includes **randomly fetched recipe categories**.
   * Encourages users to explore different types of recipes.

5. **Featured Recipe Section**

   * Includes a “**Surprise Me with Random Recipes**” button.
   * Generates and displays random recipes for discovery and inspiration.



## ⚙️ Setup & Local Development

Follow these steps to set up and run the project on your local machine:

1. **Clone the Repository**

   ```bash
   git clone <your-repository-url>
   ```

2. **Open the Project**

   * Navigate to the cloned folder.
   * Open it in your preferred code editor (e.g., VS Code).

3. **Install Dependencies**
   Inside the project folder, install all required Node.js packages:

   ```bash
   npm install
   ```

4. **Run the Project**
   Start the development server with:

   ```bash
   npm run dev
   ```

5. **View in Browser**

   * After running, you’ll see a local server link in the terminal (usually `http://localhost:5173` or similar).
   * Open it in your browser to explore the project.

