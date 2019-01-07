package pingpong.web.controller;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {
    
    @RequestMapping(value="/")
    public ModelAndView index(Map<String, Object> model) {
		  ModelAndView retVal = new ModelAndView();
		  retVal.setViewName("index");
		  retVal.addObject("message", "Hello my boys!");
      return retVal;
    }

  @RequestMapping(value = "/main", method = RequestMethod.GET)
  public ModelAndView main() {
    ModelAndView retVal = new ModelAndView();
    retVal.setViewName("main");
    retVal.addObject("message", "Hello my boys!");
    return retVal;
  }

  @RequestMapping(value = "/ping", method = RequestMethod.GET)
  public ModelAndView hello() {
    ModelAndView retVal = new ModelAndView();
    retVal.setViewName("ping");
    retVal.addObject("message", "Hello my boys!");
    return retVal;
  }

  @RequestMapping(value = "/testexcel", method = RequestMethod.GET)
  public ModelAndView testexcel() {
    ModelAndView retVal = new ModelAndView();
    retVal.setViewName("testexcel");
    retVal.addObject("message", "Hello my boys!");
    return retVal;
  }
  
}