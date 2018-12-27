package pingpong.web.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public class PingService {
  public ArrayList<Map<String,Object>> getData(Map<String,Object> params){
    ArrayList<Map<String,Object>> pong = new ArrayList<Map<String,Object>>();
    
    Map<String,Object> record = new HashMap<String,Object>();
    record.put("ResponsePong", "GoodID");
    record.put("name","Taekgu");
    pong.add(record);
    
    record = new HashMap<String,Object>();
    record.put("ResponsePong", "GoodID2");
    record.put("name","Taekgu2");
    pong.add(record);
    return pong;
  }
}