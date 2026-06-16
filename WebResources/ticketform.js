"use strict";

var TicketForm = TicketForm || {};
TicketForm.Priority = TicketForm.Priority || {};

TicketForm.Priority.onChange = function(executionContext) {
    var formContext = executionContext.getFormContext();

    var priorityAttr = formContext.getAttribute("cdev_priority");
    var slaAttr      = formContext.getAttribute("cdev_sla");

    if (!priorityAttr || !slaAttr) { return; }

    var priorityValue = priorityAttr.getValue();

    if (priorityValue === 3) {
        slaAttr.setValue(1);

        formContext.ui.setFormNotification(
            "Priority set to Critical — SLA automatically set to 2 Hours.",
            "WARNING",
            "criticalPriorityNotif"
        );
    } else {
        formContext.ui.clearFormNotification("criticalPriorityNotif");
    }
};
