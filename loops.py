# Loops
"""

for in 


while condition:
    pass



"""

for i in range(1, 11): # range(start = 0, stop, step = 1)
    print(i)
    
nombres = ["Hugo", "Paco", "Luis"]

for i in range(len(nombres)):
    print(nombres[i])
    
for nombre in nombres:
    print(nombre)
    
indice = 0
while indice < len(nombres):
    print(nombres[indice])
    indice += 1 # indice = indice + 1