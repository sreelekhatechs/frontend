import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
posts:any

  constructor(private postservice:PostService) { }

  ngOnInit(): void {
    this.postservice.getPostblog()
    .subscribe(data =>{
      console.log(data)
      this.posts = data;
      
    });
  }
  

}
