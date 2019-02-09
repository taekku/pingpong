package pingpong.web.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@CrossOrigin(origins = "http://localhost:4200", maxAge=3600)
@RestController
@RequestMapping(value="/config")
class ConfigController {

  @RequestMapping(value = "/auth/**" )
  public Map<String, Object> authConfig(    
      HttpServletRequest request, HttpSession session, HttpServletResponse response
      , @RequestBody Map<String, Object> params
  ) {
    HashMap<String, Object> map = new HashMap<String, Object>();
    map.put("loginUrl", "auth/login");
    map.put("textfile", "adf");
    return map;
  }

  @RequestMapping(value="/service/**", method=RequestMethod.POST)
  public Map<String, Object> configService(@RequestParam String param) {
    HashMap<String, Object> map = new HashMap<String, Object>();
    map.put("service", "myService");
      return map;
  }
  
  
}