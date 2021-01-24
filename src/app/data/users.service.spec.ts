import { HttpClient } from '@angular/common/http';
import { Mock, mockService } from 'src/test-utils';
import { UserService } from './users.service';

describe('UserService', () => {
  let http: Mock<HttpClient>;

  let service: UserService;

  beforeEach(() => {
    http = mockService(HttpClient);

    service = new UserService(http);
  });

  it('should request jsonplaceholder api on fetch', () => {
    // given & when
    service.fetchUsers();

    // then
    expect(http.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users'
    );
  });
});
