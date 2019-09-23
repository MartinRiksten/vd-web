import { FrameworkConfiguration } from 'aurelia-framework';
import { IConfigurationInitializer } from './configuration-factory';
/**
 * Initializer for the debug configuration mode
 */
export declare class DebugConfiguration implements IConfigurationInitializer {
    /**
     * Configures the configuration mode dependant stuff
     * @param config The framework configuration
     */
    initialize(config: FrameworkConfiguration): void;
}
