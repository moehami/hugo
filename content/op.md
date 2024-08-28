---
title: API Me
featured_image: 'images/notebook.jpg'
omit_header_text: true
description: We'd love to hear from you
type: page
menu:
  main: {}
---


{{ $url := "https://thereportoftheweek-api.herokuapp.com/" }}
{{ with resources.GetRemote $url }}
  {{ with .Err }}
    {{ errorf "%s" . }}
  {{ else }}
    {{ .product }}
  {{ end }}
{{ else }}
  {{ errorf "Unable to get remote resource %q" $url }}
{{ end }}
