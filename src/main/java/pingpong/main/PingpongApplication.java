package pingpong.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan (basePackages = PingpongApplication.PINGPONG_WEB)
public class PingpongApplication extends SpringBootServletInitializer {

	/**
	 *
	 */

	static final String PINGPONG_WEB = "pingpong.web";

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(PingpongApplication.class);
	}
	public static void main(String[] args) {
        SpringApplication.run(PingpongApplication.class, args);
        System.out.println("OK Start Now");
    }

}
