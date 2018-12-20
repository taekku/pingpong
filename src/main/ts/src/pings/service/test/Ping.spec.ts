import { expect } from 'chai';
import { Ping } from '../Ping';

describe("Ping", ()=>{
    var name_id = "kkk";
    const ping = new Ping(name_id);
    it("id", ()=>{
        expect(ping.id).equals(name_id);
    });
    it("size",()=>{
        expect(ping.size).equals(0);
    });
    it("push",()=>{
        ping.push({Job:'Engineer', name:'My Name', Age:44});
        expect(ping.size).equals(1);
        ping.push({Job:'Engineer', name:'My Name2', Age:45});
        expect(ping.size).equals(2);
        ping.push({Job:'Engineer', name:'My Name3', Age:55});
        expect(ping.size).equals(3);
    });
    it("filterData", ()=>{
        let data:any[] = ping.filterData({name:'My Name'});
        expect(data.length).equals(1);
        data = ping.filterData({Job:'ant1', name:'My Name'});
        expect(data.length).equals(0);
        data = ping.filterData({Age:45});
        expect(data.length).to.equals(1);
        data[0]["Job"] = "Doctor";
        data = ping.filterData({Job:'Doctor'});
        expect(data.length).to.equals(1);
        data = ping.filterData({Job:'Engineer'});
        expect(data.length).to.equals(2);
    });
});