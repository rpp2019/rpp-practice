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
import rpppractice.jpa.StavkaPorudzbine;
import rpppractice.reps.PorudzbinaRepository;
import rpppractice.reps.StavkaPorudzbineRepository;

@RestController
public class StavkaPorudzbineRestController {
	
	@Autowired
	private StavkaPorudzbineRepository stavkaPorudzbineRepository;
	
	@Autowired
	private PorudzbinaRepository porudzbinaRepository;
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@GetMapping("stavkaPorudzbine")
	public Collection<StavkaPorudzbine> getAll() {
		return stavkaPorudzbineRepository.findAll();
	}
	
	@GetMapping("stavkaPorudzbine/{id}")
	public StavkaPorudzbine getOne(@PathVariable("id") Integer id) {
		return stavkaPorudzbineRepository.getOne(id);
	}
	
	@GetMapping("stavkaZaPorudzbinu/{id}")
	public Collection<StavkaPorudzbine> getAllForPorudzbina(@PathVariable("id") Integer id){
		Porudzbina p = porudzbinaRepository.getOne(id);
		return stavkaPorudzbineRepository.findByPorudzbina(p);
		
	}
	
	@PostMapping("stavkaPorudzbine")
	public ResponseEntity<HttpStatus> addOne(@RequestBody StavkaPorudzbine stavkaPorudzbine){
		stavkaPorudzbine.setRedniBroj(stavkaPorudzbineRepository.nextRBr(stavkaPorudzbine.getPorudzbina().getId()));
		stavkaPorudzbineRepository.save(stavkaPorudzbine);
		return new ResponseEntity<HttpStatus>(HttpStatus.CREATED);
	}
	
	@PutMapping("stavkaPorudzbine/{id}")
	public ResponseEntity<HttpStatus> updateOne(@RequestBody StavkaPorudzbine stavkaPorudzbine, @PathVariable("id") Integer id){
		if (!stavkaPorudzbineRepository.existsById(id)) {
			return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
		}
		stavkaPorudzbine.setId(id);
		stavkaPorudzbineRepository.save(stavkaPorudzbine);
		return new ResponseEntity<HttpStatus>(HttpStatus.OK);
	}
	
	@DeleteMapping("stavkaPorudzbine/{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable Integer id){
		if (id == -100 && !stavkaPorudzbineRepository.existsById(-100)) {
            
            jdbcTemplate.execute("INSERT INTO stavka_porudzbine (\"id\", \"redni_broj\", \"kolicina\", \"jedinica_mere\", \"cena\", \"porudzbina\", \"artikl\") "
                    + "VALUES ('-100', '100', '1', 'kom', '1', '1', '1')");
        }
		
		if(stavkaPorudzbineRepository.existsById(id)) {
            stavkaPorudzbineRepository.deleteById(id); 
            return new ResponseEntity<HttpStatus>(HttpStatus.OK);
        }
         
        return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}

}
