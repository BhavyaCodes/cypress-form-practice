Built using nextjs, material-ui, react-hook-form and cypress for testing
Husky for pre-commit git hooks

Requirements to run locally - node (tested on 14.20.0) and yarn (tested on 1.22.19)

## Getting Started

First, install dependencies

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

Build the app:

```bash
yarn build
```

Run build

```bash
yarn start
```

## Testing application with cypress

Update `WEBSITE_URL` in `cypress.json` if required

```bash
yarn cy:headless
```

# OR

```bash
yarn cy:headed
```
