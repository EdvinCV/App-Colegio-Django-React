""" Asignacion Cursos Serializers. """

# Django

# Django REST Framework

# Models 
from api.models.asignacion_cursos import AsignacionCursos
from api.models.asignacion_notas import AsignacionNotas

# Serializers
from rest_framework import serializers

# Permissions 

class AsignacionCursosSerializer(serializers.ModelSerializer):
    
    nombre_completo = serializers.SerializerMethodField('get_full_name')
    nombre_curso = serializers.SerializerMethodField('get_full_curso')
    promedio = serializers.SerializerMethodField('get_promedio')

    class Meta: 
        model = AsignacionCursos
        fields = (
            'id','estudiante', 'curso', 'finalizado',
            'nombre_completo', 'nombre_curso', 'created', 'promedio'
        )

    def get_full_name(self, obj):
        return '{} {}'.format(obj.estudiante.first_name, obj.estudiante.last_name)

    def get_full_curso(self, obj):
        return obj.curso.nombre_curso

    def get_promedio(self, obj):
        total = 0
        notas = AsignacionNotas.objects.filter(estudiante=obj.estudiante.id , curso=obj.curso.id, nota=60)
        for n in notas:
            total += n.nota
        if len(notas) == 0:
            return 0
        else:
            return total/len(notas)


