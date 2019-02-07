package pingpong.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import pingpong.web.service.auth.AuthService;

@RestController
class LoginController {
  @Autowired
  private AuthService authService;

  @RequestMapping(value = "/auth/login", method = RequestMethod.GET)
  public Map<String, Object> login(
      HttpServletRequest request, HttpSession session, HttpServletResponse response,
      @RequestBody Map<String, Object> params) {
    HashMap<String, Object> map = new HashMap<String, Object>();
    map.put("login_id", "241013");
    System.out.println("session id:" + session.getId());
    List<Map<String, Object>> list = authService.login("241013");
    map.put("user_id", list.get(0).get("USER_ID"));
    return map;
  }

}