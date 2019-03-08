package rpppractice.ctrl;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorld {
	
	@RequestMapping(value="/hello", method=RequestMethod.GET)
	public String helloWorld() {
		return "Hello World!";
	}
	
	@RequestMapping("zbir")
	public String zbir() {
		long x = Math.round(Math.random()*10);
		long y = Math.round(Math.random()*10);
		return x + " + " + y + " = " + (x+y);
	}
	
	@GetMapping("/razlika")
	public String razlika() {
		long x = Math.round(Math.random()*10);
		long y = Math.round(Math.random()*10);
		return x + " - " + y + " = " + (x-y);
	}

}
