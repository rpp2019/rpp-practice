package rpppractice.reps;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import rpppractice.jpa.Porudzbina;
import rpppractice.jpa.StavkaPorudzbine;



public interface StavkaPorudzbineRepository extends JpaRepository<StavkaPorudzbine, Integer>{
	
	Collection<StavkaPorudzbine> findByPorudzbina(Porudzbina p);
	
	@Query(value = "select coalesce(max(redni_broj)+1, 1) from stavka_porudzbine where porudzbina = ?1", nativeQuery = true)
	Integer nextRBr(Integer porudzbinaId);

}
