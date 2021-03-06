from django.conf.urls import url, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)

app_name = 'accounts'
urlpatterns = [
    url(r'^users/login/', views.login, name='login'),
    url(r'^users/logout/', views.logout, name='logout'),
    url(r'^', include(router.urls)),        
]
