import requests 

from bs4 import BeautifulSoup 

from operator import itemgetter

import re 

metro_home = 'https://www.metro.ca' 
srch_str = input('>') 
html_text = requests.get(metro_home +'/en/online-grocery/search?filter='+ srch_str.replace(' ', "+")+'&freeText=true') 
soup = BeautifulSoup(html_text.text, 'lxml') 
query = soup.find_all('div', class_ =re.compile("^default-product-tile tile-product item-addToCart")) 

funit_price_storl = [] 
for q in query: 
    product_code = q['data-product-code'] 
    product_name = q['data-product-name'] 
    try: 
        ssave = q.find('div', {'data-dimension-8': 'PROMO'}).find('div', class_ = 'icon--sale').find('span').text.strip()
    except: 
        ssave = 'None'
    if ssave == 'Save': 
            mark_save = 'Yes' 
    else: 
        mark_save = 'No'
    product_pricing = q.find('div', class_='content__pricing') 
    price_main = product_pricing.find('div')['data-main-price'] 
    try: 
        variant_price = product_pricing.find('div')['data-variant-price'] 
    except: 
        variant_price = "NA" 
    price_sale = product_pricing.find('span', class_ = 'price-update').text
    price_sale_rem = price_sale.replace('$', '')
    price_unit = product_pricing.find('span').find_next_sibling('span').text.strip().replace('/ ', '') 
    price_unit_no_g = price_unit.replace('g', '')
    if price_sale is not None: 
        try:
            funit = float(price_unit_no_g)
            fprice = float(price_sale_rem)
            funit_price = fprice/funit*100.0 
            funit_price_stor = round(funit_price, 3)
        except: 
           funit_price_stor = None
    else: 
        pass 
    list_products = {
        "Product Code": product_code, 
        "Product Name": product_name, 
        "Main Price": price_main+"/"+variant_price, 
        "On Sale": ssave, 
        "Sale Price per 100g": funit_price_stor 
        } 
    funit_price_storl.append(list_products) 
res = [] 
for val in funit_price_storl: 
    if val["Sale Price per 100g"]!=None: 
        res.append(val) 
my_list = res
new_list = []
while my_list:
    min = 0
    j=0  
    for x in my_list: 
        if x["Sale Price per 100g"] < my_list[min]["Sale Price per 100g"]:
            min = j
            j+=1
        new_list.append(my_list[min])
        my_list.remove(my_list[min])    
    print(new_list)