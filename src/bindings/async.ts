import { Binding } from 'aurelia-binding';

export class AsyncBindingBehavior {
  public bind(binding: IAsyncBinding, source: unknown, message: unknown): void {
    binding.originalUpdateTarget = binding.updateTarget;

    binding.updateTarget = a => {
      if (typeof a.then === 'function') {
        if (!!message) {
          binding.originalUpdateTarget(message);
        }

        a.then((d: unknown) => {
          binding.originalUpdateTarget(d);
        });
      } else {
        binding.originalUpdateTarget(a);
      }
    };
  }

  public unbind(binding: IAsyncBinding): void {
    binding.updateTarget = binding.originalUpdateTarget;
    binding.originalUpdateTarget = null;
  }
}

interface IAsyncBinding extends Binding {
  originalUpdateTarget: (value: unknown) => void;
}
