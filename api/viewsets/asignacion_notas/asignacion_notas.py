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
from api.models.asignacion_notas import AsignacionNotas

# Serializer 
from api.serializers.asignacion_notas.asignacion_notas import AsignacionNotasSerializer

# Permissions


class AsignacionNotasViewSet(viewsets.ModelViewSet):
    queryset = AsignacionNotas.objects.all()
    serializer_class = AsignacionNotasSerializer
    lookup_field = 'id'

    @action(detail=False, methods=['get'])
    def me(self, request, *args, **kwargs):
        notas = AsignacionNotas.objects.filter(estudiante=request.user)
        serializer = AsignacionNotasSerializer(notas, many=True)
        data = {
            'notas': serializer.data
        }
        return Response(data, status=status.HTTP_200_OK)

