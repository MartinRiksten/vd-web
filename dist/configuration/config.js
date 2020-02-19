"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.configure = function () {
        if (!Object.entries) {
            Object.entries = function (obj) {
                var ownProps = Object.keys(obj);
                var i = ownProps.length;
                var resArray = new Array(i); // preallocate the Array
                while (i--) {
                    resArray[i] = [ownProps[i], obj[ownProps[i]]];
                }
                return resArray;
            };
        }
        /* function to restrict the input of an input control by implementing a keypress event
            - data-regex contains the regex to use to validate a key */
        $('body').on('keypress', 'input[data-regex]', function (event) {
            var $this = $(event.currentTarget);
            var regex = new RegExp($this.data('regex'));
            var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if (event.which !== 13 && !regex.test(key)) {
                event.preventDefault();
                return false;
            }
            return true;
        });
        /* function to restrict the input of an input control by implementing a paste event
            - data-regex contains the regex to use to validate a key */
        $('body').on('paste', 'input[data-regex]', function () {
            var $this = $(event.currentTarget);
            setTimeout(function () {
                var value = $this.val();
                var result = '';
                var regex = new RegExp($this.data('regex'));
                for (var i = 0; i < value.length; i++) {
                    var c = value.charAt(i);
                    if (regex.test(c)) {
                        result += c;
                    }
                }
                $this.val(result);
            }, 10);
        });
        $(window).bind('resize', function () {
            $('[data-toggle=popover]').popover('update');
        });
        $('html').on('click', function (e) {
            $('[data-toggle=popover][data-transient=true]').each(function (index, element) {
                var target = e.target;
                var current = $(element);
                if (!current.is(target) && current.has(target).length === 0) {
                    var data = $(element).data('bs.popover');
                    var isVisible = !!data && !!data.tip && $(data.tip).hasClass('show');
                    if (isVisible) {
                        setTimeout(function () { return current.popover('hide'); }, 250);
                    }
                }
            });
        });
    };
    return Config;
}());
exports.Config = Config;
