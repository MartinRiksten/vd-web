"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BootstrapRenderer = /** @class */ (function () {
    function BootstrapRenderer() {
        this.findById = true;
        this.focusFirst = false;
        this.dashedId = true;
    }
    BootstrapRenderer.prototype.render = function (instruction) {
        for (var _i = 0, _a = instruction.unrender; _i < _a.length; _i++) {
            var _b = _a[_i], result = _b.result, elements = _b.elements;
            if (this.findById && elements.length === 0 && !!result.propertyName) {
                elements = this.findElementById(result.propertyName.toString());
            }
            for (var _c = 0, elements_1 = elements; _c < elements_1.length; _c++) {
                var element = elements_1[_c];
                this.remove(element, result);
            }
        }
        for (var _d = 0, _e = instruction.render; _d < _e.length; _d++) {
            var _f = _e[_d], result = _f.result, elements = _f.elements;
            if (this.findById && elements.length === 0 && !!result.propertyName) {
                elements = this.findElementById(result.propertyName.toString());
            }
            var first = true;
            for (var _g = 0, elements_2 = elements; _g < elements_2.length; _g++) {
                var element = elements_2[_g];
                this.add(element, result);
                if (this.focusFirst && first && !result.valid) {
                    first = false;
                    $(element).focus();
                }
            }
        }
    };
    BootstrapRenderer.prototype.add = function (element, result) {
        if (result.valid) {
            return;
        }
        var $element = $(element);
        $element.addClass('is-invalid');
        $element.one('keypress', function () {
            $element.removeClass('is-invalid');
        });
    };
    BootstrapRenderer.prototype.remove = function (element, result) {
        if (result.valid) {
            return;
        }
        var $element = $(element);
        $element.removeClass('is-invalid');
    };
    BootstrapRenderer.prototype.findElementById = function (id) {
        var name = this.dashedId
            ? id.replace(/^[a-z]|[A-Z]/g, function (s, i) { return (i === 0 ? s.toLowerCase() : "-" + s.toLowerCase()); })
            : id.toString().toLowerCase();
        var selector = "#" + name;
        return $(selector).get();
    };
    return BootstrapRenderer;
}());
exports.BootstrapRenderer = BootstrapRenderer;
