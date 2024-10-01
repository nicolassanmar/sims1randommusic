# Data source

1. Copy table from https://sims.fandom.com/wiki/List_of_songs_in_The_Sims
2. Regex replace `<div class="center"><div class="floatnone"><a href="/wiki/The_Sims.* title="(.*)"><img.*</div></div>` with `$1`
3. Regex replace `<audio src="(.*)" width.*</audio>` with `$1`
4. https://tableconvert.com/html-to-json
