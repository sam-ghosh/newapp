/**
 * Created by som on 24/05/2014.
 */

Ext.define('newapp.controller.Main', {
    extend: 'Ext.app.Controller',




    config: {
        refs:{
            homeTabButton: 'tabbar button[title=Home]',
            starButton: 'button[action=pingHomeBadge]'

        },
        control:{
            starButton: {
                tap: 'incrementHomeBadge'
            }

        }

    },

    incrementHomeBadge: function(){
            homeTab = this.getHomeTabButton();

            badgeNumber = parseInt(homeTab.getBadgeText());


            nextNumber = isNaN(badgeNumber)? 1: badgeNumber+ 1;

        homeTab.setBadgeText(nextNumber);



    }

});
