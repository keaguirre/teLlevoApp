from django.shortcuts import render
from django.shortcuts import render, HttpResponse
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import generics, status
from .models import Conductor, Auto, Pasajero, Viaje
from .serializers import *

# Create your views here.

from django.shortcuts import render, HttpResponse
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .models import *
from .serializers import *

# Create your views here.

#Conductores
@api_view(['GET','POST','DELETE'])
def conductor_list(request):
    if request.method == 'GET':
        conductores = Conductor.objects.all()
        conductor_serializer = ConductorSerializer(conductores,many=True)
        return Response(conductor_serializer.data,status=status.HTTP_200_OK)

    elif request.method == 'POST':
        conductor_data = JSONParser().parse(request)
        conductor_serializer = ConductorSerializer(data=conductor_data)
        if conductor_serializer.is_valid():
            conductor_serializer.save()
            return Response(conductor_serializer.data,status=status.HTTP_201_CREATED)
        return Response(conductor_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = Conductor.objects.all().delete()
        return Response({'message:','{} Conductores han sido eliminadas de la base de datos'.format(count[0])},status=status.HTTP_204_NO_CONTENT)

@api_view(['GET','PUT','DELETE'])
def conductor_detail(request,c_email):
    try:
        conductor = Conductor.objects.get(c_email=c_email)
    except Conductor.DoesNotExist:
        return Response({'messaje':'El conductor buscado no exite en nuestros registros'},status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        conductor_serializer = ConductorSerializer(conductor)
        return Response(conductor_serializer.data,status=status.HTTP_200_OK)
    
    elif request.method == 'PUT':
        conductor_data = JSONParser().parse(request)
        conductor_serializer = ConductorSerializer(conductor,data=conductor_data)
        if conductor_serializer.is_valid():
            conductor_serializer.save()
            return Response(conductor_serializer.data,status=status.HTTP_200_OK)
        return Response(conductor_serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        conductor.delete()
        return Response({'message':'Conductor eliminado correctamente'}, status=status.HTTP_200_OK)

#Autos
@api_view(['GET','POST','DELETE'])
def autos_list(request):
    if request.method == 'GET':
        autos = Auto.objects.all()
        auto_serializer = AutoSerializer(autos,many=True)
        return Response(auto_serializer.data,status=status.HTTP_200_OK)

    elif request.method == 'POST':
        auto_data = JSONParser().parse(request)
        auto_serializer = AutoSerializer(data=auto_data)
        if auto_serializer.is_valid():
            auto_serializer.save()
            return Response(auto_serializer.data,status=status.HTTP_201_CREATED)
        return Response(auto_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = Auto.objects.all().delete()
        return Response({'message:','{} Autos han sido eliminados de la base de datos'.format(count[0])},status=status.HTTP_204_NO_CONTENT)

@api_view(['GET','PUT','DELETE'])
def auto_detail(request,a_id):
    try:
        auto = Auto.objects.get(a_id=a_id)
    except Auto.DoesNotExist:
        return Response({'messaje':'El auto buscado no existe en nuestros registros'},status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        auto_serializer = AutoSerializer(auto)
        return Response(auto_serializer.data,status=status.HTTP_200_OK)
    
    elif request.method == 'PUT':
        auto_data = JSONParser().parse(request)
        auto_serializer = ConductorSerializer(auto,data=auto_data)
        if auto_serializer.is_valid():
            auto_serializer.save()
            return Response(auto_serializer.data,status=status.HTTP_200_OK)
        return Response(auto_serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        auto.delete()
        return Response({'message':'Auto eliminado correctamente'}, status=status.HTTP_200_OK)

#Pasajero
@api_view(['GET','POST','DELETE'])
def pasajeros_list(request):
    if request.method == 'GET':
        pasajeros = Pasajero.objects.all()
        pasajero_serializer = PasajeroSerializer(pasajeros,many=True)
        return Response(pasajero_serializer.data,status=status.HTTP_200_OK)

    elif request.method == 'POST':
        pasajero_data = JSONParser().parse(request)
        pasajero_serializer = PasajeroSerializer(data=pasajero_data)
        if pasajero_serializer.is_valid():
            pasajero_serializer.save()
            return Response(pasajero_serializer.data,status=status.HTTP_201_CREATED)
        return Response(pasajero_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = Pasajero.objects.all().delete()
        return Response({'message:','{} Pasajeros han sido eliminados de la base de datos'.format(count[0])},status=status.HTTP_204_NO_CONTENT)

@api_view(['GET','PUT','DELETE'])
def pasajero_detail(request,p_email):
    try:
        pasajero = Pasajero.objects.get(p_email=p_email)
    except Pasajero.DoesNotExist:
        return Response({'messaje':'El pasajero buscado no existe en nuestros registros'},status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        pasajero_serializer = PasajeroSerializer(pasajero)
        return Response(pasajero_serializer.data,status=status.HTTP_200_OK)
    
    elif request.method == 'PUT':
        pasajero_data = JSONParser().parse(request)
        pasajero_serializer = PasajeroSerializer(pasajero,data=pasajero_data)
        if pasajero_serializer.is_valid():
            pasajero_serializer.save()
            return Response(pasajero_serializer.data,status=status.HTTP_200_OK)
        return Response(pasajero_serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        pasajero.delete()
        return Response({'message':'Pasajero eliminado correctamente'}, status=status.HTTP_200_OK)

#Viaje
@api_view(['GET','POST','DELETE'])
def viajes_list(request):
    if request.method == 'GET':
        viajes = Viaje.objects.all()
        viaje_serializer = ViajeSerializer(viajes,many=True)
        return Response(viaje_serializer.data,status=status.HTTP_200_OK)

    elif request.method == 'POST':
        viaje_data = JSONParser().parse(request)
        viaje_serializer = ViajeSerializer(data=viaje_data)
        if viaje_serializer.is_valid():
            viaje_serializer.save()
            return Response(viaje_serializer.data,status=status.HTTP_201_CREATED)
        return Response(viaje_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = Viaje.objects.all().delete()
        return Response({'message:','{} Viajes han sido eliminados de la base de datos'.format(count[0])},status=status.HTTP_204_NO_CONTENT)

@api_view(['GET','PUT','DELETE'])
def viaje_detail(request,v_viaje_id):
    try:
        viaje = Viaje.objects.get(v_viaje_id=v_viaje_id)
    except Viaje.DoesNotExist:
        return Response({'messaje':'El viaje buscado no existe en nuestros registros'},status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        viaje_serializer = ViajeSerializer(viaje)
        return Response(viaje_serializer.data,status=status.HTTP_200_OK)
    
    elif request.method == 'PUT':
        viaje_data = JSONParser().parse(request)
        viaje_serializer = ViajeSerializer(viaje,data=viaje_data)
        if viaje_serializer.is_valid():
            viaje_serializer.save()
            return Response(viaje_serializer.data,status=status.HTTP_200_OK)
        return Response(viaje_serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        viaje.delete()
        return Response({'message':'Viaje eliminado correctamente'}, status=status.HTTP_200_OK)


#Solicitud
@api_view(['GET','POST','DELETE'])
def solicitud_list(request):
    if request.method == 'GET':
        solicitud = Solicitud.objects.all()
        solicitud_serializer = SolicitudSerializer(solicitud,many=True)
        return Response(solicitud_serializer.data,status=status.HTTP_200_OK)

    elif request.method == 'POST':
        solicitud_data = JSONParser().parse(request)
        solicitud_serializer = SolicitudSerializer(data=solicitud_data)
        if solicitud_serializer.is_valid():
            solicitud_serializer.save()
            return Response(solicitud_serializer.data,status=status.HTTP_201_CREATED)
        return Response(solicitud_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = Solicitud.objects.all().delete()
        return Response({'message:','{} Solicitudes han sido eliminadas de la base de datos'.format(count[0])},status=status.HTTP_204_NO_CONTENT)

@api_view(['GET','PUT','DELETE'])
def solicitud_detail(request,p_email):
    try:
        solicitud = Solicitud.objects.get(p_email=p_email)
    except Solicitud.DoesNotExist:
        return Response({'messaje':'La solicitud buscada no existe en nuestros registros'},status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        solicitud_serializer = SolicitudSerializer(solicitud)
        return Response(solicitud_serializer.data,status=status.HTTP_200_OK)
    
    elif request.method == 'PUT':
        solicitud_data = JSONParser().parse(request)
        solicitud_serializer = SolicitudSerializer(solicitud,data=solicitud_data)
        if solicitud_serializer.is_valid():
            solicitud_serializer.save()
            return Response(solicitud_serializer.data,status=status.HTTP_200_OK)
        return Response(solicitud_serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        solicitud.delete()
        return Response({'message':'Solicitud eliminada correctamente'}, status=status.HTTP_200_OK)
