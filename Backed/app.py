from flask import Flask
from flask_cors import CORS
import mysql.connector
import requests
import json
from datetime import datetime

application = app = Flask(__name__)
CORS(app)

mydb = mysql.connector.connect(
    host="34.135.107.81",
    user="root",
    password="unbPO7JrA8gdjh2t",
    database="bostbo"
)

mycursor = mydb.cursor()


def query_db(query, args=(), one=False):
    mycursor.execute(query, args)
    r = [dict((mycursor.description[i][0], value)
              for i, value in enumerate(row)) for row in mycursor.fetchall()]

    return (r[0] if r else None) if one else r


@app.route("/customers/<cid>")
def customers(cid):
    query = ("SELECT * FROM customer WHERE cid = %s")
    val = (cid,)
    query = query_db(query=query, args=val)
    return json.dumps(query)

@app.route("/products/")
def products_get():
    query = ("SELECT * FROM product")
    query = query_db(query=query)
    return json.dumps(query)




@app.route("/customers/insert/<name>/<email>/<address>/<pnumber>")
def insert_function(name, email, address, pnumber):

    query = "INSERT INTO customer(name,email,address,phone_number) VALUES (%s,%s,%s,%s)"
    val = (name, email, address, pnumber)
    mycursor.execute(query,val)
    mydb.commit()
    return json.dumps(query)

@app.route("/purchase/<pid>/<cid>/<amount>")
def purchase_function(pid, cid, amount):

    query = "INSERT INTO order_table(cid,pid,executed,order_status,quanitiy_purchased) VALUES (%s,%s,%s,%s,%s)"
    val = (int(cid),int(pid),datetime.now().strftime("%Y-%m-%d %H:%M:%S"),"DONE",int(amount))
    mycursor.execute(query,val)
    mydb.commit()
    return json.dumps(query)


@app.route("/customers/update/<cid>/<name>/<email>/<address>/<pnumber>")
def update_function(name, email, address, pnumber,cid):

    query = "UPDATE customer SET name =%s, email =%s, address =%s, phone_number =%s WHERE cid =%s"
    val = (name, email, address, pnumber,cid)
    mycursor.execute(query, val)
    mydb.commit()
    return json.dumps(query)



@app.route("/customers/delete/<cid>")
def delete_function(cid,garbage):

    query = "DELETE FROM customer WHERE cid=%s"
    val = (cid,)
    mycursor.execute(query, val)
    mydb.commit()
    return json.dumps(query)


@app.route("/advanced/<one>/<date>")
def query_one(one,date):
    query = ("SELECT * FROM customer c JOIN (SELECT * FROM order_table o WHERE o.executed > %s) as temp_t ON c.cid = temp_t.cid ORDER BY executed LIMIT 3")
    val = (date,)
    query = query_db(query=query, args=val)
    return json.dumps(query, default=str)


@app.route("/advanced/<cid>/<name>/<email>/<address>/<pnumber>")
def query_two(cid,name,email,address,pnumber,bow):
    query = ("SELECT c.cid, AVG(price) AS AveragePrice FROM customer c NATURAL JOIN order_table o JOIN product p on p.pid = o.pid GROUP BY c.cid ORDER BY AveragePrice DESC LIMIT 3")
    val = ()
    query = query_db(query=query)
    # mydict = {"averages": query}
    return json.dumps(query, default=str)




if __name__ == '__main__':
    app.run()  # host = "0.0.0.0"
