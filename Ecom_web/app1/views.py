from django.http import HttpResponse
from django.shortcuts import render,redirect
from .models import item
from django.contrib import auth
from django.contrib.sessions.models import Session
from app1 import fbase, fbase_fetch


best_product= fbase_fetch.best_product
M_tshirt=fbase_fetch.M_tshirt
Men_Jeans=fbase_fetch.M_Jeans
M_Shoes=fbase_fetch.M_Shoes
M_Shorts=fbase_fetch.M_Shorts
W_tshirt=fbase_fetch.W_tshirt
W_jeans=fbase_fetch.W_jeans
W_skirt=fbase_fetch.W_skirt
W_shoes=fbase_fetch.W_shoes




def register(request):
    if request.method == 'POST':
        fname = request.POST.get('fname')
        eml = request.POST.get('email')
        pno = request.POST.get('pno')
        passw = request.POST.get('passw')

        print(eml)
        print(passw)
        user = fbase.authe.create_user_with_email_and_password(eml, passw)
        print(user)

        doc_ref = fbase.database.collection('users').document()

        doc_ref.set({
            'name':fname,
            'email':eml,
            'Phone No.':pno,

        })

    else:
        print('Error')

    return render(request, 'index.html')

    

def index(request):
    if request.session.has_key('uid'):

        return render(request, 'index.html', {'product': best_product})

    else:
        return render(request,'index.html',{'product': best_product})



def login(request):

    if request.method == 'POST':
        eml = request.POST.get("email")
        passw = request.POST.get("passw")

        user = fbase.authe.sign_in_with_email_and_password(eml,passw)

        session_id=user['email']
        request.session['uid'] = session_id

        return render(request, 'index.html', {'eml': eml, 'product': best_product})

    elif request.session.has_key('uid'):
        eml = request.session.get('uid')
        return render(request, 'index.html', {'eml': eml, 'product': best_product})

    else:
        return render(request, 'index.html')


def shop(request):
    return render(request,'shop.html',{'product': best_product,'M_tshirt':M_tshirt,'Men_Jeans':Men_Jeans,
        'M_Shoes':M_Shoes,'M_Shorts':M_Shorts,'W_tshirt':W_tshirt,'W_jeans':W_jeans,'W_skirt':W_skirt,'W_shoes':W_shoes})
            

def logout(request):
    auth.logout(request)

    if request.session.has_key('uid'):
        del request.session['uid']
        auth.logout(request)
        return render(request, 'index.html', {'product': best_product})
    else:
        return render(request, "index.html",{'product':best_product})


