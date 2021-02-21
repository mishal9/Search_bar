# Search_bar
Search Application to find artists: https://search-flask-app.herokuapp.com/

## How to run locally

1. Clone this repository using the command: `git clone https://github.com/mishal9/Search_bar.git`.
2. Run `cd Search_bar`
2. Install dependencies with pip: `sudo pip install -r requirements.txt`.
3. Run the app: `python server.py` to start the server. 
4. Enter `http://localhost:5000/` to visit the search page.
5. You can now enter the band name in the textbox you wish to search for and the results will be displayed on the page. 
6. You can also use postman to fire the API locally on this address: `http://localhost:5000/api/query?artist=<artist_name>` to get results.

## Tech used

1. React for frontend
2. Flask for backend
3. Trie structure for storage
4. Heroku for deployment 

## DEMO

![](demo/demo.gif)

## Notes

You need to double-click to paginate through results.
