package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class DemoApplication extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(DemoApplication.class);
	}
	public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
        System.out.println("OK Start Now");
    }
    
    
    // @Bean
    // public ViewResolver getViewResolver(){
    //     // InternalResourceViewResolver resolver = new InternalResourceViewResolver();
    //     // resolver.setPrefix("/resources/templates/");
    //     // resolver.setSuffix(".jsp");
    //     // resolver.setViewClass(JstlView.class);
    //     // return resolver;
    //     InternalResourceViewResolver irv = new InternalResourceViewResolver();
    //     irv.setPrefix("/webapps/WEB-INF/views/");
    //     irv.setSuffix(".jsp");
    //     return irv;

    // }
}
