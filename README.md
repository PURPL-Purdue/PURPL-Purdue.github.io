# PURPL-Purdue.github.io

Welcome to the PURPL-Purdue.github.io repository. This project is built with React.js and Tailwind CSS to provide a modern and responsive web experience.

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
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
    ```
    
## Folder Structure

    project-name/
    │
    ├── public/
    │   ├── favicon            
    │   └── fonts              # Custom fonts
    │   └── images       
    │
    ├── src/
    │   ├── assets/            
    │   ├── components/        # Reusable UI components
    |   ├── json/              # Consolidated repository of business-facing static information
    │   ├── pages/            
    │       ├── facilities/    # Folder containing infrastructure project pages
    │       ├── projects/      # Folder containing project pages
    │       ├── Landing.js     
    │       ├── Contact.js    
    │       ├── etc....    
    │   ├── App.js            
    │   └── index.js          
    │
    ├── .gitignore            
    ├── package.json          
    └── tailwind.config.js     # Tailwind CSS configuration (eg. theme colors)


## Copilot Context and Instructions

Use tailwind where possible to style elements. Follow the stylistic choices made in other files like `Team.js` -- attempt to maintain a cohesive and consistent code structure. Following a file change, read the output of the web server to determine if adjustments need to be made.

Do not use random fonts and colors. Use fonts and theme colors and reference them by name as they are defined in `tailwind.config.js` to style elements. It is important to maintain consistent theming across the site.

    
