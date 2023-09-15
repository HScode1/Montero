from flask import Flask,jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return 'Test de page frero'

@app.route('/api/data')
def get_data():
    data = {'message':'Hello from the API'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
