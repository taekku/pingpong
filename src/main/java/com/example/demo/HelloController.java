package com.example.demo;


import java.util.Date;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HelloController {
    
    @GetMapping("/")
    public String index(Map<String, Object> model) {
        model.put("time", new Date());
        model.put("message", "asdf My Message asdf");
        return "hello";
    }
    @RequestMapping("/pingpong")
    public String hello(@RequestParam(name="name", required=false, defaultValue="World") String name, Model model) {
        model.addAttribute("name", name);

        return "hello";
    }
}
