""" Curso serializer. """

# Django REST Framework
from rest_framework import serializers

# Model
from api.models.cursos import Curso
from api.models.asignacion_cursos import AsignacionCursos
from api.models.asignacion_notas import AsignacionNotas

class CursoModelSerializer(serializers.ModelSerializer):
    
    # Permite seleccionar el maestro encargado por medio de la relación.

    nombre_maestro = serializers.SerializerMethodField('get_full_name')
    num_estudiantes = serializers.SerializerMethodField('get_numero_estudiantes')
    promedio_total = serializers.SerializerMethodField('get_promedio')
    class Meta: 
        model = Curso
        fields = (
            'id', 'maestro', 'nombre_curso',
            'descripcion', 'creditos', 'nombre_maestro',
            'num_estudiantes', 'promedio_total'
        )

    def get_full_name(self, obj):
        return '{} {}'.format(obj.maestro.first_name, obj.maestro.last_name)

    def get_numero_estudiantes(self, obj):
        asignaciones = AsignacionCursos.objects.filter(curso=obj.id)
        return len(asignaciones)

    def get_promedio(self, obj):
        totalPromedio = 0
        notas = AsignacionNotas.objects.filter(curso=obj.id)
        for n in notas:
            totalPromedio += n.nota
        if len(notas) == 0:
            return 0
        else:
            return totalPromedio/len(notas)