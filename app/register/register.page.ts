/* eslint-disable max-len */
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonSlides, AlertController } from '@ionic/angular';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  slideConfig = {
    effect: 'flip',
    slidesPerView: 1,
    centeredSlides: true,
    autoHeight: true
  };

  ionicForm: FormGroup;
  sscper = 0.00;
  sscmarks = 0;
  sscoutof = 1;
  hscper = 0.00;
  hscmarks = 0;
  hscoutof = 1;
  isSubmitted = false;





  constructor(public formBuilder: FormBuilder, private studentservice: StudentService, private alertController: AlertController, private route: Router, private transfer: FileTransfer, private file: File) { }

// fileTransfer: FileTransferObject = this.transfer.create();


// fileTransfer.upload(..).then(..).catch(..);

//   upload() {
//     let options: FileUploadOptions = {
//       fileKey: 'file',
//       fileName: 'name.jpg',
//       headers: {}
//     }

//     this.fileTransfer.upload('../../assets/documents/colgate-palmolive.pdf', '&lt;api endpoint>', options)
//       .then((data) => {
//         // success
//       }, (err) => {
//         // error
//       })
//   }

  ngOnInit() {
    // Validators.pattern('\w+\s{1}\w+\s{1}\w+')
    // this.isFormFilled();
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(8)]],

      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],

      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],

      rollno: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],

      schoolName: ['', [Validators.required, Validators.minLength(10)]],

      sscyear: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(4)]],

      sscmark: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(3)]],

      sscoutof: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(3)]],

      sscperc: [''],

      clghsc: ['', [Validators.required, Validators.minLength(10)]],

      hscyear: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(4)]],

      hscmarks: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(3)]],

      hscoutof: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(3), Validators.maxLength(3)]],

      hscperc: [''],

      clgug: ['', [Validators.required, Validators.minLength(10)]],

      ugyear: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(4)]],
      ugcgpa: ['', [Validators.required]],
    });
  }

  prev() {
    this.slides.slidePrev();
  }
  next() {
    this.slides.slideNext();
  }

  getmarks1(e) {
    this.sscmarks = e.target.value;
    console.log(this.sscmarks);
  }
  getmarkso1(e) {
    this.sscoutof = e.target.value;
    console.log(this.sscoutof);
  }
  calculatePercentage1() {
    this.sscper = (this.sscmarks / this.sscoutof) * 100;
    console.log(this.sscper);
  }
  getmarks2(e) {
    this.hscmarks = e.target.value;
    console.log(this.hscmarks);
  }
  getmarkso2(e) {
    this.hscoutof = e.target.value;
    console.log(this.hscoutof);
  }
  calculatePercentage2() {
    this.hscper = (this.hscmarks / this.hscoutof) * 100;
  }

  async presentAlert(head, msg, status) {
    const alert = await this.alertController.create({
      header: head,
      message: msg,
      buttons: [
        {
          text: 'OK',
          role: 'OK',
          cssClass: 'primary',
          handler: () => {
            if (status) {
              console.log('Navigate to Dashboard');
              // this.route.navigateByUrl('tabs');
              this.route.navigate(['/tabs']);
            }
            else {
              console.log('Stay on same page');
            }
          }
        }
      ],
    });
    await alert.present();
  }

  registerForm() {
    this.isSubmitted = true;
    // if (!this.ionicForm.valid) {
    //   console.log('Please provide all the required values!');
    //   const msg = 'Please provide all the required values!';
    //   const head = 'Error';
    //   this.presentAlert(head, msg, false);
    //   return false;
    // } else {
    console.log(this.ionicForm.value);
    this.studentservice.setStudentInfo(this.ionicForm.value, (this.sscper).toFixed(2), (this.hscper).toFixed(2));
    const msg = 'Your registration is successful!';
    const head = 'Congratulations!';
    this.presentAlert(head, msg, true);
    // }
  }




}
