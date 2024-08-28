---
title: API Me
featured_image: 'images/notebook.jpg'
omit_header_text: true
description: We'd love to hear from you
type: page
menu:
  main: {}
---
package main
import (
	"fmt"
	"net/http"
	"io"
)
func main() {
url := "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes"
req, _ := http.NewRequest("GET", url, nil)
req.Header.Add("x-rapidapi-key", "a155812e96msh3d468699207ae72p1c60dbjsn964b74afebd5")
req.Header.Add("x-rapidapi-host", "tasty.p.rapidapi.com")
res, _ := http.DefaultClient.Do(req)
defer res.Body.Close()
body, _ := io.ReadAll(res.Body)
fmt.Println(res)
fmt.Println(string(body))
}
