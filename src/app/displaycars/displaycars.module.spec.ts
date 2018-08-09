import { DisplaycarsModule } from './displaycars.module';

describe('DisplaycarsModule', () => {
  let displaycarsModule: DisplaycarsModule;

  beforeEach(() => {
    displaycarsModule = new DisplaycarsModule();
  });

  it('should create an instance', () => {
    expect(displaycarsModule).toBeTruthy();
  });
});
