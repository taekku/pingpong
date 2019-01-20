package pingpong.web.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import pingpong.web.service.PingService;

@RestController
public class TestController{
  @Autowired
  private PingService pingService;

  @RequestMapping(value="/Pingpong/orgChart2")//, produces="application/text; charset=utf8")
  public Map<String, Object> getOrgChart2(
    HttpServletRequest request, HttpSession session, HttpServletResponse response,
    @RequestBody Map<String, Object> params
  ){
    HashMap<String, Object> map = new HashMap<String, Object>();
    map.put("org_data", pingService.getOrgTree());
    return map;
  }
  @RequestMapping(value="/Pingpong/orgChart")//, produces="application/text; charset=utf8")
  public Map<String, Object> getOrgChart(
    HttpServletRequest request, HttpSession session, HttpServletResponse response,
    @RequestBody Map<String, Object> params
  ){
    // response.addHeader("Content-Type", "application/json;charset=UTF-8");
    logMap(params);
    HashMap<String, Object> map = new HashMap<String, Object>();
    map.put("org_data", pingService.getOrgChart());
    // System.out.println("orgChart:");
    // System.out.println(map);
    return map;
  }
  private void logMap(Map<String, Object> params){
    // // 방법1
    // Iterator<String> keys = params.keySet().iterator();
    // while( keys.hasNext() ){
    //     String key = keys.next();
    //     System.out.println( String.format("1:키 : %s, 값 : %s", key, params.get(key)) );
    // }
     
    // // 방법2
    // for( Map.Entry<String, Object> elem : params.entrySet() ){
    //     System.out.println( String.format("2:키 : %s, 값 : %s", elem.getKey(), elem.getValue()) );
    // }
     
    // 방법3
    for( String key : params.keySet() ){
        System.out.println( String.format("키 : %s, 값 : %s", key, params.get(key)) );
    }

  }

  @RequestMapping(value = "/testvue", method = RequestMethod.GET)
  public ModelAndView hello(
  // @RequestParam("sayit")
  // String sayit
  ) {
    ModelAndView retVal = new ModelAndView();
    retVal.setViewName("testvue");
    retVal.addObject("message", "This message is ModelAndView.addObject() in TestController.java.");
    return retVal;
  }
}