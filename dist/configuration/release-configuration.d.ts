import { FrameworkConfiguration } from 'aurelia-framework';
import { IConfigurationInitializer } from './configuration-factory';
/**
 * Initializer for the release configuration mode
 */
export declare class ReleaseConfiguration implements IConfigurationInitializer {
    /**
     * Configures the configuration mode dependant stuff
     * @param config The framework configuration
     */
    initialize(config: FrameworkConfiguration): void;
}
