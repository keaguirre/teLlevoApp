from django.shortcuts import render, HttpResponse

# Create your views here.
# def home(request):
#     return HttpResponse('Bienvenido a la doc de la API\n' + '<br><a href="#">API</a>')
def home(request):
    return render(request, 'index.html')