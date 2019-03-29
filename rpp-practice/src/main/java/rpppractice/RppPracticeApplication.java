package rpppractice;

import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class RppPracticeApplication {

	public static void main(String[] args) {
		SpringApplication.run(RppPracticeApplication.class, args);
	}
	
	/*
	 * @Bean public CommandLineRunner commandLineRunner(ApplicationContext context)
	 * { return args -> { System.out.println("Beans provided by Spring Framework");
	 * String[] beanNames = context.getBeanDefinitionNames();
	 * Arrays.sort(beanNames); for (String beanName : beanNames) {
	 * System.out.println(beanName); } }; }
	 */

}
