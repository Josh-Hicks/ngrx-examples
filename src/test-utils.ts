import { EventEmitter, Type } from '@angular/core';
import { ActionsSubject, ReducerManager } from '@ngrx/store';
import { MockState, MockStore } from '@ngrx/store/testing';

export type Mock<T> = jasmine.SpyObj<T>;

export function mockService<T>(serviceClass: Type<T>): Mock<T> {
  const [, ...methods] = Object.getOwnPropertyNames(serviceClass.prototype);
  return jasmine.createSpyObj(methods);
}

export function mockActions(): ActionsSubject {
  return new ActionsSubject();
}

export function mockStore<T>(): MockStore<T> {
  return new MockStore<T>(
    new MockState<T>(),
    new ActionsSubject(),
    {} as ReducerManager,
    {} as T
  );
}

export function mockEmiter<T>(): Mock<EventEmitter<T>> {
  return mockService<EventEmitter<T>>(MockEmmiter);
}

class MockEmmiter<T> extends EventEmitter<T> {
  emit(value?: T): void {}
}
