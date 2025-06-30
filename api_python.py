import requests
base_url = "https://pokeapi.co/api/v2/"

def get_pokemon_info(name):
    url = f"{base_url}/pokemon/{name}"
    response = requests.get(url)
    if response.status_code == 200:
        pokemon_data = response.json()
        print(pokemon_data)
        print("Data retrived!")

        return pokemon_data

    else:

        print("data not retrived {response.status_code}")    
    print(response)
pokemon_name = "pikachu"
pokemon_info = get_pokemon_info(pokemon_name)
if pokemon_info:
    print(f"Name:{pokemon_info["name"].capitalize()}")
    print(f"id:{pokemon_info["id"]}")
    print(f"heigth:{pokemon_info["height"]}")
    print(f"weigth:{pokemon_info["weight"]}")
moves = pokemon_info['moves']
move_name = (move['move']['name'] for move in moves)
for name in move_name:
 print(f"{name}")