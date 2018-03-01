import { Component, OnInit } from "@angular/core";



@Component({
    selector:'calendar',
    templateUrl:'./items.component.html'
})


export class ItemsComponent implements OnInit{
    
    private items:object={};
    ngOnInit(){
        this.items ={
            'tbheader':['h1','h2','h3','h4'],
            'tbBody':[]
        } 
        for(let a = 0; a <10;a++){
            this.items['tbBody'].push({
                c1:'Row'+a,
                c2:'Row'+a,
                c3:'Row'+a,
                c4:'Row'+a,

            });
        }
    }
} 