# Generated by Django 3.0.3 on 2020-10-02 12:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0002_auto_20201002_1622'),
    ]

    operations = [
        migrations.CreateModel(
            name='men_tshirt',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mts_Id', models.CharField(max_length=50)),
                ('imgUrl', models.CharField(max_length=200)),
                ('mts_Name', models.CharField(max_length=50)),
                ('mts_price', models.CharField(max_length=20)),
            ],
        ),
    ]
