""" Modelo de Asignación de cursos. """

# Django 
from django.db import models
from api.models.timestamp import TimeStamps
from api.models.users import User
from api.models.cursos import Curso

# Models 

class AsignacionCursos(TimeStamps):
    # Estudiante que se asigno al curso.
    estudiante = models.ForeignKey(User, on_delete=models.CASCADE)
    # Curso al que se asigno
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    # Finalizado
    finalizado = models.BooleanField(default=False)


