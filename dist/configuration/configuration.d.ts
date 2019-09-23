/**
 * Enumeration of available configuration modes
 */
export declare enum ConfigurationMode {
    Debug = 0,
    Release = 1
}
/**
 * Container class for the current configuration mode
 */
export declare class Configuration {
    /**
     * The current configuration mode
     */
    static mode: ConfigurationMode;
    /**
     * The map of available modes
     */
    static modes: Map<string, ConfigurationMode>;
    /**
     * Creates the map of available modes
     */
    private static createModes;
}
