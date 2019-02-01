package pingpong.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
class LoginController {

  @RequestMapping(value = "/login/auth", method = RequestMethod.GET)
  public Map<String, Object> testVueComponent() {
    HashMap<String, Object> map = new HashMap<String, Object>();
    return map;
  }

}