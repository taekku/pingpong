package pingpong.web.controller;


import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HelloController {
    
    @GetMapping("/")
    public String index(Map<String, Object> model) {
        model.put("time", new Date());
        model.put("message", "My Message!");
        return "index";
    }
    @RequestMapping(value="/ping", method = RequestMethod.GET)
    public ModelAndView hello(
                        // @RequestParam("sayit")
                        // String sayit
                        ) {
		ModelAndView retVal = new ModelAndView();
		retVal.setViewName("ping");
		retVal.addObject("message", "Hello my boys!");
        return retVal;
    }
    @RequestMapping(value="/jquery.orgchart", method = RequestMethod.GET)
    public ModelAndView orgChart(
                        // @RequestParam("sayit")
                        // String sayit
                        ) {
		ModelAndView retVal = new ModelAndView();
		retVal.setViewName("jquery.orgchart");
		retVal.addObject("message", "Hello my boys!");
        return retVal;
    }
    @GetMapping("/hello")
    public String ping(Map<String, Object> model) {
        // model.put("time", new Date());
        // model.put("message", "asdf My Message asdf");
        return "hello";
    }
  
    @RequestMapping(value="/asdf"
        //, consumes=MediaType.APPLICATION_JSON_VALUE
        , consumes={ "text/plain","application/*" }
      )
    public Map<String, String> myHello(
       // @RequestParam(value="myData") String myData
        // @RequestBody MyData myData
      ) {
      HashMap<String, String> map = new HashMap<String, String>();
      map.put("col1", "data1");
      map.put("col2", "data2");
      map.put("col3", "data3");
      //map.put("yourData", paramMap.toString());
      System.out.println("Your Output:" + map.toString());
      return map;
    }
}
