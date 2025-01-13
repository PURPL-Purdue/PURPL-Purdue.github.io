# PURPL-Purdue.github.io

Welcome to the PURPL-Purdue.github.io repository. This project is built with React.js and Tailwind CSS to provide a modern and responsive web experience.

## Table of Contents

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)

## Installation

To get started with this project, you'll need to set up your development environment by installing the following tools on your machine. 

- git
- a code editor, eg. Visual Studio Code
- npm

## Getting Started

1. **Clone the Repository:**

   ```bash
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

    After making modifications to the code, you can view those changes at the specified localhost url.
    
## Folder Structure

    project-name/
    │
    ├── public/
    │   ├── favicon             # Favicons
    │   └── fonts               # Custom fonts
    │   └── images              # All other images
    │
    ├── src/
    │   ├── assets/            # Other static assets that get bundled with the webpack build
    │   ├── components/        # Reusable React components (eg. buttons, navigation)
    │   ├── pages/             # Page components (eg. the Mug Project Page)
    │       ├── facilities/    # Pages about club facilities
    │       ├── projects/      # Pages about club projects
    │       ├── Landing.js     # Other pages (only some listed for brevity)
    │       ├── Contact.js    
    │       ├── Team.js     
    │   ├── App.js             # Main React component
    │   └── index.js           # Entry point for the React application, defines routes
    │
    ├── .gitignore             # Specifies files and directories to ignore in Git
    ├── package.json           # Project metadata and dependencies
    └── tailwind.config.js     # Tailwind CSS configuration (eg. theme colors, fonts)
    

## Contributing

Do you want to make a modification to the website? Please follow the steps below, preferably using Git and a local code editor. If you do not want to install those tools you can also attempt to do this directly using the `github.com` interface. 

1. **Create a branch off master**

**Method 1:**

Git CLI (Command-Line):
```
git checkout master
git checkout -b mybranch    # eg. fix-team-page, ui-changes, add-email-feature 
```

Git GUI: Should be pretty straightforward, instructions are not included.

**Method 2:**

At https://github.com/PURPL-Purdue/PURPL-Purdue.github.io/branches, click the `New Branch` button and select `master` as the source. Name your branch accordingly.

2. **Make your changes**

Identify the file you want to change (reference the folder structure) and make your modifications. Ensure you are on your newly created branch.

3. **Verify your changes**

If possible, run the development server and check that everything looks correct.

4. **Commit and push your changes**

**Method 1:**

Git CLI:
```
git add .                               # add all changes to the commit. you can also specify specific files to add
git commit -m "Your commit message"     # briefly describe your changes, eg. Updated subtitle on Mug page
```

**Method 2:**

Create a commit via the GitHub interface and name it properly.

5. **Create a pull request**

Go to `https://github.com/PURPL-Purdue/PURPL-Purdue.github.io/pulls` and create a pull request to `base: master` from `compare: your-branch`. 

Request a pull request reviewer. Once approved, your changes will be deployed to the production site.