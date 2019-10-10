"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AsyncBindingBehavior = /** @class */ (function () {
    function AsyncBindingBehavior() {
    }
    AsyncBindingBehavior.prototype.bind = function (binding, source, message) {
        binding.originalUpdateTarget = binding.updateTarget;
        binding.updateTarget = function (a) {
            if (typeof a.then === "function") {
                if (!!message) {
                    binding.originalUpdateTarget(message);
                }
                a.then(function (d) { binding.originalUpdateTarget(d); });
            }
            else {
                binding.originalUpdateTarget(a);
            }
        };
    };
    AsyncBindingBehavior.prototype.unbind = function (binding) {
        binding.updateTarget = binding.originalUpdateTarget;
        binding.originalUpdateTarget = null;
    };
    return AsyncBindingBehavior;
}());
exports.AsyncBindingBehavior = AsyncBindingBehavior;
