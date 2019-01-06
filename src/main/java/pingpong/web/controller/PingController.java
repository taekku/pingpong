package pingpong.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pingpong.web.service.PingService;

@RestController
public class PingController {
  @Autowired
  private PingService pingService;
  
  @RequestMapping(value="/Pingpong")
  public Map<String, Object> myHello3(
    HttpServletRequest request, HttpSession session,
    @RequestBody Map<String, Object> params
  ){
    HashMap<String, Object> map = new HashMap<String, Object>();

    map.put("yourData", params);

    ArrayList<Map<String,Object>> pong = new ArrayList<Map<String,Object>>();
    Map<String,Object> record = new HashMap<String,Object>();
    record.put("ResponsePong", "GoodID");
    record.put("name","Taekgu" + session.getId());
    //System.out.println("Request:" + request.changeSessionId());
    //System.out.println("Session:" + session.getId());
    pong.add(record);
    pong.add(record);
    map.put("Pong", pong);
    map.put("Pong2", pingService.getData(params));

    return map;
  }
}