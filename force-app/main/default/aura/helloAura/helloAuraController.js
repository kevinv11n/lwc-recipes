({
    handleLoad: function(component, event, helper) {
        var action = helper.getApexFunction(component, event);
        var message = 'abc';

        action.setParams({ message: message });

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                component.set('v.lastError', response.getReturnValue());
            } else if (state === 'INCOMPLETE') {
                component.set('v.lastError', 'INCOMPLETE');
            } else if (state === 'ERROR') {
                var errors = response.getError();
                if (errors) {
                    component.set('v.lastError', JSON.stringify(errors));
                } else {
                    component.set('v.lastError', 'Unknown error');
                }
            }
        });

        $A.enqueueAction(action);
    }
});
