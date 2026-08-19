// lint-staged.config.ts
import type {Configuration} from 'lint-staged';

const config: Configuration = {
  '*.{ts,tsx}': ['npm run lint:fix'],
  '*.{ts,tsx,json}': ['npm run fmt:fix'],
};

export default config;
