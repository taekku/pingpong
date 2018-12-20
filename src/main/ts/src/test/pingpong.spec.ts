
import { expect } from 'chai';
import { PingTest } from '../pingpong';

describe('PingTest', () => {
    it('Create Ping', () => {
        const s = new PingTest();
        expect(s.getPing().id).to.equals("Test");
    });
});