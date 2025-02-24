import { Component, OnInit } from '@angular/core';
import { StoryblokService } from './services/storyblok.service';
import { Components } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  story = {content: null, name: ''};
  components = Components;

  constructor(private storyblokService: StoryblokService) {
    window.storyblok.init();
    window.storyblok.on(['change', 'published'],  function() {
      location.reload()
    });
  }

  ngOnInit() {
    this.storyblokService.getStory('home', {version: 'draft'})
      .then(data => this.story = data.story);
  }
}
