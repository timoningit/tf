package com.portfolio.demo.Interface;

import com.portfolio.demo.Entity.Persona;
import java.util.List;


public interface IPersonaService {
//traeer una persona,
    public List<Persona> getPersona();
    
//guadar un objeto del tipo persona
    public void savePersona(Persona persona);
    
//Eliminar un objeto pero lo buscamos por ID
    public void deletePersona(Long id);

//buscar una persona por ID
    public Persona findPersona(Long id);
}
