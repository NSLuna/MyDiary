from rest_framework import serializers
from .models import DailyLog, Task

class DailyLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyLog
        fields = "__all__"

class TaskSerializer(serializers.ModelSerializer):
    daily_date = serializers.DateField(
        source="daily_log.date",
        read_only=True
    )

    class Meta:
        model = Task
        fields = [
            "id",
            "content",
            "is_done",
            "source",
            "daily_date",
        ]