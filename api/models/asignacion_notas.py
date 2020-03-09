""" Modelo de Asignación de notas. """

# Django 
from django.db import models
from api.models.timestamp import TimeStamps
from api.models.users import User
from api.models.cursos import Curso

# Models 

class AsignacionNotas(TimeStamps):

    # Estudiante que se le asignará la nota.
    estudiante = models.ForeignKey(User, on_delete=models.CASCADE)
    # Curso al que corresponde la nota.
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    # Unidad
    unidad = models.SmallIntegerField()
    # Nota
    nota = models.SmallIntegerField()
    
