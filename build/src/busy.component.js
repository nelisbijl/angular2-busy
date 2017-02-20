"use strict";
var core_1 = require('@angular/core');
var promise_tracker_service_1 = require('./promise-tracker.service');
var inactiveStyle = core_1.style({
    opacity: 0,
    transform: 'translateY(-40px)'
});
var timing = '.3s ease';
;
var BusyComponent = (function () {
    function BusyComponent(tracker) {
        this.tracker = tracker;
        this.context = {
            message: null
        };
    }
    BusyComponent.prototype.isActive = function () {
        return this.tracker.isActive();
    };
    BusyComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng-busy',
                    template: "\n        <div [class]=\"wrapperClass\" *ngIf=\"isActive()\" @flyInOut>\n            <DynamicComponent [componentTemplate]=\"template\" [componentContext]=\"context\" [componentModules]=\"modules\">\n            </DynamicComponent>\n        </div>\n    ",
                    animations: [
                        core_1.trigger('flyInOut', [
                            core_1.transition('void => *', [
                                inactiveStyle,
                                core_1.animate(timing)
                            ]),
                            core_1.transition('* => void', [
                                core_1.animate(timing, inactiveStyle)
                            ])
                        ])
                    ]
                },] },
    ];
    BusyComponent.ctorParameters = function () { return [
        { type: promise_tracker_service_1.PromiseTrackerService, },
    ]; };
    return BusyComponent;
}());
exports.BusyComponent = BusyComponent;
//# sourceMappingURL=busy.component.js.map