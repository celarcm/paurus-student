import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { Professor } from '../models/professor';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [
    {
      id: 814437377,
      name: 'Matt',
      surname: 'Wallace',
      courses: [ 'MATH101', 'CS101' ]
    },
    {
      id: 878734144,
      name: 'Andrew',
      surname: 'Taylor',
      courses: ['MATH101', 'PHY101']
    },
    {
      id: 411267144,
      name: 'John',
      surname: 'Doe',
      courses: ['PSY101', 'IT101']
    },
    {
      id: 585208377,
      name: 'Andrea',
      surname: 'Bocelli',
      courses: ['MAT101', 'CHEM101']
    },
    {
      id: 592215377,
      name: 'Quentin',
      surname: 'Tarantino',
      courses: ['DIR101', 'ACT101']
    }
  ]

  professors: Professor[] = [
    {
      name: 'Ada',
      surname: 'Lovelace',
      courses: ['CS101']
    },
    {
      name: 'Thomas',
      surname: 'Plum',
      courses: ['MATH101']
    },
    {
      name: 'Alexander',
      surname: 'Needell',
      courses: ['PHY101']
    },
    {
      name: 'John',
      surname: 'Doe',
      courses: ['PSY101']
    },
    {
      name: 'Federico',
      surname: 'Pellegrini',
      courses: ['IT101']
    },
    {
      name: 'Sandy',
      surname: 'Munroe',
      courses: ['MAT101', 'CHEM101']
    },
    {
      name: 'Martin',
      surname: 'Scorsese',
      courses: ['DIR101', 'ACT101']
    }
  ];

  courses: Course[] = [
    {
      name: 'Computer Science 101',
      shortName: 'CS101',
      professor: 'Ada Lovelace',
    },
    {
      name: 'Mathematics 101',
      shortName: 'MATH101',
      professor: 'Thomas Plum',
    },
    {
      name: 'Physics 101',
      shortName: 'PHY101',
      professor: 'Alexander Needell',
    },
    {
      name: 'Psychology',
      shortName: 'PSY101',
      professor: 'John Doe'
    },
    {
      name: 'Italian 101',
      shortName: 'IT101',
      professor: 'Federico Pellegrini'
    },
    {
      name: 'Materials 101',
      shortName: 'MAT101',
      professor: 'Sandy Munroe'
    },
    {
      name: 'Chemistry 101',
      shortName: 'CHEM101',
      professor: 'Sandy Munroe'
    },
    {
      name: 'Directing 101',
      shortName: 'DIR101',
      professor: 'Martin Scorsese'
    },
    {
      name: 'Acting 101',
      shortName: 'ACT101',
      professor: 'Martin Scorsese'
    }
  ]

  constructor() { }
  getCourses(): Course[] {
    // Add students list dynamically
    this.courses.map(course => {
      const students: string[] = this.students.reduce((studentList, student) => {
        if(student.courses.includes(course.shortName)) {
          studentList.push(`${student.name} ${student.surname}`)
        }
        return studentList;
      }, []);
      course.students = students;
    })
    return this.courses;
  }
  getProfessors(): Professor[] {
    return this.professors;
  }
  getStudents(): Student[] {
    return this.students;
  }
  addStudent(student: Student): Student[] {
    this.students.push(student);
    return this.students;
  }
  updateStudent(student: Student): Student[] {
    this.students = this.students.map((s: Student) => {
      if(s.id === student.id) {
        return student;
      }
    })
    return this.students;
  }
  filterStudent(student: Student): Student[] {
    this.students = this.students.filter((s: Student) => s.id !== student.id);
    return this.students;
  }
}