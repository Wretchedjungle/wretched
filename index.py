import random
import time
import requests

print(f"Status Updater (*private client*)")
print(f" ")

cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_965406218B1EC097B21F6148C0E8DB3B8B131131B210A0A449823DDEAF70A2621A6EFEE14FA279D9B1D7E35106BBC18F1B428B59020C417C6A908514358CDCC8D516806D5FB1D740090A276E8BE381A54E92E670DCA08631A0FC6874666E92F66EEED846DCD19EFBCC6931B43DBA6ACE61540778B4A62FA8BCE4425C4D23037406B4BCED0ECA5E21B20D888F54F0743FE678F72EEE95C8059395141D97814A7FEDBA3F5DFC7C7D42E9BEA69138FCC0C7291933F9E29BC81190C179D759D3725CE3B2BE1BAC88F9CA6414DBE683715A528C71FB2E5F8214ECFDDFED6E08A86FDF020F45FC5A5FAA4560DD8713DA05C35258963EB1E29884B9B64C944884B8B4B37EF7DBE70C5B0E8B0F4D8A43D97445F1EC2307B6BE6CFC7CCD8B7F49897A3EEE8FCEC9D1E6BCA39E4D0A6B4EE0046D7D3EEA91D4"

session = requests.session()
session.cookies['.ROBLOSECURITY'] = cookie

def grabCSRF():
   r = session.post("https://auth.roblox.com/v2/user/passwords/change")
   csrf = r.headers['x-csrf-token']
   return csrf

token = grabCSRF()
r = session.get('https://api.roblox.com/users/account-info', headers={'x-csrf-token':token})
UserId = r.json()['UserId']
Username = r.json()['Username']
r = requests.get(f"https://friends.roblox.com/v1/users/{UserId}/followings/count")
followingcount = r.json().pop("count")
print(f" ")
print(f"Successfully logged into {Username} │ User ID {UserId} │ Following {followingcount} users")
print(f" ")

def update():
       q = requests.get("https://friends.roblox.com/v1/users/179334070/followings/count")
       json = q.json()
       followings = json.pop("count")

       rrr = session.post("https://users.roblox.com/v1/users/179334070/status", headers={'x-csrf-token':grabCSRF(), 'status': f'Following {followings} users.'})
       rjso = rrr.json()
       print(f"Response | {rjso}")

while True:
       update()
       time.sleep(120)
