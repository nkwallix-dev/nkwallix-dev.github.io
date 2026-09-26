import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-win10-login',
  templateUrl: './win10login.html',
  styleUrl: './win10login.css'
})
export class Win10Login implements AfterViewInit, OnDestroy {
  @Input() preview = false;

  private abortController?: AbortController;
  private clockTimer?: ReturnType<typeof setInterval>;
  private welcomeTimer?: ReturnType<typeof setTimeout>;
  private desktopTimer?: ReturnType<typeof setTimeout>;

  constructor(
    private readonly host: ElementRef<HTMLElement>
  ) {}

  ngAfterViewInit(): void {
    const host = this.host.nativeElement;
    const root = host.querySelector<HTMLElement>('.win10-root');

    if (!root) {
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;
    this.abortController = controller;

    const $ = <T extends HTMLElement>(selector: string): T => {
      const element = root.querySelector<T>(selector);

      if (!element) {
        throw new Error(`Win10Login: Element nicht gefunden: ${selector}`);
      }

      return element;
    };

    const $$ = <T extends HTMLElement>(selector: string): T[] =>
      Array.from(root.querySelectorAll<T>(selector));

    const loginScene = $<HTMLElement>('#loginScene');
    const desktopScene = $<HTMLElement>('#desktopScene');

    const signin = $<HTMLElement>('#signin');
    const welcome = $<HTMLElement>('#welcome');
    const pw = $<HTMLInputElement>('#pw');
    const hint = $<HTMLElement>('#hint');
    const loginBottom = $<HTMLElement>('#loginBottom');

    const setup = $<HTMLElement>('#setup');

    const avatar1 = $<HTMLImageElement>('#avatar1');
    const avatar2 = $<HTMLImageElement>('#avatar2');
    const sil1 = $<HTMLElement>('#sil1');
    const sil2 = $<HTMLElement>('#sil2');

    const loginName = $<HTMLElement>('#loginName');
    const welcomeName = $<HTMLElement>('#welcomeName');

    const DEFAULT_AVATAR = '/extras/ben_pb.png';
    const DEFAULT_WALLPAPER = '/extras/ben_bg.png';

    const setName = (value: string): void => {
      const name = (value || 'Ben').trim() || 'Ben';

      loginName.textContent = name;
      welcomeName.textContent = name;
    };

    const setAvatar = (data?: string | null): void => {
      const activeAvatar = data || DEFAULT_AVATAR;
      const wordProfileImg = root.querySelector<HTMLImageElement>('#wordProfileImg');
      const ffProfileImg = root.querySelector<HTMLImageElement>('#ffProfileImg');

      if (wordProfileImg) {
        wordProfileImg.src = activeAvatar;
      }

      if (ffProfileImg) {
        ffProfileImg.src = activeAvatar;
      }

      [avatar1, avatar2].forEach(image => {
        image.onload = () => {
          image.style.display = 'block';
          [sil1, sil2].forEach(silhouette => {
            silhouette.style.display = 'none';
          });
        };

        image.onerror = () => {
          image.style.display = 'none';
          [sil1, sil2].forEach(silhouette => {
            silhouette.style.display = 'block';
          });
        };

        image.src = activeAvatar;
        image.style.display = 'block';
      });
    };

    const setWallpaper = (data?: string | null): void => {
      const wallpaper = data || DEFAULT_WALLPAPER;

      [root, loginScene, desktopScene].forEach(element => {
        element.style.backgroundImage = `url('${wallpaper}')`;
        element.style.backgroundPosition = 'center';
        element.style.backgroundSize = 'cover';
        element.style.backgroundRepeat = 'no-repeat';
      });
    };

    const taskbarPins = $$<HTMLElement>('.pin');

    const getPin = (windowId: string): HTMLElement | null =>
      taskbarPins.find(pin => pin.dataset['open'] === windowId) ?? null;

    const showRuntimePin = (windowId: string): void => {
      const pin = getPin(windowId);
      if (pin?.dataset['pinned'] === 'false') pin.classList.remove('is-hidden');
    };

    const hideRuntimePin = (windowId: string): void => {
      const pin = getPin(windowId);
      if (pin?.dataset['pinned'] === 'false') pin.classList.add('is-hidden');
      pin?.classList.remove('running', 'active');
    };

    const setActiveTaskbarPin = (windowId: string | null): void => {
      taskbarPins.forEach(pin => {
        pin.classList.toggle('active', !!windowId && pin.dataset['open'] === windowId && !pin.classList.contains('is-hidden'));
      });
    };

    const setRunning = (windowId: string, running: boolean): void => {
      const windowElement = root.querySelector<HTMLElement>(`#${windowId}`);
      const pin = getPin(windowId);
      if (windowElement) windowElement.dataset['running'] = running ? 'true' : 'false';
      pin?.classList.toggle('running', running);
    };

    const isRunning = (windowId: string): boolean =>
      root.querySelector<HTMLElement>(`#${windowId}`)?.dataset['running'] === 'true';

    const getFrontmostOpenWindow = (): HTMLElement | null =>
      $$<HTMLElement>('.window.show').sort((a, b) => (Number(b.style.zIndex) || 0) - (Number(a.style.zIndex) || 0))[0] ?? null;

    const refreshTaskbarActive = (): void => {
      const frontmost = getFrontmostOpenWindow();
      setActiveTaskbarPin(frontmost?.id ?? null);
    };

    const bringToFront = (windowElement: HTMLElement): void => {
      $$<HTMLElement>('.window.show').forEach(otherWindow => {
        if (otherWindow !== windowElement) otherWindow.style.zIndex = String(Math.min(Number(otherWindow.style.zIndex) || 1, 49));
      });
      windowElement.style.zIndex = '60';
      setActiveTaskbarPin(windowElement.id);
    };

    const openWin = (id?: string): void => {
      if (!id) return;
      const windowElement = root.querySelector<HTMLElement>(`#${id}`);
      if (!windowElement) return;
      showRuntimePin(id);
      setRunning(id, true);
      windowElement.classList.add('show');
      bringToFront(windowElement);
    };

    const minimizeWin = (id?: string): void => {
      if (!id) return;
      const windowElement = root.querySelector<HTMLElement>(`#${id}`);
      if (!windowElement) return;
      windowElement.classList.remove('show');
      windowElement.style.zIndex = '1';
      setRunning(id, true);
      refreshTaskbarActive();
    };

    const closeWin = (id?: string): void => {
      if (!id) return;
      const windowElement = root.querySelector<HTMLElement>(`#${id}`);
      if (!windowElement) return;
      windowElement.classList.remove('show');
      windowElement.style.zIndex = '1';
      setRunning(id, false);
      hideRuntimePin(id);
      refreshTaskbarActive();
    };

    const clearDesktopWindows = (): void => {
      $$<HTMLElement>('.window').forEach(windowElement => {
        windowElement.classList.remove('show');
        windowElement.style.zIndex = '1';
        windowElement.dataset['running'] = 'false';
      });

      taskbarPins.forEach(pin => {
        pin.classList.remove('active', 'running');
        if (pin.dataset['pinned'] === 'false') pin.classList.add('is-hidden');
      });

      setActiveTaskbarPin(null);
    };

    const showDesktop = (): void => {
      loginScene.style.opacity = '0';

      this.desktopTimer = setTimeout(() => {
        loginScene.style.display = 'none';
        desktopScene.style.display = 'block';

        clearDesktopWindows();

        requestAnimationFrame(() => {
          desktopScene.classList.add('show');
        });
      }, 650);
    };

    const login = (): void => {
      if (!pw.value) {
        hint.textContent = 'Kennwort eingeben';
        return;
      }

      hint.textContent = '';
      signin.style.display = 'none';
      loginBottom.style.display = 'none';
      welcome.classList.add('show');

      this.welcomeTimer = setTimeout(showDesktop, 1900);
    };

    const resetAll = (): void => {
      if (this.welcomeTimer) {
        clearTimeout(this.welcomeTimer);
      }

      if (this.desktopTimer) {
        clearTimeout(this.desktopTimer);
      }

      desktopScene.classList.remove('show');
      desktopScene.style.display = 'none';

      clearDesktopWindows();

      loginScene.style.display = 'flex';
      loginScene.style.opacity = '1';

      signin.style.display = 'block';
      welcome.classList.remove('show');
      loginBottom.style.display = 'flex';

      pw.value = '';
      hint.textContent = '';
      pw.focus();
    };

    $('#go').addEventListener('click', login, { signal });

    pw.addEventListener(
      'keydown',
      event => {
        if (event.key === 'Enter') {
          login();
        }
      },
      { signal }
    );

    const iconMap: Record<string, string> = {
      recycle: 'recycleWin',
      arbeit: 'arbeitWin',
      firefox: 'firefoxWin',
      spotify: 'spotifyWin',
      word: 'wordWin',
      fnaf: 'fnafWin'
    };

    $$<HTMLElement>('.icon').forEach(icon => {
      icon.addEventListener(
        'click',
        () => {
          $$<HTMLElement>('.icon').forEach(item => {
            item.classList.remove('selected');
          });

          icon.classList.add('selected');
        },
        { signal }
      );

      icon.addEventListener(
        'dblclick',
        () => {
          const key = icon.dataset['open'];

          if (key) {
            openWin(iconMap[key]);
          }
        },
        { signal }
      );
    });

    taskbarPins.forEach(pin => {
      pin.addEventListener(
        'click',
        () => {
          const id = pin.dataset['open'];

          if (!id) {
            return;
          }

          const windowElement = root.querySelector<HTMLElement>(`#${id}`);

          if (!windowElement) {
            return;
          }

          const isVisible = windowElement.classList.contains('show');
          const isActive = pin.classList.contains('active');
          const running = isRunning(id);

          if (isVisible && isActive) {
            minimizeWin(id);
            return;
          }

          if (isVisible) {
            bringToFront(windowElement);
            return;
          }

          if (running) {
            windowElement.classList.add('show');
            bringToFront(windowElement);
            return;
          }

          openWin(id);
        },
        { signal }
      );
    });

    $$<HTMLElement>('.file[data-open]').forEach(file => {
      file.addEventListener(
        'click',
        () => openWin(file.dataset['open']),
        { signal }
      );
    });

    $$<HTMLElement>('[data-minimize]').forEach(button => {
      button.addEventListener(
        'click',
        event => {
          event.stopPropagation();
          minimizeWin(button.dataset['minimize']);
        },
        { signal }
      );
    });

    $$<HTMLElement>('[data-close]').forEach(button => {
      button.addEventListener(
        'click',
        event => {
          event.stopPropagation();
          closeWin(button.dataset['close']);
        },
        { signal }
      );
    });

    $$<HTMLElement>('.window').forEach(windowElement => {
      windowElement.addEventListener(
        'mousedown',
        () => {
          if (windowElement.classList.contains('show')) {
            bringToFront(windowElement);
          }
        },
        { signal }
      );
    });

    const pad = (value: number): string =>
      String(value).padStart(2, '0');

    const updateClock = (): void => {
      const now = new Date();

      $('#timeText').textContent =
        `${pad(now.getHours())}:${pad(now.getMinutes())}`;

      $('#dateText').textContent =
        `${pad(now.getDate())}.${pad(now.getMonth() + 1)}.${now.getFullYear()}`;
    };

    updateClock();
    this.clockTimer = setInterval(updateClock, 10_000);

    const googleSearchInput = root.querySelector<HTMLInputElement>('#googleSearchInput');

    googleSearchInput?.addEventListener(
      'keydown',
      event => {
        if (event.key === 'Enter') {
          event.preventDefault();
          googleSearchInput.blur();
        }
      },
      { signal }
    );

    const setAvatarInput = $<HTMLInputElement>('#setAvatar');
    const setWallpaperInput = $<HTMLInputElement>('#setWallpaper');
    const setNameInput = $<HTMLInputElement>('#setName');

    setAvatarInput.addEventListener(
      'change',
      () => {
        const file = setAvatarInput.files?.[0];

        if (!file) {
          return;
        }

        const reader = new FileReader();
        reader.onload = () => setAvatar(String(reader.result || ''));
        reader.readAsDataURL(file);
      },
      { signal }
    );

    setWallpaperInput.addEventListener(
      'change',
      () => {
        const file = setWallpaperInput.files?.[0];

        if (!file) {
          return;
        }

        const reader = new FileReader();
        reader.onload = () => setWallpaper(String(reader.result || ''));
        reader.readAsDataURL(file);
      },
      { signal }
    );

    $('#applySetup').addEventListener(
      'click',
      () => {
        setName(setNameInput.value);
        setup.style.display = 'none';
        resetAll();
      },
      { signal }
    );

    const handleShortcut = (event: KeyboardEvent): void => {
      const target = event.target as HTMLElement | null;
      const isTyping =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable;

      if (event.key === 'F2') {
        event.preventDefault();
        setup.style.display =
          setup.style.display === 'block' ? 'none' : 'block';
        return;
      }

      if (
        !isTyping &&
        (event.key === 'r' || event.key === 'R') &&
        setup.style.display !== 'block'
      ) {
        resetAll();
        return;
      }

      if (event.key === 'Escape' && setup.style.display === 'block') {
        setup.style.display = 'none';
      }
    };

    if (this.preview) {
      root.addEventListener(
        'pointerdown',
        () => root.focus(),
        { signal }
      );

      root.addEventListener('keydown', handleShortcut, { signal });
    } else {
      document.addEventListener('keydown', handleShortcut, { signal });
    }

    setAvatar(DEFAULT_AVATAR);
    setWallpaper(DEFAULT_WALLPAPER);

    pw.focus();
  }

  ngOnDestroy(): void {
    this.abortController?.abort();

    if (this.clockTimer) {
      clearInterval(this.clockTimer);
    }

    if (this.welcomeTimer) {
      clearTimeout(this.welcomeTimer);
    }

    if (this.desktopTimer) {
      clearTimeout(this.desktopTimer);
    }
  }
}
