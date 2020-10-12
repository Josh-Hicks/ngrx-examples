import { Action, ActionsSubject, ReducerManager } from '@ngrx/store';
import { MockState, MockStore } from '@ngrx/store/testing';

export type Mock<T> = jasmine.SpyObj<T>;

interface ConstructorFunction {
  prototype: any;
}

export function mockService<T>(serviceClass: ConstructorFunction): Mock<T> {
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

interface ActionIterator {
  nextAction(): Action;
}

export function actionsIterator(...actions: Action[]): ActionIterator {
  let counter = 0;
  return {
    nextAction(): Action {
      return actions[counter++];
    },
  };
}
