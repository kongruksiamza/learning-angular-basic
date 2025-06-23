import { Component} from '@angular/core';
import { Header } from './header/header';
import { Item } from './item/item';
import { Addform } from './addform/addform';

export interface Employee{
   id:number;
   name:string;
   salary:number;
}

@Component({
  selector: 'app-root',
  imports: [Header,Item,Addform],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   data:Employee[]=[
      {id:101,name:"ก้อง",salary:25000},
      {id:102,name:"โจ้",salary:15000},
   ]
   removeDataById(id:number){
      // alert("ข้อมูลที่ลูกส่งมาคือ "+id)
      this.data = this.data.filter((emp)=>emp.id !==id)
   }
   insertData(emp:Employee){
      this.data.unshift(emp)
   }
}
