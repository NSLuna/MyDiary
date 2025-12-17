from django.contrib import admin
from .models import DailyLog

@admin.register(DailyLog)
class DailyLogAdmin(admin.ModelAdmin):
    list_display = ("date", "mood", "created_at")
    ordering = ("-date",)