from flask import Flask, render_template
 
app = Flask(__name__)      
 
@app.route('/')
def home():
  return render_template('index.html')

@app.route('/robots.txt')
def robots():
  return render_template('robots.txt')
 
if __name__ == '__main__':
  app.run(debug=False)