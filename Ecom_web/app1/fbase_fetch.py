from app1 import fbase
from .models import *

#------------------THis is for best deal porduct images----------------------#

pro_ref = fbase.database.collection('productImages')
pro_docs = pro_ref.stream()

for doc in pro_docs:
    pro = doc.to_dict()

    pId = pro.get("pId")
    imgUrl = pro.get("imgUrl")
    p_Name=pro.get("p_Name")
    price=pro.get("price")

    if item.objects.filter(pId=pId).exists():
        pass
    else:
        print("Not exist")
        final_data = item.objects.create(pId=pId, imgUrl=imgUrl, p_Name=p_Name, price=price)

best_product=item.objects.all()

#--------------------end product images---------------------------#




#---------------------------This is for user validation----------------------------#

usr_ref = fbase.database.collection('users')
usr_docs=usr_ref.stream()

for doc in usr_docs:
    usr=doc.to_dict()
    email=usr.get('email')
   
#----------------------ends here--------------------------------#




#------------------For Men's T-shirt---------------------------------#
mts_ref=fbase.database.collection('men').document('clothes').collection('t-shirt')
mts_docs=mts_ref.stream()

for doc in mts_docs:
    mts=doc.to_dict()
    

    mts_Id = mts.get("mts_Id")
    imgUrl = mts.get("imgUrl")
    mts_Name=mts.get("mts_Name")
    mts_Price=mts.get("mts_Price")

    if men_tshirt.objects.filter(mts_Id=mts_Id).exists():
        pass
    else:
        print("Not exist")
        tshirt_data = men_tshirt.objects.create(mts_Id=mts_Id, imgUrl=imgUrl, mts_Name=mts_Name, mts_Price=mts_Price)


M_tshirt=men_tshirt.objects.all()

#-------------------------Ends Here------------------------------------#

#-----------------------------For Men's Jeans---------------#
mj_ref=fbase.database.collection('men').document('clothes').collection('jeans')
mj_docs=mj_ref.stream()

for doc in mj_docs:
    mj=doc.to_dict()
    

    mj_Id = mj.get("mj_Id")
    imgUrl = mj.get("imgUrl")
    mj_Name=mj.get("mj_Name")
    mj_Price=mj.get("mj_Price")

    if men_jean.objects.filter(mj_Id=mj_Id).exists():
        pass
    else:
        print("Not exist")
        jeans_data = men_jean.objects.create(mj_Id=mj_Id, imgUrl=imgUrl, mj_Name=mj_Name, mj_Price=mj_Price)
        #print(jeans_data)

M_Jeans=men_jean.objects.all()

#-------------------------Ends Here-------------------------#

#-----------------------------For Men's shoes---------------#
msh_ref=fbase.database.collection('men').document('footwear').collection('shoes')
msh_docs=msh_ref.stream()

for doc in msh_docs:
    msh=doc.to_dict()
    

    msh_Id = msh.get("msh_Id")
    imgUrl = msh.get("imgUrl")
    msh_Name=msh.get("msh_Name")
    msh_Price=msh.get("msh_Price")

    if men_shoes.objects.filter(msh_Id=msh_Id).exists():
        pass
    else:
        print("Not exist")
        shoes_data = men_shoes.objects.create(msh_Id=msh_Id, imgUrl=imgUrl, msh_Name=msh_Name, msh_Price=msh_Price)
        #print(jeans_data)

M_Shoes=men_shoes.objects.all()

#-------------------------Ends Here-------------------------#


#-----------------------------For Men's Shorts---------------#
ms_ref=fbase.database.collection('men').document('clothes').collection('shorts')
ms_docs=ms_ref.stream()

for doc in ms_docs:
    ms=doc.to_dict()
    

    ms_Id = ms.get("ms_Id")
    imgUrl = ms.get("imgUrl")
    ms_Name=ms.get("ms_Name")
    ms_Price=ms.get("ms_Price")

    if men_shorts.objects.filter(ms_Id=ms_Id).exists():
        pass
    else:
        print("Not exist")
        jeans_data = men_shorts.objects.create(ms_Id=ms_Id, imgUrl=imgUrl, ms_Name=ms_Name, ms_Price=ms_Price)
        #print(jeans_data)

M_Shorts=men_shorts.objects.all()

#-------------------------Ends Here-------------------------#


#-----------------------For Women's T-shirt----------------------------#
wt_ref=fbase.database.collection('women').document('clothes').collection('t-shirt')
wt_docs=wt_ref.stream()

for doc in wt_docs:
    wt=doc.to_dict()

    
    wt_Id = wt.get("wt_Id")
    imgUrl = wt.get("imgUrl")
    wt_Name=wt.get("wt_Name")
    wt_Price=wt.get("wt_Price")

    if women_tshirt.objects.filter(wt_Id=wt_Id).exists():
        pass
    else:
        print("Not exist")
        tshirt_data = women_tshirt.objects.create(wt_Id=wt_Id, imgUrl=imgUrl, wt_Name=wt_Name, wt_Price=wt_Price)


W_tshirt=women_tshirt.objects.all()

#-------------------------Ends Here------------------------------------#

#-----------------------For Women's Jeans----------------------------#
wj_ref=fbase.database.collection('women').document('clothes').collection('jeans')
wj_docs=wj_ref.stream()

for doc in wj_docs:
    wj=doc.to_dict()

    wj_Id = wj.get("wj_Id")
    imgUrl = wj.get("imgUrl")
    wj_Name=wj.get("wj_Name")
    wj_Price=wj.get("wj_Price")

    if women_jeans.objects.filter(wj_Id=wj_Id).exists():
        pass
    else:
        print("Not exist")
        jeans_data = women_jeans.objects.create(wj_Id=wj_Id, imgUrl=imgUrl, wj_Name=wj_Name, wj_Price=wj_Price)


W_jeans=women_jeans.objects.all()

#-------------------------Ends Here------------------------------------#


#-----------------------For Women's Skirt----------------------------#
ws_ref=fbase.database.collection('women').document('clothes').collection('skirt')
ws_docs=ws_ref.stream()

for doc in ws_docs:
    ws=doc.to_dict()

    ws_Id = ws.get("ws_Id")
    imgUrl = ws.get("imgUrl")
    ws_Name=ws.get("ws_Name")
    ws_Price=ws.get("ws_Price")

    if women_skirt.objects.filter(ws_Id=ws_Id).exists():
        pass
    else:
        print("Not exist")
        skirt_data = women_skirt.objects.create(ws_Id=ws_Id, imgUrl=imgUrl, ws_Name=ws_Name, ws_Price=ws_Price)


W_skirt=women_skirt.objects.all()

#-------------------------Ends Here------------------------------------#

#-----------------------For Women's Shoes----------------------------#
wsh_ref=fbase.database.collection('women').document('shoes').collection('shoe')
wsh_docs=wsh_ref.stream()

for doc in wsh_docs:
    wsh=doc.to_dict()

    wsh_Id = wsh.get("wsh_Id")
    imgUrl = wsh.get("imgUrl")
    wsh_Name= wsh.get("wsh_Name")
    wsh_Price= wsh.get("wsh_Price")

    if women_shoe.objects.filter(wsh_Id=wsh_Id).exists():
        pass
    else:
        print("Not exist")
        shoes_data = women_shoe.objects.create(wsh_Id=wsh_Id, imgUrl=imgUrl, wsh_Name=wsh_Name, wsh_Price=wsh_Price)


W_shoes=women_shoe.objects.all()

#-------------------------Ends Here------------------------------------#
