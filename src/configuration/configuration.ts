import { FrameworkConfiguration, LogManager } from 'aurelia-framework';

/**
 * Enumeration of available configuration modes
 */
export enum ConfigurationMode {
  Debug,
  Release,
}

/**
 * Container class for the current configuration mode
 */
export class Configuration {
  /**
   * The current configuration mode
   */
  public static mode: ConfigurationMode;

  /**
   * The map of available modes
   */
  public static modes = Configuration.createModes();

  /**
   * Creates the map of available modes
   */
  private static createModes(): Map<string, ConfigurationMode> {
    const result = new Map<string, ConfigurationMode>();
    result.set('Debug', ConfigurationMode.Debug);
    result.set('Release', ConfigurationMode.Release);
    return result;
  }
}
