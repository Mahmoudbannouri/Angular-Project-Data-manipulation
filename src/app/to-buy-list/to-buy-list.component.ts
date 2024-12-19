import { Component } from '@angular/core';
import {ToBuyList} from "../core/models/ToBuyList";
import {CalculService} from "../services/calcul.service";

@Component({
  selector: 'app-to-buy-list',
  templateUrl: './to-buy-list.component.html',
  styleUrls: ['./to-buy-list.component.css']
})
export class ToBuyListComponent {


  listToBuy:ToBuyList[]=[];
   count!:number;
  constructor(private serviceCal:CalculService) {
  }
  ngOnInit():void{
    this.listToBuy=[
      {userID:1,id:1,title:"delecteur",completed:false},
      {userID:1,id:2,title:"delecteur qui est deux",completed:false},
      {userID:1,id:3,title:"delecteur qui est deux",completed:false},
      {userID:1,id:4,title:"delecteur qui est quatre",completed:true},

    ]
  }
  getStat(){
this.count=this.serviceCal.getnumberOf(this.listToBuy,'title','delecteur qui est deux');
  }

}
