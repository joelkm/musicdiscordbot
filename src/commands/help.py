from base import BaseCommand

class HelpCommand(BaseCommand):
    name = "help"



# TODO: dynamic help for commands thanks to some help message property or smthn, 
# then we need to abstract get_commands to a separate file, init maybe