import random
import time
import requests

print(f"Follow bot v2.0 (PRIVATE CLIENT)")
print(f"Made by Wretched#0002")
time.sleep(3)

session = requests.session()
print(" ")
cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_4727A1DA8E62872B857CD8377BC77D57A3E47B2F40BAC1BE9847976ACAA104CD5B5868944C41EAF4E3D36A9DEE0EB594AA3FF65F8CAD4CFD84B84002FB823ECB6A035C1F3D00C69F39006D4FEC0E8E8EFABCF1CC329A5D27C7625FF8B4C6D9888AD4B5AFBA3198738DB687B68F0C2304B0D733C2FFBBA2B3B95FA310DEE470AB80B41FBA0EF0726E73042639F9EE0C76BD8D313B01253B50E766DC472DFEF86F0A923DDF9154A312C4C810008E6AF9A184F166D2847577F326EC3EFD0239F8D3222BA76589ABA8627C2732D07FF0262D5757F3BFF214D63EAD69BA0CDC1812B778CB981223011A857DA88B8E7D0CC8562CC073DAF98D263510AA3F5D6DC4BF0E9B0BC9593B05E7C543DBA497A0A1AE3B2D6BEEB96378682F50625B70C8492E1105156FECE5342CAE4B02C3915F97479492728272"
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
time.sleep(1)
print(" ")
print(f"Successfully logged into {Username} │ User ID {UserId} │ Following {followingcount} users")
print(f" ")

def getFollowings():
       ffff = requests.get(f"https://friends.roblox.com/v1/users/{UserId}/followings/count")
       ffffjson = ffff.json()
       count = ffffjson.pop("count")
       return count

def follow():
       followedcount = 0
       while True:
              try:
                     csrf = grabCSRF()
                     targetid = random.randint(2000000000, 2060000000)
                     r = session.post(f"https://api.roblox.com/user/follow?followedUserId={targetid}" , headers={'x-csrf-token':csrf})
                     nextcursor = r.json()
                     checkifbanned = session.get(f"https://users.roblox.com/v1/users/{targetid}")
                     isbannedjson = checkifbanned.json()
                     targetname = isbannedjson["name"]
                     isbanned = isbannedjson["isBanned"]
                     successmsg = nextcursor["message"]
                     if isbanned == False:
                            if successmsg == "Success":
                                   followedcount += 1
                                   print(f"Successfully followed {targetname}. {followedcount} users were followed so far.")
                            else:
                                   print(f"Account is on cooldown. Cooling down for 15 minutes. You now follow {getFollowings()} users.")
                                   time.sleep(1200)
                                   print(f" ")
                     else:
                            print(f"{targetname} is banned, failed to follow.")
              except Exception:
                     pass

follow()