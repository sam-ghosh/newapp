/**
 * Created by som on 24/05/2014.
 */

Ext.define('newapp.view.Home', {
    extend: 'Ext.TabPanel',

    xtype: 'homeCard',


    config: {
        iconCls: 'home',
        title: 'Home',
        badgeText: '1',
        defaults: {
            styleHtmlContent: true
        },
        items:[
            {
                title: 'TabPanels',
                scrollable: 'vertical',
                html: 'Tablpanel asdfasdfasdfasdfasdfadsf'
            },
            {
                title: 'Toolbars',
                scrollable: 'vertical',
                html: 'Toolbars asdfasdfasdfasdfasdfasdfasdf '
            }
        ]

    }
});
