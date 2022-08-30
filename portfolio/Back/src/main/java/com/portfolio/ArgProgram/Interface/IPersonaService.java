package com.portfolio.ArgProgram.Interface;

import com.portfolio.ArgProgram.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    //Traer Lista
    public List<Persona> getPersona();
    //Guardar
    public void savePersona(Persona persona);
    //Eliminar usando id
    public void deletePersona(Long id);
    //Buscar usando id
    public Persona findPersona(Long id);
    
}
