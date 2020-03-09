""" Django Users Models. """

# Models
from .timestamp import TimeStamps
from django.contrib.auth.models import AbstractUser
# from api.models.cursos import Curso
#from api.models.asignacion_cursos import AsignacionCursos
#from api.models.asignacion_notas import AsignacionNotas

# Django
from django.db import models


class User(TimeStamps, AbstractUser):
    """Custom user model
    Extends from AbstractUser model from Django, change the username field to email
    and add extra fields.
    """
    # Cambiar el campo por defecto de autenticación.
    USERNAME_FIELD= 'email'
    # Campos requeridos al crear un usuario.
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name', 'gender']

    email = models.EmailField(
        'email address',
        unique=True,
        error_messages={
            'unique': 'A user with that email already exists.'
        }
    )

    MALE = 0
    FEMALE = 1
    GENDER_CHOICES = [
        (MALE, 'Male'),
        (FEMALE, 'Female')
    ]

    # Género de la persona.
    gender = models.PositiveSmallIntegerField(choices=GENDER_CHOICES, null=True, blank=True)

    ADMIN = 0
    STUDENT = 1
    ROL_CHOICES = [
        (ADMIN, 'Admin'),
        (STUDENT, 'Student')
    ]

    # Rol del usuario.
    rol = models.PositiveSmallIntegerField(choices=ROL_CHOICES)

    # Número de teléfono.
    phone_number = models.CharField(max_length=20, blank=True, null=True)

    # Verificación de email.
    is_verified = models.BooleanField(
        'verified', 
        default=False, 
        help_text=('Set to true when the user have verified its email.')
    )

    activo = models.BooleanField(default=True)

    cursos = models.ManyToManyField(
        'api.Curso',
        through='api.AsignacionCursos',
        through_fields=('estudiante','curso'),
        related_name="cursos"
    )

    notas = models.ManyToManyField(
        'api.Curso',
        through='api.AsignacionNotas',
        through_fields=('estudiante', 'curso'),
        related_name="notas"
    )

    #notas = models.ManyToManyField(
     #   Curso,
     #   through=AsignacionNotas,
     #   through_fields=('user','curso')
    #)
    

    def delete(self, *args):
        self.activo = False
        self.save(update_fields=('activo',))
