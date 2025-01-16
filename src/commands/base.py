"""

Base class for commands

"""


class BaseCommand:

    # The word argument to invoke the command
    name = ""

    arguments = []
    
    def _validate_args(self, args):
        """
        Override this method to validate arguments in the command
        """
        pass

    def __init__(self, args):
        self._validate_args(args)
        self.arguments = args

    async def __call__(self, *args, **kwargs):
        return await self.execute()
    
    async def execute(self):
        """
        Override this method with the command execution
        """
        pass