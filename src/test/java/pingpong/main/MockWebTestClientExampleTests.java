package pingpong.main;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureWebTestClient
public class MockWebTestClientExampleTests {

	// @Autowired
	// private WebTestClient webClient;

	@Test
	public void exampleTest() {
		// this.webClient.get().uri("/").exchange().expectStatus().isOk()
		// 		.expectBody(String.class).isEqualTo("Hello World");
	}

}