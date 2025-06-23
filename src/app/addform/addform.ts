import { Component, signal,output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../app';

@Component({
  selector: 'app-addform',
  imports: [FormsModule],
  templateUrl: './addform.html',
  styleUrl: './addform.css',
})
export class Addform {
  fullname = signal('');
  salary = signal(15000);
  onSave=output<Employee>()

  addNewEmployee() {
    let emp:Employee={
      id:Math.floor(Math.random()*1000), //0-999
      name:this.fullname(),
      salary:this.salary()
    }
    this.onSave.emit(emp)//ปล่อย event
    this.fullname.set("")
    this.salary.set(15000)
  }
}
