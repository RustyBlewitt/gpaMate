import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the PageFourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page-four',
  templateUrl: 'page-four.html',
})
export class PageFourPage {
  courseData: any;
  assessments: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    //this.data = this.navParams.get('data');
    this.assessments = this.httpClient.get('https://courseprofile.secure.griffith.edu.au/service/student-course-json.php?profileId=89756');
    this.assessments.subscribe(data => {
      this.courseData = data.assessment_plan;
      console.log(this.courseData);


    })



  }
  getExpectedResult(){
    let someVal = prompt("....");
    console.log(someVal);

  }
}
