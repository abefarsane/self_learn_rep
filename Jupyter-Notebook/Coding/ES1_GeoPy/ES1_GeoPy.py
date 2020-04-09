import pandas
import os
from geopy.geocoders import ArcGIS


dataFrame = pandas.read_csv("DataForTesting/supermarkets.csv")

geoObj = ArcGIS()

dataFrame["Full address"] = dataFrame["Address"] + ", " + dataFrame["City"] + ", " + dataFrame["State"]


for i in range(1,6):
    data = geoObj.geocode(dataFrame["Full address"][i])
    print(data)


