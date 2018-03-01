import { Component, OnInit } from "@angular/core";
import { ItemService } from "./items.service";



@Component({
    selector:'calendar',
    templateUrl:'./items.component.html',
    providers:[ItemService]

})


export class ItemsComponent implements OnInit{
    
    constructor(private itemSrv:ItemService){}

    private items:object={};
    ngOnInit(){
        this.items ={
            'tbheader':['Values'],
            'tbBody':[]
        } 
        


        let self = this;

        this.itemSrv.getItems().subscribe(itms=>{
            self.items['tbBody'] = itms;
        })

    }

    private loadItems(){

        
    }
} 