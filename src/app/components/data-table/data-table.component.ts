import { Component, Input } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';
import { Router } from '@angular/router';
import { Column } from '../../shared/models/column';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  @Input() public name: string;
  @Input() public data: any;
  @Input() public cols: Column[];
  @Input() public editable: boolean;
  public displayAdd: boolean = false;

  constructor(private studentService: StudentService, private router: Router) {
  }

  //Delete Item
  deleteItem(id) {
    console.log('delete student id:', id);
    this.studentService.deleteStudent(id);
  }
}