/**
 * Created by som on 24/05/2014.
 */

Ext.define('newapp.view.Action', {
    extend: 'Ext.Panel',

    xtype: 'actionCard',


    config: {
        iconCls: 'action',
        title: 'action',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Buttonsddddddddddddd',
                default: {
                    xtype: 'button'
                },
                items:[
                    {
                        text: 'ping',
                        align: 'left',
                        action: 'pingHomeBadge',
                        ui: 'decline',
                        iconMask: true,
                        iconCls: 'star'
                    },
                    {
                        text: 'undo',
                        align: 'right'

                    }
                ]

           }

        ]
    }
});
