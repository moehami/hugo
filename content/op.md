{{ $url := "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/examples/v3.0/petstore.json" }}
{{ $api := "" }}
{{ with resources.GetRemote $url }}
  {{ with .Err }}
    {{ errorf "%s" . }}
  {{ else }}
    {{ $api = . | openapi3.Unmarshal }}
  {{ end }}
{{ else }}
  {{ errorf "Unable to get remote resource %q" $url }}
{{ end }}
