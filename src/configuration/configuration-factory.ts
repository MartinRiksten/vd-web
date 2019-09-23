import { FrameworkConfiguration } from 'aurelia-framework';
import { ConfigurationMode } from './configuration';
import { DebugConfiguration } from './debug-configuration';
import { ReleaseConfiguration } from './release-configuration';

/**
 * Interface for initializer classes
 */
export interface IConfigurationInitializer {
  /**
   * Configures the configuration mode dependant stuff
   * @param config The framework configuration
   */
  initialize(config: FrameworkConfiguration): void;
}

/**
 * Factory for the initializer class
 */
export class InitializerFactory {
  /**
   * Create the appropriate initializer
   * @param mode: The current configuration mode
   */
  public static create(mode: ConfigurationMode): IConfigurationInitializer {
    switch (mode) {
      case ConfigurationMode.Debug:
        return new DebugConfiguration();
      case ConfigurationMode.Release:
        return new ReleaseConfiguration();
      default:
        throw new Error('Unknown configuration mode');
    }
  }
}
