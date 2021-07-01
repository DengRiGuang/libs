import { App } from 'vue';

const install = (app: App, opt: string): void => {
  app.config.globalProperties.$API = opt;
};
export default install;
