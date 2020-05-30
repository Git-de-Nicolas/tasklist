import {Component, OnInit} from '@angular/core';
import {Post} from "../entity/Post.entity";
import {PostServiceService} from "../service/post-service.service";

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostServiceService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => {
      this.posts = value;
    });
  }

}
