import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';
import { Student } from '../../shared/models/student';
import { Professor } from '../../shared/models/professor';
import { Course } from '../../shared/models/course';
import { Column } from '../../shared/models/column';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  students: Student[];
  professors: Professor[];
  courses: Course[];
  studentCols: Column[];
  professorCols: Column[];
  courseCols: Column[];

  constructor(private studentService: StudentService) {
    this.studentCols = [
      { field: 'name', header: 'Name' },
      { field: 'surname', header: 'Surname' },
      { field: 'courses', header: 'Courses' }
    ];

    this.professorCols = [
      { field: 'name', header: 'Name' },
      { field: 'surname', header: 'Surname' },
      { field: 'courses', header: 'Course' }
    ];

    this.courseCols = [
      { field: 'name', header: 'Name' },
      { field: 'shortName', header: 'Short Name' },
      { field: 'professor', header: 'Professor' },
      { field: 'students', header: 'Students' }
    ];
  }

  ngOnInit() {
    this.students = this.studentService.getStudents();
    this.professors = this.studentService.getProfessors();
    this.courses = this.studentService.getCourses();
  }
}