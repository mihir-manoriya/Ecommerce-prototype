from django.db import models
from django.core.exceptions import ValidationError

class item(models.Model):
	pId=models.CharField(max_length=50)
	imgUrl=models.CharField(max_length=200)
	p_Name=models.CharField(max_length=50)
	price=models.CharField(max_length=20)


class men_tshirt(models.Model):
	mts_Id=models.CharField(max_length=50)
	imgUrl=models.CharField(max_length=200)
	mts_Name=models.CharField(max_length=50)
	mts_Price=models.CharField(max_length=10)

class men_jean(models.Model):
	mj_Id=models.CharField(max_length=50)
	imgUrl=models.CharField(max_length=200)
	mj_Name=models.CharField(max_length=50)
	mj_Price=models.CharField(max_length=10)

class men_shoes(models.Model):
	msh_Id=models.CharField(max_length=50)
	imgUrl=models.CharField(max_length=200)
	msh_Name=models.CharField(max_length=50)
	msh_Price=models.CharField(max_length=10)

class men_shorts(models.Model):
	ms_Id=models.CharField(max_length=50)
	imgUrl=models.CharField(max_length=200)
	ms_Name=models.CharField(max_length=50)
	ms_Price=models.CharField(max_length=10)

class women_tshirt(models.Model):
	wt_Id=models.CharField(max_length=50)
	imgUrl=models.CharField(max_length=200)
	wt_Name=models.CharField(max_length=50)
	wt_Price=models.CharField(max_length=10)

class women_jeans(models.Model):
	wj_Id=models.CharField(max_length=50)
	imgUrl=models.CharField(max_length=200)
	wj_Name=models.CharField(max_length=50)
	wj_Price=models.CharField(max_length=10)

class women_skirt(models.Model):
	ws_Id=models.CharField(max_length=50)
	imgUrl=models.CharField(max_length=200)
	ws_Name=models.CharField(max_length=50)
	ws_Price=models.CharField(max_length=10)

class women_shoe(models.Model):
	wsh_Id=models.CharField(max_length=50)
	imgUrl=models.CharField(max_length=200)
	wsh_Name=models.CharField(max_length=50)
	wsh_Price=models.CharField(max_length=10)


