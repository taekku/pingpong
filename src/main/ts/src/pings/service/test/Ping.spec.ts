// import { expect } from 'chai';
import 'jasmine';
import { Ping } from '../Ping';

describe("Ping", ()=>{
    it("id", ()=>{
        const name_id = "kkk";
        const ping:Ping = new Ping(name_id);
        expect(ping.id).toEqual(name_id);
    });
    it("size",()=>{
        const name_id = "kkk";
        const ping:Ping = new Ping(name_id);
        expect(ping.size).toEqual(0);
    });
    it("push",()=>{
        const name_id = "kkk";
        const ping:Ping = new Ping(name_id);
        ping.push({Job:'Engineer', name:'My Name', Age:44});
        expect(ping.size).toBe(1);
    });
    it("filterData", ()=>{
        const name_id = "kkk";
        const ping:Ping = new Ping(name_id);
        ping.push({Job:'Engineer', name:'My Name', Age:44});
        ping.push({Job:'Engineer', name:'My Name2', Age:45});
        ping.push({Job:'Engineer', name:'My Name3', Age:55});
        
        let data:any[] = ping.filterData({name:'My Name'});
        expect(data.length).toEqual(1);
        data = ping.filterData({Job:'ant1', name:'My Name'});
        expect(data.length).toBe(0);
        data = ping.filterData({Age:45});
        expect(data.length).toBe(1);
        data[0]["Job"] = "Doctor";
        data = ping.filterData({Job:'Doctor'});
        expect(data.length).toBe(1);
        data = ping.filterData({Job:'Engineer'});
        expect(data.length).toBe(2);
    });
});