from rest_framework.viewsets import ModelViewSet
from .models import DailyLog
from .serializers import DailyLogSerializer

class DailyLogViewSet(ModelViewSet):
    queryset = DailyLog.objects.all()
    serializer_class = DailyLogSerializer
