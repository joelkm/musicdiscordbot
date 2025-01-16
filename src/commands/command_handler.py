import pkgutil
import importlib
import os

from base import BaseCommand


def get_commands():
    command_list = {}
    for module_info in pkgutil.iter_modules([os.path.dirname(__file__)]):
        module_name = module_info.name
        if module_name in ["__init__", "__pycache__", "base", "command_handler"]:
            continue

        module = importlib.import_module(module_name)
        for attr_name in dir(module):
            attr = getattr(module, attr_name)
            if isinstance(attr, type) and issubclass(attr, BaseCommand) and attr is not BaseCommand:
                print(attr)
                command_list[attr.name] = attr

    return command_list

commands = get_commands()




class CommandHandler:

    commands_list = commands

    def __call__(self, message, user):
        pass

# To test

print(CommandHandler.commands_list)
