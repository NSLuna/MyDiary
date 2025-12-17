from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DailyLogViewSet

router = DefaultRouter()
router.register(r'dailylogs', DailyLogViewSet, basename='dailylog')

urlpatterns = [
    path("", include(router.urls)),
]
