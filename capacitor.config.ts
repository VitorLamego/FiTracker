
import { CapacitorConfig } from '@capacitor/cli';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

const appId = 'FiTracker2.ionic.io';
const appName = 'FiTracker2';
const server = process.argv.includes('-hmr') ? {
  'url': process.env.IP,   // always have http:// in url
  'cleartext': true
} : {
  'url': process.env.IP,   // always have http:// in url
  'cleartext': true
};
const webDir = 'build';

const config: CapacitorConfig = {
  appId,
  appName,
  webDir,
  server
};

if (process.argv.includes('-hmr')) console.log('WARNING: running capacitor with livereload config', config);

export default config;
