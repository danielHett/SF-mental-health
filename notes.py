screen_helper = """
ScreenManager:
    MenuScreen:
    ProfileScreen:

<MenuScreen>:
    name: 'menu'
    MDCard:
        size_hint: None, None
        size: 400, 400
        pos_hint: {"center_x":0.5, "center_y":0.5}
        elevation: 20
        padding: 25
        spacing: 25
        orientation: 'vertical'

        MDLabel:
            id: welcome_label
            text: "WELCOME"
            halign: 'center'
            size_hint_y: None
            font_size: 30
            height: self.texture_size[1]
            padding_y: 15

        MDTextFieldRound:
            id: user
            hint_text: "username"
            icon_right: "account"
            size_hint_x: None
            width: 400
            font_size: 20
            pos_hint: {"center_x": 0.5}

        MDTextFieldRound:
            id: password
            hint_text: "password"
            icon_right: "eye-off"
            size_hint_x: None
            width: 400
            font_size: 20
            pos_hint: {"center_x": 0.5}
            password: True

        MDRoundFlatButton:
            text: "LOG IN"
            font_size: 20
            pos_hint: {"center_x": 0.5}
            on_press: root.manager.current = 'profile'

<ProfileScreen>:
    name: 'profile'
    MDLabel:
        text: "Welcome Miguel"
        halign: 'center'

"""
class MenuScreen(Screen):
    pass
class ProfileScreen(Screen):
    pass

sm = ScreenManager()
sm.add_widget(MenuScreen(name = 'menu'))
sm.add_widget(ProfileScreen(name = 'profile'))