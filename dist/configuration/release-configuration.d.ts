import { FrameworkConfiguration } from 'aurelia-framework';
import { IConfigurationModeInitializer } from './configuration-factory';
/**
 * Initializer for the release configuration mode
 */
export declare class ReleaseConfiguration implements IConfigurationModeInitializer {
    /**
     * Configures the configuration mode dependant stuff
     * @param config The framework configuration
     */
    initialize(config: FrameworkConfiguration): void;
}
