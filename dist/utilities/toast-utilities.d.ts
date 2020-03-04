import { CompositionContext, CompositionEngine } from 'aurelia-framework';
export declare function getViewModel(instruction: CompositionContext, compositionEngine: CompositionEngine): Promise<CompositionContext>;
export declare function invokeLifecycle(instance: any, name: string, model: any): Promise<any>;
