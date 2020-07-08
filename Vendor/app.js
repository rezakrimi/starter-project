// const opentelemetry = require('@opentelemetry/api');
// const { NodeTracerProvider } = require('@opentelemetry/node');
// const { SimpleSpanProcessor } = require('@opentelemetry/tracing');
// const { TraceExporter } = require('@google-cloud/opentelemetry-cloud-trace-exporter');
// const { LogLevel } = require('@opentelemetry/core');
// const provider = new NodeTracerProvider({
//     plugins: {
//       express: {
//         enabled: true,
//         // You may use a package name or absolute path to the file.
//         path: '@opentelemetry/plugin-express',
//       }
//     },
//     logLevel: LogLevel.DEBUG
//   });
// require('dotenv').config({path:"../Client/.env"})
// const projectId = process.env.REACT_APP_GOOGLE_PROJECT_ID;
// const te = new TraceExporter({ projectId: projectId });
// provider.addSpanProcessor(new SimpleSpanProcessor(te));
// provider.register();
// opentelemetry.trace.setGlobalTracerProvider(provider);
const express = require("express");
const app = express();
const cors = require('cors');
//remove for production
app.use(cors());
app.options('*', cors());


const vendorA = require("./routes/vendorA");
const vendorB = require("./routes/vendorB");
const vendorC = require("./routes/vendorC");
const vendorD = require("./routes/vendorD");

app.use("/vendorA", vendorA);
app.use("/vendorB", vendorB);
app.use("/vendorC", vendorC);
app.use("/vendorD", vendorD);

app.listen(5000, () => {
    console.log('Vendors app listening on port 5000!');
});