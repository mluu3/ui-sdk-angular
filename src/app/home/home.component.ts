import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';
import {Model} from '@gooddata/react-components';
import { isSimpleMeasure } from '@gooddata/gooddata-js/lib/DataLayer/utils/AfmUtils';
import { measure } from '@gooddata/react-components/dist/helpers/model';
import { MEASURES } from '@gooddata/react-components/dist/constants/bucketNames';

@Component({ 
    
    templateUrl: 'home.component.html' 
})
export class HomeComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    measures = [
        {
            measure: {
                localIdentifier: 'franchiseFeesAdRoyaltyIdentifier',
                definition: {
                    measureDefinition: {
                        item: {
                            identifier: 'aa5JBkFDa7sJ'
                        }
                    }
                },
                format: '#,##0'
            }
        },
        {
            measure: {
                localIdentifier: 'franchiseFeesAdRoyaltyIdentifier',
                definition: {
                    measureDefinition: {
                        item: {
                            identifier: 'aa5JBkFDa7sJ'
                        }
                    }
                },
                format: '#,##0'
            }
        }
    ]
    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
        
    }

    ngOnInit() {
        //this.loadAllUsers();
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        //this.currentUserSubscription.unsubscribe();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
}