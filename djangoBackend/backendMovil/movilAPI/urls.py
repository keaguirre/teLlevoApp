from django.urls import path, include
from .views import *
urlpatterns = [   
    path('conductor/', conductor_list),
    path('conductor/<str:c_email>', conductor_detail),
    path('auto/', autos_list),
    path('auto/<str:a_id>',auto_detail),
    path('pasajero/', pasajeros_list),
    path('pasajero/<str:p_email>', pasajero_detail),
    path('viaje/', viajes_list),
    path('viaje/<str:v_viaje_id>', viaje_detail), 
    path('solicitud/', solicitud_list), 
    path('solicitud/<int:id_solicitud>', solicitud_detail)
]