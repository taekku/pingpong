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

  @RequestMapping(value = "/workschedule", method = RequestMethod.GET)
  public ModelAndView workschedule() {
    ModelAndView retVal = new ModelAndView();
    retVal.setViewName("workschedule");
    retVal.addObject("message", "Hello my boys!");
    return retVal;
  }

  @RequestMapping(value = "/googlechart", method = RequestMethod.GET)
  public ModelAndView googleChart() {
    ModelAndView retVal = new ModelAndView();
    retVal.setViewName("googlechart");
    retVal.addObject("message", "Hello my boys!");
    return retVal;
  }

  @RequestMapping(value = "/testVueComponent", method = RequestMethod.GET)
  public ModelAndView testVueComponent() {
    ModelAndView retVal = new ModelAndView();
    retVal.setViewName("testVueComponent");
    retVal.addObject("message", "Hello my boys!");
    return retVal;
  }

  @RequestMapping(value = "/test", method = RequestMethod.GET)
  public ModelAndView testJsp() {
    ModelAndView retVal = new ModelAndView();
    retVal.setViewName("test");
    retVal.addObject("message", "Hello my boys!");
    return retVal;
  }
}