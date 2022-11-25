from django.contrib import admin
from .models import Conductor, Pasajero, Auto, Viaje
# Register your models here.

admin.site.register(Conductor)
admin.site.register(Pasajero)
admin.site.register(Auto)
admin.site.register(Viaje)