# Generated by Django 3.0.3 on 2020-10-02 19:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0005_auto_20201002_1802'),
    ]

    operations = [
        migrations.CreateModel(
            name='men_jeans',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mj_Id', models.CharField(max_length=50)),
                ('imgUrl', models.CharField(max_length=200)),
                ('mj_Name', models.CharField(max_length=50)),
                ('mj_Price', models.CharField(max_length=10)),
            ],
        ),
    ]
