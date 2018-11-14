package com.example.demo;


import java.util.Date;
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
        model.put("message", "asdf My Message asdf");
        return "index";
    }
    @RequestMapping(value="/ping", method = RequestMethod.GET)
    public ModelAndView hello(
                        // @RequestParam("sayit")
                        // String sayit
                        ) {
		ModelAndView retVal = new ModelAndView();
		retVal.setViewName("hello");
		retVal.addObject("message", "Hello my boys!");
		return retVal;
	}
}
