import csv
import time
import urllib2
import json

data = urllib2.urlopen('http://opendata.montpelliernumerique.fr/datastore/AirLR_LR_IndiceAir_2012.csv')
datadsv = csv.reader(data, delimiter=';')
params = {}
params['data']=[]
for row in datadsv:
    if row[0] == 'Montpellier': 
        params['data'].append([int(time.mktime(time.strptime(row[1], '%Y-%m-%d'))*1000), int(row[2])])
wo = open('../app/public/data/airlr.json','w')
json.dump(params,wo)
wo.close()
