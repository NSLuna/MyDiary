from datetime import timedelta
from django.utils import timezone
from rest_framework.views import APIView
from rest_framework.response import Response

from rest_framework.viewsets import ModelViewSet
from .models import DailyLog, Task
from .serializers import DailyLogSerializer, TaskSerializer


class DailyLogViewSet(ModelViewSet):
    serializer_class = DailyLogSerializer

    def get_queryset(self):
        qs = DailyLog.objects.all()
        start = self.request.query_params.get("start")
        end = self.request.query_params.get("end")

        if start and end:
            qs = qs.filter(date__range=[start, end])

        return qs

class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class WeeklyTaskAPIView(APIView):
    def get(self, request):
        today = timezone.localdate()

        start_of_week = today - timedelta(days=today.weekday())
        end_of_week = start_of_week + timedelta(days=6)

        tasks = Task.objects.filter(
            daily_log__date__range=(start_of_week, end_of_week)
        ).select_related("daily_log")

        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)