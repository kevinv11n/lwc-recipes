({
    getApexFunction: function(component, event) {
        var label = event.getSource().get('v.label');
        if (label === 'throwAuraHandledException') {
            return component.get('c.throwAuraHandledException');
        } else if (label === 'throwBuiltInException') {
            return component.get('c.throwBuiltInException');
        } else if (label === 'throwMyException') {
            return component.get('c.throwMyException');
        }
        return component.get('c.throwAuraException');
    }
});
