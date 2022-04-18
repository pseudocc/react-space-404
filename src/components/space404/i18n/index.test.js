import i18n from ".";

describe('i18n', () => {
  beforeAll(done => {
    i18n.changeLanguage('en').finally(done);
  });
  test('seconds plurals', () => {
    let oxygen, cd = 1;

    oxygen = i18n.t('404.oxygen', { cd });
    expect(oxygen).toEqual(`Oxygen runs out in ${cd} second.`);

    cd += 1 + Math.round(Math.random() * 10);
    oxygen = i18n.t('404.oxygen', { cd });
    expect(oxygen).toEqual(`Oxygen runs out in ${cd} seconds.`);
  });
});