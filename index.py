import random
import time
import requests

print(f"Follow bot v2.0 (PRIVATE CLIENT)")
print(f"Made by Wretched#0002")
time.sleep(3)

session = requests.session()
print(" ")
cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_15CD83EA189E07CD77B6EE634930A26B563144935DC81C539872892C24621D38EEB610140FA40A6D74E73E921CBB5DC44902E663FDD288CE16A413DFF254B4D61F1F4FAE79868217A7B9F13636C3F8E9B1D99B3331B4956F537CB888FE644423C827618A5FEB479C29453FCF8F9A30E7F61FDB6EE35097D29783FDD144846BF352A4CF1AB3BD880279D9B462BF2F99E0B6429005233A7FEED9E6C8F18479855056F5B9E4D034BBCA9528CAAD50F7D3178CF2F0E5D42DD53C4C1C20786DC030C30F0F389E825ABDF95B234442727797F683778D27E8D2EF4A24147C4F24D1C6AF63E961F3439D540570CE9A920607A60EEF1059A75D883EA960B6DC99E447F78E6F9F687153A689A69046AEC8E1C8C04684495FDEBD4DFE18482964A6D229E2CC65AD27EAC986851FB0CC7A284062246F0E5C4196"
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
                                   print(f"Account is on cooldown. Cooling down for 20 minutes. You now follow {getFollowings()} users.")
                                   time.sleep(1200)
                                   print(f" ")
                     else:
                            print(f"{targetname} is banned, failed to follow.")
              except Exception:
                     pass

follow()