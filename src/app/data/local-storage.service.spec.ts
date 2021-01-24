import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    service = new LocalStorageService();
  });

  it('should setItem on localStorage', () => {
    // given
    const setItem = spyOn(Storage.prototype, 'setItem').and.callFake(
      () => true
    );

    // when
    service.setItem('test', 'Test Value');

    // then
    expect(setItem).toHaveBeenCalledWith('test', 'Test Value');
  });

  it('should getItem on localStorage', () => {
    // given
    const testKey = 'test';
    const testValue = 'Test Value';

    const getItem = spyOn(Storage.prototype, 'getItem').and.returnValue(
      testValue
    );

    // when
    const value = service.getItem(testKey);

    // then
    expect(value).toEqual(testValue);
    expect(getItem).toHaveBeenCalledWith(testKey);
  });
});
