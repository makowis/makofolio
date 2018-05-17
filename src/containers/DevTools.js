// @flow
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createDevTools } from 'redux-devtools';
// eslint-disable-next-line import/no-extraneous-dependencies
import LogMonitor from 'redux-devtools-log-monitor';
// eslint-disable-next-line import/no-extraneous-dependencies
import DockMonitor from 'redux-devtools-dock-monitor';

const inDevelopment = process.env.NODE_ENV === 'development';

const buildDevTools = () =>
  createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
      <LogMonitor theme="tomorrow" />
    </DockMonitor>,
  );

const productionDevTool = () => <div style={{ display: 'none' }} />;
productionDevTool.instrument = () => {};

const DevTools = inDevelopment ? buildDevTools() : productionDevTool;

export default DevTools;
