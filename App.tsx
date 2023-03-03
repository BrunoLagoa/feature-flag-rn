import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ConfigCatProvider, PollingMode } from 'configcat-react';

import Home from './src/screens/Home';

export default function App() {
  return (
    <ConfigCatProvider
      sdkKey='2RvbCKDv6E6AoFx2XkKk2g/VANjZ1Y-1kyOYu_d8J2rMA'
      pollingMode={PollingMode.AutoPoll}
      options={{ pollIntervalSeconds: 10 }}
    >
      <StatusBar style='auto' />
      <Home />
    </ConfigCatProvider>
  );
}
