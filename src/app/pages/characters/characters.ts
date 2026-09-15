import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { STORY_EPISODES } from '../../data/episodes';

type CharacterRole = 'Protagonist' | 'Antagonist' | 'Animalisch' | 'MYSTISCH';

interface Character {
  id: string;
  name: string;
  role: CharacterRole;
  description: string;
  image: string;
  imageClass: string;
  magicalBeing: boolean;
}

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

  selectedRoles = new Set<CharacterRole>([
    'Protagonist',
    'Antagonist',
    'Animalisch',
    'MYSTISCH'
  ]);

  selectedEpisodeIds = new Set<string>();

  readonly episodes = STORY_EPISODES;

  characters: Character[] = [
    {
      id: 'xyros',
      name: 'Xyros',
      role: 'Antagonist',
      description: 'Der Beobachter im Schatten. X-Augen. Kein Zufall.',
      image: '/characters/Xyros.png',
      imageClass: 'xyros-image',
      magicalBeing: false
    },
    {
      id: 'crackyman',
      name: 'Crackyman',
      role: 'Antagonist',
      description: 'Eine Figur zwischen Chaos, Jagd und Geheimnissen, die alles verändern.',
      image: '/characters/Crackyman.png',
      imageClass: 'crackyman-image',
      magicalBeing: false
    },
    {
      id: 'rick',
      name: 'Rick',
      role: 'Antagonist',
      description: 'Auf einem Auge blind, auf dem anderen FBI Agent.',
      image: '/characters/Rick.png',
      imageClass: 'rick-image',
      magicalBeing: false
    },
    {
      id: 'niklas',
      name: 'Niklas',
      role: 'Protagonist',
      description: 'Keine Ahnung wie ich hier gelandet bin tbh.',
      image: '/characters/Niklas.png',
      imageClass: 'niklas-image',
      magicalBeing: false
    },
    {
      id: 'ben',
      name: 'Ben',
      role: 'Protagonist',
      description: 'Ich wollte doch nur meine geliebte Sophie wieder sehen...',
      image: '/characters/Ben.png',
      imageClass: 'ben-image',
      magicalBeing: false
    },
    {
      id: 'xoph',
      name: 'Xoph',
      role: 'Antagonist',
      description: '...',
      image: '/characters/Xoph.png',
      imageClass: 'xoph-image',
      magicalBeing: true
    },
    {
      id: 'dealer',
      name: 'Dealer',
      role: 'Antagonist',
      description: 'Das Monster in dir...',
      image: '/characters/Dealer.png',
      imageClass: 'dealer-image',
      magicalBeing: false
    },
    {
      id: 'melissa',
      name: 'Melissa',
      role: 'Protagonist',
      description: 'Kellnerin halt.',
      image: '/characters/Melissa.png',
      imageClass: 'melissa-image',
      magicalBeing: false
    },
    {
      id: 'slim-schlappen',
      name: 'Slim Schlappen',
      role: 'Antagonist',
      description: 'Wos wüst du, owa fa mein Grundstickl',
      image: '/characters/SlimSchlappen.png',
      imageClass: 'slimschlappen-image',
      magicalBeing: false
    },
    {
      id: 'ski-augli',
      name: 'SkiAugli',
      role: 'Antagonist',
      description: 'Ich bin kein Perverser. Ich bin Ski Augli.',
      image: '/characters/SkiAugli.png',
      imageClass: 'skiaugli-image',
      magicalBeing: false
    },
    {
      id: 'corra',
      name: 'Corra',
      role: 'Antagonist',
      description: 'Beute fängt man für gewöhnlich als Raubtier. Nicht als hübsche Dame.',
      image: '/characters/Corra.png',
      imageClass: 'corra-image',
      magicalBeing: true
    },
    {
      id: 'hermiminone',
      name: 'Hermiminone',
      role: 'Antagonist',
      description: 'Crack, Crack, Crack: Ich bin weg!',
      image: '/characters/Hermiminone.png',
      imageClass: 'hermiminone-image',
      magicalBeing: true
    },
    {
      id: 'wolf-of-waldstreet',
      name: 'Wolf Of Waldstreet',
      role: 'Protagonist',
      description: 'Freshere Bude als im Wolfshain',
      image: '/characters/WolfOfWaldStreet.png',
      imageClass: 'wolfofwaldstreet-image',
      magicalBeing: true
    },
    {
      id: 'gabba-gandalf',
      name: 'Gabba Gandalf',
      role: 'Antagonist',
      description: 'Reich bis zum Schwanz, der nichtmal so groß aussieht!',
      image: '/characters/GabbaGandalf.png',
      imageClass: 'gabbagandalf-image',
      magicalBeing: false
    },
    {
      id: 'whackyman',
      name: 'Whackyman',
      role: 'Antagonist',
      description: 'Ich hab auch versucht ihn zu finden!',
      image: '/characters/Whackyman.png',
      imageClass: 'whackyman-image',
      magicalBeing: true
    },
    {
      id: 'schafe',
      name: 'hornlos-unterentwickelte Kinder',
      role: 'Animalisch',
      description: 'Unsere Mutter klingt viel hornier als du!',
      image: '/characters/Schafe.png',
      imageClass: 'Schafe-image',
      magicalBeing: true
    },
    {
      id: 'fliege',
      name: 'nervige Fliege',
      role: 'Animalisch',
      description: 'sssssssssssssssssssssssssss',
      image: '/characters/Fliege.png',
      imageClass: 'Fliege-image',
      magicalBeing: false
    },
    {
      id: 'Larry',
      name: 'Larry',
      role: 'MYSTISCH',
      description: 'Dickere Schädeldecke als ein Pachycephalosaurus',
      image: '/characters/Larry.png',
      imageClass: 'Larry-image',
      magicalBeing: true
    },
    {
      id: 'mafakxi',
      name: 'Mafakxi',
      role: 'Protagonist',
      description: 'Ich wünscht ich könnt euch nochmal sehn...',
      image: '/characters/Mafakxi.png',
      imageClass: 'Mafakxi-image',
      magicalBeing: false
    }
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

  toggleEpisode(episodeId: string) {
    if (this.selectedEpisodeIds.has(episodeId)) {
      this.selectedEpisodeIds.delete(episodeId);
    } else {
      this.selectedEpisodeIds.add(episodeId);
    }
  }

  isEpisodeSelected(episodeId: string) {
    return this.selectedEpisodeIds.has(episodeId);
  }

  clearEpisodeFilters() {
    this.selectedEpisodeIds.clear();
  }

  resetFilters() {
    this.selectedRoles = new Set<CharacterRole>([
      'Protagonist',
      'Antagonist',
      'Animalisch',
      'MYSTISCH'
    ]);

    this.magicalBeingsOnly = false;
    this.selectedEpisodeIds = new Set<string>();
  }

  get selectedEpisodeCount() {
    return this.selectedEpisodeIds.size;
  }

  get filteredCharacters() {
    const search = this.searchTerm
      .trim()
      .toLowerCase();

    const charactersFromVideos = new Set<string>();

    if (this.selectedEpisodeIds.size > 0) {
      for (const episode of this.episodes) {
        if (this.selectedEpisodeIds.has(episode.id)) {
          for (const characterId of episode.characterIds) {
            charactersFromVideos.add(characterId);
          }
        }
      }
    }

    return this.characters.filter(character => {
      const matchesRole =
        this.selectedRoles.has(character.role);

      const matchesSearch =
        character.name.toLowerCase().includes(search) ||
        character.description.toLowerCase().includes(search);

      const matchesMagicalBeing =
        !this.magicalBeingsOnly ||
        character.magicalBeing;

      const matchesVideo =
        this.selectedEpisodeIds.size === 0 ||
        charactersFromVideos.has(character.id);

      return (
        matchesRole &&
        matchesSearch &&
        matchesMagicalBeing &&
        matchesVideo
      );
    });
  }

  get filteredActors() {
    const search = this.searchTerm
      .trim()
      .toLowerCase();

    return this.actors.filter(actor =>
      actor.name.toLowerCase().includes(search) ||
      actor.description.toLowerCase().includes(search)
    );
  }
}