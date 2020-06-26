import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';
import { Router } from '@angular/router';
import { Column } from '../../shared/models/column';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { AuthService } from "../../shared/services/auth.service";
//import { NotifierService } from 'angular-notifier';
//import { Todo } from 'src/app/domain/Todo';
//import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() public name: string;
  @Input() public data: any;
  @Input() public cols: Column[];
  @Input() public editable: boolean;

  displayAdd = false;
  displayEdit = false;

  constructor(private studentService: StudentService, private router: Router) {
  }

  ngOnInit() {
    this.displayAdd = false;
    this.displayEdit = false;
  }

  // To Get List Of Students
  getStudentList() {
    //return this.studentService.getStudentList();
  }

  // To Get Todo
  getItem(todoId) {
    //return this.todoService.getTodo(todoId);
  }

  // To Edit Todo
  editItem(todoId) {
    this.displayEdit = true;
    //this.router.navigate([`/todo-edit/${todoId}`]);
  }

  //Delete Todo
  deleteItem(todoId) {
    console.log("Delete id" + todoId);
    /*this.todoService.deleteTodo(todoId).subscribe((data) => {
      console.log("success");
      this.notifier.notify("success", "Task deleted successfully!!");
    });*/
    this.ngOnInit();
    this.router.navigate([`/`]);
  }

  //add Todo
  addItem() {
    this.displayAdd = true;
  }

  hideAdd(event) {
    console.log("Event emiited " + event);
    this.displayAdd = event;
  }
}