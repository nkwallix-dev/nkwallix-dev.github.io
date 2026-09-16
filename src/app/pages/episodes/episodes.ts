import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  EpisodeKind,
  STORY_EPISODES,
  StoryEpisode
} from '../../data/episodes';

type EpisodesView = 'carousel' | 'timeline';

@Component({
  selector: 'app-episodes',
  imports: [RouterLink],
  templateUrl: './episodes.html',
  styleUrl: './episodes.css'
})
export class Episodes {

  currentView: EpisodesView =
    typeof window !== 'undefined' &&
    window.matchMedia('(max-width: 650px)').matches
      ? 'timeline'
      : 'carousel';
  currentIndex = 0;

  filterOpen = false;

  selectedKinds = new Set<EpisodeKind>();

  readonly episodes: StoryEpisode[] = [...STORY_EPISODES]
    .sort((a, b) => a.chronology - b.chronology);

  get filteredEpisodes(): StoryEpisode[] {
    /*
     * Kein Kategorie-Filter aktiv:
     * Nur storyrelevante Videos anzeigen.
     * Dadurch bleibt Contract Killer aus der normalen Chronologie draußen.
     */
    if (this.selectedKinds.size === 0) {
      return this.episodes.filter(episode => episode.storyRelevant);
    }

    /*
     * Kategorie-Filter aktiv:
     * Alles aus den gewählten Kategorien anzeigen.
     * Dadurch taucht Contract Killer unter "Musikvideos" auf.
     */
    return this.episodes.filter(episode =>
      this.selectedKinds.has(episode.kind)
    );
  }

  get currentEpisode(): StoryEpisode | undefined {
    return this.filteredEpisodes[this.currentIndex];
  }

  get selectedKindCount(): number {
    return this.selectedKinds.size;
  }

  showCarousel() {
    this.currentView = 'carousel';
  }

  showTimeline() {
    this.currentView = 'timeline';
  }

  toggleFilter() {
    this.filterOpen = !this.filterOpen;
  }

  toggleKind(kind: EpisodeKind) {
    if (this.selectedKinds.has(kind)) {
      this.selectedKinds.delete(kind);
    } else {
      this.selectedKinds.add(kind);
    }

    // Nach jedem Filterwechsel wieder bei der ersten passenden Folge starten.
    this.currentIndex = 0;
  }

  isKindSelected(kind: EpisodeKind): boolean {
    return this.selectedKinds.has(kind);
  }

  resetCategoryFilter() {
    this.selectedKinds.clear();
    this.currentIndex = 0;
  }

  previousEpisode() {
    const episodes = this.filteredEpisodes;

    if (episodes.length === 0) {
      return;
    }

    this.currentIndex =
      (this.currentIndex - 1 + episodes.length) % episodes.length;
  }

  nextEpisode() {
    const episodes = this.filteredEpisodes;

    if (episodes.length === 0) {
      return;
    }

    this.currentIndex =
      (this.currentIndex + 1) % episodes.length;
  }

  openEpisode(index: number) {
    this.currentIndex = index;
    this.currentView = 'carousel';
  }

  formatStoryDate(storyDate?: string) {
    if (!storyDate) {
      return 'Datum noch nicht eingetragen';
    }

    const [year, month, day] = storyDate
      .split('-')
      .map(Number);

    const date = new Date(year, month - 1, day);

    return new Intl.DateTimeFormat('de-AT', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(date);
  }

  getEpisodeTypeLabel(episode: StoryEpisode) {
    switch (episode.kind) {
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
