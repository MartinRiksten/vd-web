"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AsyncBindingBehavior {
    bind(binding, source, message) {
        binding.originalUpdateTarget = binding.updateTarget;
        binding.updateTarget = a => {
            if (typeof a.then === "function") {
                if (!!message) {
                    binding.originalUpdateTarget(message);
                }
                a.then((d) => { binding.originalUpdateTarget(d); });
            }
            else {
                binding.originalUpdateTarget(a);
            }
        };
    }
    unbind(binding) {
        binding.updateTarget = binding.originalUpdateTarget;
        binding.originalUpdateTarget = null;
    }
}
exports.AsyncBindingBehavior = AsyncBindingBehavior;
