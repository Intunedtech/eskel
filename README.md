# Eskel Library

Vite used in [library mode](https://vitejs.dev/guide/build.html#library-mode). Also checkout [lib](https://vitejs.dev/config/build-options.html#build-lib)

## Project structure

:file_folder: lib/
- :page_facing_up: main.ts
  - _Entrypoint for library when external applications are importing this library_
- :page_facing_up: vite-env.d.ts
  - _special vite file, copied from src, for correct typescript definition._

:file_folder: public/

:file_folder: src/

:page_facing_up: tsconfig-build.json:
- _Special tsconfig for production build. Configured within package.json > scripts > build. Extends `tsconfig.json`._

:page_facing_up: vite.config.ts:
- _vite configuration file_

:page_facing_up: package.json:
  - "sideEffects":
    - To prevent the CSS files from being accidentally removed by the consumer's tree-shaking efforts, package.json specifies the generated CSS as side effects:
  - "peerDependencies":
    - special dependency to specify the consuming application must have these packages installed to use this package.
  - "files":
    - files to be packed into the distributed package
  - "main":
    - main entrypoint to library
  - "types":
    - types entrypoint, required by consuming application if used within typescript project.
  - "scripts":
    - "prepublishOnly": 
      - special lifecycle script to guarantee that the changes are always built before the package is published.
## Important packages:
- :package: NPM: vite-plugin-dts
  - Support type definition while shipping library
  - Enabled by adding entry to `vite.config.js` > plugins
    - `import dts from 'vite-plugin-dts'; ...`
    - `dts({ include: ['lib'] })`
- :package: NPM: vite-plugin-lib-inject-css
  - Supports injecting css module style by using import statement within eskel-component-library.js

## Tips

### CSS Modules

Vite supports CSS modules by default.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



## Reference
[Source 1](https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma)