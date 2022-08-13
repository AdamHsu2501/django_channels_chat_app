from django.urls import path
from .views import index, room

urlpatterns = [
    path('', view=index, name="index"),
    path('<str:room_name>/', view=room, name='room'),
]
