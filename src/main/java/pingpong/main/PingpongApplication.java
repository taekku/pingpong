package pingpong.main;

import java.nio.charset.Charset;

import javax.servlet.Filter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.web.filter.CharacterEncodingFilter;

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
  // @Bean
  // public HttpMessageConverter<String> responseBodyConverter() {
  //       return new StringHttpMessageConverter(Charset.forName("UTF-8"));
  // }
 
  // @Bean
  // public Filter characterEncodingFilter() {
  //       CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter();
  //       characterEncodingFilter.setEncoding("UTF-8");
  //       characterEncodingFilter.setForceEncoding(true);
  //       return characterEncodingFilter;
  // }
	public static void main(String[] args) {
        SpringApplication.run(PingpongApplication.class, args);
        System.out.println("OK Start Now");
    }

}
