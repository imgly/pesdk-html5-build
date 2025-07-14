import { Omit } from '../common/utils';
import { Configuration } from './index';
export type ConfigurationProps = Omit<Configuration, 'container'>;
