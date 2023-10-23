from django.shortcuts import render


def main (request):
    return render(request,'quiz/main.html')

def quiz1(request):
    return render(request,'quiz/quiz1.html')

def quiz2(request):
    return render(request,'quiz/quiz2.html')