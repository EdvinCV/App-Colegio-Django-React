""" Curso ViewSet. """

# Django

# Django REST Framework
from rest_framework import viewsets
from rest_framework import status
from rest_framework.decorators import action
from rest_framework import mixins
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Models 
from api.models.cursos import Curso

# Serializers 
from api.serializers.cursos.cursos import CursoModelSerializer

# Permissions
from api.permissions.users import IsAdmin

class CursoViewSet(viewsets.ModelViewSet):
    """Curso ViewSet. """
    queryset = Curso.objects.filter(activo=True)
    serializer_class = CursoModelSerializer

    def get_permissions(self):
        """Asignar permisos en base a la acción a realizar."""
        permissions = []
        if(self.action) == 'list':
            permissions = [IsAuthenticated, IsAdmin]
        if(self.action) == 'create':
            permissions = [IsAuthenticated]
        return [p() for p in permissions]
