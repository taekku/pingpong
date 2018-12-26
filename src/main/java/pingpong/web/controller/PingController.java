package pingpong.web.controller;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PingController {
    
  @RequestMapping(value="/Pingpong")
  public Map<String, Object> myHello3(
    //@RequestBody String jsonData
    @RequestBody Map<String, Object> params
  ){
    logMap(params);

    HashMap<String, Object> map = new HashMap<String, Object>();
    map.put("Pingpong", "Pingpong");
    //map.put("yourHello", jsonData);
    map.put("yourData", params);

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
}