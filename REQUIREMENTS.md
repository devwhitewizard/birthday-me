# Project Setup & Requirements Guide

This document outlines the technical requirements and configuration steps necessary to successfully run and maintain the Birthday Surprise application.

## 📋 System Requirements

- **Node.js**: Version 18.0.0 or higher.
- **npm**: Version 9.0.0 or higher.
- **Modern Browser**: Chrome, Firefox, Safari, or Edge (for CSS blur and animation support).

## 🛠️ Core Configuration

To ensure the application works correctly, the following configuration files must be present and correctly set up:

### 1. Tailwind CSS (v3) Setup
We are using Tailwind CSS v3 via PostCSS. This is the most stable configuration for this project.

- **`postcss.config.js`**:
  ```javascript
  export default {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
  ```
- **`tailwind.config.js`**: Must include paths to all components in the `content` array so Tailwind can generate the necessary classes.
- **`src/index.css`**: Must contain the following directives at the top:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

### 2. Vite Configuration
- **`vite.config.ts`**: Uses `@vitejs/plugin-react-swc` and includes the `@` path alias for cleaner imports.

### 3. Path Aliases
- **`tsconfig.app.json`**: Configured with `baseUrl: "."` and `paths: { "@/*": ["./src/*"] }`.

## 🚀 Step-by-Step Success Checklist

1. **Clean Slate**: If you encounter dependency issues, delete `node_modules` and `package-lock.json` and run `npm install`.
2. **Configuration Check**: Ensure `tailwind.config.js` and `postcss.config.js` are in the root directory.
3. **Environment**: Ensure you are using the SWC version of the React plugin in `vite.config.ts`.
4. **Build Verification**: Run `npm run build` to ensure there are no TypeScript or bundling errors before deployment.
