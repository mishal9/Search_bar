from flask import Flask, request,jsonify 
from flask_cors import CORS, cross_origin
from store import Trie
from pagination import paginate
import json 
import time 
import re

app = Flask(__name__, static_folder='client/build', static_url_path='')

CORS(app)

# Setting up the Trie
root = Trie()
with open('data/fake_band_names_mit.txt') as f:
    words = f.readlines()

print('Loading words')
start = time.time()
for word in words:
    # stripping tailing whitespaces
    word = word.rstrip('\n').strip()
    # convert any multiple spaces in string to single space
    word = re.sub(' +', ' ', word)
    # insert into Trie along with the entire word sequence
    root.insert(word, word)
    # insert tokens into Trie along with the entire word sequence
    tokens = word.split(' ')
    for token in tokens:
        root.insert(token, word)

    
end = time.time()

print("Time in loading words: ",end - start, "s")

del words

@app.route('/')
@cross_origin()
def init():
    return app.send_static_file('index.html')

#endpoint for search
@app.route('/api/query', methods=['GET'])
@cross_origin()
def search():
    artist = request.args.get('artist').title()
    # get page from query params or default to first page
    page = request.args.get('page') if request.args.get('page') else 1
    
    # search by artist name
    split_words = artist.split()
        
    last_word = split_words[1:]
    
    prefix = ' '.join(split_words[:-1])

    suggestions = list(root.query(artist))
    
    full_suggestions = []

    indx=0

    for suggestion in suggestions:
        full_suggestions.append({
            "id": indx+1,
            "artistName": '{}'.format(suggestion[0]).strip(),
            "rank": suggestion[1],
        })
        indx = indx+1

    del indx

    sorted_suggestions = sorted(full_suggestions, key=lambda k: k['rank'], reverse=True)

    # get pager object for specified page
    pager = json.loads(paginate(len(sorted_suggestions), int(page)))

    # get page of items from suggestions
    pageOfItems = sorted_suggestions[pager['startIndex']: pager['endIndex']+1]

    resp = jsonify({'pager': pager, 'pageOfItems': pageOfItems})
    resp.headers.add("Access-Control-Allow-Headers", "*")
    resp.status_code = 200
    return resp

if __name__ == '__main__':
    app.debug = True
    app.run()