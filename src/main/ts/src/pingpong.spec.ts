
import 'jasmine';
import { PingTest } from './pingpong';

describe('PingTest', () => {
    it('Create Ping', () => {
        const s = new PingTest();
        expect(s.getPing().id).toBe("Test");
    });
});