from rest_framework import serializers
from .models import Conductor, Auto, Pasajero, Viaje, Solicitud

class ConductorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conductor
        fields = ('__all__')

class AutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Auto
        fields = ('__all__')

class PasajeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pasajero
        fields = ('__all__')

class ViajeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Viaje
        fields = ('__all__')

class SolicitudSerializer(serializers.ModelSerializer):
    class Meta:
        model = Solicitud
        fields = ('__all__')