""" Curso model. """
from django.db import models
from api.models.timestamp import TimeStamps
from api.models import User

class Curso(TimeStamps):
    """Curso model.
    Almacena la información principal de un curso, en 
    este se asigna el Usuario/Maestro encargado de impartir
    el curso. """

    # Usuario encargado.
    maestro = models.ForeignKey(User, on_delete=models.CASCADE)
    # Nombre del curso.
    nombre_curso = models.CharField(max_length=100, unique=True)
    # Descripcion del curso.
    descripcion = models.TextField()
    # Créditos del curso.
    creditos = models.SmallIntegerField()
    # Activo
    activo = models.BooleanField(default=True)

    def delete(self, *args):
        self.activo = False
        self.save()

