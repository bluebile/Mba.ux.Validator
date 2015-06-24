Ext.define('Mba.ux.Validator', {

    requires: ['Ext.data.Validations'],

    singleton: true,

    constructor: function() {
        Ext.merge(this, Ext.data.Validations, {
            maxValue: function(config, value) {
                if (value === undefined || value === null) {
                    return false;
                }

                var max = config.max;

                if (value > max) {
                    return false;
                }

                return true;
            }
        });
    }
});
