import { FrameworkConfiguration } from 'aurelia-framework';
import { IConfigurationInitializer } from './configuration-factory';

/**
 * Initializer for the debug configuration mode
 */
export class DebugConfiguration implements IConfigurationInitializer {
  /**
   * Configures the configuration mode dependant stuff
   * @param config The framework configuration
   */
  public initialize(config: FrameworkConfiguration): void {
    config.developmentLogging();
  }
}
