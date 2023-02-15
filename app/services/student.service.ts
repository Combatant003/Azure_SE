/* eslint-disable max-len */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  studentInfo: any;

  constructor() { }

  // {
  //   name: 'Dipesh Dattaram Ghag',
  //   email: 'dipeshghag1234@gmail.com',
  //   mobile: 7208280187,
  //   rollno: 2021510016,
  //   schoolName: 'Maharashtra Vidyalaya',
  //   sscyear: 2015,
  //   sscmark: 414,
  //   sscoutof: 500,
  //   sscperc: 82.80,
  //   clghsc: 'Bhavans College',
  //   hscyear: 2017,
  //   hscmark: 413,
  //   hscoutof: 650,
  //   hscperc: 63.85,
  //   clgug: 'Patkar-varde college'
  //   ugyear: 2020,
  //   ugcgpa: 7.52
  // }

  setStudentInfo(arr: any, sscper: any, hscper: any) {
    this.studentInfo = {
      name: arr.name,
      email: arr.email,
      mobile: arr.mobile,
      rollno: arr.rollno,
      schoolName: arr.schoolName,
      sscyear: arr.sscyear,
      sscmark: arr.sscmark,
      sscoutof: arr.sscoutof,
      sscperc: sscper,
      clghsc: arr.clghsc,
      hscyear: arr.hscyear,
      hscmark: arr.hscmarks,
      hscoutof: arr.hscoutof,
      hscperc: hscper,
      clgug: arr.clgug,
      ugyear: arr.ugyear,
      ugcgpa: arr.ugcgpa
    };

    console.log(this.studentInfo);

  }

}
