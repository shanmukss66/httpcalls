import { Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { post } from 'src/models/structmodel.model'
import {trail} from 'src/models/trail.model'
import { Observable } from 'rxjs'

@Injectable({
    providedIn:"root"
})

export class GetService{

    
    constructor(private http:HttpClient){
        
    }

    getPosts():Observable<any>{
       return this.http.get("https://jsonplaceholder.typicode.com/posts")
    }
     getEachPost(id):Observable<any>{
        return this.http.get("https://jsonplaceholder.typicode.com/posts?userId="+id);
     }

   postdata(data){
         return this.http.post("https://jsonplaceholder.typicode.com/posts" , data);
    }

    


}
 
