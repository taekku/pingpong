
import 'jasmine';
import {Ping, Service} from './pingpong';

describe('Pingpong', () => {
  it('Create Ping', () => {
    const ping = new Ping('Test');
    expect(ping.id).toBe("Test");
  });
  it('Service', ()=>{
    const service = new Service('Test');
    expect(service.id).toBe('Test');
  });
});