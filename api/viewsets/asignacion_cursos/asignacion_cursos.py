""" Asignacion de cursos. """

# Django 

# Django REST Framework
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.decorators import action
from rest_framework import mixins
from rest_framework.response import Response

# Django REST Framework
from rest_framework import viewsets

# Models
from api.models.asignacion_cursos import AsignacionCursos

# Serializer 
from api.serializers.asignacion_cursos.asignacion_cursos import AsignacionCursosSerializer

# Permissions


class AsignacionCursosViewSet(viewsets.ModelViewSet):
    queryset = AsignacionCursos.objects.all()
    serializer_class = AsignacionCursosSerializer
    lookup_field = 'id'

    @action(detail=False, methods=['get'])
    def me(self, request, *args, **kwargs):
        cursos = AsignacionCursos.objects.filter(estudiante=request.user)
        serializer = AsignacionCursosSerializer(cursos, many=True)
        data = {
            'cursos': serializer.data
        }
        return Response(data, status=status.HTTP_200_OK)
