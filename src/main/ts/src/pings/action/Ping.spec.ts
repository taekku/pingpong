// import { expect } from 'chai';
import 'jasmine';
import { Ping } from './Ping';
import { RequestKind } from './RequestKind';

describe("Ping", ()=>{
    const name_id = "kkk";
    beforeAll(()=>{
    });
    afterAll(()=>{
    });
    it("id", ()=>{
        const ping:Ping = new Ping(name_id);
        expect(ping.id).toEqual(name_id);
    });
    it("size",()=>{
        const ping:Ping = new Ping(name_id);
        expect(ping.size).toEqual(0);
    });
    it("push",()=>{
        const ping:Ping = new Ping(name_id);
        ping.push({Job:'Engineer', name:'My Name', Age:44});
        expect(ping.size).toBe(1);
    });
    it("getData", ()=>{
        const ping:Ping = new Ping(name_id);
        ping.push({Job:'Engineer', name:'My Name', Age:44});
        ping.push({Job:'Engineer', name:'My Name2', Age:45});
        ping.push({Job:'Engineer', name:'My Name3', Age:55});
        
        let data:any[] = ping.getData({name:'My Name'});
        expect(data.length).toEqual(1);
        data = ping.getData({Job:'ant1', name:'My Name'});
        expect(data.length).toBe(0);
        data = ping.getData({Age:45});
        expect(data.length).toBe(1);
        data[0]["Job"] = "Doctor";
        data = ping.getData({Job:'Doctor'});
        expect(data.length).toBe(0);
        data = ping.getData({Job:'Engineer'});
        expect(data.length).toBe(3);
    });
    it("RequestKind", ()=>{
        const ping:Ping = new Ping(name_id, RequestKind.New);
        expect(ping.ReqKind).toEqual(RequestKind.New);
        ping.ReqKind = RequestKind.Query;
        expect(ping.ReqKind).toEqual(RequestKind.Query);
    });
});