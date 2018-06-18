# coding=utf-8

from Tkinter import *
import math

class Calculator:
    def find_and_replace(self):
        """ Replace x with * and ÷ with / """

        self.expression = self.e.get()
        self.newtext = self.expression.replace(self.newdiv, '/')
        self.newtext = self.newtext.replace('x','*')
    
    def equals(self):
        """ when the equal sign is pressed """

        self.find_and_replace()
        try:
            self.value = eval(self.newtext) #evaluate the expression using the eval function
        except SyntaxError or NameError:
            self.e.delete(0,END)
            self.e.insert(0,'Invalid Input!')
        else:
            self.e.delete(0, END)
            self.e.insert(0,self.value)

    def square_root(self):
        """ square root method """

        self.find_and_replace()
        try:
            self.value = eval(self.newtext) #evaluate the expression using the eval function
        except SyntaxError or NameError:
            self.e.delete(0,END)
            self.e.insert(0,'Invalid Input!')
        else:
            self.sqrt_val = math.sqrt(self.value)
            self.e.delete(0, END)
            self.e.insert(0,self.sqrt_val)

    def square(self):
        """ square method """
        
        self.find_and_replace()
        try:
            self.value = eval(self.newtext) #evaluate the expression using the eval function
        except SyntaxError or NameError:
            self.e.delete(0,END)
            self.e.insert(0,'Invalid Input!')
        else:
            self.square_val = math.pow(self.value,2)
            self.e.delete(0, END)
            self.e.insert(0,self.square_val)
    
    def clear_all(self):
        """ when clear button is pressed, clears the text input area """
        self.e.delete(0, END)
    
    def clear_one(self):
        """ when clear one character button is pressed, delete the latest character in the input area """

        self.text = self.e.get()[:-1]
        self.e.delete(0, END)
        self.e.insert(0, self.text)
    
    def action(self,argi):
        """ pressed button's value is inserted into the end of the text area """
        self.e.insert(END,argi)

    def __init__(self, master):
        """ Constructor method """

        master.title('Calculator')
        master.geometry()
        self.e = Entry(master)
        self.e.grid(row=0,column=0,columnspan=6,pady=3)
        self.e.focus_set() #Sets focus on the input text area

        self.div = '÷'
        self.newdiv = self.div.decode('utf-8')

        #Generating Buttons
        Button(master,text="=",width=10,command=lambda:self.equals()).grid(row=4, column=4,columnspan=2)
        Button(master,text='AC',width=3,command=lambda:self.clear_all()).grid(row=1, column=4)
        Button(master,text='C',width=3,command=lambda:self.clear_one()).grid(row=1, column=5)
        Button(master,text="+",width=3,command=lambda:self.action('+')).grid(row=4, column=3)
        Button(master,text="x",width=3,command=lambda:self.action('x')).grid(row=2, column=3)
        Button(master,text="-",width=3,command=lambda:self.action('-')).grid(row=3, column=3)
        Button(master,text=self.newdiv,width=3,command=lambda:self.action(self.newdiv)).grid(row=1, column=3) 
        Button(master,text="%",width=3,command=lambda:self.action('%')).grid(row=4, column=2)
        Button(master,text="7",width=3,command=lambda:self.action(7)).grid(row=1, column=0)
        Button(master,text="8",width=3,command=lambda:self.action(8)).grid(row=1, column=1)
        Button(master,text="9",width=3,command=lambda:self.action(9)).grid(row=1, column=2)
        Button(master,text="4",width=3,command=lambda:self.action(4)).grid(row=2, column=0)
        Button(master,text="5",width=3,command=lambda:self.action(5)).grid(row=2, column=1)
        Button(master,text="6",width=3,command=lambda:self.action(6)).grid(row=2, column=2)
        Button(master,text="1",width=3,command=lambda:self.action(1)).grid(row=3, column=0)
        Button(master,text="2",width=3,command=lambda:self.action(2)).grid(row=3, column=1)
        Button(master,text="3",width=3,command=lambda:self.action(3)).grid(row=3, column=2)
        Button(master,text="0",width=3,command=lambda:self.action(0)).grid(row=4, column=0)
        Button(master,text=".",width=3,command=lambda:self.action('.')).grid(row=4, column=1)
        Button(master,text="(",width=3,command=lambda:self.action('(')).grid(row=2, column=4)
        Button(master,text=")",width=3,command=lambda:self.action(')')).grid(row=2, column=5)
        Button(master,text="√",width=3,command=lambda:self.square_root()).grid(row=3, column=4)
        Button(master,text="x²",width=3,command=lambda:self.square()).grid(row=3, column=5)

#Main
root = Tk()
obj=Calculator(root) #object instantiated
root.mainloop()