package pingpong.web.controller;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pingpong.util.file.FileUtil;

@RestController
public class MyController {

  @RequestMapping(value="/myHello2")
  public Map<String, Object> myHello2(
    //@RequestBody String jsonData
    //, 
    @RequestBody List<Map<String, Object>> params
  ){
    HashMap<String, Object> map = new HashMap<String, Object>();
    map.put("Hello2", "myHello2");
    //map.put("yourHello", jsonData);
    map.put("yourHello", params);
    System.out.println("myHello2 Output:" + map.toString());
    return map;
  }
  @RequestMapping(value="/myHello3")
  public Map<String, Object> myHello3(
    //@RequestBody String jsonData
    //, 
    @RequestBody Map<String, Object> params
  ){
    HashMap<String, Object> map = new HashMap<String, Object>();
    map.put("Hello3", "myHello3");
    //map.put("yourHello", jsonData);
    map.put("yourHello", params);
    try {
      File file = FileUtil.makeFile("dist/test.json");
      FileWriter fw = new FileWriter(file);
      fw.write(params.toString());
      fw.close();
    } catch (IOException e) {
      e.printStackTrace();
	  }
    System.out.println("myHello3 Output:" + map.toString());
    return map;
  }

  @RequestMapping(value="/myHello"
    , consumes={ "text/plain","application/*" }
    )
  public Map<String, String> myHello(
      //@RequestParam(value="myData") MyData myData
      //@RequestBody Map<String, Object> yourData
      //@RequestBody List<Map<String, Object>> params
      @RequestBody String myData
      , HttpServletRequest req
       //, HttpServletResponse res
    ) {
    HashMap<String, String> map = new HashMap<String, String>();
    map.put("col1", "data1");
    map.put("col2", "data2");
    map.put("col3", "data3");
    Enumeration <String> headName = req.getHeaderNames();
    while( headName.hasMoreElements() ){
      String hName = headName.nextElement();
      System.out.println(hName + ":=(head)=>" + req.getHeader(hName));
    }
    Enumeration <String> paramName = req.getParameterNames();
    while( paramName.hasMoreElements() ){
      String pName = paramName.nextElement();
      System.out.println(pName + ":=(param)=>" + req.getParameter(pName));
    }
    // System.out.println("myData:" + req.getParameter("myData"));
    System.out.println("yourData(RequestBody):" + myData);
     map.put("yourData", req.getParameter("myData"));
    System.out.println("myHello Output:" + map.toString());
    return map;
  }
}