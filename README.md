
# opentelemetry-testing
## Setting up the collector
create a directory for the collector and `cd` into.
download the latest release from https://github.com/open-telemetry/opentelemetry-collector-contrib/releases
example:  ```wget "https://github.com/open-telemetry/opentelemetry-collector-contrib/releases/download/v0.3.0/otelcontribcol_linux_amd64"```
create a file called `config.yaml` and copy the following into it:
```
receivers:
  otlp:
    endpoint: 0.0.0.0:55678
    cors_allowed_origins:
      - http://34.70.250.120:3000 # TODO: change to your web app address
  opencensus:
    endpoint: 0.0.0.0:55671
    cors_allowed_origins:
      - http://34.70.250.120:3000 # TODO: change to your web app address
exporters:
  stackdriver:
    project: "your-project-name" # TODO: change to your GCP project name
service:
  extensions: []
  pipelines:
    traces:
      receivers: [otlp, opencensus]
      exporters: [stackdriver]
    metrics:
      receivers: [otlp, opencensus]
      exporters: [stackdriver]
```
run `chmod 777 otelcontribcol_linux_amd64`

Run the collector server using:
 `./otelcontribcol_linux_amd64 --config config.yaml --new-metrics --legacy-metrics=false`
