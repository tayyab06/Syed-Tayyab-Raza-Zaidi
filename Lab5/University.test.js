import { University } from './University';

describe('University', () => {
  it('should have image property set to empty string', () => {
    const university = new University('SSUET');
    expect(university.image).toBe('');
  });

  it('should have image property set to some string after calling setImage method', () => {
    const university = new University('SSUET');
    university.setImage();
    expect(university.image).toBeDefined();
  });
});
