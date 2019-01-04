package pingpong.web.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class TestController{

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