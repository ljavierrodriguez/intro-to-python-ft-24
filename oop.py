class Persona:
    nombre = ""
    apellido = ""
    edad = ""
    
    def saludar(self):
        print("Soy una Persona")
    
    def hablar(self):
        pass
    
    def caminar(self):
        pass
    
    def correr(self):
        pass
    
    
class Estudiante(Persona):
    
    def saludar(self):
        print("Soy un Estudiante")
        
        
        
persona1 = Persona()
persona1.nombre = "Jane"
persona1.saluda()

persona2 = Persona()
persona2.nombre = "John"
persona2.saludar()