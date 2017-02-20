"use strict";
var core_1 = require('@angular/core');
var promise_tracker_service_1 = require('./promise-tracker.service');
var inactiveStyle = core_1.style({
    opacity: 0,
});
var timing = '.3s ease';
var BusyBackdropComponent = (function () {
    function BusyBackdropComponent(tracker) {
        this.tracker = tracker;
    }
    BusyBackdropComponent.prototype.isActive = function () {
        return this.tracker.isActive();
    };
    BusyBackdropComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng-busy-backdrop',
                    template: "\n        <div class=\"ng-busy-backdrop\"\n             @fadeInOut\n             *ngIf=\"isActive()\">\n        </div>\n    ",
                    animations: [
                        core_1.trigger('fadeInOut', [
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
    BusyBackdropComponent.ctorParameters = function () { return [
        { type: promise_tracker_service_1.PromiseTrackerService, },
    ]; };
    return BusyBackdropComponent;
}());
exports.BusyBackdropComponent = BusyBackdropComponent;
//# sourceMappingURL=busy-backdrop.component.js.map