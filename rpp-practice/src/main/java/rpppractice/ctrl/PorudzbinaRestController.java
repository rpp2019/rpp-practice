package rpppractice.ctrl;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import rpppractice.jpa.Porudzbina;
import rpppractice.reps.PorudzbinaRepository;

@RestController
public class PorudzbinaRestController {
	
	 	@Autowired
	    private PorudzbinaRepository porudzbinaRepository;
	     
	    @Autowired
	    private JdbcTemplate jdbcTemplate;
	     
	    @GetMapping("porudzbina")
	    public Collection<Porudzbina> getAll(){
	        return porudzbinaRepository.findAll();
	    }
	     
	    @GetMapping("porudzbina/{id}")
	    public Porudzbina getOne(@PathVariable("id") Integer id) {
	        return porudzbinaRepository.getOne(id);
	    }
	     
	    @PostMapping("porudzbina")
	    public ResponseEntity<HttpStatus> addOne(@RequestBody Porudzbina porudzbina){
	        porudzbinaRepository.save(porudzbina);
	        return new ResponseEntity<HttpStatus>(HttpStatus.CREATED);
	    }
	     
	    @PutMapping("porudzbina/{id}")
	    public ResponseEntity<HttpStatus> update(@RequestBody Porudzbina porudzbina, @PathVariable("id") Integer id){
	        if(porudzbinaRepository.existsById(id)) {
	            porudzbina.setId(id);
	            porudzbinaRepository.save(porudzbina);
	            return new ResponseEntity<HttpStatus>(HttpStatus.OK);
	        }
	         
	        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	    }
	 

	    @DeleteMapping("porudzbina/{id}")
	    public ResponseEntity<HttpStatus> delete(@PathVariable Integer id){
	        if (id == -100 && !porudzbinaRepository.existsById(-100)) {
	             
	            jdbcTemplate.execute("INSERT INTO porudzbina (\"id\", \"dobavljac\", \"placeno\", \"iznos\", \"isporuceno\", \"datum\") "
	                    + "VALUES ('-100', '1', 'true', '1000', to_date('03.03.2017.', 'dd.mm.yyyy.'), to_date('03.03.2017.', 'dd.mm.yyyy.'))");
	        }
	         
	        if(porudzbinaRepository.existsById(id)) {
	            porudzbinaRepository.deleteById(id); 
	            return new ResponseEntity<HttpStatus>(HttpStatus.OK);
	        }
	         
	        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	         
	    }

}
