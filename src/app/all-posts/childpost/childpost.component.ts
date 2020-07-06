import { Component, OnInit, Input, Injectable } from '@angular/core';
import { post } from 'src/models/structmodel.model';
import { JsonPipe } from '@angular/common';
import { JsonpInterceptor } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { GetService } from 'src/app/services/get.service';
import { of, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ThrowStmt } from '@angular/compiler';


const ob: Observable<number> = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(filter(v => v % 2 === 0), map(v => v * 10));
@Component({
  selector: 'app-childpost',
  templateUrl: './childpost.component.html',
  styleUrls: ['./childpost.component.css']
})



export class ChildpostComponent implements OnInit {
  @Input() childpost: [];

  id;
  userid;
  title;
  body;
  fname;
  lname; email; git; linked;
  postdet: post[];
  a: Observable<post[]>;
  b;
  routeid;
  constructor(private route: ActivatedRoute) {


  }

  ngOnInit(): void {
    this.id = localStorage.getItem('key1');
    this.userid = localStorage.getItem('key2');
    this.title = localStorage.getItem('key3');
    this.body = localStorage.getItem('key4');
    this.fname = localStorage.getItem('key5');
    this.lname = localStorage.getItem('key6');
    this.email = localStorage.getItem('key7');
    this.git = localStorage.getItem('key8');
    this.linked = localStorage.getItem('key9');
    this.routeid = parseInt(this.route.snapshot.paramMap.get('id'));


    this.getpost();

    // console.log(this.postdet[0].body);









  }
  getpost() {
    this.route.data.subscribe(
      (data: { users: any }) => {
        this.postdet = data.users;
        console.log(this.postdet);
      });

    //  ob.subscribe(
    //   next => console.log('next:', next),
    //   err => console.log('error:', err),
    //   () => console.log('Completed'),
    // );

  }




}
