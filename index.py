import random
import time
import requests

print(f"Follow bot (PRIVATE CLIENT)")
print(f"Made by Wretched")
print(f" ")
time.sleep(5)
cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_B56D97F89039B79753E343E733BCE0B0F03CB0385066E2AEEE4881C4906714E04942138FBA8F6E9B3215766066FA86E778883949B1DC0194CB8ED80F2F883F5C49CFD600665AD195D45F9C17FE8AD78680748D9C943A972EF2AFEAE49B5ADB11D1E6582F73F33FB4338424E830DC20A8A0B68688251019B4F767E14C8C2EAFDE0C2DE003DD7DD4C4532C5736CBD837526231A2014AAC040FBCBC71EE426181CAAAE7F0A81ADD063CB6248C70EC5A51663BA349C8D644D2AE4ED1D71768422D988C6D70918AE33DAFFFD4FD5C1CB7C715BCAEEC89C44E88369FD88A228CC28C808035E2143914D42F1E11E60F7146AFC7092038483EA1C6D139977F3EF7C65CD9BF6E68D4C2477486690291BCF7BB8CA206FFE274E7758F42124FA6C57A484FB5A919F43C"

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