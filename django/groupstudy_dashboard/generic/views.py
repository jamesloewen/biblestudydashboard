from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated


class AuthModelViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated,)
