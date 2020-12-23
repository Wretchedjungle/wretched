import random
import time
import requests

print(f"Follow bot (PRIVATE CLIENT)")
print(f"Made by Wretched")
print(f" ")
time.sleep(5)
cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_A46A9462F8751DB50396FFDA207A8520696B7FCC42602A0D50DEE08AF6E79DC99510F881FDFE56228791A9D5A18E0D118CC22C0DFC71BFD777BA7A8814B550F4EA49DB01B71029D27DB6EA952E819411744280A2577C36638F15E1E1517593B124DA9CCCBA84B5A32FDD9968F1357DB3D198EC766E7E5FB50D4BB5115C76A1D9522E96737A5173B88A6BEA3C5E29C1BDFEC51A715CE6DAE78A06BDA6052265DDD70E6F81B6241656CBDBB8ECE78CAF2E57CC282B07AFBE956C1F24C04D712774C9E39846834E34877E1D6603AF58837EB7B18F8595FDAAF25E2694D9D457DA96ED1F07AD96D9580B2915E8F21BC813E00E4D1115FBE6CA012F2EB2861071C65DC6B1ED4324D2D1FAF5E602E38503AF3996105B4B4D920EC6A9C2003CBE9D3520F2FBBDD968DE298AB5A127F9829E9B2514AAF62A"

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

def follow(UID):
   followedcount = 0
   while True:
       csrf = grabCSRF()
       print(f"Generating a random UserId...")
       time.sleep(3)
       targetid = random.randint(100000000, 2000000000)
       print(f"Generated UserID {targetid}!")
       r = session.post(f"https://friends.roblox.com/v1/users/{targetid}/follow" , headers={'x-csrf-token':csrf})
       nextcursor = r.json()
       print(f"RESPONSE | {nextcursor}")
       print(f"Attempting to follow user...")
       if not "errors" in nextcursor:
               followedcount += 1
               print(f"Successfully followed target user! You have followed {followedcount} users since running this bot.")
               print(f" ")
       else:
               print(f"An error occured while trying to follow the target user.")
               print(f"In case of a cooldown error, bot will cool down for the next 3 minutes.")
               time.sleep(180)
               print(f" ")

follow(UserId)