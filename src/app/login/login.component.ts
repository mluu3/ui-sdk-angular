import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import sdk from '@gooddata/gooddata-js';

import { AlertService, AuthenticationService } from '@app/_services';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: [''],
            password: ['']
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        // this.authenticationService.login('hang.ngo@gooddata.com', 'changeit')
        //     .pipe(first())
        //     .subscribe(
        //Hang

        sdk.user
           .login('hang.ngo@gooddata.com', 'changeit').then(
                data => {
                //     var projectId = 'dzz5d0npfglwepv16k8lyr6631dmkepc';
                //     return sdk.user.getAccountInfo().then(accountInfo => {
                //         const userId = accountInfo.profileUri.split("/").reverse()[0];
                //     const isProjectAssigned = sdk.project.getProjects(userId).then(projects => {
                //         // find project
                //         const isProjectAssigned = projects.some(project => {
                //             return project.links.metadata.split("/").reverse()[0] === projectId;
                //         });
                //     if (!isProjectAssigned) {
                //         return sdk.xhr
                //             .post("/api/assign-project", {
                //                 data: {
                //                     user: '/gdc/account/profile/65b12d07ca493f60ceb1b57c1d6eebb5',
                //                 },
                //             })
                //             .then(() => {
                //                     isProjectAssigned: true
                               
                //             });
                //     }
                //     return Promise.resolve();
                // });
            // })
            // .catch(error => {
                
            // });
                    console.log("==> Navigate to home");
                    this.router.navigateByUrl('/home');
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
