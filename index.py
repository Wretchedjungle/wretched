import random
import time
import requests

print(f"Follow bot (PRIVATE CLIENT)")
print(f"Made by Wretched")
print(f" ")
time.sleep(5)
cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_90489D8D924EC9465582BE209E55DC848E780DB929F0647F437444B1709336A1557B65B1454E3F54932B16EB70293E29D87B26A2DD9E4588C9C6092FCDD6FE65F51F4A45544D1DE9F3D74E9838E2A86FF9CFB1D6D74ADFA12ED7374269EA0B0F9EBE3C5BA7FECB4E41C9D1A43E7B3D9A22FEE353216B32B78E7A6DC289C5C56C0D2231818E67036F2BB6723B4DDC0D1E0B0B2C8970F95F67BEA55DAA8786269D8F781E60DD3840B6364B739F6791FE3C1C22A6A61EFF9E814C2EA8751C793628FD78634AE6E4500592D1CD1323AC0586462893B94F16EAA84484963625DA21EC5F6C93BDDB74F4BE8D26EB416F04268E522E62A2035EFF14AE70BEF5AAA42B383689FC449E923A79FBED59412CF106FF83F07EE1462A38AD74D4D24B812B7E6565AE64EE58A92FBC038B5CFA55E2E88EDF384646"

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