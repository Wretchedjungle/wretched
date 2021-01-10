import random
import time
import requests

print(f"Follow bot v2.0 (PRIVATE CLIENT)")
print(f"Made by Wretched#0002")
time.sleep(3)

session = requests.session()
print(" ")
cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_9602EC009B0FFC42A0A92B44487E70D1A086C1178D9D776F3761BA8B99143B535AB5F4739211D23591E05B14C31EA7925E0488F56886363C094EFEB2FEEEBDD318C8500073F97B6BF636187EC59DAC80BAB09E270285F2116A4991BACD3428BFA120F3F1669408F8947030BE9C494B3BF44DF520C21DE90614E7C0ECDA9ECCD63801A0A5DB6EBE9E6C67BCF15A662815E19C670DFCBD5FCA7709EBCDEB7C91553FA98494A556E8C6D79D74455B9DF4C9568B6B56A60BEC70914430F1FBD162AF2874D86CAA52E0D3FE8E384DE8DABD01B306FF166D21E06A25907AF3F3C94CBE832EB00A036B1F0B4509353F11A27777874251DFDDAA55977709706E4547921AE2755F6618DD4E81FF58D3967F517B9A2BB665BF25EFEB7393ABA036913E8FA43A8D31DBB2A21CC3122974D85A27A7974DF1DF28"
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
                                   time.sleep(900)
                                   print(f" ")
                     else:
                            print(f"{targetname} is banned, failed to follow.")
              except Exception:
                     pass

follow()