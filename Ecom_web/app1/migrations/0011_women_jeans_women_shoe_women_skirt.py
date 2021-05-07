# Generated by Django 3.0.3 on 2020-10-13 07:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0010_women_tshirt'),
    ]

    operations = [
        migrations.CreateModel(
            name='women_jeans',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('wj_Id', models.CharField(max_length=50)),
                ('imgUrl', models.CharField(max_length=200)),
                ('wj_Name', models.CharField(max_length=50)),
                ('wj_Price', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='women_shoe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('wsh_Id', models.CharField(max_length=50)),
                ('imgUrl', models.CharField(max_length=200)),
                ('wsh_Name', models.CharField(max_length=50)),
                ('wsh_Price', models.CharField(max_length=10)),
            ],
        ),
        migrations.CreateModel(
            name='women_skirt',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ws_Id', models.CharField(max_length=50)),
                ('imgUrl', models.CharField(max_length=200)),
                ('ws_Name', models.CharField(max_length=50)),
                ('ws_Price', models.CharField(max_length=10)),
            ],
        ),
    ]
