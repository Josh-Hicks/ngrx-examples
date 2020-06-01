import * as fromApp from './app.reducer';
import { selectAppState } from './app.selectors';

describe('App Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAppState({
      [fromApp.appFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
