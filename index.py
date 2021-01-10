import random
import time
import requests

print(f"Follow bot v2.0 (PRIVATE CLIENT)")
print(f"Made by Wretched#0002")
time.sleep(3)

session = requests.session()
print(" ")
cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_188099B6E909D88FFAC4492A87D0D298CF9FA5383D311629A4F443222833518A50F0EA708FFC3E47F497945400609D2995302495D71C28C2F9E5F19A49DB33C50657F168D8950263EE0D2665EFC4E9AE84B71C7BAFC3C9840F2DA89896660F231414321FB9B47ADC14D3EE1A921F548FACFD1718CAD3DF3683D6107A4CFD47AA9921C1DD032FEDB0BB21D9779D0806C2BC01CD6092C3FD86136ED44C02B9A0B4E9FDD7AA613B06A25A56CC932881BF353E05A243B09B3135A6278DFDB9AAF6D7C9214D827E4DA018044F427FECBC963D5E7D91601DAC9EBC8914D265CE4ED40C19C69DF4C9F24FEA04A06BA1AA256EFF1CC203BA89E8E1462A5DB7D3C0D29A4C6DE94530F0395DEA2B4F4536B44D281F8ADC8E1C03A86C6866196AAFCB2BB11EDB01AFA823F957F1F4BE485FAFBD3CAB21D8D063"
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