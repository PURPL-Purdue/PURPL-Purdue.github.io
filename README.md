# PURPL-Purdue.github.io

Welcome to the PURPL-Purdue.github.io repository. This project is built with React.js and Tailwind CSS to provide a modern and responsive web experience.

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [GitHub Actions](#github-actions)
- [Contributing](#contributing)

## Installation

To get started with this project, you will need: 

- git
- a code editor, eg. Visual Studio Code
- npm

## Getting Started

1. **Clone the Repository:**

   ```
   git clone git@github.com:PURPL-Purdue/PURPL-Purdue.github.io.git
   cd PURPL-Purdue.github.io
   ```

2. **Open in Preferred Code Editor**

3. **Install Dependencies**

    ```
    npm install
    ```

4. **Start the Development Server**

    ```
    npm start
    npm start --reset-cache
    ```
    
## Folder Structure

    PURPL-Purdue.github.io/
    │
    ├── .github/workflows/      # GitHub Actions
    │
    ├── public/
    │   ├── CNAME               
    │   ├── fonts/
    │   └── images/
    │
    ├── src/
    │   ├── components/         # Reusable UI, grouped by domain
    │   ├── json/                # Static content
    │   ├── pages/                # Route-level components
    │   ├── App.js
    │   └── index.js
    |
    ├── .gitignore
    ├── package.json
    └── tailwind.config.js

## CI/CD

- **`ci-cd.yml`** — deploys to GitHub Pages on push to `master`
- **`eslint.yml`** — runs linter on push/PR to `master`
- **`deploy-branch-to-preview-url.yml`** — deploys to Render and comments the preview URL for PRs into `master`
