import { Task } from './task';

describe('Task', () => {
  it('debería crear una instancia', () => {
    expect(new Task()).toBeTruthy();
  });
});
