webpackJsonp([5],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_four_page_four__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_three_page_three__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_two_page_two__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_one_page_one__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CoursePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CoursePage = /** @class */ (function () {
    function CoursePage(navCtrl, navParams, httpClient) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        this.programList = [
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
        this.assessmentList = [];
        this.creditPoints = 0;
        this.currentCourse = this.navParams.get('course');
        this.currentGPA = this.navParams.get('currentGPA');
        this.creditPoints = this.navParams.get('creditPoints');
        this.updatedGPA = this.currentGPA;
        var _loop_1 = function (i) {
            //console.log(this.programList[i].Profile);
            this_1.courses = this_1.httpClient.get('https://courseprofile.secure.griffith.edu.au/service/student-course-json.php?profileId=' + this_1.programList[i].Profile);
            this_1.courses.subscribe(function (data) {
                //console.log('my data: ', data.assessment_plan);
                _this.getAssessment(data.assessment_plan, _this.programList[i].CourseCode, _this.programList[i].CourseName);
            });
        };
        var this_1 = this;
        for (var i = 0; i < 4; i++) {
            _loop_1(i);
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
    CoursePage.prototype.getAssessment = function (data, course_name, course_code) {
        this.assessmentList.push({
            CourseName: course_name,
            CourseCode: course_code,
            Assessment: data
        });
        //console.log(data);
    };
    CoursePage.prototype.ionViewDidLoad = function () {
        //alert(this.currentGPA);
    };
    CoursePage.prototype.updateCalculation = function (somenumber) {
        var totalGPA = eval(this.updatedGPA * this.creditPoints) + eval(somenumber);
        this.updatedGPA = totalGPA / (eval(this.creditPoints) + 1);
        console.log(this.updatedGPA);
    };
    CoursePage.prototype.goToCoursePage = function (selected) {
        if (selected == "1801ICT") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__page_four_page_four__["a" /* PageFourPage */], { data: this.assessmentList[2].Assessment });
        }
        else if (selected == "1010ENG") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__page_three_page_three__["a" /* PageThreePage */]);
        }
        else if (selected == "1014SCG") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__page_two_page_two__["a" /* PageTwoPage */]);
        }
        else if (selected == "1808ICT") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__page_one_page_one__["a" /* PageOnePage */]);
        }
    };
    CoursePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-course',template:/*ion-inline-start:"/Users/codielittle/Desktop/hackathon/gpaMate/src/pages/course/course.html"*/'<!--\n  Generated template for the CoursePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Course Code: {{ currentCourse }}</ion-title>\n\n\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n      <h3>Current GPA: {{ currentGPA }}</h3>\n      <h3>Total Credit Points: {{ creditPoints }}</h3>\n      <br>\n      Updated GPA: {{ updatedGPA }}\n\n\n        <ion-list>\n           <ion-item *ngFor="let assessment of assessmentList">\n\n                <ion-card>\n                  <ion-card-content (click)=\'goToCoursePage(assessment.CourseName)\'>\n                      Course Name: {{assessment.CourseName}}\n                  </ion-card-content>\n                  <ion-card-content (click)=\'goToCoursePage(assessment.CourseName)\'>\n                      Course Code: {{assessment.CourseCode}}\n                  </ion-card-content>\n                  <ion-item>\n                    <ion-input type="number" [(ngModel)]=\'assessment.expectedGrade\' (ionChange)=\'updateCalculation(assessment.expectedGrade)\' placeholder="Enter Expected Grade"></ion-input>\n\n                  </ion-item>\n\n                </ion-card>\n          </ion-item>\n        </ion-list>\n  <!-- <button ion-button full (click) ="addNewCourse()"><ion-icon name="add"></ion-icon></button> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/codielittle/Desktop/hackathon/gpaMate/src/pages/course/course.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object])
    ], CoursePage);
    return CoursePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=course.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageFourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PageFourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PageFourPage = /** @class */ (function () {
    function PageFourPage(navCtrl, navParams, httpClient) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpClient = httpClient;
        //this.data = this.navParams.get('data');
        this.assessments = this.httpClient.get('https://courseprofile.secure.griffith.edu.au/service/student-course-json.php?profileId=89756');
        this.assessments.subscribe(function (data) {
            _this.courseData = data.assessment_plan;
            console.log(_this.courseData);
        });
    }
    PageFourPage.prototype.getExpectedResult = function () {
        var someVal = prompt("....");
        console.log(someVal);
    };
    PageFourPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page-four',template:/*ion-inline-start:"/Users/codielittle/Desktop/hackathon/gpaMate/src/pages/page-four/page-four.html"*/'<!--\n  Generated template for the PageFourPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>1801ICT - Programming Languages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-item *ngFor="let item of courseData" (click)="getExpectedResult()">\n      {{ item[0]}}\n      <br>\n      Weight: {{ item[2]}}\n\n\n\n\n    </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Users/codielittle/Desktop/hackathon/gpaMate/src/pages/page-four/page-four.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object])
    ], PageFourPage);
    return PageFourPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=page-four.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageThreePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PageThreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PageThreePage = /** @class */ (function () {
    function PageThreePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PageThreePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PageThreePage');
    };
    PageThreePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page-three',template:/*ion-inline-start:"/Users/codielittle/Desktop/hackathon/gpaMate/src/pages/page-three/page-three.html"*/'<!--\n  Generated template for the PageThreePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>1010ENG - Engineering Mathematics</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/codielittle/Desktop/hackathon/gpaMate/src/pages/page-three/page-three.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PageThreePage);
    return PageThreePage;
}());

