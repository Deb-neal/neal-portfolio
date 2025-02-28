# CLAUDE.md - Project Guidelines

## Build and Test Commands
- Start development: `npm start` or `yarn start`
- Build for production: `npm run build` or `yarn build`
- Run all tests: `npm test` or `yarn test`
- Run single test: `npm test -- <TestFileName>` (e.g., `npm test -- App.test.js`)
- Lint codebase: `npm run lint` or `yarn lint`
- Deploy to GitHub Pages: `npm run deploy` or `yarn deploy`

## Code Style Guidelines
- **Formatting**: Uses Prettier with 80 character line width, 2-space indentation
- **Linting**: ESLint with React, Hooks, and Accessibility plugins
- **Imports**: Group imports by: 1) React/libraries 2) Components 3) Assets/styles
- **React Components**: Use functional components with hooks, not class components
- **JSX**: Use single quotes for JSX attributes, one attribute per line for multiple attributes
- **CSS**: Component-scoped CSS files named after components (e.g., `Component.css`)
- **Naming**: PascalCase for components, camelCase for functions/variables, kebab-case for CSS classes
- **Error Handling**: Use try/catch blocks for async operations, provide user-friendly error messages
- **File Structure**: Follow the component folder pattern with component-specific files grouped together