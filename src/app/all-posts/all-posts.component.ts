import { Component, OnInit } from '@angular/core';
import { GetService } from '../services/get.service';
import { post } from 'src/models/structmodel.model';
import {Router} from '@angular/router';
import { person } from 'src/models/posts.model';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  allposts:post[] =[];
  people:person[];
  id:post;
  a=2;
  

  //input variables
    input_userid:string="";
    input_title:string="";
    input_body:string="";
    input_fname:string="";
    input_lname:string="";
    input_email:string="";
    input_git:string="";
    input_linkedin:string="";
    
  constructor(private getservice:GetService, private router:Router) { }
   
  ngOnInit(): void {
    

  }

  getallposts():void{
    this.getservice.getPosts().subscribe((data:post[])=>{
           this.allposts=data;

          console.log(this.allposts);
    })
  }

  addpost(){
    this.getservice.postdata({
      title: this.input_title,
      body:this.input_body,
      userId:this.input_userid
  }).subscribe((data:post)=>{
       this.id=data;
      
       localStorage.setItem('key1',data.id);
      localStorage.setItem('key2',data.userId);
      localStorage.setItem('key3',data.title);
      localStorage.setItem('key4',data.body);
      localStorage.setItem('key5',this.input_fname);
    localStorage.setItem('key6',this.input_lname);
    localStorage.setItem('key7',this.input_email);
    localStorage.setItem('key8',this.input_git);
    localStorage.setItem('key9',this.input_linkedin);
    this.router.navigate(['/childpost', 1]);
       console.log(this.id);
       
       
       
    })
    
  }

  onclick(){
    this.addpost();
   
    
  //   setTimeout (() => {
  //     this.navigation()
  //  }, 3000);
  
    }
    navigation(){
      
    }
  

}
