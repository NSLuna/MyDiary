from rest_framework.viewsets import ModelViewSet
from .models import DailyLog, Task
from .serializers import DailyLogSerializer, TaskSerializer

class DailyLogViewSet(ModelViewSet):
    queryset = DailyLog.objects.all()
    serializer_class = DailyLogSerializer


class TaskViewSet(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
