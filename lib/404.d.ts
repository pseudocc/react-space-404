import i18next from 'i18next';

declare namespace atlas {
  type Palette = {
    light_blue: string,
    cyan: string,
    light_cyan: string,
    yellow: string,
    light_yellow: string
  }
  type Language = 'chs' | 'en';
  type Space404Props = {
    palette: Palette,
    countdown: number,
    href: string,
    i18n: typeof i18next,
    language: Language
  };
}

function Space404(props: Partial<atlas.Space404Props>): JSX.Element;
export = Space404;