import { CompositionContext, CompositionEngine, Origin } from 'aurelia-framework';

export function getViewModel(instruction: CompositionContext, compositionEngine: CompositionEngine): Promise<CompositionContext> {
    if (typeof instruction.viewModel === 'function') {
      instruction.viewModel = Origin.get(instruction.viewModel).moduleId;
    } else if (typeof instruction.viewModel === 'string') {
      return compositionEngine.ensureViewModel(instruction);
    }
  
    return Promise.resolve(instruction);
  }
  
  export function invokeLifecycle(instance: any, name: string, model: any) {
    if (typeof instance[name] !== 'function') {
      return Promise.resolve(true);
    }
  
    const result = instance[name](model);
    if (result instanceof Promise) {
        return result;
    }

    if (result !== null && result !== undefined) {
      return Promise.resolve(result);
    }
  
    return Promise.resolve(true);
  }