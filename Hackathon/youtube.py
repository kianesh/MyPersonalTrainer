import urllib.request 
import re 

workouts = ["chest", "shoulders", "triceps", "legs", "arms", "biceps"] 
print(workouts)

query = input("What do you want to work out? ") 
query.lower() 

if query.lower() == "chest": 
    html = urllib.request.urlopen("https://www.youtube.com/results?search_query=guide+to+chest+workout") 
elif query.lower() == "shoulders": 
    html =urllib.request.urlopen("https://www.youtube.com/results?search_query=guide+to+shoulder+workout")
elif query.lower() == "triceps": 
    html =urllib.request.urlopen("https://www.youtube.com/results?search_query=guide+to+tricep+workout") 
elif query.lower() == "legs": 
    html =urllib.request.urlopen("https://www.youtube.com/results?search_query=guide+to+leg+workout") 
elif query.lower() == "arms": 
    html =urllib.request.urlopen("https://www.youtube.com/results?search_query=guide+to+arm+workout") 
elif query.lower() == "biceps": 
    html = urllib.request.urlopen("https://www.youtube.com/results?search_query=guide+to+bicep+workout")
else: 
    print("Sorry, I do not understand. Please choose something from the list") 

video_ids = re.findall(r"watch\?v=(\S{11})", html.read().decode())
print("Please check out this Youtube video! "+ "https://www.youtube.com/watch?v="+video_ids[0])

# workouts = ["chest", "shoulders", "triceps", "legs", "arms", "biceps"] 

# query = input("What do you want to work out? ") 
# query.lower()

# result = any(item in query.lower for item in workouts) 
# print(result)
