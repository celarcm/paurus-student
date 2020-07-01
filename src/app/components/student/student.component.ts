import { Component, Injectable, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from "../../shared/services/student.service";
import { Student } from '../../shared/models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
  @Input() student: Student = {
    id: 1,
    name: '',
    surname: '',
    courses: []
  };

  title: string = 'Create Student';

  constructor(
    public studentService: StudentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.student = this.studentService.getStudentById(params['id']);
      this.title = this.student ? 'Update Student' : 'Create Student';
      console.log('this.student:', this.student);
    });
  }

  updateStudent(student) {
    console.log('Update student called, student:', student);
  }

  createStudent(name, surname, course) {
    this.studentService.addStudent({
      id: 1,
      name: name,
      surname: surname,
      courses: [course]
    });
  }

}