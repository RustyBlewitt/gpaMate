import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the CoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-course',
  templateUrl: 'course.html',
})
export class CoursePage {
  courses: Observable<any>;

  programList = [
    {
       CourseCode: '1014SCG',
       CourseName: 'Statistics',
       Profile: '81740'
    },
    {
       CourseCode: '1010ENG',
       CourseName: 'Engineering Maths 2',
       Profile: '83527'
    },
    {
       CourseCode: '1801ICT',
       CourseName: 'Programming Languages',
       Profile: '89756'
    },
    {
       CourseCode: '1808ICT',
       CourseName: 'Discrete Structures',
       Profile: '82444'
    }
  ];
  assessmentList =[];
  public currentCourse:string;
  public currentGPA:string;
  public creditPoints = 0;
  public updatedGPA:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    this.currentCourse = this.navParams.get('course');
    this.currentGPA = this.navParams.get('currentGPA');
    this.creditPoints = this.navParams.get('creditPoints');
    this.updatedGPA = this.currentGPA;

    for (let i = 0;i<4;i++){
      //console.log(this.programList[i].Profile);
      this.courses = this.httpClient.get('https://courseprofile.secure.griffith.edu.au/service/student-course-json.php?profileId=' + this.programList[i].Profile);
      this.courses.subscribe(data => {
        //console.log('my data: ', data.assessment_plan);
        this.getAssessment(data.assessment_plan, this.programList[i].CourseCode, this.programList[i].CourseName);
      })
    }
  }
  // addNewCourse(){
  //   let CourseName = prompt('Enter Course Name');
  //   let CourseCode= prompt('Enter Course Code');
  //   this.courseList.push({
  //     CourseName: CourseName,
  //     CourseCode: CourseCode
  //   });
  // }
  getAssessment(data: any, course_name: string, course_code: string){
    this.assessmentList.push({
        CourseName: course_name,
        CourseCode: course_code,
        Assessment: data

    });
    //console.log(data);
  }
  ionViewDidLoad() {
      //alert(this.currentGPA);
  }
  updateCalculation(somenumber: any){
    //this.updatedGPA =
    console.log(somenumber);

  }
  goToCoursePage(test: any){
    console.log(test);

  }



}
