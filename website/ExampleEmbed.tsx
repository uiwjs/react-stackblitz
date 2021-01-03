import { Fragment } from 'react';
import StackBlitz from '../';

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
    <Fragment>
      <StackBlitz
        template="create-react-app"
        title="uiw"
        description="uiw avatar v4.7.2 - demo"
        tags={["stackblitz", "uiw", "react"]}
        embedOpts={{
          elementOrId: 'myDiv',
          clickToLoad: true,
        }}
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
        Embed StackBlitz
      </StackBlitz>
      <div id="myDiv"></div>
    </Fragment>
  )
}

export default Example;