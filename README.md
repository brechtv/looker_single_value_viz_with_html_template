# Another Looker Single Value Viz

This 'chart' allows setting a HTML template on the Looker side, which then gets parsed and rendered by Looker. So if you want a nice looking chart but don't want to crowd your model with html, this one is your friend

## How to install
- Fork or clone this repository
- Get a link to the viz file served with the proper headers. The easiest way is with [Githack](https://raw.githack.com/) or [jsdelivr](https://www.jsdelivr.com/rawgit)
  - Copy the link to the file (e.g `https://github.com/brechtv/abc/blob/master/def.js`)
  - Paste it into Rawgit, copy one of the two urls generated
- Go to your Looker Admin > Visualizations page and add the viz with the rawgit url (dev or prod whichever you like)
- Now go to any explore, run some query, select the custom viz and get ready to throw in the weirdest html, css or whatever! 

## How to viz
Any valid HTML works, including `<style>` tags and `<link rel="stylesheet">` references. For examples see [this folder](/example).
- For a simple single value viz that references the first visible value, use [single_value_with_html_template](single_value_with_html_template.js). Reference your value with `{{ value }}`. Pretty basic, so you'll probably want the next one for most use cases.
- __[New]__ For a viz where you can reference other columns, go for [single_value_with_html_template_reference_other_columns](single_value_with_html_template_reference_other_columns.js). You can reference multiple values from the *first row only* with:
  - `{{ value }}` for the first visible value in the result set
  - `{{ column_1 }}` for the value in the first column from the left
  - `{{ orders.count }}` for the named column (`view.dimension` or `view.measure`)


## Examples
See [here](/example)
