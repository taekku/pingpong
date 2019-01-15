package pingpong.web.car;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:4200"})
class CoolCarController {

    @RequestMapping(value="/cool-cars", method=RequestMethod.GET)
    public List<Car> coolCars() {
        ArrayList<Car> list = new ArrayList<Car>();
        list.add(new Car("asdf"));
        list.add(new Car("asdf1"));
        list.add(new Car("asdf2"));
        return list;
    }

    @RequestMapping(value = "/car-edit", method = RequestMethod.GET)
    @CrossOrigin(origins = { "http://localhost:4200" })
    public Car getCar(@RequestBody Long carid) {
        Car car = new Car();
        car.setId(carid);
        car.setName("test car");
        car.setTitle("my title");
        return car;
    }

    @RequestMapping(value = "/cars", method = RequestMethod.POST)
    @CrossOrigin(origins = { "http://localhost:4200" })
    public Car save(@RequestBody Car car) {
        ArrayList<Car> list = new ArrayList<Car>();
        list.add(new Car("asdf"));
        list.add(new Car("asdf1"));
        list.add(new Car("asdf2"));
        System.out.println("/cars : save method");
        System.out.println(car);
        System.out.println(car.getName());
        System.out.println(car.getId());
        System.out.println(car.getTitle());
        return car;
    }
}