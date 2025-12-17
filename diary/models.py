from django.db import models

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
