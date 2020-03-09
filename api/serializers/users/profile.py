""" Profile serializers."""

# Django

# Django REST Framework
from rest_framework import serializers

# Models
from api.models.profile import Profile


class ProfileModelSerializer(serializers.ModelSerializer):
    """ Profile serializer.
    Muestra todos los campos de perfil, adicional calcula el 
    numero de cursos total, el promedio total.
    """

    user = serializers.SlugRelatedField(read_only=True, slug_field='username')

    class Meta:
        model = Profile
        fields = (
            'user',
            'avatar',
            'phone',
            'address'
        )
