from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model
from django.shortcuts import render
from django.utils.safestring import mark_safe
from django.contrib.auth.decorators import login_required
import json
from .models import Chat, Contact


User = get_user_model()


def get_current_chat(chat_id):
    return get_object_or_404(Chat, id=chat_id)


def get_last_10_messages(chat_id):
    chat = get_current_chat(chat_id)
    return chat.messages.order_by('-timestamp').all()[:10]


def create_user_contact(user):
    print('create_user_contact create')
    return Contact.objects.create(user=user)


def get_user_contact(username):
    user = get_object_or_404(User, username=username)
    return get_object_or_404(Contact, user=user)


def get_users(username):
    users = User.objects.exclude(username__in=[username])
    return users


def index(request):
    return render(request, 'chat/index.html')


@login_required
def room(request, room_name):
    return render(request, 'chat/room.html', {
        'room_name_json': mark_safe(json.dumps(room_name)),
        'username': mark_safe(json.dumps(request.user.username)),
    })
