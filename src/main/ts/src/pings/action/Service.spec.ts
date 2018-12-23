import 'jasmine';
import { Service } from './Service';
import { Ping } from './Ping';

describe("Service", ()=>{
    let serviceId = "myService";
    beforeAll(()=>{
    });
    it("id", ()=>{
        const service = new Service(serviceId);
        expect(service.id).toEqual(serviceId);
    });
    it("ping", ()=>{
        const service = new Service(serviceId);
        const ping:Ping = new Ping("P0001");
        service.push(ping);
        const nm:string[] = service.getPingIds();
        expect(nm[0]).toEqual("P0001");
        console.log(nm);
    });
    it("ping_data", ()=>{
        const service = new Service(serviceId);
    });
});