import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { STORY_EPISODES } from '../../data/episodes';
import {
  CharacterRole,
  STORY_ENTRIES,
  StoryEntry
} from '../../data/story-entries';

interface Actor {
  name: string;
  description: string;
  image: string;
  imageClass: string;
}

@Component({
  selector: 'app-characters',
  imports: [RouterLink],
  templateUrl: './characters.html',
  styleUrl: './characters.css'
})
export class Characters {
  currentView: 'characters' | 'actors' = 'characters';

  searchOpen = false;
  filterOpen = false;
  videoFilterOpen = false;

  searchTerm = '';
  magicalBeingsOnly = false;
  magicalArtifactsOnly = false;

  // LEER bedeutet: kein Rollenfilter -> alles anzeigen.
  selectedRoles = new Set<CharacterRole>();
  selectedEpisodeId: string | null = null;

  readonly episodes = [...STORY_EPISODES].sort(
    (a, b) => a.chronology - b.chronology
  );

  readonly storyEntries: StoryEntry[] = STORY_ENTRIES;

  readonly roleFilters: CharacterRole[] = [
    'Protagonist',
    'Antagonist',
    'Animalisch'
  ];

  actors: Actor[] = [
    {
      name: 'Niklas',
      description: '',
      image: '/actors/Niklas.png',
      imageClass: 'niklas-image'
    },
    {
      name: 'Philip',
      description: '',
      image: '/actors/Philip.png',
      imageClass: 'philip-image'
    }
  ];

  showCharacters() {
    this.currentView = 'characters';
    this.searchTerm = '';
    this.filterOpen = false;
    this.videoFilterOpen = false;
  }

  showActors() {
    this.currentView = 'actors';
    this.searchTerm = '';
    this.filterOpen = false;
    this.videoFilterOpen = false;
  }

  toggleSearch() {
    this.searchOpen = !this.searchOpen;

    if (!this.searchOpen) {
      this.searchTerm = '';
    }
  }

  toggleFilter() {
    this.filterOpen = !this.filterOpen;

    if (!this.filterOpen) {
      this.videoFilterOpen = false;
    }
  }

  toggleVideoFilter() {
    this.videoFilterOpen = !this.videoFilterOpen;
  }

  updateSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
  }

  toggleRole(role: CharacterRole) {
    if (this.selectedRoles.has(role)) {
      this.selectedRoles.delete(role);
    } else {
      this.selectedRoles.add(role);
    }
  }

  isRoleSelected(role: CharacterRole) {
    return this.selectedRoles.has(role);
  }

  toggleMagicalBeings() {
    this.magicalBeingsOnly = !this.magicalBeingsOnly;
  }

  toggleMagicalArtifacts() {
    this.magicalArtifactsOnly = !this.magicalArtifactsOnly;
  }

  selectEpisode(episodeId: string) {
    this.selectedEpisodeId =
      this.selectedEpisodeId === episodeId
        ? null
        : episodeId;
  }

  isEpisodeSelected(episodeId: string) {
    return this.selectedEpisodeId === episodeId;
  }

  clearEpisodeFilter() {
    this.selectedEpisodeId = null;
  }

  resetFilters() {
    this.selectedRoles.clear();
    this.magicalBeingsOnly = false;
    this.magicalArtifactsOnly = false;
    this.selectedEpisodeId = null;
  }

  applyFilters() {
    this.filterOpen = false;
    this.videoFilterOpen = false;
  }

  get selectedEpisode() {
    if (!this.selectedEpisodeId) {
      return null;
    }

    return this.episodes.find(
      episode => episode.id === this.selectedEpisodeId
    ) ?? null;
  }

  get filteredStoryEntries() {
    const search = this.searchTerm.trim().toLowerCase();
    const hasRoleFilter = this.selectedRoles.size > 0;
    const episode = this.selectedEpisode;

    return this.storyEntries.filter(entry => {
      const matchesSearch =
        entry.name.toLowerCase().includes(search) ||
        entry.description.toLowerCase().includes(search);

      // Die Checkboxen im Kategorien-Bereich arbeiten als ODER-Auswahl:
      // Kein Haken = kein Kategorienfilter = alles anzeigen.
      // Mehrere Haken = Eintrag darf zu mindestens einer gewählten Kategorie gehören.
      const hasCategoryFilter =
        hasRoleFilter ||
        this.magicalBeingsOnly ||
        this.magicalArtifactsOnly;

      const matchesSelectedRole =
        entry.kind === 'character' &&
        this.selectedRoles.has(entry.role);

      const matchesMagicalBeing =
        this.magicalBeingsOnly &&
        entry.kind === 'character' &&
        entry.magicalBeing;

      const matchesMagicalArtifact =
        this.magicalArtifactsOnly &&
        entry.kind === 'artifact';

      const matchesCategory =
        !hasCategoryFilter ||
        matchesSelectedRole ||
        matchesMagicalBeing ||
        matchesMagicalArtifact;

      const matchesVideo =
        !episode ||
        episode.entryIds.includes(entry.id);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesVideo
      );
    });
  }

  get filteredActors() {
    const search = this.searchTerm.trim().toLowerCase();

    return this.actors.filter(actor =>
      actor.name.toLowerCase().includes(search) ||
      actor.description.toLowerCase().includes(search)
    );
  }
}
