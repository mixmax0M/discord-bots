import discord
from discord.ext import commands

class Moderation(commands.Cog):

    def __init__(self, client):
        self.client = client

    # Cog Events
    @commands.Cog.listener()
    async def on_ready(self):
        print('Moderation cog loaded.\nBot Ready.')
    
    @commands.command(aliases=["c", "delete","del", "clean"])
    @commands.has_permissions(manage_messages = True)
    async def clear(self,ctx, amount=2):
        channel = ctx.message.channel
        deleted = await channel.purge(limit=amount)
        await channel.send('{} deleted {} message(s)'.format(ctx.author.mention, len(deleted)))

    @commands.command(aliases=["k"])
    @commands.has_permissions(kick_members = True)
    async def kick(self, ctx, member : discord.Member,*,reason= 'No reason provided.'):
        try:
            await member.send('You have been kicked because, because: '+ reason)
        except:
            await ctx.send('The user has their DMs closed.')
        await ctx.send(member.name + ' has been kicked, because: ' + reason)
        await member.kick(reason=reason)
        await ctx.message.delete()

    @commands.command(aliases=["b"])
    @commands.has_permissions(ban_members = True)
    async def ban(self, ctx,member : discord.Member,*,reason= 'No reason provided.'):
        try:
            await member.send("You have been banned, because: " + reason)
        except:
            await ctx.send('The user has their DMs closed.')
        await ctx.send(member.mention + " has been banned, because: " + reason)
        await member.ban(reason=reason)
        await ctx.message.delete()

    @commands.command(aliases=["ub", "pardon"])
    @commands.has_permissions(ban_members = True)
    async def unban(self,ctx,*,member):
        banned_users = await ctx.guild.bans()
        member_name, member_disc = member.split('#')

        for banned_entry in banned_users:
            user = banned_entry.user

            if(user.name, user.discriminator) == (member_name, member_disc):
                await ctx.guild.unban(user)
                await ctx.send(member_name + " has been unbanned!")
                return
        await ctx.send(member + " was not found.")
        await ctx.message.delete()

    @commands.command(aliases=["m"])
    @commands.has_permissions(kick_members = True)
    async def mute(self, ctx, member : discord.Member,*, reason='No reason provided.'):
        guild = ctx.guild

        for role in guild.roles:
            if role.name == 'Muted':
                await member.add_roles(role)
                await ctx.send('{} has been muted by {}.'.format(member.mention, ctx.author.mention))
                return

                overwrite = discord.PermissionOverwrite(send_messages=False)
                newRole = await guild.create_role(name='Muted')

                for channel in guild.text_channels:
                    await channel.set_permissions(newRole, overwrite=overwrite)
                
                await member.add_roles(newRole)
                await ctx.send('{} has been muted by {}.'.format(member.mention, ctx.author.mention))

    @commands.command(aliases=["um"])
    @commands.has_permissions(kick_members = True)
    async def unmute(self, ctx, member : discord.Member,*, reason=None):
        guild = ctx.guild

        for role in guild.roles:
            if role.name == 'Muted':
                await member.remove_roles(role)
                await ctx.send('{} has been unmuted by {}.'.format(member.mention, ctx.author.mention))

def setup(client):
    client.add_cog(Moderation(client))