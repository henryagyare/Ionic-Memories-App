import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hakasante',
  appName: 'Miemoire',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
