import { Component, Input, OnInit } from "@angular/core";
@Component({
    selector:'side-navigation',
    templateUrl:'./side_navigation.component.html'
})


export class SideNavigationComponent implements OnInit{
    
    private menuItems:any[]= [];
    constructor(){

        
    }

    ngOnInit(){

        this.menuItems = [
            {
                url:'/secure/dashboard',
                icoClass:'glyphicon-home',
                lable:'Home'
            },
            {
                url:'/secure/calendar',
                icoClass:'glyphicon-calendar',
                lable:'Calender'
            },
            {
                url:'/secure/items',
                icoClass:'glyphicon-stats',
                lable:'Tables'
            },
            {
                url:'test',
                icoClass:'glyphicon-home',
                lable:'Home'
            }             

        ]

        
        
    }


    
} 