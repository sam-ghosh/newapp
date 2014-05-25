Ext.define('newapp.view.Main', {
    extend: 'Ext.TabPanel',

    requires:[ 'newapp.view.Home',
        'newapp.view.Search',
        'newapp.view.Action',
        'newapp.view.Settings',
        'newapp.view.More'
    ],

    xtype: 'main',
    config: {
        tabBar:{
            docked: 'bottom',
            layout: {
                pack: 'center'
            }
        },
        defaults: {
            html: 'Placeholder text',
            styleHtmlContent : true
            //styleHtmlContent: true
        },
        items:[
            { xtype: 'actionCard'},
            { xtype: 'homeCard'},
            { xtype: 'searchCard'},

            { xtype: 'settingsCard'},
            { xtype: 'moreCard'}

        ]

    }
});
