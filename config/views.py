
from django.http import HttpResponse, Http404
from django.shortcuts import render


# Configuration
MAX_DAYS = 80


# Views
def home(request):
    return render(request, 'index.html')


def about(request):
    return HttpResponse("This is the About page!")


def day(request, day_number):

    # Check that the requested day exists
    if not 1 <= day_number <= MAX_DAYS:
        raise Http404("Bootcamp day not found")

    return render(request, 'index.html')
