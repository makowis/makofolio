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

const DevTools = inDevelopment
  ? buildDevTools()
  : () => <div style={{ display: 'none' }} />;

export default DevTools;
