package pingpong.web.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

  @RequestMapping("/myHello")
  public String myHello(){
    return "myHello";
  }
}