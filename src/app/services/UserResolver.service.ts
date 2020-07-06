import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { GetService } from './get.service';
import { Observable, empty } from 'rxjs';
import { post } from 'src/models/structmodel.model';
import { take, mergeMap, catchError, filter } from 'rxjs/operators'

@Injectable({
    providedIn: "root"
})

export class UserResolverService implements Resolve<post[]> {

    constructor(private getservice: GetService, private route: ActivatedRoute) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<post[]> {

        return this.getservice.getPosts().pipe(
           
            catchError((error) => {
                return empty();
            })

        )
    }


}

