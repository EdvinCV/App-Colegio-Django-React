""" Django Models TimeStamp. """

# Django
from django.db import models


class TimeStamps(models.Model):
    """ Colegio abstract class

    Este modelo es una clase abstracta que permite almacenar 
    los siguientes campos, que se heredaran en cada modelo.
        - created (DateTime): Guarda la fecha en la que el objeto fue creada.
        - updated (DateTIme): Guarda la fecha en la que el objeto fue actualizado.
    """

    created = models.DateTimeField(
        'created_at',
        auto_now_add=True,
        help_text = 'Date time on wich the object was created'
    )
    updated = models.DateTimeField(
        'updated at',
        auto_now=True,
        help_text = 'Date time on wich the object was updated'
    )

    class Meta: 
        """ Meta options. """
        abstract = True

        get_latest_by = 'created'
        ordering = ['-created', '-updated']




