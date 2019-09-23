import { FrameworkConfiguration } from 'aurelia-framework';
import { ConfigurationMode } from './configuration';
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
export declare class InitializerFactory {
    /**
     * Create the appropriate initializer
     * @param mode: The current configuration mode
     */
    static create(mode: ConfigurationMode): IConfigurationInitializer;
}
