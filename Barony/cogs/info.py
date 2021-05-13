import discord
from discord.ext import commands
import asyncio
import datetime
import random

class Info(commands.Cog):

    def __init__(self, client):
        self.client = client

    # Cog Events
    @commands.Cog.listener()
    async def on_ready(self):
        print('Info cog loaded.')

    @commands.command(name='ping')
    async def ping(self,ctx):
        await ctx.send(f'Ping of the bot: {round(self.client.latency * 1000)}ms')
    
    @commands.command()
    @commands.has_permissions(manage_messages = True)
    async def gstart(self,ctx, mins: int, *, prize:str):
        embed = discord.Embed(title="Giveaway!", description=f"{prize}", color = ctx.author.color)
        end = datetime.datetime.utcnow() + datetime.timedelta(seconds=mins*60)

        embed.add_field(name="Ends At:", value=f"{end} UTC")
        embed.set_footer(text=f"Ends {mins} minutes from now!")

        my_msg = await ctx.send(embed=embed)
        await my_msg.add_reaction("🎉")
        await asyncio.sleep(mins*60)

        new_msg = await ctx.channel.fetch_message(my_msg.id)

        users = await new_msg.reactions[0].users().flatten()
        users.pop(users.index(self.client.user))
        winner = random.choice(users)
        await ctx.send(f"Congratulations! {winner.mention} won {prize}")

    @commands.command(name='userinfo', aliases=["ui"])
    async def userinfo(self, ctx, member : discord.Member):
        roles = [role for role in member.roles]

        embed = discord.Embed(color=member.color, timestamp=ctx.message.created_at)

        embed.set_author(name=f"User Info - {member}")
        embed.set_thumbnail(url=member.avatar_url)
        embed.set_footer(text=f"Requested by {ctx.author}", icon_url=ctx.author.avatar_url)

        embed.add_field(name="ID:", value=member.id)
        embed.add_field(name="Guild name:", value=member.display_name)

        embed.add_field(name="Created at:", value=member.created_at.strftime("%a, %#d %B %Y, %I:%M %p UTC"))
        embed.add_field(name="Joined at:", value=member.joined_at.strftime("%a, %#d %B %Y, %I:%M %p UTC"))

        embed.add_field(name=f"Roles ({len(roles)})", value=" ".join([role.mention for role in roles]))
        embed.add_field(name="Top role:", value=member.top_role.mention)

        embed.add_field(name="Bot?", value=member.bot)

        await ctx.send(embed=embed)

def setup(client):
    client.add_cog(Info(client))