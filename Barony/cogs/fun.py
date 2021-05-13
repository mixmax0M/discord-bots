import discord
from discord.ext import commands
from random import choice

class Fun(commands.Cog):

    def __init__(self, client):
        self.client = client

    # Cog Events
    @commands.Cog.listener()
    async def on_ready(self):
        print('Fun cog loaded.')

    @commands.command(name='8ball', aliases=['eightball'])
    async def _8ball(self, ctx, *, question):
        responses = [   'It is certain',
                        'It is decidently so.',
                        'Without a doubt.',
                        'Yes - definitely.',
                        'You may rely on it',
                        'As I see it, yes.',
                        'Most likely.',
                        'Outlook good.',
                        'Yes.',
                        'Signs point to yes.',
                        'Reply hazy, try again.',
                        'Ask again later.'
                        'Better not tell you now.',
                        'Cannot predict now.',
                        'Concentrate and ask again.',
                        "Don't count on it.",
                        'My reply is no.', 
                        'Outlook not so good.',
                        'Very doubtful.']
        await ctx.send(f'Question: {question}\nAnswer: {choice(responses)}')
    
    @commands.command(name='headflip', aliases=['hf', 'flip'])
    async def headflip(self, ctx):
        haedsTails = ['***```Heads!```***', '***```Tails!```***']
        mbed = discord.Embed(
            color=discord.Color.red(),
            description=choice(haedsTails)
        )
        await ctx.channel.send(embed=mbed)

    @commands.command(name='say', aliases=["echo"])
    async def say(self, ctx,*,words):
        await ctx.message.delete()
        await ctx.send(words)

    @commands.command(name='hello', aliases=["hallo", "Hello", "Hi", "hi", "hey", "Hallo", "Hey"])
    async def hello(self, ctx):
        await ctx.send(f"{ctx.author.mention} Fuck you retard")


def setup(client):
    client.add_cog(Fun(client))