(function (module) {
    mifosX.directives = _.extend(module, {
        NumberOnlyDirective: function ($locale, $parse) {
            return {
                replace: false,
                require: 'ngModel',
                link: function (scope, element, attrs, modelCtrl) {
                    
                    function parseNumber(stringValue) {
                        if (stringValue) {
                            var decimalSep = $locale.NUMBER_FORMATS.DECIMAL_SEP;
                            var num = stringValue.replace(new RegExp('[^0-9' + decimalSep + ']', 'g'), '');
                            return parseFloat(num);
                        }
                        return null;
                    }

                    modelCtrl.$parsers.push(function (stringValue) {
                        var parsedValue = parseNumber(stringValue);
                        if (parsedValue !== modelCtrl.$modelValue) {
                            scope.$evalAsync(function () {
                                modelCtrl.$setViewValue(parsedValue);
                                modelCtrl.$render();
                            });
                        }
                        return parsedValue;
                    });

                    element.bind('keypress', function (event) {
                        var charCode = (event.which) ? event.which : event.keyCode;
                        var decimalSep = $locale.NUMBER_FORMATS.DECIMAL_SEP.charCodeAt(0);
                        
                        // Allow only numbers (0-9), decimal separator, and control keys (backspace, tab, etc.)
                        if ((charCode >= 48 && charCode <= 57) || charCode === decimalSep || charCode <= 31) {
                            return true;
                        } else {
                            event.preventDefault();
                            return false;
                        }
                    });

                    element.bind('blur', function () {
                        var parsedValue = parseNumber(element.val());
                        element.val(parsedValue);
                    });

                    scope.$on('$localeChangeSuccess', function () {
                        modelCtrl.$viewValue = parseNumber(modelCtrl.$modelValue);
                        modelCtrl.$render();
                    });
                }
            };
        }
    });
}(mifosX.directives || {}));

mifosX.ng.application.directive("numberOnly", ['$locale', '$parse', mifosX.directives.NumberOnlyDirective]).run(function ($log) {
    $log.info("NumberOnlyDirective initialized");
});
