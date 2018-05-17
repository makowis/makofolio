// @flow
import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { createDevTools } from 'redux-devtools';
// eslint-disable-next-line import/no-extraneous-dependencies
import LogMonitor from 'redux-devtools-log-monitor';
// eslint-disable-next-line import/no-extraneous-dependencies
import DockMonitor from 'redux-devtools-dock-monitor';

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" />
  </DockMonitor>,
);

export default DevTools;
