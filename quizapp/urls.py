from django.urls import path
from quizapp import views
urlpatterns = [
    path("", views.Index, name="index"),

]