from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DailyLogViewSet, TaskViewSet, WeeklyTaskAPIView

router = DefaultRouter()
router.register(r'dailylogs', DailyLogViewSet, basename='dailylog')
router.register("tasks", TaskViewSet, basename="task")

urlpatterns = [
    path("tasks/week/", WeeklyTaskAPIView.as_view()),
    path("", include(router.urls)),

]
