from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from django.conf.urls import url

# ViewSets
from api.viewsets.users.users import UserViewSet, AlumnosViewSet, AdminsViewSet
from api.viewsets.cursos.cursos import CursoViewSet
from api.viewsets.asignacion_cursos.asignacion_cursos import AsignacionCursosViewSet
from api.viewsets.asignacion_notas.asignacion_notas import AsignacionNotasViewSet

router = DefaultRouter()
router.register('user', UserViewSet, basename="users")
router.register('cursos', CursoViewSet, basename="cursos")
router.register('asignacion', AsignacionCursosViewSet, basename="asignacion")
router.register('notas', AsignacionNotasViewSet, basename="notas")
router.register('alumnos', AlumnosViewSet, basename="alumnos")
router.register('admins', AdminsViewSet, basename="admins")

urlpatterns = [
    path('api/', include(router.urls)),
    #url(r"^api/token", obtain_auth_token, name="api-token"),
    #path('api-auth/', include('rest_framework.urls')),
]
