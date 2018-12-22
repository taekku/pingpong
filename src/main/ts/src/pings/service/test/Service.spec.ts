import 'jasmine';
import { Service } from '../Service';

describe("Service", ()=>{
    let serviceId = "myService";
    beforeAll(()=>{
    });
    it("id", ()=>{
        const service = new Service(serviceId);
        expect(service.id).toEqual(serviceId);
    });
});