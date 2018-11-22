package pingpong.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

import pingpong.web.property.FileStorageProperties;
import pingpong.web.property.PingpongProperties;

@SpringBootApplication
@ComponentScan (basePackages = PingpongApplication.PINGPONG_WEB)
@EnableConfigurationProperties({ FileStorageProperties.class, PingpongProperties.class })
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
