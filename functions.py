import sqlite3
total = " "
#from sqlalchemy import null
def logIn(x,y):
    given_alias = "'"+x+"'"
    #given_pass = "'"+y+"'"
    conn = sqlite3.connect('DataBase.db')

    c = conn.cursor()
    #v = conn.cursor()

    command1= "SELECT * FROM SFUsers WHERE alias="+given_alias
    #command2= "SELECT * FROM SFUsers WHERE pass="+given_pass
    c.execute(command1)
    #v.execute(command2)

    q = c.fetchone()
    #w = v.fetchone()
    if (q != None):
        if( q[2] == x and  q[3] == y):
            return 1
        else:
            return 0
    
    conn.commit()
    conn.close()
def find(z):
    given_problem = z

    conn = sqlite3.connect('DataBase.db')

    c = conn.cursor()

    command1= "SELECT * FROM SFCounselors WHERE "+given_problem+"= 1"

    c.execute(command1)

    q = c.fetchone()

    if (q != None):
        return q[1]

def save(w):
    global total
    total = w

def get():
    return total