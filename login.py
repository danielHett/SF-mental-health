import functions


from kivy.lang import Builder
from kivymd.app import MDApp
from kivy.uix.screenmanager import ScreenManager

class UI(ScreenManager):
    pass

class MainApp(MDApp):
    def build(self):
        self.theme_cls.theme_style = "Light"
        self.theme_cls.primary_palette = "Red"
        Builder.load_file("layout.kv")
        return UI()

    def logger(self):
        x = functions.logIn(self.root.ids.user.text,self.root.ids.password.text)
        if x == 1:
            self.root.current ="screen2"
        else:
            self.root.ids.welcome_label.text = "Alias/Password provided was incorrect"

MainApp().run()
