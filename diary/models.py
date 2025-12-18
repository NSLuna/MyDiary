from django.db import models
from django.contrib.auth.models import User


class DailyLog(models.Model):
    MOOD_CHOICES = [
        ("great", "좋음"),
        ("good", "괜찮음"),
        ("meh", "그럭저럭"),
        ("bad", "힘듦"),
        ("awful", "매우 힘듦"),
    ]

    date = models.DateField(auto_now_add=True)
    text = models.TextField(blank=True, default="")
    mood = models.CharField(max_length=10, choices=MOOD_CHOICES, default="meh")
    ai_summary = models.TextField(blank=True, default="")

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-date", "-id"]

    def __str__(self):
        return f"{self.date} ({self.mood})"

class Task(models.Model):
    SOURCE_CHOICES = [
        ("USER", "사용자"),
        ("AI", "AI"),
    ]

    daily_log = models.ForeignKey(
        "DailyLog",
        on_delete=models.CASCADE,
        related_name="tasks"
    )

    content = models.CharField(max_length=255)
    is_done = models.BooleanField(default=False)

    source = models.CharField(
        max_length=10,
        choices=SOURCE_CHOICES,
        default="USER"
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["is_done", "created_at"]

    def __str__(self):
        return f"[{self.source}] {self.content}"
    
class ChatLog(models.Model):
    daily_log = models.ForeignKey(
        "DailyLog",
        on_delete=models.CASCADE,
        related_name="chat_logs"
    )

    role = models.CharField(max_length=20)  # user / assistant
    message = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.role} - {self.created_at}"
    

class UserSetting(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="setting"
    )

    reset_time = models.TimeField(default="00:00")

    def __str__(self):
        return f"{self.user.username} - reset at {self.reset_time}"