from django.db import models
from api.models.users import User
from api.models.timestamp import TimeStamps


class Profile(TimeStamps):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to='Avatar', null=True, blank=True)
    phone = models.CharField(max_length=15, null=True, blank=True)
    address = models.CharField(max_length=250, null=True, blank=True)
    activo = models.BooleanField(default=True)

    def __unicode__(self):
        return self.user.username 

    def delete(self, *args):
        user = self.user
        user.is_active = False
        user.save()
        self.active = False
        self.save()
        return True
