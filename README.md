# CaAlden: Films
This is the code and generation logic for my film recommendation blog.
[See the site](https://caalden.github.io/film/) for a better idea of the content.

## Note to the public
I may have accidentally mischaracterized the extent to which I built the templating for this project. I conflated this
with a separate project I have (for generating my resume) where in I did build out the code that manages the templating
as well. In this case, I built out a bunch of custom layouts but hugo is doing the templating. Sorry for the accidental
misrepresentation.

Most of the notes in this README are for my own personal use. The `scripts/` directory is uncommitted as it contains
information that should not be committed publicly.

## Publishing
To publish updates to the blog, run
```bash
scripts/publish
```
This will regenerate the files and stage the changes for committing to git

## Authoring New Content
To pull down information about a movie and generate the shell of a review, run:
```bash
hugo new reviews/<title>.md
python scripts/bump_frontmatter.py reviews/<title>.md
```
where `<title>` is the name of the movie in kebab case.

The python script will fetch information from the open movie database
including ratings and poster images. It makes a best guess about links to other sites
but it's recommended that you confirm all generate content is valid

To view draft content run

```bash
hugo serve -D # -D includes draft content
```
