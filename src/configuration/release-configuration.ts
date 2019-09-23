import { FrameworkConfiguration, LogManager } from 'aurelia-framework';
import { IConfigurationInitializer } from './configuration-factory';

/**
 * Initializer for the release configuration mode
 */
export class ReleaseConfiguration implements IConfigurationInitializer {
  /**
   * Configures the configuration mode dependant stuff
   * @param config The framework configuration
   */
  public initialize(config: FrameworkConfiguration): void {
    LogManager.setLevel(LogManager.logLevel.warn);
  }
}
