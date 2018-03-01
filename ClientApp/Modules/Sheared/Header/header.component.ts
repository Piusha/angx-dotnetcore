import { Component, Input, OnInit } from "@angular/core";
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})


export class HeaderComponent implements OnInit{

    @Input('menu-type')
    menuType:string = 'normal';
    
    private mType:any[];
    constructor(){

    }

    ngOnInit(){

        this.mType = this.menuType.split(',');

        
    }
} 