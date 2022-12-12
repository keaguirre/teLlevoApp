from django.db import models

# Create your models here.

class Conductor(models.Model):
    c_email = models.EmailField(primary_key=True, max_length=254, null=False, blank=False, verbose_name='Email')
    c_password = models.CharField(max_length=32,null=False, blank=False, default='Password123', verbose_name='Password')
    c_name = models.CharField(max_length=50,blank=False, verbose_name='Nombre')
    c_lastname = models.CharField(max_length=50,blank=True, verbose_name='Apellido')
    c_pnumber = models.CharField(max_length=15,blank=True , verbose_name='Telefono')
    c_image = models.URLField(max_length=254,default='https://ionicframework.com/docs/img/demos/avatar.svg', verbose_name='Imagen')
    c_state = models.CharField(max_length=15,default='Desconectado', verbose_name='Estado')
    c_car = models.ForeignKey('Auto', on_delete=models.CASCADE, null=False, default='Sin auto', related_name='c_car')
    #c_trip = models.ForeignKey('Viaje', on_delete=models.CASCADE, default='null', related_name='c_trip')

    class Meta:
        verbose_name='Conductor'
        verbose_name_plural='Conductores'
        ordering=['c_lastname','c_name']

    def __str__(self):
        return self.c_email+ ' ' +self.c_lastname + ' ' + self.c_name

class Pasajero(models.Model):
    p_email = models.EmailField(primary_key=True,max_length=254, null=False, blank=False, verbose_name='Email')
    p_password = models.CharField(max_length=32,null=False, blank=False,default='Password123', verbose_name='Password')
    p_name = models.CharField(max_length=50, verbose_name='Nombre')
    p_lastname = models.CharField(max_length=50, verbose_name='Apellido')
    p_pnumber = models.CharField(max_length=15, verbose_name='Telefono')
    p_image = models.URLField(max_length=254,default='https://ionicframework.com/docs/img/demos/avatar.svg', verbose_name='Imagen')
    p_state = models.CharField(max_length=10,default='offline', verbose_name='Estado')
    #p_trip = models.ForeignKey('Viaje', on_delete=models.CASCADE, default='null', related_name='p_trip')

    class Meta:
        verbose_name='Pasajero'
        verbose_name_plural='Pasajeros'
        ordering=['p_lastname','p_name']

    def __str__(self):
        return self.p_email + ' ' + self.p_lastname + ' ' + self.p_name

class Auto(models.Model):
    a_id = models.CharField(primary_key=True, max_length=50, null=False, blank=False, verbose_name='Patente')
    a_brand= models.CharField(max_length=50, verbose_name='Marca')
    a_model = models.CharField(max_length=50, verbose_name='Modelo')
    a_color = models.CharField(max_length=15, verbose_name='Color')
    a_state = models.CharField(max_length=15, verbose_name='Estado')
    #a_conductor = models.ForeignKey(Conductor, on_delete=models.CASCADE,default='sin asignar', related_name='a_conductor')

    class Meta:
        verbose_name='Auto'
        verbose_name_plural='Autos'
        ordering=['a_brand','a_model']

    def __str__(self):
        return self.a_id + ' ' + self.a_brand + ' ' + self.a_model

class Viaje(models.Model):
    v_viaje_id = models.AutoField(primary_key=True, null=False, blank=False, verbose_name='Identificador de viaje')
    v_conductor_id = models.ForeignKey(Conductor, on_delete=models.CASCADE, null=False, related_name='ID_conductor')
    v_pasajero_id = models.ForeignKey(Pasajero, on_delete=models.CASCADE, null=False, related_name='ID_Pasajero')
    v_auto_id = models.ForeignKey(Auto, on_delete=models.CASCADE, null=False, related_name='ID_Auto')
    v_com_dest = models.CharField(max_length=30, verbose_name='Comuna destino')
    v_dir_dest = models.CharField(max_length=30, verbose_name='Direccion destino')
    v_val_trip = models.IntegerField(verbose_name='Valor viaje')
    v_state = models.CharField(max_length=30,default='Noiniciado', verbose_name='Estado')

    class Meta:
        verbose_name='Viaje'
        verbose_name_plural='Viajes'
        ordering=['v_viaje_id','v_conductor_id', 'v_pasajero_id']

    def __str__(self):
        return self.v_viaje_id

class Solicitud(models.Model):
    p_email = models.EmailField(primary_key=True,max_length=254, null=False, blank=False, verbose_name='Email_pasajero')
    precio_oferta = models.IntegerField(default=0, verbose_name='Valor')
    p_comuna_destino = models.CharField(max_length=30, verbose_name='Comuna destino')
    p_direccion_destino = models.CharField(max_length=30, verbose_name='Dirección de destino')
    p_name = models.CharField(null=True,max_length=30, verbose_name='Nombre pasajero')
    solicitud_estado = models.CharField(null=True,max_length=30, verbose_name='Estado solicitud')

    class Meta:
        verbose_name='Solicitud'
        verbose_name_plural='Solicitudes'
        ordering=['p_email']

    def __int__(self):
        return self.p_email