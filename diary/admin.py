from django.contrib import admin
from .models import DailyLog, Task, ChatLog, UserSetting

@admin.register(DailyLog)
class DailyLogAdmin(admin.ModelAdmin):
    list_display = ("date", "mood", "created_at")
    ordering = ("-date",)

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ("content", "daily_log", "is_done", "source", "created_at")
    list_filter = ("is_done", "source")

@admin.register(ChatLog)
class ChatLogAdmin(admin.ModelAdmin):
    list_display = ("daily_log", "role", "created_at")

@admin.register(UserSetting)
class UserSettingAdmin(admin.ModelAdmin):
    list_display = ("user", "reset_time")