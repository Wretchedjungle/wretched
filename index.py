import random
import time
import requests

print(f"Status Updater (*private client*)")
print(f" ")

cookie = process.env.cookie

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

       stat = session.post("https://users.roblox.com/v1/users/179334070/status", headers={'x-csrf-token':grabCSRF(), 'status': f'Following {followings} users.'})
       print("Updated status successfully")

while True:
       update()
       time.sleep(120)
