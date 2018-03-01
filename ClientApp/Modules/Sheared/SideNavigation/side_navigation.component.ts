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
                url:'/dashboard',
                icoClass:'glyphicon-home',
                lable:'Home'
            },
            {
                url:'/calendar',
                icoClass:'glyphicon-calendar',
                lable:'Calender'
            },
            {
                url:'test',
                icoClass:'glyphicon-stats',
                lable:'Stars'
            },
            {
                url:'test',
                icoClass:'glyphicon-home',
                lable:'Home'
            }             

        ]
        
    }
} 