import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { STORY_EPISODES } from '../../data/episodes';
import { STORY_ENTRIES } from '../../data/story-entries';

interface HomeSearchResult {
  key: string;
  type: 'Folge' | 'Charakter' | 'Artefakt';
  title: string;
  subtitle: string;
  image: string;
  route: string;
  queryParams?: Record<string, string | number>;
  score: number;
  sortOrder: number;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  searchOpen = false;
  searchTerm = '';

  toggleSearch() {
    this.searchOpen = !this.searchOpen;

    if (!this.searchOpen) {
      this.searchTerm = '';
    }
  }

  closeSearch() {
    this.searchOpen = false;
    this.searchTerm = '';
  }

  onSearchInput(event: Event) {
    this.searchTerm =
      (event.target as HTMLInputElement).value;
  }

  get searchResults(): HomeSearchResult[] {
    const query = this.normalize(this.searchTerm);

    if (!query) {
      return [];
    }

    const entryResults: HomeSearchResult[] =
      STORY_ENTRIES
        .filter(entry => {
          const searchable = this.normalize(
            `${entry.name} ${entry.description}`
          );

          return searchable.includes(query);
        })
        .map(entry => ({
          key: `entry-${entry.id}`,
          type:
            entry.kind === 'artifact'
              ? 'Artefakt'
              : 'Charakter',
          title: entry.name,
          subtitle: entry.description,
          image: entry.image,
          route: '/charaktere',
          score: this.getMatchScore(
            entry.name,
            query,
            entry.description
          ),
          sortOrder: 0
        }));

    const episodeResults: HomeSearchResult[] =
      STORY_EPISODES
        .filter(episode =>
          this.normalize(episode.title)
            .includes(query)
        )
        .map(episode => ({
          key: `episode-${episode.id}`,
          type: 'Folge' as const,
          title: episode.title,

          subtitle:
            episode.storyRelevant &&
            episode.chronology !== undefined
              ? `${episode.chronology}. Folge im Storyhub`
              : `${this.getEpisodeKindsLabel(episode.kinds)} im Storyhub`,

          image: episode.thumbnail,
          route: '/folgen',

          queryParams: {
            episode: episode.id
          },

          score: this.getMatchScore(
            episode.title,
            query
          ),

          sortOrder:
            episode.chronology ??
            Number.MAX_SAFE_INTEGER
        }));

    return [
      ...entryResults,
      ...episodeResults
    ]
      .sort((a, b) =>
        b.score - a.score ||

        (a.type === 'Folge' ? 1 : 0) -
        (b.type === 'Folge' ? 1 : 0) ||

        a.sortOrder - b.sortOrder ||

        a.title.localeCompare(
          b.title,
          'de'
        )
      )
      .slice(0, 8);
  }

  private getMatchScore(
    value: string,
    normalizedQuery: string,
    secondaryValue = ''
  ): number {
    const normalizedValue =
      this.normalize(value);

    if (normalizedValue === normalizedQuery) {
      return 1000;
    }

    if (normalizedValue.startsWith(normalizedQuery)) {
      return 850;
    }

    const matchIndex =
      normalizedValue.indexOf(normalizedQuery);

    if (matchIndex >= 0) {
      const isWordStart =
        matchIndex === 0 ||
        normalizedValue[matchIndex - 1] === ' ' ||
        normalizedValue[matchIndex - 1] === '-' ||
        normalizedValue[matchIndex - 1] === '|';

      return (
        (isWordStart ? 700 : 600) -
        matchIndex * 8 -
        normalizedValue.length * 0.1
      );
    }

    if (
      secondaryValue &&
      this.normalize(secondaryValue)
        .includes(normalizedQuery)
    ) {
      return 200;
    }

    return 0;
  }

  private getEpisodeKindsLabel(
    kinds: string[]
  ): string {
    return kinds
      .map(kind => {
        switch (kind) {
          case 'musicvideo':
            return 'Musikvideo';

          case 'trailer':
            return 'Trailer';

          case 'special':
            return 'Special';

          default:
            return 'Folge';
        }
      })
      .join(' · ');
  }

  private normalize(value: string): string {
    return value
      .toLocaleLowerCase('de-AT')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  }
}
