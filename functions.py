# Functions
""" 

def func_name():
    pass
    

func_name = lambda params: valor


"""

def saludo():
    return "Hola Mundo"

saludo()

saludar = lambda name : f"Hola {name}"

saludar("Luis")


def sumar(a, b):
    return a + b

sumar(10, 10)


def restar(a, b = 10):
    return a - b

restar(10)
restar(10, 10)

def multiplicar(a, b):
    return a * b

print(multiplicar(b=5, a=10))


def calculo(*args):
    print(args)
    
calculo(1, 2, 3, 4, 5)


def informacion(**kargs):
    print(kargs)
    return f"{kargs['nombre']} {kargs['apellido']}"

print(informacion(nombre="John", apellido="doe"))