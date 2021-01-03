import React from 'react';
import sdk from "@stackblitz/sdk";
import { Project, EmbedOptions, OpenOptions } from "@stackblitz/sdk/typings/interfaces";

export type EmbedOpts = {
  /** Either an element ID string or the target HTMLElement itself. */
  elementOrId?: string | HTMLElement;
} & EmbedOptions;

export type StackBlitzProps = Project & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * String of the Github username, repo and optionally branch/tag/commit.
   * https://developer.stackblitz.com/docs/platform/javascript-sdk#sdkopengithubprojectreposlug-opts
   */
  repoSlug?: string;
  /** The ID of the StackBlitz project to open */
  projectId?: string;
  embedOpts?: EmbedOpts;
  openOpts?: OpenOptions;
};

const stackBlitz: React.FC<StackBlitzProps> = (props) => {
  const { repoSlug, projectId, embedOpts = {}, openOpts, files, title, description, template = 'create-react-app', tags, dependencies, settings, ...other } = props || {};
  const { elementOrId, ...otherEmbedOpts } = embedOpts;
  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const project = { files, title, description, template, tags, dependencies, settings };
    if (elementOrId && projectId) {
      sdk.embedProjectId(elementOrId, projectId, project as OpenOptions);
    } else if (projectId) {
      sdk.openProjectId(projectId, project as OpenOptions);
    } else if (elementOrId && repoSlug) {
      sdk.embedGithubProject(elementOrId, repoSlug, project as OpenOptions);
    } else if (repoSlug) {
      sdk.openGithubProject(repoSlug, project as OpenOptions);
    } else if (elementOrId) {
      sdk.embedProject(elementOrId, project, otherEmbedOpts);
    } else {
      sdk.openProject({ ...project }, openOpts);
    }
    if (other.onClick) {
      other.onClick(event)
    }
  }
  return (
    <button type="button" {...other} onClick={handleClick}>{props.children}</button>
  );
}

export default stackBlitz;
