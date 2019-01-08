package pingpong.web.car;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class CoolCarController {

    @GetMapping("/cool-cars")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Car> coolCars() {
        ArrayList<Car> list = new ArrayList<Car>();
        list.add(new Car("asdf"));
        list.add(new Car("asdf1"));
        list.add(new Car("asdf2"));
        return list;
    }
}