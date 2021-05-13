import discord
import os
from random import choice
from discord.ext import commands, tasks
from datetime import datetime
from itertools import cycle
from pathlib import Path

#Time
time = datetime.now()
current_time = time.strftime('%H:%M:%S')

# Bot
TOKEN = 'TOKEN HERE'

intents = discord.Intents(messages = True, guilds = True, reactions = True, members = True, presences = True)
client = commands.Bot(command_prefix = '.', intents = intents)
client.remove_command("help")

# Resources
#status = cycle(['Sleeping...', 'Eating...', 'Coding...'])

# @client.event
# async def on_ready():
#     print('Bot Ready.\n')

# @client.event
# async def on_message(message):
#         author = message.author
#         content = message.content
#         print('[{}] {}: {}'.format(current_time, author, content))

@client.event
async def on_member_join(member):
    print(f'{member} has Joined.')

@client.event
async def on_member_remove(member):
    print(f'{member} has left.')

@client.event
async def on_ready():
    await client.change_presence(status=discord.Status.dnd, activity=discord.Streaming(platform='Twitch', url='https://www.youtube.com/watch?v=dQw4w9WgXcQ', name='.help'))

@client.event
async def on_command_error(ctx, error):
    if isinstance(error, commands.MissingRequiredArgument):
        await ctx.send('Please use a valid argument.')

@client.event
async def on_command_error(ctx, error):
    if isinstance(error, commands.MissingPermissions):
        await ctx.send('You are missing permissions.')

@client.event
async def on_message(msg):
    filtered_words = ["Nigga", "Neger", "Nigger", "NIGGA", "NIGGER", "NEGER", "nigga", "neger", "nigger"]
    for word in filtered_words:
        if word in msg.content:
            await msg.delete()
    await client.process_commands(msg)

### COGS ###
@client.command(hidden=True)
async def load(ctx, extension):
    client.load_extension(f'cogs.{extension}')

@client.command(hidden=True)
async def unload(ctx, extension):
    client.unload_extension(f'cogs.{extension}')

for filename in os.listdir(r'D:\Desktop\Coding\Discord\Barony\cogs'):
    if filename.endswith('.py'):
        client.load_extension(f'cogs.{filename[:-3]}')
### COGS END ###

# Help

@client.group(invoke_without_command=True)
async def help(ctx):
    em = discord.Embed(title = 'Help', description = 'Use .help <command> for extended information on a command.', color = ctx.author.color)
    em.add_field(name = 'Moderation', value = "kick\nban\nclear\nunban\nmute\nunmute")
    em.add_field(name = 'Fun', value = "8ball\nheadflip\nsay")
    em.add_field(name = 'Information', value = "ping\ngstart\nuserinfo")

    await ctx.send(embed = em)

### MODERATION ###
@help.command()
async def kick(ctx):
    em = discord.Embed(title = 'Kick', description = "Kicks a member from the guild.", color = ctx.author.color)
    em.add_field(name = "**Syntax**", value=".kick <member> [reason]")
    await ctx.send(embed = em)

@help.command()
async def ban(ctx):
    em = discord.Embed(title = 'Ban', description = "Bans a member from the guild.", color = ctx.author.color)
    em.add_field(name = "**Syntax**", value=".ban <member> [reason]")
    await ctx.send(embed = em)

@help.command()
async def unban(ctx):
    em = discord.Embed(title = 'Unban', description = "Unbans a member from the guild.", color = ctx.author.color)
    em.add_field(name = "**Syntax**", value=".unban <member>")
    await ctx.send(embed = em)

@help.command()
async def mute(ctx):
    em = discord.Embed(title = 'Mute', description = "Mutes a member from the guild.", color = ctx.author.color)
    em.add_field(name = "**Syntax**", value=".mute <member>")
    await ctx.send(embed = em)

@help.command()
async def unmute(ctx):
    em = discord.Embed(title = 'Unmute', description = "Unmutes a member from the guild.", color = ctx.author.color)
    em.add_field(name = "**Syntax**", value=".unmute <member>")
    await ctx.send(embed = em)

@help.command()
async def clear(ctx):
    em = discord.Embed(title = 'Clear', description = "Clears a given amount of messages.", color = ctx.author.color)
    em.add_field(name = "**Syntax**", value=".clear <amount>")
    await ctx.send(embed = em)

### FUN ###
@help.command()
async def headflip(ctx):
    em = discord.Embed(title = 'Headflip', description = "Flips a coin.", color = ctx.author.color)
    em.add_field(name = "**Syntax**", value=".headflip")
    await ctx.send(embed = em)

@help.command()
async def _8ball(ctx):
    em = discord.Embed(title = '8ball', description = "Gives you an answer.", color = ctx.author.color)
    em.add_field(name = "**Syntax**", value=".8ball")
    await ctx.send(embed = em)

@help.command()
async def say(ctx):
    em = discord.Embed(title = 'Say', description = "Makes you say something through the bot.", color = ctx.author.color)
    em.add_field(name = "**Syntax**", value=".say <words>")
    await ctx.send(embed = em)

@help.command()
async def hello(ctx):
    em = discord.Embed(title = 'Hello', description = "Greet the bot!", color = ctx.author.color)
    em.add_field(name = "**Syntax**", value=".hello")
    await ctx.send(embed = em)


### INFORMATION ###
@help.command()
async def ping(ctx):
    em = discord.Embed(title = 'Ping', description = "Gives you the ping of the bot in ms.", color = ctx.author.color)
    em.add_field(name = "**Syntax**", value=".ping")
    await ctx.send(embed = em)

@help.command()
async def gstart(ctx):
    em = discord.Embed(title = 'Gstart', description = "Starts a giveaway.", color = ctx.author.color)
    em.add_field(name = "**Syntax**", value=".gstart <minutes> <prize>")
    await ctx.send(embed = em)

@help.command()
async def userinfo(ctx):
    em = discord.Embed(title = 'Userinfo', description = "Gives you information on a user.", color = ctx.author.color)
    em.add_field(name = "**Syntax**", value=".userinfo [member]")
    await ctx.send(embed = em)

client.run(TOKEN) 
