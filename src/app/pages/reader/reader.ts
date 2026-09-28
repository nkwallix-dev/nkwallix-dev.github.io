import {
  Component,
  HostListener
} from '@angular/core';

import { RouterLink } from '@angular/router';

import {
  READING_CHAPTERS,
  ReadingChapter,
  ReadingPage
} from '../../data/reading-chapters';

@Component({
  selector: 'app-reader',
  imports: [RouterLink],
  templateUrl: './reader.html',
  styleUrl: './reader.css'
})
export class Reader {
  readonly chapters =
    READING_CHAPTERS;

  chapterIndex = 0;
  pageIndex = 0;

  get chapter(): ReadingChapter {
    return this.chapters[
      this.chapterIndex
    ];
  }

  get page(): ReadingPage {
    return this.chapter.pages[
      this.pageIndex
    ];
  }

  get globalPage(): number {
    return (
      this.chapters
        .slice(
          0,
          this.chapterIndex
        )
        .reduce(
          (
            total,
            chapter
          ) =>
            total +
            chapter.pages.length,
          0
        ) +
      this.pageIndex +
      1
    );
  }

  get totalPages(): number {
    return this.chapters.reduce(
      (
        total,
        chapter
      ) =>
        total +
        chapter.pages.length,
      0
    );
  }

  get progress(): number {
    return (
      this.globalPage /
      this.totalPages
    ) * 100;
  }

  get canGoPrevious(): boolean {
    return !(
      this.chapterIndex === 0 &&
      this.pageIndex === 0
    );
  }

  get canGoNext(): boolean {
    return !(
      this.chapterIndex ===
        this.chapters.length - 1 &&
      this.pageIndex ===
        this.chapter.pages.length - 1
    );
  }

  selectChapter(
    index: number
  ) {
    this.chapterIndex = index;
    this.pageIndex = 0;

    this.scrollPageToTop();
  }

  selectPage(
    index: number
  ) {
    this.pageIndex = index;

    this.scrollPageToTop();
  }

  previousPage() {
    if (!this.canGoPrevious) {
      return;
    }

    if (this.pageIndex > 0) {
      this.pageIndex--;
    } else {
      this.chapterIndex--;
      this.pageIndex =
        this.chapter.pages.length - 1;
    }

    this.scrollPageToTop();
  }

  nextPage() {
    if (!this.canGoNext) {
      return;
    }

    if (
      this.pageIndex <
      this.chapter.pages.length - 1
    ) {
      this.pageIndex++;
    } else {
      this.chapterIndex++;
      this.pageIndex = 0;
    }

    this.scrollPageToTop();
  }

  @HostListener(
    'window:keydown',
    ['$event']
  )
  handleKeyboard(
    event: KeyboardEvent
  ) {
    if (event.key === 'ArrowLeft') {
      this.previousPage();
    }

    if (event.key === 'ArrowRight') {
      this.nextPage();
    }
  }

  private scrollPageToTop() {
    requestAnimationFrame(
      () => {
        document
          .querySelector(
            '.reader-paper'
          )
          ?.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
      }
    );
  }
}
