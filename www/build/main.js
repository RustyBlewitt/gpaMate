webpackJsonp([5],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(78);
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
        //this.updatedGPA =
        console.log(somenumber);
    };
    CoursePage.prototype.goToCoursePage = function (test) {
        console.log(test);
    };
    CoursePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-course',template:/*ion-inline-start:"/Users/codielittle/Desktop/hackathon/gpaMate/src/pages/course/course.html"*/'<!--\n  Generated template for the CoursePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ currentCourse }}</ion-title>\n\n\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n      <h3>Current GPA: {{ currentGPA }}</h3>\n      <h3>Total Credit Points: {{ creditPoints }}</h3>\n      <ion-list>\n          <!-- list 4 courses, on click, new page will be pushed that has individual course information -->\n          <ion-item *ngFor="let assessment of assessmentList" class="listTest" (click)=\'goToCoursePage(assessment.CourseName)\'>\n\n\n              <h4><b>Course Name: </b>{{assessment.CourseName}}</h4>\n\n              <h4><b>Course Code:</b> {{assessment.CourseCode}}</h4>\n                   <!-- <input [(ngModel)] = "assessment.expectedGrade" (ionChange)="updateCalculation()" type = "number" placeholder = "Enter Expected Grade: " /> -->\n                   <!-- <ion-input type="number" [(ngModel)]="expectedGrade" placeholder="Enter Expected Grade: "></ion-input> -->\n              <ion-item>\n              <ion-input type="number" [(ngModel)]=\'assessment.expectedGrade\' (ionChange)=\'updateCalculation(assessment.expectedGrade)\' placeholder="Enter Expected Grade"></ion-input>\n              </ion-item>\n\n\n            <!-- <ion-list>\n                <ion-item *ngFor="let item of assessment.Assessment">\n\n                  <div>\n                    {{ item[2] }}\n                  </div>\n\n\n                </ion-item>\n              </ion-list> -->\n\n\n          </ion-item>\n        </ion-list>\n        Updated GPA: {{ updatedGPA }}\n  <!-- <button ion-button full (click) ="addNewCourse()"><ion-icon name="add"></ion-icon></button> -->\n\n</ion-content>\n'/*ion-inline-end:"/Users/codielittle/Desktop/hackathon/gpaMate/src/pages/course/course.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object])
    ], CoursePage);
    return CoursePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=course.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/course/course.module": [
		276,
		4
	],
	"../pages/page-four/page-four.module": [
		277,
		3
	],
	"../pages/page-one/page-one.module": [
		278,
		2
	],
	"../pages/page-three/page-three.module": [
		279,
		1
	],
	"../pages/page-two/page-two.module": [
		280,
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__course_course__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(275);
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

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_course_course__ = __webpack_require__(101);
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
                __WEBPACK_IMPORTED_MODULE_8__pages_course_course__["a" /* CoursePage */]
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
                __WEBPACK_IMPORTED_MODULE_8__pages_course_course__["a" /* CoursePage */]
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

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
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

},[199]);
//# sourceMappingURL=main.js.map