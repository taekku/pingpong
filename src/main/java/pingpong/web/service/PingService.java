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

  /**

    var datascource = {
      'name': 'Lao Lao',
      'title': 'general manager',
      'children': [
        { 'name': 'Bo Miao', 'title': 'department manager',
          'children': [{ 'name': 'Li Xin', 'title': 'senior engineer' }]
        },
        { 'name': 'Su Miao', 'title': 'department manager',
          'children': [
            { 'name': 'Tie Hua', 'title': 'senior engineer' },
            { 'name': 'Hei Hei', 'title': 'senior engineer',
              'children': [
                { 'name': 'Pang Pang', 'title': 'engineer' },
                { 'name': 'Dan Dan', 'title': 'UE engineer' }
              ]
            }
          ]
        },
        { 'name': 'Hong Miao', 'title': 'department manager' }
      ]
    };

   * @return
   */
  public ArrayList<Map<String,Object>> getOrgChart(){
    ArrayList<Map<String,Object>> pong = new ArrayList<Map<String,Object>>();
    
    Map<String,Object> record = new HashMap<String,Object>();
    record.put("org_line", "0"); record.put("id", "0"); record.put("pid", "");
    record.put("name", "대표이사");
    record.put("title","general manager");
    pong.add(record);
    
    record = new HashMap<String,Object>();
    record.put("org_line", "0/1"); record.put("id", "01"); record.put("pid", "0");
    record.put("name", "Bo Miao");
    record.put("title","department manager");
    pong.add(record);

    record = new HashMap<String,Object>();
    record.put("org_line", "0/1/1"); record.put("id", "011"); record.put("pid", "01");
    record.put("name", "Li Xiz");
    record.put("title","senior engineer");
    pong.add(record);

    record = new HashMap<String,Object>();
    record.put("org_line", "0/2"); record.put("id", "02"); record.put("pid", "0");
    record.put("name", "Su Miao");
    record.put("title","department manager");
    pong.add(record);

    record = new HashMap<String,Object>();
    record.put("org_line", "0/2/1"); record.put("id", "021"); record.put("pid", "02");
    record.put("name", "Tie Hua");
    record.put("title","senior engineer");
    pong.add(record);

    record = new HashMap<String,Object>();
    record.put("org_line", "0/2/2"); record.put("id", "022"); record.put("pid", "02");
    record.put("name", "Hei Hei");
    record.put("title","senior engineer");
    pong.add(record);

    record = new HashMap<String,Object>();
    record.put("org_line", "0/2/2/1"); record.put("id", "0221"); record.put("pid", "022");
    record.put("name", "Pang Pang");
    record.put("title","engineer");
    pong.add(record);

    record = new HashMap<String,Object>();
    record.put("org_line", "0/2/2/2"); record.put("id", "0222"); record.put("pid", "022");
    record.put("name", "Dan Dan");
    record.put("title","UE engineer");
    pong.add(record);

    record = new HashMap<String,Object>();
    record.put("org_line", "0/3"); record.put("id", "03"); record.put("pid", "0");
    record.put("name", "Hong Miao");
    record.put("title","department manager");
    pong.add(record);
    return pong;
  }
}