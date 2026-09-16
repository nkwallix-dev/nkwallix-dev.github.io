import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  STORY_EPISODES,
  StoryEpisode
} from '../../data/episodes';


type EpisodesView =
  'carousel'
  | 'timeline';


@Component({
  selector: 'app-episodes',

  imports: [RouterLink],

  templateUrl: './episodes.html',

  styleUrl: './episodes.css'
})


export class Episodes {

  currentView: EpisodesView = 'carousel';

  currentIndex = 0;


  readonly episodes: StoryEpisode[] =
    [...STORY_EPISODES]
      .sort(
        (a, b) =>
          a.chronology - b.chronology
      );


  get currentEpisode():
    StoryEpisode | undefined {

    return this.episodes[
      this.currentIndex
    ];

  }


  showCarousel() {

    this.currentView =
      'carousel';

  }


  showTimeline() {

    this.currentView =
      'timeline';

  }


  previousEpisode() {

    if (
      this.episodes.length === 0
    ) {
      return;
    }


    this.currentIndex =

      (
        this.currentIndex
        - 1
        + this.episodes.length
      )

      %

      this.episodes.length;

  }


  nextEpisode() {

    if (
      this.episodes.length === 0
    ) {
      return;
    }


    this.currentIndex =

      (
        this.currentIndex
        + 1
      )

      %

      this.episodes.length;

  }


  openEpisode(
    index: number
  ) {

    this.currentIndex =
      index;

    this.currentView =
      'carousel';

  }


  formatStoryDate(
    storyDate?: string
  ) {

    if (!storyDate) {

      return 'Datum noch nicht eingetragen';

    }


    const [
      year,
      month,
      day
    ] = storyDate
      .split('-')
      .map(Number);


    const date =
      new Date(
        year,
        month - 1,
        day
      );


    return new Intl.DateTimeFormat(
      'de-AT',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }
    ).format(date);

  }


  getEpisodeTypeLabel(
    episode: StoryEpisode
  ) {

    switch (
      episode.kind
    ) {

      case 'musicvideo':
        return 'Musikvideo';

      case 'trailer':
        return 'Trailer';

      case 'special':
        return 'Special';

      default:
        return 'Folge';

    }

  }

}