# Generated by Django 3.0.3 on 2020-10-05 18:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0008_men_shoes'),
    ]

    operations = [
        migrations.CreateModel(
            name='men_shorts',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ms_Id', models.CharField(max_length=50)),
                ('imgUrl', models.CharField(max_length=200)),
                ('ms_Name', models.CharField(max_length=50)),
                ('ms_Price', models.CharField(max_length=10)),
            ],
        ),
    ]