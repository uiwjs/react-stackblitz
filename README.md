React StackBlitz
===

<!--dividing-->

[![Build & Deploy](https://github.com/uiwjs/react-stackblitz/workflows/Build%20&%20Deploy/badge.svg)](https://github.com/uiwjs/react-stackblitz/actions)
[![Issues](https://img.shields.io/github/issues/uiwjs/react-stackblitz.svg)](https://github.com/uiwjs/react-stackblitz/issues)
[![Forks](https://img.shields.io/github/forks/uiwjs/react-stackblitz.svg)](https://github.com/uiwjs/react-stackblitz/network)
[![Stars](https://img.shields.io/github/stars/uiwjs/react-stackblitz.svg)](https://github.com/uiwjs/react-stackblitz/stargazers)
[![Release](https://img.shields.io/github/release/uiwjs/react-stackblitz)](https://github.com/uiwjs/react-stackblitz/releases)
[![npm version](https://img.shields.io/npm/v/@uiw/react-stackblitz.svg)](https://www.npmjs.com/package/@uiw/react-stackblitz)

A React component is provided that allows you to programmatically generate [stackblitz](https://stackblitz.com/) projects from code samples on the fly.

## Install

```bash
npm install @uiw/react-stackblitz --save
```

## Usage

```jsx
import React from 'react';
import StackBlitz from '@uiw/react-stackblitz';

const code = `import React from "react";
import ReactDOM from "react-dom";
import Avatar from '@uiw/react-avatar';
import "@uiw/react-avatar/lib/esm/style/index.css";

ReactDOM.render(
  <div>
    <div style={{ paddingBottom: 20 }}>
      <Avatar icon="user" />
      <Avatar size="small" icon="user" />
    </div>
    <div>
      <Avatar shape="square" size="large" icon="user" />
      <Avatar shape="square" icon="user" />
      <Avatar shape="square" size="small" icon="user" />
      <Avatar shape="square" size="mini" icon="user" />
    </div>
  </div>,
  document.getElementById("root")
);`;

const Example = () => {
  return (
    <StackBlitz
      template="create-react-app"
      title="uiw"
      description="uiw v4.7.2 - demo"
      tags={["stackblitz", "uiw", "react"]}
      dependencies={{
        "react": "17.0.1",
        "react-dom": "17.0.1",
        "@uiw/react-avatar": "4.7.2",
        "@babel/runtime": "7.12.5",
      }}
      files={{
        "index.html": `<div id="root"></div>`,
        "index.js": code,
      }}
    >
      Basic Example Open in StackBlitz
    </StackBlitz>
  )
}
```

## Props

```typescript
type StackBlitzProps = Project & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * String of the Github username, repo and optionally branch/tag/commit.
   * https://developer.stackblitz.com/docs/platform/javascript-sdk#sdkopengithubprojectreposlug-opts
   */
  repoSlug?: string;
  projectId?: string;
  embedOpts?: EmbedOpts;
  openOpts?: OpenOptions;
};
```

## Development

Runs the project in development mode.  

```bash
# Step 1, run first, listen to the component compile and output the .js file
# listen for compilation output type .d.ts file
npm run watch
# Step 2, development mode, listen to compile preview website instance
npm run start
```

**production**

Builds the app for production to the build folder.

```bash
npm run build
```

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### Related

- [`@uiw/react-codepen`](https://github.com/uiwjs/react-codepen)
- [`@uiw/react-codesandbox`](https://github.com/uiwjs/react-codesandbox)

### License

Licensed under the MIT License.