//# sourceMappingURL=page-three.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageTwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PageTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PageTwoPage = /** @class */ (function () {
    function PageTwoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PageTwoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PageTwoPage');
    };
    PageTwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page-two',template:/*ion-inline-start:"/Users/codielittle/Desktop/hackathon/gpaMate/src/pages/page-two/page-two.html"*/'<!--\n  Generated template for the PageTwoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>1014SCG - Statistics</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/codielittle/Desktop/hackathon/gpaMate/src/pages/page-two/page-two.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PageTwoPage);
    return PageTwoPage;
}());

//# sourceMappingURL=page-two.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageOnePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PageOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PageOnePage = /** @class */ (function () {
    function PageOnePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PageOnePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PageOnePage');
    };
    PageOnePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-page-one',template:/*ion-inline-start:"/Users/codielittle/Desktop/hackathon/gpaMate/src/pages/page-one/page-one.html"*/'<!--\n  Generated template for the PageOnePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>1808ICT - Discrete Structures</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/codielittle/Desktop/hackathon/gpaMate/src/pages/page-one/page-one.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PageOnePage);
    return PageOnePage;
}());

//# sourceMappingURL=page-one.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/course/course.module": [
		280,
		4
	],
	"../pages/page-four/page-four.module": [
		281,
		3
	],
	"../pages/page-one/page-one.module": [
		282,
		2
	],
	"../pages/page-three/page-three.module": [
		283,
		1
	],
	"../pages/page-two/page-two.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__course_course__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { PageFourPage } from '../pagefour'

var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, httpClient) {
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
        this.programList = [
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
        this.courseProfile = 82444;
    }
    HomePage.prototype.pullClasses = function () {
        // if (this.currentGPA >= this.targetGPA || this.currentGPA > 7 || this.targetGPA > 7){
        //     alert("Invalid information");
        // }
        // else{
        //   this.navCtrl.push(CoursePage, {course: this.course, currentGPA: this.currentGPA, studentNumber: this.studentNumber, targetGPA: this.targetGPA});
        // }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__course_course__["a" /* CoursePage */], { course: this.course, currentGPA: this.currentGPA, studentNumber: this.studentNumber, creditPoints: this.creditPoints });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/codielittle/Desktop/hackathon/gpaMate/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-input placeholder="Enter Student Number: "></ion-input>\n  </ion-item>\n\n  <ion-item>\n\n    <ion-input type="number" [(ngModel)]="currentGPA" placeholder="Enter Current GPA:     eg. 4.5 "></ion-input>\n\n\n\n  </ion-item>\n\n  <ion-item>\n    <ion-input type="number" [(ngModel)]="creditPoints" placeholder="Enter Credit Points Completed: "></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Course</ion-label>\n    <ion-select [(ngModel)]="course">\n      <ion-option value="1534">B. Computer Science</ion-option>\n\n      <ion-option value="m">B. Information Technology</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <button ion-button full (click)="pullClasses()">\n   Submit\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/codielittle/Desktop/hackathon/gpaMate/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_course_course__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_page_four_page_four__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_page_three_page_three__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_page_two_page_two__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_page_one_page_one__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_course_course__["a" /* CoursePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_page_four_page_four__["a" /* PageFourPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_page_three_page_three__["a" /* PageThreePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_page_two_page_two__["a" /* PageTwoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_page_one_page_one__["a" /* PageOnePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/course/course.module#CoursePageModule', name: 'CoursePage', segment: 'course', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page-four/page-four.module#PageFourPageModule', name: 'PageFourPage', segment: 'page-four', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page-one/page-one.module#PageOnePageModule', name: 'PageOnePage', segment: 'page-one', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page-three/page-three.module#PageThreePageModule', name: 'PageThreePage', segment: 'page-three', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page-two/page-two.module#PageTwoPageModule', name: 'PageTwoPage', segment: 'page-two', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_course_course__["a" /* CoursePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_page_four_page_four__["a" /* PageFourPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_page_two_page_two__["a" /* PageTwoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_page_three_page_three__["a" /* PageThreePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_page_one_page_one__["a" /* PageOnePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/codielittle/Desktop/hackathon/gpaMate/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/codielittle/Desktop/hackathon/gpaMate/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map