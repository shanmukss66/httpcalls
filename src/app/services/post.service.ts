import {HttpClient} from '@angular/common/http'
import {person} from 'src/models/posts.model'
import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';

@Injectable({
    providedIn:"root"
})

export class ApiService{
   
    constructor(private http:HttpClient){

    }

    

}