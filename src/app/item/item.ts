import { CurrencyPipe } from '@angular/common';
import { Component ,input , output} from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [CurrencyPipe],
  templateUrl: './item.html',
  styleUrl: './item.css'
})
export class Item {
  id=input.required<number>();
  name=input.required<string>();
  salary = input.required<number>();
  onDelete = output<number>();

  deleteItem(){
      if(confirm(`คุณต้องการลบข้อมูลพนักงานรหัส ${this.id()} หรือไม่ ? `)){
          this.onDelete.emit(this.id())//ปล่อย event
      }
  }
}
