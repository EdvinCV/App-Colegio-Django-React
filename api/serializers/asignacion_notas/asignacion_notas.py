""" Asignacion Cursos Serializers. """

# Django

# Django REST Framework

# Models 
from api.models.asignacion_notas import AsignacionNotas

# Serializers
from rest_framework import serializers

# Permissions 

class AsignacionNotasSerializer(serializers.ModelSerializer):

    nombre_completo = serializers.SerializerMethodField('get_full_name')
    nombre_curso = serializers.SerializerMethodField('get_full_curso')

    class Meta: 
        model = AsignacionNotas
        fields = (
            'id','estudiante', 'curso', 'unidad',
            'nota', 'created', 'nombre_completo', 'nombre_curso'        
        )

    def get_full_name(self, obj):
        return '{} {}'.format(obj.estudiante.first_name, obj.estudiante.last_name)

    def get_full_curso(self, obj):
        return '{}'.format(obj.curso.nombre_curso)


