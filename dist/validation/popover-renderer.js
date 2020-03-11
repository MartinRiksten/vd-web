"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PopoverRenderer = /** @class */ (function () {
    function PopoverRenderer() {
        this.findById = true;
        this.focusFirst = false;
        this.dashedId = true;
    }
    PopoverRenderer.prototype.render = function (instruction) {
        var toHide = [];
        var toShow = [];
        for (var _i = 0, _a = instruction.unrender.filter(function (x) { return !x.result.valid; }); _i < _a.length; _i++) {
            var _b = _a[_i], result = _b.result, elements = _b.elements;
            if (this.findById && elements.length === 0 && !!result.propertyName) {
                elements = this.findElementById(result.propertyName.toString());
            }
            for (var _c = 0, elements_1 = elements; _c < elements_1.length; _c++) {
                var element = elements_1[_c];
                toHide.push(element);
            }
        }
        for (var _d = 0, _e = instruction.render; _d < _e.length; _d++) {
            var _f = _e[_d], result = _f.result, elements = _f.elements;
            if (this.findById && elements.length === 0 && !!result.propertyName) {
                elements = this.findElementById(result.propertyName.toString());
            }
            for (var _g = 0, elements_2 = elements; _g < elements_2.length; _g++) {
                var element = elements_2[_g];
                if (result.valid) {
                    toHide.push(element);
                }
                else {
                    var popover = this.findFromElement(element);
                    var message = !this.formatMessage ? result.message : this.formatMessage(result.message, popover);
                    if (toShow.indexOf(element) >= 0) {
                        popover.data('content', popover.data('content') + '\n' + message);
                    }
                    else {
                        popover.data('content', message);
                        toShow.push(element);
                    }
                }
            }
        }
        var first = true;
        var _loop_1 = function (element) {
            if (this_1.focusFirst && first) {
                first = false;
                $(element).focus();
            }
            var popover = this_1.findFromElement(element);
            var data = popover.data('bs.popover');
            var hasTip = !!data && !!data.tip;
            var $tip = hasTip ? $(data.tip) : undefined;
            var isVisible = hasTip && $tip.hasClass('show');
            var content = popover.data('content');
            if (!!data) {
                data.config.content = content;
            }
            if (isVisible) {
                $tip.find('.popover-body').html(content);
                popover.popover('update');
            }
            else {
                popover.popover('show');
                $tip = $(popover.data('bs.popover').tip);
                $tip.addClass('popover-danger popover-validation shadow');
                $(element).one('keypress', function () {
                    popover.popover('hide');
                });
            }
        };
        var this_1 = this;
        for (var _h = 0, toShow_1 = toShow; _h < toShow_1.length; _h++) {
            var element = toShow_1[_h];
            _loop_1(element);
        }
        for (var _j = 0, _k = $.unique(toHide).filter(function (x) { return toShow.indexOf(x) === -1; }); _j < _k.length; _j++) {
            var element = _k[_j];
            var popover = this.findFromElement(element);
            popover.popover('hide');
        }
    };
    PopoverRenderer.prototype.findFromElement = function (element) {
        var result = $(element).find('[data-toggle=popover]');
        if (result.length > 0) {
            return result;
        }
        result = $(element).closest('[data-toggle=popover]');
        return result;
    };
    PopoverRenderer.prototype.findElementById = function (id) {
        var name = this.dashedId
            ? id.replace(/^[a-z]|[A-Z]/g, function (s, i) { return (i === 0 ? s.toLowerCase() : "-" + s.toLowerCase()); })
            : id.toString().toLowerCase();
        var selector = "#" + name;
        return $(selector).get();
    };
    return PopoverRenderer;
}());
exports.PopoverRenderer = PopoverRenderer;
