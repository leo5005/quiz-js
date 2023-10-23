from django.urls import path
from quizapp import views
urlpatterns = [
    path("", views.main, name="main"),
    path("quiz1", views.quiz1, name="quiz1"),
    path("quiz2", views.quiz2, name="quiz2"),

]