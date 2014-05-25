/**
 * Created by som on 24/05/2014.
 */

Ext.define('newapp.view.Settings', {
    extend: 'Ext.Panel',

    xtype: 'settingsCard',


    config: {
        iconCls: 'settings',
        title: 'Settings',

        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Settings Title'
            }

        ]

        

    }
});
