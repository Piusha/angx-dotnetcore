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

        console.log(this.menuType)
    }

    ngOnInit(){

        this.mType = this.menuType.split(',');

        console.log(this.mType);

        console.log(this.mType);
        
    }
} 