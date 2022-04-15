import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Space404 from './404';
import en_module from './i18n/en.json';
import chs_module from './i18n/chs.json';

describe('404 Page', () => {
  test('English', () => {
    render(<Space404 />);
    const lostElement = screen.getByText(en_module[404].lost);
    expect(lostElement).toBeInTheDocument();
  });
  test('Chinese (Simplified)', () => {
    render(<Space404 language="chs" />);
    const lostElement = screen.getByText(chs_module[404].lost);
    expect(lostElement).toBeInTheDocument();
  });
});