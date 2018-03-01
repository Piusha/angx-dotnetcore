import { Component, Input, OnInit } from "@angular/core";
@Component({
    selector:'custom-table',
    templateUrl:'./table.component.html'
})


export class CustomTableComponent implements OnInit{
    
    @Input('payload')
    tblPayload :any[] = []; 
    constructor(){

        
    }

    ngOnInit(){

        console.log(this.tblPayload);
    }


    
} 